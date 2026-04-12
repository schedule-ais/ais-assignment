const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const db = new sqlite3.Database("./ais_data.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS teachers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teacher_id TEXT,
      academic_year TEXT,
      campus TEXT,
      name TEXT,
      status TEXT,
      gender TEXT,
      mobile TEXT,
      email TEXT,
      room_no TEXT,
      planning_periods INTEGER,
      recess_duty INTEGER,
      proctoring_duty INTEGER,
      positions TEXT
    )
  `);

  // Unique constraint so upsert works: one row per teacher per campus per year
  db.run(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_teachers_unique
    ON teachers(name, academic_year, campus)
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS assignments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      teacher_name TEXT,
      subject_name TEXT,
      grade_level TEXT,
      section_name TEXT,
      support_type TEXT,
      academic_year TEXT,
      campus TEXT,
      credits INTEGER
    )
  `);

  // Unique constraint so upsert works: one row per teacher+subject+grade+section per campus per year
  db.run(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_assignments_unique
    ON assignments(teacher_name, subject_name, grade_level, section_name, academic_year, campus)
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS app_state (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key_name TEXT UNIQUE,
      json_value TEXT
    )
  `);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "AIS_Final_Upgraded.html"));
});

app.post("/api/teachers", (req, res) => {
  const {
    teacher_id,
    academic_year,
    campus,
    name,
    status,
    gender,
    mobile,
    email,
    room_no,
    planning_periods,
    recess_duty,
    proctoring_duty,
    positions
  } = req.body;

  const sql = `
    INSERT INTO teachers (
      teacher_id, academic_year, campus, name, status, gender,
      mobile, email, room_no, planning_periods, recess_duty,
      proctoring_duty, positions
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(name, academic_year, campus) DO UPDATE SET
      teacher_id        = excluded.teacher_id,
      status            = excluded.status,
      gender            = excluded.gender,
      mobile            = excluded.mobile,
      email             = excluded.email,
      room_no           = excluded.room_no,
      planning_periods  = excluded.planning_periods,
      recess_duty       = excluded.recess_duty,
      proctoring_duty   = excluded.proctoring_duty,
      positions         = excluded.positions
  `;

  db.run(
    sql,
    [
      teacher_id,
      academic_year,
      campus,
      name,
      status,
      gender,
      mobile,
      email,
      room_no,
      planning_periods || 0,
      recess_duty || 0,
      proctoring_duty || 0,
      JSON.stringify(positions || [])
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.get("/api/teachers", (req, res) => {
  db.all("SELECT * FROM teachers", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const fixedRows = rows.map((row) => ({
      ...row,
      positions: row.positions ? JSON.parse(row.positions) : []
    }));

    res.json(fixedRows);
  });
});

app.post("/api/assignments", (req, res) => {
  const assignments = req.body.assignments || [];

  if (!Array.isArray(assignments)) {
    return res.status(400).json({ error: "assignments must be an array" });
  }

  const stmt = db.prepare(`
    INSERT INTO assignments (
      teacher_name, subject_name, grade_level, section_name,
      support_type, academic_year, campus, credits
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(teacher_name, subject_name, grade_level, section_name, academic_year, campus) DO UPDATE SET
      support_type = excluded.support_type,
      credits      = excluded.credits
  `);

  for (const item of assignments) {
    stmt.run(
      item.teacher_name,
      item.subject_name,
      item.grade_level,
      item.section_name,
      item.support_type || "teaching",
      item.academic_year,
      item.campus,
      item.credits || 0
    );
  }

  stmt.finalize((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true });
  });
});

app.get("/api/assignments", (req, res) => {
  db.all("SELECT * FROM assignments", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post("/api/state", (req, res) => {
  const { key_name, json_value } = req.body;

  db.run(
    `
    INSERT INTO app_state (key_name, json_value)
    VALUES (?, ?)
    ON CONFLICT(key_name) DO UPDATE SET json_value = excluded.json_value
    `,
    [key_name, JSON.stringify(json_value)],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true });
    }
  );
});

app.get("/api/state/:key", (req, res) => {
  db.get(
    "SELECT * FROM app_state WHERE key_name = ?",
    [req.params.key],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.json(null);
      }
      res.json({
        key_name: row.key_name,
        json_value: JSON.parse(row.json_value)
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});