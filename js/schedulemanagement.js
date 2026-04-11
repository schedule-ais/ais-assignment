
const GRADE_META={
  "Pre-School":{cycle:"CY-KG",level:"KG"},"KG":{cycle:"CY-KG",level:"KG"},"PREP":{cycle:"CY-KG",level:"KG"},
  "Grade 1":{cycle:"CY1",level:"ES"},"Grade 2":{cycle:"CY1",level:"ES"},"Grade 3":{cycle:"CY1",level:"ES"},
  "Grade 4":{cycle:"CY1",level:"ES"},"Grade 5":{cycle:"CY1",level:"ES"},
  "Grade 6":{cycle:"CY2",level:"HS"},"Grade 7":{cycle:"CY2",level:"HS"},"Grade 8":{cycle:"CY2",level:"HS"},
  "Grade 9":{cycle:"CY3",level:"HS"},"Grade 10":{cycle:"CY3",level:"HS"},
  "Grade 11":{cycle:"CY3",level:"HS"},"Grade 12":{cycle:"CY3",level:"HS"},
  // AD Campus British grades
  "Grade 9 (IGCSE)":{cycle:"IGCSE",level:"HS"},"Grade 10 (IGCSE)":{cycle:"IGCSE",level:"HS"},
  "Grade 11 (AS Level)":{cycle:"AS Level",level:"HS"},"Grade 12 (A Level)":{cycle:"A Level",level:"HS"}
};
const GRADES={
  "Pre-School":["PS-A","PS-B","PS-C"],"KG":["KGA","KGB","KGC","KGD","KGE"],
  "PREP":["PREP-A","PREP-B","PREP-C","PREP-D","PREP-E"],
  "Grade 1":["1A","1B","1C","1D","1E"],"Grade 2":["2A","2B","2C","2D","2E","2F"],
  "Grade 3":["3A","3B","3C","3D","3E","3F"],"Grade 4":["4A","4B","4C","4D"],
  "Grade 5":["5A","5B","5C","5D","5E","5F","5G"],"Grade 6":["6A","6B","6C","6D","6E","6F"],
  "Grade 7":["7A","7B","7C","7D","7E","7F"],"Grade 8":["8A","8B","8C","8D","8E","8F"],
  "Grade 9":["9A","9B","9C","9D-PIB","9E-PIB","9F","9G"],
  "Grade 10":["10A","10B","10C","10D-PIB","10E-PIB","10F","10G"],
  "Grade 11":["11A","11B","11C","11D","11E","11GAP","11GAP-AP","11F","11F-HL","11F-SL"],
  "Grade 12":["12A","12B","12C","12D","12E","12FIB","12GAP","12GAP-AP","12F","12F-HL","12F-SL"]
};

// ---- AD Campus default grades (British curriculum Gr9-12) ----
const GRADES_AD={
  "KG":["KGA","KGB","KGC","KGD"],
  "PREP":["PA","PB","PC","PD","PE"],
  "Grade 1":["1A","1B","1C","1D"],
  "Grade 2":["2A","2B","2C","2D","2E"],
  "Grade 3":["3A","3B","3C","3D"],
  "Grade 4":["4A","4B","4C","4D"],
  "Grade 5":["5A","5B","5C","5D"],
  "Grade 6":["6A","6B","6C","6D","6E"],
  "Grade 7":["7A","7B","7C","7D"],
  "Grade 8":["8A","8B","8C","8D"],
  "Grade 9 (IGCSE)":["9A","9B","9C","9D"],
  "Grade 10 (IGCSE)":["10A","10B"],
  "Grade 11 (AS Level)":["11A","11B"],
  "Grade 12 (A Level)":["12A","12B"]
};

// ---- MBZ Campus default grades ----
const GRADES_MBZ={
  "Pre-School":["PS-A","PS-B","PS-C"],"KG":["KGA","KGB","KGC","KGD","KGE"],
  "PREP":["PREP-A","PREP-B","PREP-C","PREP-D","PREP-E"],
  "Grade 1":["1A","1B","1C","1D","1E"],"Grade 2":["2A","2B","2C","2D","2E","2F"],
  "Grade 3":["3A","3B","3C","3D","3E","3F"],"Grade 4":["4A","4B","4C","4D"],
  "Grade 5":["5A","5B","5C","5D","5E","5F","5G"],"Grade 6":["6A","6B","6C","6D","6E","6F"],
  "Grade 7":["7A","7B","7C","7D","7E","7F"],"Grade 8":["8A","8B","8C","8D","8E","8F"],
  "Grade 9":["9A","9B","9C","9D-PIB","9E-PIB","9F","9G"],
  "Grade 10":["10A","10B","10C","10D-PIB","10E-PIB","10F","10G"],
  "Grade 11":["11A","11B","11C","11D","11E","11GAP","11GAP-AP","11F","11F-HL","11F-SL"],
  "Grade 12":["12A","12B","12C","12D","12E","12FIB","12GAP","12GAP-AP","12F","12F-HL","12F-SL"]
};

// ---- AD Campus default subjects (British + American KG-8) ----
const SUBJECTS_AD=["ARABIC","SP.ARABIC","ENGLISH","MATH","SCIENCE","PHYSICS","BIOLOGY","CHEMISTRY",
  "SOCIAL STUDIES","UAE SOCIAL STUDIES","ISLAMIC","ENG.ISLAMIC","COMPUTER","PHYSICAL EDUCATION",
  "MUSIC","ART","FRENCH","HOMEROOM (KG)","HOMEROOM (PREP)","HOMEROOM (GR.1)","HOMEROOM (GR.2)","HOMEROOM (GR.3)",
  "ICT","BUSINESS STUDIES","ECONOMICS","ACCOUNTING","PSYCHOLOGY","GEOGRAPHY","HISTORY","DESIGN & TECHNOLOGY"
];

// ---- MBZ Campus default subjects ----
const SUBJECTS_MBZ=["ARABIC","SP.ARABIC","ENGLISH","MATH","SCIENCE","PHYSICS","BIOLOGY","CHEMISTRY",
  "SOCIAL STUDIES","UAE SOCIAL STUDIES","BUSINESS / ECON / PSYCHOLOGY","FRENCH","ISLAMIC","ENG.ISLAMIC",
  "COMPUTER","PHYSICAL EDUCATION","MUSIC","ART","HOMEROOM (KG)","HOMEROOM (PREP)","HOMEROOM (GR.1)","HOMEROOM (GR.2)","HOMEROOM (GR.3)"
];

// ---- GRADE_META for AD campus ----
const GRADE_META_AD={
  "KG":{cycle:"KG",level:"KG"},"PREP":{cycle:"KG",level:"KG"},
  "Grade 1":{cycle:"CY1",level:"ES"},"Grade 2":{cycle:"CY1",level:"ES"},
  "Grade 3":{cycle:"CY1",level:"ES"},"Grade 4":{cycle:"CY2",level:"ES"},
  "Grade 5":{cycle:"CY2",level:"ES"},"Grade 6":{cycle:"CY2",level:"HS"},
  "Grade 7":{cycle:"CY2",level:"HS"},"Grade 8":{cycle:"CY2",level:"HS"},
  "Grade 9 (IGCSE)":{cycle:"IGCSE",level:"HS"},"Grade 10 (IGCSE)":{cycle:"IGCSE",level:"HS"},
  "Grade 11 (AS Level)":{cycle:"AS",level:"HS"},"Grade 12 (A Level)":{cycle:"AL",level:"HS"}
};

// Apply campus-specific defaults to GRADES and SUBJECTS arrays
function applyCampusDefaults(campus){
  const srcGrades=campus==='AD'?GRADES_AD:GRADES_MBZ;
  const srcSubjects=campus==='AD'?SUBJECTS_AD:SUBJECTS_MBZ;
  // Only apply if localStorage has no saved data for this campus+year
  const existing=LS.getItem(LS.key());
  if(!existing){
    Object.keys(GRADES).forEach(k=>delete GRADES[k]);
    Object.assign(GRADES,JSON.parse(JSON.stringify(srcGrades)));
    SUBJECTS.splice(0,SUBJECTS.length,...srcSubjects);
    rebuildSectionLookup();
  }
}
const SEC_TO_GRADE={};
const SUBJECTS=["ARABIC","SP.ARABIC","ENGLISH","MATH","SCIENCE","PHYSICS","BIOLOGY","CHEMISTRY","SOCIAL STUDIES","UAE SOCIAL STUDIES","BUSINESS / ECON / PSYCHOLOGY","FRENCH","ISLAMIC","ENG.ISLAMIC","COMPUTER","PHYSICAL EDUCATION","MUSIC","ART","HOMEROOM (KG)","HOMEROOM (PREP)","HOMEROOM (GR.1)","HOMEROOM (GR.2)","HOMEROOM (GR.3)"];

// IBDP subjects - kept separate so they render in their own group
const IBDP_SUBJECTS=[
  "IB ENGLISH A (HL)","IB ENGLISH A (SL)",
  "IB ARABIC A (HL)","IB ARABIC A (SL)",
  "IB ARABIC B (HL)","IB ARABIC B (SL)",
  "IB MATH AA (HL)","IB MATH AA (SL)","IB MATH AI (SL)",
  "IB PHYSICS (HL)","IB PHYSICS (SL)",
  "IB CHEMISTRY (HL)","IB CHEMISTRY (SL)",
  "IB BIOLOGY (HL)","IB BIOLOGY (SL)",
  "IB HISTORY (HL)","IB HISTORY (SL)",
  "IB BUSINESS MGMT (HL)","IB BUSINESS MGMT (SL)",
  "IB ECONOMICS (HL)","IB ECONOMICS (SL)",
  "IB PSYCHOLOGY (SL)",
  "IB COMPUTER SCI (HL)","IB COMPUTER SCI (SL)",
  "IB VISUAL ARTS (HL)","IB VISUAL ARTS (SL)",
  "IB MUSIC (HL)","IB MUSIC (SL)",
  "IB PHYSICAL EDUCATION (SL)",
  "IB THEORY OF KNOWLEDGE","IB EXTENDED ESSAY","IB CAS"
];

// IBDP default credits: HL=6, SL=4, TOK/EE/CAS=2
const IBDP_CREDIT_HL=6, IBDP_CREDIT_SL=4, IBDP_CREDIT_CORE=2;
function getIbdpDefaultCredit(subj){
  if(subj.includes('(HL)'))return IBDP_CREDIT_HL;
  if(subj.includes('(SL)'))return IBDP_CREDIT_SL;
  return IBDP_CREDIT_CORE;
}
const POSITIONS=["Subject Teacher","Lead Teacher","Coordinator","Head of Grade","Supervisor","Class Advisor","SSSD Teacher","Counselor"];
const DEFAULT_CREDIT_MAP={
  "ENGLISH":{"Grade 6":5,"Grade 7":5,"Grade 8":5,"Grade 9":5,"Grade 10":5,"Grade 11":5,"Grade 12":5},
  "MATH":{"Grade 1":5,"Grade 2":5,"Grade 3":5,"Grade 4":5,"Grade 5":5,"Grade 6":5,"Grade 7":5,"Grade 8":5},
  "ARABIC":{"KG":4,"PREP":4,"Grade 1":5,"Grade 2":5,"Grade 3":5},
  "SCIENCE":{"Grade 1":3,"Grade 2":3,"Grade 3":3,"Grade 4":4,"Grade 5":4,"Grade 6":4,"Grade 7":4,"Grade 8":4}
};
const CREDIT_MAP=JSON.parse(JSON.stringify(DEFAULT_CREDIT_MAP));
const SECTION_CREDIT_MAP={ENGLISH:{"12A":4,"12GAP":3}};
const teacherNames=["CHAN","HALA","NOURA","RANDA EID","JAINE HANNA","SARA ALBATAT"];
const teacherStatusMap={};
const rooms=["A101","A102","A103","A104","A105","B101","B102","B103","C201","C202"];
const GOOGLE_SCRIPT_URL='https://script.google.com/macros/s/AKfycbx_48dFCYnMpz_z-OLR_VtPg9FjfT2WPlFwnG_UHN7mCxiqy1ZWCxy-O10p6Rq0g2IicA/exec';
let database=[];
let counters={MBZ:1,AD:1};
let teacherIdMap={};

const state={
  campus:'MBZ',selectedPositions:[],
  subjectTeacherMap:{},subjectGradeMap:{},
  assignmentSubjectFilter:'',assignmentTeacherFilter:'',
  assignments:[],
  reportCampusFilter:'',reportTeacherFilter:'',reportSubjectFilter:'',reportViewType:'teacher_summary'
};

// ---- SAFE localStorage wrapper (won't throw in sandboxed iframes) ----
const LS={
  getItem(k){try{return localStorage.getItem(k);}catch(e){return null;}},
  setItem(k,v){try{localStorage.setItem(k,v);}catch(e){}},
  key(){
    const year=document.getElementById('academicYear')?.value||'AY_2026-2027';
    const campus=document.getElementById('campus')?.value||'MBZ';
    return'teacher_assignment_form_v3_data_'+campus+'_'+year;
  }
};

function rebuildSectionLookup(){
  Object.keys(SEC_TO_GRADE).forEach(k=>delete SEC_TO_GRADE[k]);
  Object.entries(GRADES).forEach(([grade,sections])=>sections.forEach(s=>{SEC_TO_GRADE[s]=grade;}));
}
rebuildSectionLookup();

function el(id){return document.getElementById(id);}
function setHTML(id,html){const n=el(id);if(n)n.innerHTML=html;}
function setText(id,text){const n=el(id);if(n)n.textContent=text;}
function esc(v){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function safeId(v){return String(v).replace(/[^a-zA-Z0-9]/g,'_');}
function getTeacherStatus(){const c=document.querySelector('input[name="teacherStatus"]:checked');return c?c.value:'Active';}
function getTeacherGender(){const c=document.querySelector('input[name="teacherGender"]:checked');return c?c.value:'Male';}
function getGradeCredit(sub,grade){return(CREDIT_MAP[sub]&&CREDIT_MAP[sub][grade])||0;}
function getSectionCredit(sub,sec){return(SECTION_CREDIT_MAP[sub]&&SECTION_CREDIT_MAP[sub][sec]!==undefined)?SECTION_CREDIT_MAP[sub][sec]:null;}
function getCreditValue(sub,grade,sec){
  const sc=getSectionCredit(sub,sec);
  if(sc!==null)return sc;
  // Auto IBDP credit: if section is HL/SL and subject is IBDP
  if(IBDP_SUBJECTS.includes(sub)){
    if(sec&&sec.endsWith('-HL'))return IBDP_CREDIT_HL;
    if(sec&&sec.endsWith('-SL'))return IBDP_CREDIT_SL;
    return getIbdpDefaultCredit(sub);
  }
  return getGradeCredit(sub,grade);
}

function getAssignment(subject,teacherName,create){
  let item=state.assignments.find(e=>e.subject===subject&&e.teacherName===teacherName);
  if(!item&&create){item={teacherName,subject,sections:[],combined:[],creditsOverride:'',studySupport:[],sssd:[],sssdCombined:[]};state.assignments.push(item);}
  return item||null;
}

function getAllSectionsForSubjectOptions(sub,allowedGrades){
  const gl=Array.isArray(allowedGrades)&&allowedGrades.length?allowedGrades:Object.keys(GRADES);
  return Object.entries(GRADES).filter(([g])=>gl.includes(g)).map(([g,secs])=>{
    const opts=secs.map(s=>'<option value="'+esc(s)+'">'+esc(s)+' ('+esc(getCreditValue(sub,g,s))+')</option>').join('');
    return'<optgroup label="'+esc(g)+'">'+opts+'</optgroup>';
  }).join('');
}

function getItemTotalCredit(item){return getCreditBreakdown(item).grandTotal;}

// Returns full credit breakdown: KG, ES, HS totals + SS + SSSD + grandTotal
function getCreditBreakdown(item){
  // Teaching sections credit per group
  const KG_GRADES=['Pre-School','KG','PREP'];
  const ES_GRADES=['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5'];
  const HS_GRADES=['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'];

  const covered=new Set();
  let kgTotal=0,esTotal=0,hsTotal=0;

  // Combined groups first
  item.combined.forEach(g=>{
    (g.sections||[]).forEach(s=>covered.add(s));
    const grade=SEC_TO_GRADE[(g.sections||[])[0]];
    const cr=Number(g.credit||0);
    if(KG_GRADES.includes(grade))kgTotal+=cr;
    else if(ES_GRADES.includes(grade))esTotal+=cr;
    else hsTotal+=cr;
  });

  // Solo teaching sections
  item.sections.forEach(s=>{
    if(covered.has(s))return;
    const grade=SEC_TO_GRADE[s];
    const cr=Number(item.creditsOverride||getCreditValue(item.subject,grade,s)||0);
    if(KG_GRADES.includes(grade))kgTotal+=cr;
    else if(ES_GRADES.includes(grade))esTotal+=cr;
    else hsTotal+=cr;
  });

  const teachingTotal=kgTotal+esTotal+hsTotal;

  // Study Support
  let ssTotal=0;
  item.studySupport.forEach(s=>{ssTotal+=Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[s],s)||0);});

  // SSSD
  let sssdTotal=0;
  const sc2=new Set();
  item.sssdCombined.forEach(g=>{(g.sections||[]).forEach(s=>sc2.add(s));sssdTotal+=Number(g.credit||0);});
  item.sssd.forEach(s=>{if(sc2.has(s))return;sssdTotal+=Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[s],s)||0);});

  return{kgTotal,esTotal,hsTotal,teachingTotal,ssTotal,sssdTotal,grandTotal:teachingTotal+ssTotal+sssdTotal};
}

function buildSectionSummary(item){
  const covered=new Set();
  const combined=item.combined.map(g=>{(g.sections||[]).forEach(s=>covered.add(s));return{label:(g.sections||[]).join('/')+'('+g.credit+')',isCombined:true,sections:g.sections||[]};});
  const solo=item.sections.filter(s=>!covered.has(s)).map(s=>({label:s+' ('+Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[s],s)||0)+')',isCombined:false,sections:[s]}));
  return solo.concat(combined);
}

function buildSupportSummary(item){
  const ss=item.studySupport.map(s=>s+' (SS '+Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[s],s)||0)+')');
  const sc=item.sssdCombined.map(g=>(g.sections||[]).join('/')+' (SSSD '+g.credit+')');
  const cov=new Set(item.sssdCombined.flatMap(g=>g.sections||[]));
  const ss2=item.sssd.filter(s=>!cov.has(s)).map(s=>s+' (SSSD '+Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[s],s)||0)+')');
  return ss.concat(sc).concat(ss2).join(', ')||'—';
}

function getSelectedGrades(){
  const grades=new Set();
  state.assignments.forEach(item=>{item.sections.concat(item.studySupport).concat(item.sssd).forEach(s=>{if(SEC_TO_GRADE[s])grades.add(SEC_TO_GRADE[s]);});});
  return Array.from(grades);
}
function getDetectedLevels(){return Array.from(new Set(getSelectedGrades().map(g=>GRADE_META[g]?.level).filter(Boolean)));}
function getDetectedCycles(){const order=['CY-KG','CY1','CY2','CY3'];return Array.from(new Set(getSelectedGrades().map(g=>GRADE_META[g]?.cycle).filter(Boolean))).sort((a,b)=>order.indexOf(a)-order.indexOf(b));}

function renderTeacherNames(){
  const active=teacherNames.filter(n=>teacherStatusMap[n]!=='Resigned').sort();
  const all=teacherNames.slice().sort();
  setHTML('teacherName','<option value="">— Select teacher —</option>'+all.map(n=>'<option value="'+esc(n)+'">'+esc(n)+(teacherStatusMap[n]==='Resigned'?' (Resigned)':'')+' </option>').join(''));
  setHTML('subjectTeacherName','<option value="">— Select teacher —</option>'+active.map(n=>'<option value="'+esc(n)+'">'+esc(n)+'</option>').join(''));
}
function renderRooms(){setHTML('roomNo','<option value="">— Select room —</option>'+rooms.map(r=>'<option value="'+esc(r)+'">'+esc(r)+'</option>').join(''));}
function addRoomMaster(){
  const inp=el('newRoomNo');const v=inp?inp.value.trim().toUpperCase():'';
  if(!v){showToast('Type a room number first.');return;}
  if(rooms.includes(v)){showToast('Room already exists.');return;}
  rooms.push(v);rooms.sort();renderRooms();
  if(inp)inp.value='';showToast('Room added: '+v);saveToLocalStorage();
}
function removeRoomMaster(){
  const inp=el('newRoomNo');const v=inp?inp.value.trim().toUpperCase():'';
  if(!v){
    // if nothing typed, remove the currently selected room
    const sel=el('roomNo')?el('roomNo').value:'';
    if(!sel){showToast('Select or type a room to remove.');return;}
    const idx=rooms.indexOf(sel);if(idx===-1){showToast('Room not found.');return;}
    rooms.splice(idx,1);renderRooms();showToast('Room removed: '+sel);saveToLocalStorage();return;
  }
  const idx=rooms.indexOf(v);if(idx===-1){showToast('Room not found: '+v);return;}
  rooms.splice(idx,1);renderRooms();if(inp)inp.value='';showToast('Room removed: '+v);saveToLocalStorage();
}
function renderPositions(){
  setHTML('positionList',POSITIONS.map(p=>'<label class="check-item"><input type="checkbox" data-position="'+esc(p)+'"'+(state.selectedPositions.includes(p)?' checked':'')+'>  <span>'+esc(p)+'</span></label>').join(''));
  // Update accordion badge and preview
  const count=state.selectedPositions.length;
  if(el('positionCountBadge'))el('positionCountBadge').textContent=count;
  if(el('positionCountBadge'))el('positionCountBadge').style.background=count>0?'#163a63':'#94a3b8';
  if(el('positionSelectedPreview'))el('positionSelectedPreview').textContent=count>0?state.selectedPositions.join(', '):'None selected';
}
function togglePositionPanel(){
  const panel=el('positionPanel');
  const chevron=el('positionChevron');
  const btn=el('positionToggleBtn');
  if(!panel)return;
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'block';
  if(chevron)chevron.style.transform=open?'rotate(0deg)':'rotate(180deg)';
  if(btn)btn.style.background=open?'#f8fbff':'#eef6ff';
}

function renderCreditMasterInputs(){
  const gOpts=Object.keys(GRADES).map(g=>'<option value="'+esc(g)+'">'+esc(g)+'</option>').join('');
  const allSubs=getAllSubjects();
  const regularOpts=SUBJECTS.map(s=>'<option value="'+esc(s)+'">'+esc(s)+'</option>').join('');
  const ibdpOpts=IBDP_SUBJECTS.map(s=>'<option value="'+esc(s)+'">🎓 '+esc(s)+'</option>').join('');
  const groupedOpts='<optgroup label="Regular">'+regularOpts+'</optgroup><optgroup label="IBDP">'+ibdpOpts+'</optgroup>';
  setHTML('creditFilterSubject','<option value="">All Subjects</option>'+groupedOpts);
  setHTML('creditSubject','<option value="">— Select subject —</option>'+groupedOpts);
  setHTML('creditGrade','<option value="">— Select grade —</option>'+gOpts);
  setHTML('sectionAdminGrade','<option value="">— Select grade —</option>'+gOpts);
  renderCreditSectionOptions();
}
function renderCreditSectionOptions(){
  const grade=el('creditGrade')?el('creditGrade').value:'';
  const secs=grade&&GRADES[grade]?GRADES[grade]:[];
  setHTML('creditSection','<option value="">All Sections in Grade</option>'+secs.map(s=>'<option value="'+esc(s)+'">'+esc(s)+'</option>').join(''));
}
function renderCreditMasterList(){
  const filter=el('creditFilterSubject')?el('creditFilterSubject').value:'';
  const rows=[];
  Object.keys(CREDIT_MAP).sort().forEach(sub=>{if(filter&&sub!==filter)return;Object.keys(CREDIT_MAP[sub]).forEach(grade=>rows.push({subject:sub,label:grade,credit:CREDIT_MAP[sub][grade],type:'grade'}));});
  Object.keys(SECTION_CREDIT_MAP).sort().forEach(sub=>{if(filter&&sub!==filter)return;Object.keys(SECTION_CREDIT_MAP[sub]).forEach(sec=>rows.push({subject:sub,label:sec,credit:SECTION_CREDIT_MAP[sub][sec],type:'section'}));});
  setHTML('creditMasterList',rows.length?rows.map(r=>'<div class="credit-row"><div><strong>'+esc(r.subject)+'</strong></div><div>'+esc(r.label)+' <span class="tiny">('+esc(r.type)+')</span></div><div>'+esc(r.credit)+'</div><button type="button" class="btn-danger" data-action="remove-credit" data-subject="'+esc(r.subject)+'" data-label="'+esc(r.label)+'" data-type="'+esc(r.type)+'">Remove</button></div>').join(''):'<div class="tiny">No credit rules found.</div>');
}
function renderSubjectTeacherGrid(){
  const allSubjects=getAllSubjects();
  const regularSubs=allSubjects.filter(s=>!IBDP_SUBJECTS.includes(s));
  const ibdpSubs=allSubjects.filter(s=>IBDP_SUBJECTS.includes(s));
  let html='';
  if(regularSubs.length){
    html+='<div style="font-size:10px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;padding:4px 2px 6px;width:100%;">Regular Subjects</div>';
    html+=regularSubs.map(s=>'<label class="section-box" style="width:100%;"><input type="checkbox" data-action="subject-teacher-pick" data-subject="'+esc(s)+'"><span>'+esc(s)+'</span></label>').join('');
  }
  if(ibdpSubs.length){
    html+='<div style="font-size:10px;font-weight:800;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em;padding:10px 2px 6px;width:100%;border-top:1px solid #e9d5ff;margin-top:6px;">🎓 IBDP Subjects</div>';
    html+=ibdpSubs.map(s=>'<label class="section-box" style="width:100%;border-color:#e9d5ff;background:#faf5ff;"><input type="checkbox" data-action="subject-teacher-pick" data-subject="'+esc(s)+'"><span style="color:#6d28d9;">'+esc(s)+'</span></label>').join('');
  }
  setHTML('subjectTeacherGrid',html||'<div class="tiny">No subjects yet.</div>');
}
// ============================================================
// PREPARATION COUNT
// Rules:
//   KG/ES/Gr1-10  → 1 prep per grade (all sections of same grade = 1)
//   Gr11-12       → 1 prep per defined group:
//     11A → "11A", 11B → "11B", 11C/11D → "11C/D",
//     11F-HL/11F-SL → "11F IB", 11GAP → "11GAP"
//     12A → "12A", 12B → "12B", 12C/12D/12FIB → "12C/D",
//     12F-HL/12F-SL → "12F IB", 12GAP → "12GAP"
// ============================================================
function getSectionPrepGroup(sec){
  const s=sec.trim();
  // Grade 11 groups (MBZ)
  if(/^11A$/i.test(s))return'11A';
  if(/^11B$/i.test(s))return'11B';
  if(/^11[CD]$/i.test(s))return'11C/D';
  if(/^11F-HL$/i.test(s)||/^11F-SL$/i.test(s))return'11F IB';
  if(/^11F$/i.test(s))return'11F';
  if(/^11GAP-AP$/i.test(s))return'11GAP AP';
  if(/^11GAP$/i.test(s))return'11GAP';
  if(/^11/.test(s))return'11-other';
  // Grade 12 groups (MBZ)
  if(/^12A$/i.test(s))return'12A';
  if(/^12B$/i.test(s))return'12B';
  if(/^12[CD]$/i.test(s)||/^12FIB$/i.test(s))return'12C/D';
  if(/^12F-HL$/i.test(s)||/^12F-SL$/i.test(s))return'12F IB';
  if(/^12F$/i.test(s))return'12F';
  if(/^12GAP-AP$/i.test(s))return'12GAP AP';
  if(/^12GAP$/i.test(s))return'12GAP';
  if(/^12/.test(s))return'12-other';
  // For all other grades: group by GRADE (handles AD British grades too)
  const grade=SEC_TO_GRADE[sec]||null;
  if(grade)return grade;
  return s;
}
function calcPreparations(sections){
  if(!sections||!sections.length)return 0;
  const groups=new Set(sections.map(getSectionPrepGroup));
  return groups.size;
}
function calcPreparationsForRecord(rec){
  const secs=(rec.assignment&&rec.assignment.sections)||[];
  const ss=(rec.assignment&&rec.assignment.studySupport)||[];
  const sssd=(rec.assignment&&rec.assignment.sssd)||[];
  return calcPreparations([...secs,...ss,...sssd]);
}
function calcTotalPreparationsForTeacher(recs){
  // Collect ALL unique prep groups across all subjects for a teacher
  const allGroups=new Set();
  recs.forEach(rec=>{
    const secs=(rec.assignment&&rec.assignment.sections)||[];
    const ss=(rec.assignment&&rec.assignment.studySupport)||[];
    const sssd=(rec.assignment&&rec.assignment.sssd)||[];
    [...secs,...ss,...sssd].forEach(sec=>allGroups.add(getSectionPrepGroup(sec)));
  });
  return allGroups.size;
}
// Returns all subjects: regular + any IBDP subjects already added
function getAllSubjects(){return SUBJECTS.concat(IBDP_SUBJECTS.filter(s=>!SUBJECTS.includes(s)));}
function renderTeacherGradeLevelGrid(){
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  const picked=Array.from(document.querySelectorAll('[data-action="subject-teacher-pick"]:checked')).map(cb=>cb.dataset.subject);
  const gradeSet=new Set();
  if(teacher&&picked.length){picked.forEach(sub=>{((state.subjectGradeMap[teacher]||{})[sub]||[]).forEach(g=>gradeSet.add(g));});}
  setHTML('teacherGradeLevelGrid',Object.keys(GRADES).map(grade=>'<label class="grade-chip"><input type="checkbox" data-action="teacher-grade-pick" data-grade="'+esc(grade)+'"'+(gradeSet.has(grade)?' checked':'')+'><span>'+esc(grade)+'</span></label>').join('')||'<div class="tiny">Select teacher first.</div>');
}
function renderTeacherSubjectList(){
  const teachers=Object.keys(state.subjectTeacherMap).sort();
  setHTML('teacherSubjectList',teachers.length?teachers.map(teacher=>{
    const pills=(state.subjectTeacherMap[teacher]||[]).map(sub=>{const grades=((state.subjectGradeMap[teacher]||{})[sub]||[]).join(', ');return'<span class="preview-pill">'+esc(sub)+(grades?' · '+esc(grades):'')+' </span>';}).join(' ')||'<span class="tiny">No subjects assigned</span>';
    return'<div class="credit-row"><div><strong>'+esc(teacher)+'</strong></div><div style="grid-column:span 2;">'+pills+'</div><button type="button" class="btn-danger" data-action="remove-teacher-subject-map" data-teacher="'+esc(teacher)+'">Remove</button></div>';
  }).join(''):'<div class="tiny">No subject-to-teacher assignment created yet.</div>');
}
function renderAssignmentFilters(){
  const allSubs=getAllSubjects();
  setHTML('assignmentSubjectFilter','<option value="">— Select subject —</option>'+allSubs.map(s=>'<option value="'+esc(s)+'"'+(state.assignmentSubjectFilter===s?' selected':'')+'>'+esc(s)+'</option>').join(''));
  const teachers=state.assignmentSubjectFilter?Object.keys(state.subjectTeacherMap).filter(t=>(state.subjectTeacherMap[t]||[]).includes(state.assignmentSubjectFilter)).sort():[];
  setHTML('assignmentTeacherFilter','<option value="">— Select teacher —</option>'+teachers.map(t=>'<option value="'+esc(t)+'"'+(state.assignmentTeacherFilter===t?' selected':'')+'>'+esc(t)+'</option>').join(''));
}
function renderTeacherOverview(){
  // This now renders a live summary of what is CURRENTLY filled in Step 1
  const box=el('step1Summary');if(!box)return;
  const teacher=el('teacherName')?el('teacherName').value.trim():'';
  if(!teacher){box.innerHTML='<div class="tiny" style="color:var(--muted);">Select a teacher to see a summary here.</div>';return;}
  const campus=state.campus==='MBZ'?'MBZ Campus':'AD Campus';
  const tid=el('teacherId')?el('teacherId').textContent:'—';
  const status=getTeacherStatus();
  const gender=getTeacherGender();
  const mobile=el('teacherMobile')?el('teacherMobile').value.trim():'';
  const email=el('teacherEmail')?el('teacherEmail').value.trim():'';
  const room=el('roomNo')?el('roomNo').value||'—':'—';
  const planning=el('planningPeriods')?el('planningPeriods').value||0:0;
  const recess=el('recessDuty')?el('recessDuty').value||0:0;
  const proctoring=el('proctoringDuty')?el('proctoringDuty').value||0:0;
  const positions=state.selectedPositions;
  function row(label,value,color){return'<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #eef2f7;">'+'<span style="font-size:12px;color:var(--muted);font-weight:600;">'+label+'</span>'+'<span style="font-size:13px;font-weight:700;color:'+(color||'var(--navy)')+';">'+esc(value)+'</span>'+'</div>';}
  box.innerHTML=
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">'
    +'<span style="font-size:15px;font-weight:800;color:var(--navy);">👤 '+esc(teacher)+'</span>'
    +'<span class="badge" style="background:'+(status==='Active'?'#dcfce7':'#fee2e2')+';color:'+(status==='Active'?'#166534':'#991b1b')+';">'+esc(status)+'</span>'
    +'</div>'
    +row('Teacher ID',tid)
    +row('Campus',campus)
    +row('Gender',gender)
    +(mobile?row('Mobile',mobile):'')
    +(email?row('Email',email):'')
    +row('Room No',room)
    +row('Planning Periods',planning+' period'+(planning!=1?'s':''))
    +row('Recess Duty',recess)
    +row('Proctoring Duty',proctoring)
    +'<div style="padding:7px 0;">'
    +'<span style="font-size:12px;color:var(--muted);font-weight:600;">Position(s)</span>'
    +'<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:5px;">'
    +(positions.length?positions.map(p=>'<span style="background:#f0f7ff;border:1px solid #c8def8;border-radius:6px;padding:3px 9px;font-size:11px;font-weight:700;color:#163a63;">'+esc(p)+'</span>').join('')
    :'<span style="font-size:11px;color:var(--muted);font-style:italic;">None selected</span>')
    +'</div></div>';
}
function getFilteredDatabase(){
  return database.filter(rec=>{
    if(state.reportCampusFilter&&rec.campus!==state.reportCampusFilter)return false;
    if(state.reportTeacherFilter&&rec.teacherName!==state.reportTeacherFilter)return false;
    if(state.reportSubjectFilter&&rec.subject!==state.reportSubjectFilter)return false;
    return true;
  });
}
function renderReportFilters(){
  const campuses=['MBZ Campus','AD Campus'];
  const teachers=Array.from(new Set(database.map(r=>r.teacherName))).sort();
  const subjects=Array.from(new Set(database.map(r=>r.subject))).sort();
  setHTML('reportCampusFilter','<option value="">All Campuses</option>'+campuses.map(v=>'<option value="'+esc(v)+'"'+(state.reportCampusFilter===v?' selected':'')+'>'+esc(v)+'</option>').join(''));
  setHTML('reportTeacherFilter','<option value="">All Teachers</option>'+teachers.map(v=>'<option value="'+esc(v)+'"'+(state.reportTeacherFilter===v?' selected':'')+'>'+esc(v)+'</option>').join(''));
  setHTML('reportSubjectFilter','<option value="">All Subjects</option>'+subjects.map(v=>'<option value="'+esc(v)+'"'+(state.reportSubjectFilter===v?' selected':'')+'>'+esc(v)+'</option>').join(''));
  setHTML('reportViewType',[['teacher_summary','Teacher Summary'],['subject_load','Subject Load'],['room_list','Room List'],['duty_report','Duty Report']].map(([val,label])=>'<option value="'+val+'"'+(state.reportViewType===val?' selected':'')+'>'+label+'</option>').join(''));
}
function renderReport(){
  const rows=getFilteredDatabase();
  const totalTeachers=new Set(rows.map(r=>r.teacherName)).size;
  const totalSubjects=new Set(rows.map(r=>r.subject)).size;
  const totalRooms=new Set(rows.map(r=>r.roomNo).filter(Boolean)).size;
  const totalCredits=rows.reduce((sum,r)=>sum+Number(r.totalCredits||0),0);
  setHTML('reportCards',[['Teachers',totalTeachers],['Subjects',totalSubjects],['Rooms',totalRooms],['Credits',totalCredits]].map(([label,value])=>'<div class="report-card"><div class="label">'+esc(label)+'</div><div class="value">'+esc(value)+'</div></div>').join(''));
  if(!rows.length){setHTML('reportHead','');setHTML('reportBody','<tr><td class="muted">No saved data for this filter.</td></tr>');return;}
  if(state.reportViewType==='teacher_summary'){
    const g={};rows.forEach(r=>{if(!g[r.teacherName])g[r.teacherName]={subjects:new Set(),credits:0,campus:r.campus,room:r.roomNo||'—'};g[r.teacherName].subjects.add(r.subject);g[r.teacherName].credits+=Number(r.totalCredits||0);});
    setHTML('reportHead','<tr><th>Teacher</th><th>Campus</th><th>Room</th><th>Subjects</th><th>Total Credits</th></tr>');
    setHTML('reportBody',Object.keys(g).sort().map(n=>'<tr><td><strong>'+esc(n)+'</strong></td><td>'+esc(g[n].campus)+'</td><td>'+esc(g[n].room)+'</td><td>'+esc(Array.from(g[n].subjects).join(', '))+'</td><td>'+esc(g[n].credits)+'</td></tr>').join(''));
  }else if(state.reportViewType==='subject_load'){
    const g={};rows.forEach(r=>{if(!g[r.subject])g[r.subject]={teachers:new Set(),credits:0};g[r.subject].teachers.add(r.teacherName);g[r.subject].credits+=Number(r.totalCredits||0);});
    setHTML('reportHead','<tr><th>Subject</th><th>Teachers</th><th>Count</th><th>Total Credits</th></tr>');
    setHTML('reportBody',Object.keys(g).sort().map(s=>'<tr><td><strong>'+esc(s)+'</strong></td><td>'+esc(Array.from(g[s].teachers).join(', '))+'</td><td>'+esc(g[s].teachers.size)+'</td><td>'+esc(g[s].credits)+'</td></tr>').join(''));
  }else if(state.reportViewType==='room_list'){
    const g={};rows.forEach(r=>{const room=r.roomNo||'—';if(!g[room])g[room]=[];g[room].push(r.teacherName+' ('+r.subject+')');});
    setHTML('reportHead','<tr><th>Room</th><th>Assignments</th><th>Count</th></tr>');
    setHTML('reportBody',Object.keys(g).sort().map(room=>'<tr><td><strong>'+esc(room)+'</strong></td><td>'+esc(g[room].join(', '))+'</td><td>'+esc(g[room].length)+'</td></tr>').join(''));
  }else{
    setHTML('reportHead','<tr><th>Teacher</th><th>Planning</th><th>Recess Duty</th><th>Proctoring</th><th>Status</th></tr>');
    setHTML('reportBody',rows.map(r=>'<tr><td><strong>'+esc(r.teacherName)+'</strong></td><td>'+esc(r.planningPeriods||0)+'</td><td>'+esc(r.recessDuty||0)+'</td><td>'+esc(r.proctoringDuty||0)+'</td><td>'+esc(r.teacherStatus)+'</td></tr>').join(''));
  }
}
function renderSummary(){
  renderTeacherOverview();renderReportFilters();renderReport();
}
function renderLiveTable(){
  if(!state.assignments.length){
    setHTML('liveTableBody','<tr><td colspan="10" class="muted">No assignments yet.</td></tr>');
    return;
  }
  // Group by teacher
  const byTeacher={};
  state.assignments.forEach(item=>{
    if(!byTeacher[item.teacherName])byTeacher[item.teacherName]=[];
    byTeacher[item.teacherName].push(item);
  });
  let html='';
  Object.keys(byTeacher).sort().forEach(teacher=>{
    const items=byTeacher[teacher];
    // Teacher header row spans all columns
    const teacherTotalPreps=calcPreparations([...new Set(items.flatMap(it=>[...it.sections,...it.studySupport,...it.sssd]))]);
    html+='<tr style="background:#eef6ff;"><td colspan="9" style="padding:10px 14px;font-weight:800;font-size:14px;color:var(--navy);">👤 '+esc(teacher)+'</td>'
      +'<td style="text-align:center;background:#fff7ed;font-weight:800;color:#92400e;">'+esc(teacherTotalPreps)+'</td></tr>';
    let teacherKG=0,teacherES=0,teacherHS=0,teacherSS=0,teacherSssd=0;
    items.forEach(item=>{
      const bd=getCreditBreakdown(item);
      teacherKG+=bd.kgTotal;teacherES+=bd.esTotal;teacherHS+=bd.hsTotal;
      teacherSS+=bd.ssTotal;teacherSssd+=bd.sssdTotal;
      const sections=item.sections.join(', ')||'—';
      const preps=calcPreparations([...item.sections,...item.studySupport,...item.sssd]);
      html+='<tr>'
        +'<td style="padding-left:28px;">'+esc(item.subject)+'</td>'
        +'<td>'+esc(sections)+'</td>'
        +'<td style="text-align:center;">'+esc(bd.kgTotal||'—')+'</td>'
        +'<td style="text-align:center;">'+esc(bd.esTotal||'—')+'</td>'
        +'<td style="text-align:center;">'+esc(bd.hsTotal||'—')+'</td>'
        +'<td style="text-align:center;font-weight:700;">'+esc(bd.teachingTotal)+'</td>'
        +'<td style="text-align:center;">'+esc(bd.ssTotal||'—')+'</td>'
        +'<td style="text-align:center;">'+esc(bd.sssdTotal||'—')+'</td>'
        +'<td style="text-align:center;font-weight:800;color:var(--navy);">'+esc(bd.grandTotal)+'</td>'
        +'<td style="text-align:center;background:#fffbf0;font-weight:700;color:#92400e;">'+esc(preps)+'</td>'
        +'</tr>';
    });
    // Teacher subtotal row
    const tGrand=teacherKG+teacherES+teacherHS+teacherSS+teacherSssd;
    html+='<tr style="background:#f0f7ff;border-top:2px solid #c8def8;">'
      +'<td style="padding-left:28px;font-weight:700;color:var(--muted);">Subtotal</td>'
      +'<td></td>'
      +'<td style="text-align:center;font-weight:700;">'+esc(teacherKG||'—')+'</td>'
      +'<td style="text-align:center;font-weight:700;">'+esc(teacherES||'—')+'</td>'
      +'<td style="text-align:center;font-weight:700;">'+esc(teacherHS||'—')+'</td>'
      +'<td style="text-align:center;font-weight:800;">'+esc(teacherKG+teacherES+teacherHS)+'</td>'
      +'<td style="text-align:center;font-weight:700;">'+esc(teacherSS||'—')+'</td>'
      +'<td style="text-align:center;font-weight:700;">'+esc(teacherSssd||'—')+'</td>'
      +'<td style="text-align:center;font-weight:800;color:var(--navy);font-size:15px;">'+esc(tGrand)+'</td>'
      +'<td style="text-align:center;background:#fff7ed;font-weight:800;color:#92400e;font-size:15px;">'+esc(teacherTotalPreps)+'</td>'
      +'</tr>';
  });
  setHTML('liveTableBody',html);
}
function updateHeaderCampus(){
  const isAD=state.campus==='AD';
  const campusLabel=isAD?'🏫 AD Campus · British (Gr9-12)':'🏫 MBZ Campus · American + IB/AP';
  setText('headerCampus',campusLabel);
  if(el('headerCampus'))el('headerCampus').style.background=isAD?'#92400e':'#163a63';
  const yr=el('academicYear')?el('academicYear').value:'';
  setText('headerYear',yr);
}
function updateTeacherId(){
  const teacher=el('teacherName')?el('teacherName').value:'';
  if(!teacher){setText('teacherId',state.campus+'-'+String(counters[state.campus]).padStart(3,'0'));return;}
  const key=state.campus+'|'+teacher;
  if(!teacherIdMap[key]){teacherIdMap[key]=state.campus+'-'+String(counters[state.campus]).padStart(3,'0');counters[state.campus]+=1;}
  setText('teacherId',teacherIdMap[key]);
}
function updateFooter(){
  renderTeacherOverview();
}
function updateAll(){renderSummary();renderLiveTable();updateFooter();}

function renderSubjectCards(){
  const wrap=el('subjectCards');if(!wrap)return;
  if(!state.assignmentSubjectFilter||!state.assignmentTeacherFilter){wrap.innerHTML='<div class="tiny" style="padding:12px;">Select a subject and teacher above to assign sections.</div>';return;}
  const item=getAssignment(state.assignmentSubjectFilter,state.assignmentTeacherFilter,true);
  const allowedGrades=(((state.subjectGradeMap[state.assignmentTeacherFilter]||{})[state.assignmentSubjectFilter])||Object.keys(GRADES));
  const index=state.assignments.indexOf(item);
  const gradesHtml=Object.entries(GRADES).filter(([grade])=>allowedGrades.includes(grade)).map(([grade,sections])=>{
    const meta=GRADE_META[grade];
    const defaultCredit=Number(item.creditsOverride||getGradeCredit(item.subject,grade)||0);
    const combineItems=item.combined.filter(g=>g.grade===grade).map(g=>'<span class="combine-pill">'+esc((g.sections||[]).join('/'))+' ('+esc(g.credit)+')<button type="button" data-action="remove-combined" data-subject-index="'+index+'" data-combined-index="'+item.combined.indexOf(g)+'">×</button></span>').join('');
    const gradeSummary=buildSectionSummary(item).filter(e=>e.sections.every(s=>sections.includes(s)));
    const multiSelect=sections.map(s=>'<label class="section-box"><input type="checkbox" data-action="toggle-combine-pick" data-subject-index="'+index+'" data-grade="'+esc(grade)+'" data-section="'+esc(s)+'"'+(item.sections.includes(s)?' checked':'')+'><span>'+esc(s)+'</span></label>').join('');
    return'<div class="grade-block"><div class="grade-head"><div class="grade-title"><span>'+esc(grade)+'</span><span class="tag '+esc(meta.level.toLowerCase())+'">'+esc(meta.level)+'</span><span class="tag '+esc(meta.cycle.toLowerCase().replace(/-/g,''))+'">'+esc(meta.cycle)+'</span><span class="tiny">Credit: '+esc(defaultCredit)+'</span></div><div class="grade-actions"><button type="button" class="link-btn" data-action="select-all-grade" data-subject-index="'+index+'" data-grade="'+esc(grade)+'" data-select="1">Select all</button><button type="button" class="link-btn" data-action="select-all-grade" data-subject-index="'+index+'" data-grade="'+esc(grade)+'" data-select="0">Clear</button></div></div>'
      +'<div class="section-row">'+sections.map(s=>{
  const isIbdpHL=s.endsWith('-HL');const isIbdpSL=s.endsWith('-SL');
  const isIbdpWhole=/^1[12]F$/.test(s);const isAPWhole=/^1[12]GAP$/.test(s);const isAPSub=/^1[12]GAP-AP$/.test(s);
  const cv=getCreditValue(item.subject,grade,s);
  let badge='';
  if(isIbdpHL)badge=' <span class="ibdp-badge">HL·'+cv+'</span>';
  else if(isIbdpSL)badge=' <span class="ibdp-badge">SL·'+cv+'</span>';
  else if(isIbdpWhole)badge=' <span style="background:#ede9fe;color:#6d28d9;border-radius:3px;padding:0 4px;font-size:9px;">IB Class</span>';
  else if(isAPWhole)badge=' <span style="background:#fef3c7;color:#92400e;border-radius:3px;padding:0 4px;font-size:9px;">GAP</span>';
  else if(isAPSub)badge=' <span style="background:#fef3c7;color:#92400e;border-radius:3px;padding:0 4px;font-size:9px;">AP</span>';
  const cls='section-box'+(isIbdpHL||isIbdpSL?' ibdp':isIbdpWhole?' ibdp':isAPSub?' ibdp':'');
  return'<label class="'+cls+'"><input type="checkbox" data-action="toggle-section" data-subject-index="'+index+'" data-section="'+esc(s)+'"'+(item.sections.includes(s)?' checked':'')+'><span>'+esc(s)+badge+'</span></label>';
}).join('')+'</div>'
      +'<div style="margin-top:10px;"><button type="button" class="btn-light" data-action="toggle-combine-box" data-subject-index="'+index+'" data-grade="'+esc(grade)+'">➕ Combine Sections</button></div>'
      +'<div class="combine-box" id="combine-box-'+index+'-'+safeId(grade)+'"><div class="field"><label>Select Sections to Combine</label><div class="multi-select-box">'+multiSelect+'</div></div><button type="button" class="btn-light" data-action="add-combined-multi" data-subject-index="'+index+'" data-grade="'+esc(grade)+'">Add Combine</button></div>'
      +'<div class="combine-list" style="margin-top:8px;">'+(combineItems||'<span class="tiny">No combined sections.</span>')+'</div>'
      +'<div class="section-preview" style="margin-top:8px;">'+(gradeSummary.length?gradeSummary.map(e=>'<span class="preview-pill '+(e.isCombined?'combine':'')+'">' +esc(e.label)+'</span>').join(''):'<span class="tiny">No summary yet.</span>')+'</div>'
      +'</div>';
  }).join('');
  const supportOpts='<option value="">Select grade / section</option>'+getAllSectionsForSubjectOptions(item.subject,allowedGrades);
  const ssStudyList=item.studySupport.length?item.studySupport.map(s=>'<span class="support-pill">'+esc(s)+' (SS '+esc(getCreditValue(item.subject,SEC_TO_GRADE[s],s))+')<button type="button" data-action="remove-support-item" data-key="studySupport" data-subject-index="'+index+'" data-section="'+esc(s)+'">×</button></span>').join(''):'<span class="tiny">None added.</span>';
  const sssdCov=new Set(item.sssdCombined.flatMap(g=>g.sections||[]));
  const sssdCombList=item.sssdCombined.map((g,idx)=>'<span class="support-pill">'+esc((g.sections||[]).join('/'))+' (SSSD '+esc(g.credit)+')<button type="button" data-action="remove-sssd-combined" data-subject-index="'+index+'" data-combined-index="'+idx+'">×</button></span>').join('');
  const sssdSingles=item.sssd.filter(s=>!sssdCov.has(s)).map(s=>'<span class="support-pill">'+esc(s)+' (SSSD '+esc(getCreditValue(item.subject,SEC_TO_GRADE[s],s))+')<button type="button" data-action="remove-support-item" data-key="sssd" data-subject-index="'+index+'" data-section="'+esc(s)+'">×</button></span>').join('');
  const sssdList=(sssdCombList||sssdSingles)||(sssdCombList+sssdSingles)||'<span class="tiny">None added.</span>';
  wrap.innerHTML='<div class="subject-card"><div class="subject-head"><div class="subject-head-left"><div class="tag subject">'+esc(item.subject)+'</div><div class="tiny">Teacher: <strong>'+esc(item.teacherName)+'</strong></div></div><div class="head-actions"><div class="field" style="min-width:160px;"><label for="credit-override-'+index+'">Default Credit / Week</label><input id="credit-override-'+index+'" type="number" min="0" value="'+esc(item.creditsOverride)+'" placeholder="Auto from grade" data-action="set-credit-override" data-subject-index="'+index+'"></div></div></div><div class="grade-list">'+gradesHtml+'<div class="support-grid"><div class="support-box"><h4>Study Support</h4><div class="support-builder"><div class="field"><label>Select Grade / Section</label><select id="study-support-select-'+index+'">'+supportOpts+'</select></div><button type="button" class="btn-light" data-action="add-support-item" data-key="studySupport" data-subject-index="'+index+'">Add</button></div><div class="support-list">'+ssStudyList+'</div></div><div class="support-box"><h4>SSSD</h4><div class="support-builder"><div class="field"><label>Select Grade / Section</label><select id="sssd-select-'+index+'">'+supportOpts+'</select></div><button type="button" class="btn-light" data-action="add-support-item" data-key="sssd" data-subject-index="'+index+'">Add</button></div><div style="margin-top:8px;"><button type="button" class="btn-light" data-action="toggle-sssd-combine-box" data-subject-index="'+index+'">➕ Combine SSSD</button></div><div class="combine-box" id="sssd-combine-box-'+index+'" style="margin-top:8px;"><div class="field"><label>Choose Multiple SSSD</label><div class="multi-select-box">'+item.sssd.map(s=>'<label class="section-box"><input type="checkbox" data-action="toggle-sssd-combine-pick" data-subject-index="'+index+'" data-section="'+esc(s)+'"><span>'+esc(s)+'</span></label>').join('')+'</div></div><button type="button" class="btn-light" data-action="add-sssd-combined" data-subject-index="'+index+'">Add</button></div><div class="support-list">'+sssdList+'</div></div></div></div></div>';
}

// ---- Toggle frames ----
let currentFrame=null;
function setActiveToggleBtn(btnId){
  ['creditToggleBtn','step2AToggleBtn','step2BToggleBtn','step2CToggleBtn'].forEach(id=>{
    const b=el(id);if(b)b.classList.remove('active');
  });
  if(btnId){const b=el(btnId);if(b)b.classList.add('active');}
}
function showFrame(frameId,btnId){
  const frames=['creditModal','step2AFrame','step2BFrame','step2CFrame'];
  frames.forEach(id=>{const f=el(id);if(f)f.style.display='none';});
  if(frameId&&frameId!==currentFrame){const f=el(frameId);if(f)f.style.display='block';currentFrame=frameId;setActiveToggleBtn(btnId);}
  else{currentFrame=null;setActiveToggleBtn(null);}
}

// ---- Save / load localStorage ----
function buildStoragePayload(){
  return{teacherNames:teacherNames.slice(),teacherStatusMap:{...teacherStatusMap},rooms:rooms.slice(),positions:POSITIONS.slice(),grades:JSON.parse(JSON.stringify(GRADES)),creditMap:JSON.parse(JSON.stringify(CREDIT_MAP)),sectionCreditMap:JSON.parse(JSON.stringify(SECTION_CREDIT_MAP)),database:JSON.parse(JSON.stringify(database)),counters:{...counters},teacherIdMap:{...teacherIdMap},classAdvisors:{...classAdvisors},coordinatorSubjects:{...coordinatorSubjects},state:{subjectTeacherMap:JSON.parse(JSON.stringify(state.subjectTeacherMap)),subjectGradeMap:JSON.parse(JSON.stringify(state.subjectGradeMap)),assignments:JSON.parse(JSON.stringify(state.assignments))}};
}
function saveToLocalStorage(){LS.setItem(LS.key(),JSON.stringify(buildStoragePayload()));}
function replaceArr(target,values){target.splice(0,target.length,...values);}
function deduplicateDatabase(){
  // Keep only the LATEST record per teacher+subject combination
  const seen={};
  const cleaned=[];
  for(let i=database.length-1;i>=0;i--){
    const r=database[i];
    const key=(r.teacherName||'')+'|||'+(r.subject||'');
    if(!seen[key]){seen[key]=true;cleaned.unshift(r);}
  }
  const removed=database.length-cleaned.length;
  if(removed>0){
    database=cleaned;
    console.log('Deduplication: removed '+removed+' duplicate record(s).');
  }
  return removed;
}
function loadFromLocalStorage(){
  try{
    const raw=LS.getItem(LS.key());if(!raw)return;
    const p=JSON.parse(raw);
    if(p.teacherNames)replaceArr(teacherNames,p.teacherNames);
    if(p.rooms)replaceArr(rooms,p.rooms);
    if(p.positions)replaceArr(POSITIONS,p.positions);
    if(p.database)database=p.database;
    if(p.counters)counters={MBZ:Number(p.counters.MBZ||1),AD:Number(p.counters.AD||1)};
    if(p.teacherIdMap)teacherIdMap=p.teacherIdMap;
    Object.keys(teacherStatusMap).forEach(k=>delete teacherStatusMap[k]);Object.assign(teacherStatusMap,p.teacherStatusMap||{});
    Object.keys(GRADES).forEach(k=>delete GRADES[k]);Object.assign(GRADES,p.grades||GRADES);rebuildSectionLookup();
    Object.keys(CREDIT_MAP).forEach(k=>delete CREDIT_MAP[k]);Object.assign(CREDIT_MAP,p.creditMap||DEFAULT_CREDIT_MAP);
    Object.keys(SECTION_CREDIT_MAP).forEach(k=>delete SECTION_CREDIT_MAP[k]);Object.assign(SECTION_CREDIT_MAP,p.sectionCreditMap||{ENGLISH:{"12A":4,"12GAP":3}});
    state.subjectTeacherMap=p.state?.subjectTeacherMap||{};
    state.subjectGradeMap=p.state?.subjectGradeMap||{};
    state.assignments=p.state?.assignments||[];
    if(p.classAdvisors)classAdvisors=p.classAdvisors;
    if(p.coordinatorSubjects)coordinatorSubjects=p.coordinatorSubjects;
  }catch(e){console.warn('loadFromLocalStorage:',e);}
}

// ---- Google Sheets ----
function submitGoogleSheetForm(payload){
  const form=el('googleSheetHiddenForm');if(!form||!GOOGLE_SCRIPT_URL)return false;
  form.innerHTML='';form.action=GOOGLE_SCRIPT_URL;
  Object.entries(payload).forEach(([k,v])=>{const inp=document.createElement('input');inp.type='hidden';inp.name=k;inp.value=v;form.appendChild(inp);});
  form.submit();return true;
}
// ── Modern fetch-based Google Sheets sync ──────────────────────────────
function syncToGoogleSheets(){
  if(!GOOGLE_SCRIPT_URL||GOOGLE_SCRIPT_URL.includes('YOUR_SCRIPT_ID'))return Promise.resolve({ok:false,msg:'No URL'});
  const campus=state.campus==='MBZ'?'MBZ Campus':'AD Campus';
  const year=el('academicYear')?el('academicYear').value:'AY_2026-2027';
  const teacherList=teacherNames.map(n=>({
    name:n,status:teacherStatusMap[n]||'Active',
    gender:(teacherProfiles[n]||{}).gender||'',
    mobile:(teacherProfiles[n]||{}).mobile||'',
    email:(teacherProfiles[n]||{}).email||''
  }));
  const payload={action:'saveAll',campus:campus,academicYear:year,
    records:database.filter(r=>r.savedAt),
    teachers:teacherList,advisors:classAdvisors};
  showSyncStatus('syncing');
  // Use URL-encoded form data — works with Google Apps Script without CORS issues
  const formData=new FormData();
  formData.append('data',JSON.stringify(payload));
  return fetch(GOOGLE_SCRIPT_URL,{method:'POST',body:formData})
    .then(res=>res.text())
    .then(txt=>{
      console.log('Sheets response:',txt);
      showSyncStatus('success');
      return {ok:true};
    })
    .catch(err=>{
      console.error('Sheets sync error:',err);
      // Try fallback: hidden iframe form POST
      return syncViaForm(payload);
    });
}
function syncViaForm(payload){
  return new Promise(resolve=>{
    try{
      const form=el('googleSheetHiddenForm');
      if(!form){resolve({ok:false});return;}
      form.innerHTML='';
      form.action=GOOGLE_SCRIPT_URL;
      form.method='POST';
      const inp=document.createElement('input');
      inp.type='hidden';inp.name='data';inp.value=JSON.stringify(payload);
      form.appendChild(inp);
      form.submit();
      showSyncStatus('success');
      resolve({ok:true});
    }catch(e){
      console.error('Form fallback error:',e);
      showSyncStatus('error');
      resolve({ok:false,msg:e.toString()});
    }
  });
}
function showSyncStatus(status){
  let bar=document.getElementById('syncStatusBar');
  if(!bar){bar=document.createElement('div');bar.id='syncStatusBar';
    bar.style.cssText='position:fixed;bottom:60px;right:18px;padding:10px 16px;border-radius:10px;'
      +'font-size:12px;font-weight:700;z-index:9998;display:flex;align-items:center;gap:8px;'
      +'box-shadow:0 4px 16px rgba(0,0,0,.2);transition:opacity .5s ease;max-width:300px;';
    document.body.appendChild(bar);}
  clearTimeout(window.syncStatusTimer);bar.style.opacity='1';
  if(status==='syncing'){bar.style.background='#1d4ed8';bar.style.color='#fff';
    bar.innerHTML='<span>⏳</span> Syncing to Google Sheets...';}
  else if(status==='success'){bar.style.background='#065f46';bar.style.color='#fff';
    bar.innerHTML='✅ Google Sheets — Synced!';
    window.syncStatusTimer=setTimeout(()=>{bar.style.opacity='0';},3500);}
  else if(status==='error'){bar.style.background='#991b1b';bar.style.color='#fff';
    bar.innerHTML='⚠️ Sync failed — saved locally only';
    window.syncStatusTimer=setTimeout(()=>{bar.style.opacity='0';},4000);}
}
function saveToGoogleSheet(record){return syncToGoogleSheets();}

// ---- Action handlers ----
function onCampusChange(){
  state.campus=el('campus')?el('campus').value:'MBZ';
  applyCampusDefaults(state.campus);
  loadFromLocalStorage();
  const removed=deduplicateDatabase();
  if(removed>0)saveToLocalStorage();
  renderTeacherNames();renderRooms();renderPositions();
  renderCreditMasterInputs();renderCreditMasterList();
  renderSubjectTeacherGrid();renderTeacherGradeLevelGrid();renderTeacherSubjectList();
  renderAssignmentFilters();renderSubjectCards();
  updateTeacherId();updateHeaderCampus();updateAll();
  showCampusSwitchBanner(state.campus);
}
function showCampusSwitchBanner(campus){
  const isAD=campus==='AD';
  const existing=document.getElementById('campusSwitchBanner');
  if(existing)existing.remove();
  const banner=document.createElement('div');
  banner.id='campusSwitchBanner';
  banner.style.cssText='position:fixed;top:0;left:0;right:0;z-index:9999;padding:18px 24px;display:flex;align-items:center;gap:16px;'
    +'background:'+(isAD?'linear-gradient(135deg,#92400e,#b45309)':'linear-gradient(135deg,#163a63,#1d4ed8)')
    +';color:#fff;box-shadow:0 4px 24px rgba(0,0,0,.35);font-family:inherit;animation:bannerSlideIn .35s ease;';
  banner.innerHTML=''
    +'<div style="font-size:28px;">'+(isAD?'🏫':'🏫')+'</div>'
    +'<div style="flex:1;">'
    +'<div style="font-size:17px;font-weight:800;letter-spacing:.3px;">Switched to '+(isAD?'AD Campus':'MBZ Campus')+'</div>'
    +'<div style="font-size:12px;opacity:.85;margin-top:3px;">'
    +(isAD?'British Curriculum · Grades KG–8 American · Grades 9–12 IGCSE / AS Level / A Level · Separate data storage'
          :'American Curriculum + IB + AP/GAP · Pre-School to Grade 12 · Separate data storage')
    +'</div>'
    +'</div>'
    +'<div style="display:flex;gap:8px;align-items:center;">'
    +'<span style="background:rgba(255,255,255,.2);border-radius:6px;padding:4px 10px;font-size:11px;font-weight:700;">DATA LOADED</span>'
    +'<button onclick="document.getElementById(\'campusSwitchBanner\').remove()" '
    +'style="background:rgba(255,255,255,.2);border:none;color:#fff;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:13px;font-weight:700;">✕ Close</button>'
    +'</div>';
  document.body.prepend(banner);
  setTimeout(()=>{if(document.getElementById('campusSwitchBanner'))document.getElementById('campusSwitchBanner').remove();},4500);
}
function addTeacherName(){
  const inp=el('newTeacherName');const v=inp?inp.value.trim().toUpperCase():'';
  if(!v){showToast('Type a teacher name first.');return;}
  if(teacherNames.includes(v)){showToast('Teacher already exists.');return;}
  teacherNames.push(v);teacherStatusMap[v]='Active';renderTeacherNames();if(inp)inp.value='';showToast('Teacher added.');updateAll();saveToLocalStorage();
}
function bulkAddTeacherNames(){
  const inp=el('bulkTeacherNames');const raw=inp?inp.value:'';
  const names=raw.split(/(?:\r\n|\r|\n|,)/).map(n=>n.trim().toUpperCase()).filter(Boolean);
  if(!names.length){showToast('Paste at least one name.');return;}
  let added=0;names.forEach(name=>{if(!teacherNames.includes(name)){teacherNames.push(name);teacherStatusMap[name]='Active';added++;}});
  renderTeacherNames();if(inp)inp.value='';showToast(added+' teacher(s) imported.');updateAll();saveToLocalStorage();
}
function removeTeacherName(){
  const teacher=el('teacherName')?el('teacherName').value:'';
  if(!teacher){showToast('Select teacher first.');return;}
  const idx=teacherNames.indexOf(teacher);if(idx===-1){showToast('Teacher not found.');return;}
  teacherNames.splice(idx,1);delete teacherStatusMap[teacher];delete state.subjectTeacherMap[teacher];delete state.subjectGradeMap[teacher];
  state.assignments=state.assignments.filter(i=>i.teacherName!==teacher);
  delete teacherIdMap['MBZ|'+teacher];delete teacherIdMap['AD|'+teacher];
  if(el('teacherName'))el('teacherName').value='';if(el('subjectTeacherName'))el('subjectTeacherName').value='';
  renderTeacherNames();renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateTeacherId();updateAll();saveToLocalStorage();
  showToast('Teacher removed: '+teacher);
}
function togglePosition(position,checked){
  if(checked){if(!state.selectedPositions.includes(position))state.selectedPositions.push(position);}
  else state.selectedPositions=state.selectedPositions.filter(i=>i!==position);
  renderPositions();updateFooter();renderTeacherOverview();
}
function addPositionMaster(){
  const inp=el('newPositionName');const v=inp?inp.value.trim():'';
  if(!v){showToast('Type a position name.');return;}if(POSITIONS.includes(v)){showToast('Already exists.');return;}
  POSITIONS.push(v);renderPositions();if(inp)inp.value='';showToast('Position added: '+v);saveToLocalStorage();
}
function removePositionMaster(){
  const inp=el('newPositionName');const v=inp?inp.value.trim():'';
  if(!v){showToast('Type position name to remove.');return;}
  const idx=POSITIONS.indexOf(v);if(idx===-1){showToast('Not found.');return;}
  POSITIONS.splice(idx,1);state.selectedPositions=state.selectedPositions.filter(i=>i!==v);
  renderPositions();if(inp)inp.value='';updateFooter();saveToLocalStorage();showToast('Position removed: '+v);
}
function assignSubjectsToTeacher(){
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  if(!teacher){showToast('Select teacher first.');return;}
  const selectedSubjects=Array.from(document.querySelectorAll('[data-action="subject-teacher-pick"]:checked')).map(cb=>cb.dataset.subject).sort();
  if(!selectedSubjects.length){showToast('Select at least one subject.');return;}
  const selectedGrades=Array.from(document.querySelectorAll('[data-action="teacher-grade-pick"]:checked')).map(cb=>cb.dataset.grade);
  if(!selectedGrades.length){showToast('Select at least one grade level.');return;}
  if(!state.subjectGradeMap[teacher])state.subjectGradeMap[teacher]={};
  const prev=state.subjectGradeMap[teacher]||{};const next={};
  selectedSubjects.forEach(sub=>{next[sub]=prev[sub]&&prev[sub].length?prev[sub].slice():selectedGrades.slice();});
  state.subjectTeacherMap[teacher]=selectedSubjects;state.subjectGradeMap[teacher]=next;
  renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();
  showToast('Subjects updated for '+teacher+'.');updateAll();saveToLocalStorage();
}
function clearTeacherSubjects(){
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  if(!teacher){showToast('Select teacher first.');return;}
  delete state.subjectTeacherMap[teacher];delete state.subjectGradeMap[teacher];
  if(state.assignmentTeacherFilter===teacher)state.assignmentTeacherFilter='';
  document.querySelectorAll('[data-action="subject-teacher-pick"]').forEach(cb=>{cb.checked=false;});
  document.querySelectorAll('[data-action="teacher-grade-pick"]').forEach(cb=>{cb.checked=false;});
  renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateAll();saveToLocalStorage();
  showToast('Cleared all subjects for '+teacher+'.');
}
function addSubjectMaster(){
  const inp=el('newSubjectName');const v=inp?inp.value.trim().toUpperCase():'';
  if(!v){showToast('Type a subject name.');return;}if(SUBJECTS.includes(v)){showToast('Already exists.');return;}
  SUBJECTS.push(v);renderSubjectTeacherGrid();renderCreditMasterInputs();renderAssignmentFilters();
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  if(teacher){const assigned=state.subjectTeacherMap[teacher]||[];document.querySelectorAll('[data-action="subject-teacher-pick"]').forEach(cb=>{cb.checked=assigned.includes(cb.dataset.subject);});}
  renderTeacherGradeLevelGrid();if(inp)inp.value='';showToast('New subject added: '+v);updateAll();saveToLocalStorage();
}
function addSubjectAsIbdp(){
  // Add from the Step 2A input field as an IBDP subject
  const inp=el('newSubjectName');const v=inp?inp.value.trim():'';
  if(!v){showToast('Type a subject name first.');return;}
  const upper=v.toUpperCase();
  if(SUBJECTS.includes(upper)||IBDP_SUBJECTS.includes(upper)){showToast('Subject already exists.');return;}
  const hlCr=IBDP_CREDIT_HL,slCr=IBDP_CREDIT_SL;
  IBDP_SUBJECTS.push(upper);
  // auto-set credits for HL/SL sections
  if(!SECTION_CREDIT_MAP[upper])SECTION_CREDIT_MAP[upper]={};
  ['11F-HL','12F-HL'].forEach(sec=>{SECTION_CREDIT_MAP[upper][sec]=hlCr;});
  ['11F-SL','12F-SL'].forEach(sec=>{SECTION_CREDIT_MAP[upper][sec]=slCr;});
  renderSubjectTeacherGrid();renderCreditMasterInputs();renderCreditMasterList();renderAssignmentFilters();
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  if(teacher){const assigned=state.subjectTeacherMap[teacher]||[];document.querySelectorAll('[data-action="subject-teacher-pick"]').forEach(cb=>{cb.checked=assigned.includes(cb.dataset.subject);});}
  renderTeacherGradeLevelGrid();
  if(inp)inp.value='';showToast('IB subject added: '+upper+' (HL='+hlCr+', SL='+slCr+')');updateAll();saveToLocalStorage();
}

function addCustomIbdpSubject(){
  // Add from IBDP panel dedicated input
  const inp=el('newIbdpSubjectName');const v=inp?inp.value.trim():'';
  if(!v){showToast('Type an IB subject name first.');return;}
  const upper=v.toUpperCase();
  if(SUBJECTS.includes(upper)||IBDP_SUBJECTS.includes(upper)){showToast('Subject already exists.');return;}
  const hlCr=Number(el('newIbdpCreditHL')?el('newIbdpCreditHL').value:6)||6;
  const slCr=Number(el('newIbdpCreditSL')?el('newIbdpCreditSL').value:4)||4;
  IBDP_SUBJECTS.push(upper);
  // auto-set section credits for all IBDP sections
  if(!SECTION_CREDIT_MAP[upper])SECTION_CREDIT_MAP[upper]={};
  ['11F-HL','12F-HL'].forEach(sec=>{SECTION_CREDIT_MAP[upper][sec]=hlCr;});
  ['11F-SL','12F-SL'].forEach(sec=>{SECTION_CREDIT_MAP[upper][sec]=slCr;});
  renderSubjectTeacherGrid();renderCreditMasterInputs();renderCreditMasterList();renderAssignmentFilters();
  if(inp)inp.value='';
  setText('ibdpStatusMsg','✓ IB subject added: '+upper+' (HL='+hlCr+', SL='+slCr+')');
  showToast('IB subject added: '+upper);updateAll();saveToLocalStorage();
}
function removeSubjectMaster(){
  const selected=Array.from(document.querySelectorAll('[data-action="subject-teacher-pick"]:checked')).map(cb=>cb.dataset.subject);
  if(!selected.length){showToast('Tick subjects to remove first.');return;}
  selected.forEach(v=>{
    const idx=SUBJECTS.indexOf(v);if(idx!==-1)SUBJECTS.splice(idx,1);
    delete CREDIT_MAP[v];delete SECTION_CREDIT_MAP[v];
    Object.keys(state.subjectTeacherMap).forEach(teacher=>{
      state.subjectTeacherMap[teacher]=(state.subjectTeacherMap[teacher]||[]).filter(s=>s!==v);
      if(state.subjectGradeMap[teacher])delete state.subjectGradeMap[teacher][v];
      if(!state.subjectTeacherMap[teacher].length){delete state.subjectTeacherMap[teacher];delete state.subjectGradeMap[teacher];}
    });
    state.assignments=state.assignments.filter(i=>i.subject!==v);
    if(state.assignmentSubjectFilter===v)state.assignmentSubjectFilter='';
  });
  renderSubjectTeacherGrid();renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderCreditMasterInputs();renderCreditMasterList();renderAssignmentFilters();renderSubjectCards();
  if(el('newSubjectName'))el('newSubjectName').value='';showToast('Removed: '+selected.join(', '));updateAll();saveToLocalStorage();
}
function removeTeacherSubjectMap(teacher){
  delete state.subjectTeacherMap[teacher];delete state.subjectGradeMap[teacher];
  if(state.assignmentTeacherFilter===teacher)state.assignmentTeacherFilter='';
  renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateAll();saveToLocalStorage();
}
function setCreditOverride(index,value){if(state.assignments[index]){state.assignments[index].creditsOverride=value;renderSubjectCards();updateAll();saveToLocalStorage();}}
function toggleSection(index,section,checked){
  const item=state.assignments[index];if(!item)return;
  if(checked){if(!item.sections.includes(section))item.sections.push(section);}
  else{item.sections=item.sections.filter(s=>s!==section);item.combined=item.combined.map(g=>({...g,sections:(g.sections||[]).filter(s=>s!==section)})).filter(g=>(g.sections||[]).length>=2);}
  renderSubjectCards();updateAll();saveToLocalStorage();
}
function selectAllGrade(index,grade,shouldSelect){
  const item=state.assignments[index];if(!item)return;
  const sections=GRADES[grade]||[];
  if(shouldSelect){sections.forEach(s=>{if(!item.sections.includes(s))item.sections.push(s);});}
  else{item.sections=item.sections.filter(s=>!sections.includes(s));item.combined=item.combined.map(g=>({...g,sections:(g.sections||[]).filter(s=>!sections.includes(s))})).filter(g=>(g.sections||[]).length>=2);}
  renderSubjectCards();updateAll();saveToLocalStorage();
}
function addCombinedMulti(index,grade){
  const item=state.assignments[index];if(!item)return;
  const picked=Array.from(document.querySelectorAll('[data-action="toggle-combine-pick"][data-subject-index="'+index+'"][data-grade="'+grade+'"]:checked')).map(cb=>cb.dataset.section);
  if(picked.length<2){showToast('Select at least two sections.');return;}
  if(picked.some(s=>!item.sections.includes(s))){showToast('All combined sections must be selected in teaching sections.');return;}
  if(item.combined.some(g=>JSON.stringify((g.sections||[]).slice().sort())===JSON.stringify(picked.slice().sort()))){showToast('Group already exists.');return;}
  item.combined.push({grade,sections:picked.slice().sort(),credit:Number(item.creditsOverride||getGradeCredit(item.subject,grade)||0)});
  renderSubjectCards();updateAll();saveToLocalStorage();showToast('Combined: '+picked.join('/'));
}
function removeCombined(si,ci){if(state.assignments[si]){state.assignments[si].combined.splice(ci,1);renderSubjectCards();updateAll();saveToLocalStorage();}}
function addSupportItem(index,key){
  const item=state.assignments[index];if(!item)return;
  const allowedGrades=(((state.subjectGradeMap[item.teacherName]||{})[item.subject])||Object.keys(GRADES));
  const selectId=key==='studySupport'?'study-support-select-'+index:'sssd-select-'+index;
  const section=el(selectId)?el(selectId).value:'';
  if(!section){showToast('Select a section first.');return;}
  if(!allowedGrades.includes(SEC_TO_GRADE[section])){showToast('Section outside assigned grade levels.');return;}
  if(item[key].includes(section)){showToast('Already added.');return;}
  item[key].push(section);renderSubjectCards();updateAll();saveToLocalStorage();
}
function removeSupportItem(index,key,section){
  const item=state.assignments[index];if(!item)return;
  item[key]=item[key].filter(e=>e!==section);
  if(key==='sssd'){item.sssdCombined=item.sssdCombined.map(g=>({...g,sections:(g.sections||[]).filter(s=>s!==section)})).filter(g=>(g.sections||[]).length>=2);}
  renderSubjectCards();updateAll();saveToLocalStorage();
}
function addSssdCombined(index){
  const item=state.assignments[index];if(!item)return;
  const picked=Array.from(document.querySelectorAll('[data-action="toggle-sssd-combine-pick"][data-subject-index="'+index+'"]:checked')).map(cb=>cb.dataset.section);
  if(picked.length<2){showToast('Select at least two SSSD sections.');return;}
  if(item.sssdCombined.some(g=>JSON.stringify((g.sections||[]).slice().sort())===JSON.stringify(picked.slice().sort()))){showToast('Group already exists.');return;}
  item.sssdCombined.push({sections:picked.slice().sort(),credit:Number(item.creditsOverride||getCreditValue(item.subject,SEC_TO_GRADE[picked[0]],picked[0])||0)});
  renderSubjectCards();updateAll();saveToLocalStorage();showToast('SSSD combined: '+picked.join('/'));
}
function removeSssdCombined(index,ci){
  const item=state.assignments[index];if(!item)return;
  item.sssdCombined.splice(ci,1);renderSubjectCards();updateAll();saveToLocalStorage();
}
function addCreditRule(){
  const sub=el('creditSubject')?el('creditSubject').value:'';
  const grade=el('creditGrade')?el('creditGrade').value:'';
  const section=el('creditSection')?el('creditSection').value:'';
  const value=Number(el('creditValue')?el('creditValue').value:'');
  if(!sub||!grade){showToast('Select subject and grade first.');return;}
  if(Number.isNaN(value)||value<0){showToast('Enter a valid credit period.');return;}
  if(section){if(!SECTION_CREDIT_MAP[sub])SECTION_CREDIT_MAP[sub]={};SECTION_CREDIT_MAP[sub][section]=value;showToast('Section credit saved: '+sub+' / '+section+' = '+value);}
  else{if(!CREDIT_MAP[sub])CREDIT_MAP[sub]={};CREDIT_MAP[sub][grade]=value;showToast('Grade credit saved: '+sub+' / '+grade+' = '+value);}
  if(el('creditValue'))el('creditValue').value='';renderCreditMasterList();renderSubjectCards();updateAll();saveToLocalStorage();
}
function removeCreditRule(sub,label,type){
  if(type==='section'){if(SECTION_CREDIT_MAP[sub]){delete SECTION_CREDIT_MAP[sub][label];if(!Object.keys(SECTION_CREDIT_MAP[sub]).length)delete SECTION_CREDIT_MAP[sub];}}
  else{if(CREDIT_MAP[sub]){delete CREDIT_MAP[sub][label];if(!Object.keys(CREDIT_MAP[sub]).length)delete CREDIT_MAP[sub];}}
  renderCreditMasterList();renderSubjectCards();updateAll();saveToLocalStorage();showToast('Credit removed: '+sub+' / '+label);
}
function resetCreditMaster(){
  Object.keys(CREDIT_MAP).forEach(k=>delete CREDIT_MAP[k]);Object.keys(SECTION_CREDIT_MAP).forEach(k=>delete SECTION_CREDIT_MAP[k]);
  Object.keys(DEFAULT_CREDIT_MAP).forEach(k=>{CREDIT_MAP[k]=Object.assign({},DEFAULT_CREDIT_MAP[k]);});
  SECTION_CREDIT_MAP.ENGLISH={"12A":4,"12GAP":3};
  renderCreditMasterInputs();renderCreditMasterList();renderSubjectCards();updateAll();saveToLocalStorage();showToast('Credit master reset.');
}
function addSectionMaster(){
  const grade=el('sectionAdminGrade')?el('sectionAdminGrade').value:'';
  const section=(el('sectionAdminName')?el('sectionAdminName').value.trim():'').toUpperCase();
  if(!grade){showToast('Select grade first.');return;}if(!section){showToast('Type section name.');return;}
  if(!GRADES[grade])GRADES[grade]=[];if(GRADES[grade].includes(section)){showToast('Already exists.');return;}
  GRADES[grade].push(section);GRADES[grade].sort();rebuildSectionLookup();renderCreditMasterInputs();renderAssignmentFilters();renderSubjectCards();
  if(el('sectionAdminName'))el('sectionAdminName').value='';updateAll();saveToLocalStorage();showToast('Section added: '+grade+' / '+section);
}
function removeSectionMaster(){
  const grade=el('sectionAdminGrade')?el('sectionAdminGrade').value:'';
  const section=(el('sectionAdminName')?el('sectionAdminName').value.trim():'').toUpperCase();
  if(!grade){showToast('Select grade first.');return;}if(!section){showToast('Type section name.');return;}
  if(!GRADES[grade]||!GRADES[grade].includes(section)){showToast('Section not found.');return;}
  GRADES[grade]=GRADES[grade].filter(i=>i!==section);
  Object.keys(SECTION_CREDIT_MAP).forEach(s=>{if(SECTION_CREDIT_MAP[s]&&SECTION_CREDIT_MAP[s][section]!==undefined){delete SECTION_CREDIT_MAP[s][section];if(!Object.keys(SECTION_CREDIT_MAP[s]).length)delete SECTION_CREDIT_MAP[s];}});
  state.assignments.forEach(item=>{
    item.sections=item.sections.filter(s=>s!==section);item.studySupport=item.studySupport.filter(s=>s!==section);item.sssd=item.sssd.filter(s=>s!==section);
    item.combined=item.combined.map(g=>({...g,sections:(g.sections||[]).filter(s=>s!==section)})).filter(g=>(g.sections||[]).length>=2);
    item.sssdCombined=item.sssdCombined.map(g=>({...g,sections:(g.sections||[]).filter(s=>s!==section)})).filter(g=>(g.sections||[]).length>=2);
  });
  rebuildSectionLookup();renderCreditMasterInputs();renderCreditMasterList();renderAssignmentFilters();renderSubjectCards();
  if(el('sectionAdminName'))el('sectionAdminName').value='';updateAll();saveToLocalStorage();showToast('Section removed: '+grade+' / '+section);
}
function saveRecord(){
  const subjectName=state.assignmentSubjectFilter;const teacherName=state.assignmentTeacherFilter;
  if(!subjectName){showToast('Choose a subject in Step 2B.');return;}
  if(!teacherName){showToast('Choose a teacher in Step 2B.');return;}
  const item=getAssignment(subjectName,teacherName,false);
  if(!item||(!item.sections.length&&!item.studySupport.length&&!item.sssd.length)){showToast('Assign at least one section.');return;}
  const bd=getCreditBreakdown(item);
  const profile=teacherProfiles[teacherName]||{};
  const record={campus:state.campus==='MBZ'?'MBZ Campus':'AD Campus',teacherId:el('teacherId')?el('teacherId').textContent:'',teacherName,subject:subjectName,teacherStatus:getTeacherStatus(),gender:getTeacherGender(),mobile:profile.mobile||el('teacherMobile')?el('teacherMobile').value:'',email:profile.email||el('teacherEmail')?el('teacherEmail').value:'',roomNo:el('roomNo')?el('roomNo').value:'',positions:state.selectedPositions.slice(),planningPeriods:Number(el('planningPeriods')?el('planningPeriods').value:0),recessDuty:Number(el('recessDuty')?el('recessDuty').value:0),proctoringDuty:Number(el('proctoringDuty')?el('proctoringDuty').value:0),detectedLevels:getDetectedLevels(),detectedCycles:getDetectedCycles(),assignment:JSON.parse(JSON.stringify(item)),totalCredits:bd.grandTotal,creditBreakdown:{kgTotal:bd.kgTotal,esTotal:bd.esTotal,hsTotal:bd.hsTotal,teachingTotal:bd.teachingTotal,ssTotal:bd.ssTotal,sssdTotal:bd.sssdTotal,grandTotal:bd.grandTotal},savedAt:new Date().toLocaleString()};
  // Deduplicate: remove ALL existing records for this teacher+subject before inserting
  database=database.filter(e=>!(e.teacherName===record.teacherName&&e.subject===record.subject));
  database.push(record);
  saveToLocalStorage();updateAll();showToast('💾 Saved locally — syncing to Sheets...');
  saveToGoogleSheet(record).then(r=>{if(r&&r.ok)showToast('✅ '+teacherName+' — '+subjectName+' synced!');});
}
function exportJSON(){
  const blob=new Blob([JSON.stringify(database,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='teacher_assignment_database.json';a.click();URL.revokeObjectURL(url);showToast('JSON exported.');
}
function clearForm(){
  state.selectedPositions=[];state.subjectTeacherMap={};state.subjectGradeMap={};state.assignmentSubjectFilter='';state.assignmentTeacherFilter='';state.assignments=[];
  ['teacherName','subjectTeacherName','newTeacherName','bulkTeacherNames','roomNo','planningPeriods','recessDuty','proctoringDuty'].forEach(id=>{if(el(id))el(id).value='';});
  const statuses=document.querySelectorAll('input[name="teacherStatus"]');if(statuses[0])statuses[0].checked=true;
  document.querySelectorAll('[data-action="subject-teacher-pick"]').forEach(cb=>{cb.checked=false;});
  document.querySelectorAll('[data-action="teacher-grade-pick"]').forEach(cb=>{cb.checked=false;});
  renderPositions();renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateTeacherId();updateAll();saveToLocalStorage();showToast('Form cleared.');
}
function showToast(message){
  const toast=el('toast');if(!toast)return;
  toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2400);
}
function updateTeacherSubjectSelectionUI(){
  const teacher=el('subjectTeacherName')?el('subjectTeacherName').value:'';
  const assigned=state.subjectTeacherMap[teacher]||[];
  document.querySelectorAll('[data-action="subject-teacher-pick"]').forEach(cb=>{cb.checked=assigned.includes(cb.dataset.subject);});
  renderTeacherGradeLevelGrid();
}
function copyAcademicYearData(){
  const fromYear=window.prompt('Copy FROM Academic Year (e.g. AY_2025-2026)');
  const toYear=el('academicYear')?el('academicYear').value:'';
  if(!fromYear||!toYear){showToast('Invalid year selection.');return;}
  const type=(window.prompt('What to copy? (teachers / subjects / assignments / all)')||'').trim().toLowerCase();
  if(!['teachers','subjects','assignments','all'].includes(type)){showToast('Must be: teachers, subjects, assignments, or all.');return;}
  const fromRaw=LS.getItem('teacher_assignment_form_v3_data_'+fromYear);
  if(!fromRaw){showToast('No data found for '+fromYear);return;}
  const fromData=JSON.parse(fromRaw);
  const toData=JSON.parse(LS.getItem('teacher_assignment_form_v3_data_'+toYear)||'{}');
  if(!window.confirm('Copy '+type+' from '+fromYear+' to '+toYear+'?'))return;
  if(type==='teachers'||type==='all'){toData.teacherNames=fromData.teacherNames||[];toData.teacherStatusMap=fromData.teacherStatusMap||{};toData.teacherIdMap=fromData.teacherIdMap||{};toData.counters=fromData.counters||{MBZ:1,AD:1};}
  if(type==='subjects'||type==='all'){toData.positions=fromData.positions||[];toData.creditMap=fromData.creditMap||{};toData.sectionCreditMap=fromData.sectionCreditMap||{};toData.grades=fromData.grades||{};toData.state=toData.state||{};toData.state.subjectTeacherMap=(fromData.state&&fromData.state.subjectTeacherMap)||{};toData.state.subjectGradeMap=(fromData.state&&fromData.state.subjectGradeMap)||{};}
  if(type==='assignments'||type==='all'){toData.database=fromData.database||[];toData.state=toData.state||{};toData.state.assignments=(fromData.state&&fromData.state.assignments)||[];}
  LS.setItem('teacher_assignment_form_v3_data_'+toYear,JSON.stringify(toData));
  if(el('academicYear')&&el('academicYear').value===toYear){loadFromLocalStorage();renderTeacherNames();renderRooms();renderPositions();renderCreditMasterInputs();renderCreditMasterList();renderSubjectTeacherGrid();renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateTeacherId();updateAll();}
  showToast('Copied '+type+' from '+fromYear+' to '+toYear);
}

// ---- Bind events ----
// Teacher profile store: saves gender/mobile/email per teacher name
const teacherProfiles={};

function step1Save(){
  const teacher=el('teacherName')?el('teacherName').value.trim():'';
  if(!teacher){showToast('Select or add a teacher first.');return;}
  teacherProfiles[teacher]={
    gender:getTeacherGender(),
    mobile:el('teacherMobile')?el('teacherMobile').value.trim():'',
    email:el('teacherEmail')?el('teacherEmail').value.trim():'',
  };
  teacherStatusMap[teacher]=getTeacherStatus();
  // Inject profile into any existing database records for this teacher
  database.forEach(rec=>{
    if(rec.teacherName===teacher){
      rec.gender=teacherProfiles[teacher].gender;
      rec.mobile=teacherProfiles[teacher].mobile;
      rec.email=teacherProfiles[teacher].email;
      rec.teacherStatus=teacherStatusMap[teacher];
      rec.roomNo=el('roomNo')?el('roomNo').value:'';
      rec.planningPeriods=Number(el('planningPeriods')?el('planningPeriods').value:0);
      rec.recessDuty=Number(el('recessDuty')?el('recessDuty').value:0);
      rec.proctoringDuty=Number(el('proctoringDuty')?el('proctoringDuty').value:0);
      rec.positions=state.selectedPositions.slice();
    }
  });
  saveToLocalStorage();
  renderTeacherOverview();
  showToast('✅ Teacher info saved: '+teacher);
}

function loadTeacherToForm(teacher){
  if(!teacher)return;
  // Set teacher in dropdown
  const tn=el('teacherName');if(tn){tn.value=teacher;}
  // Load from database
  const recs=database.filter(r=>r.teacherName===teacher);
  const r0=recs[0];
  if(r0){
    if(el('roomNo'))el('roomNo').value=r0.roomNo||'';
    if(el('planningPeriods'))el('planningPeriods').value=r0.planningPeriods||0;
    if(el('recessDuty'))el('recessDuty').value=r0.recessDuty||0;
    if(el('proctoringDuty'))el('proctoringDuty').value=r0.proctoringDuty||0;
    // Status
    const status=r0.teacherStatus||'Active';
    document.querySelectorAll('input[name="teacherStatus"]').forEach(inp=>{inp.checked=(inp.value===status);});
    // Positions
    state.selectedPositions=(r0.positions||[]).slice();
    renderPositions();
  }
  // Load profile (gender/mobile/email)
  const profile=teacherProfiles[teacher]||r0||{};
  const gender=profile.gender||r0&&r0.gender||'Male';
  document.querySelectorAll('input[name="teacherGender"]').forEach(inp=>{inp.checked=(inp.value===gender);});
  if(el('teacherMobile'))el('teacherMobile').value=profile.mobile||r0&&r0.mobile||'';
  if(el('teacherEmail'))el('teacherEmail').value=profile.email||r0&&r0.email||'';
  showToast('Loaded: '+teacher);
  // Scroll to top of form
  const s1=el('step1Panel');if(s1)s1.scrollTop=0;
}

function checkRoomClash(){
  const room=el('roomNo')?el('roomNo').value.trim():'';
  const currentTeacher=el('teacherName')?el('teacherName').value.trim():'';
  // Remove any existing clash warning
  const existing=document.getElementById('roomClashWarning');
  if(existing)existing.remove();
  if(!room||!currentTeacher)return;
  // Find all OTHER teachers already assigned this room in the database
  const clashTeachers=[...new Set(
    database
      .filter(r=>r.roomNo===room && r.teacherName!==currentTeacher)
      .map(r=>r.teacherName)
  )];
  if(!clashTeachers.length)return;
  // Build warning box and insert after the room select
  const warning=document.createElement('div');
  warning.id='roomClashWarning';
  warning.style.cssText='background:#fef2f2;border:1px solid #fca5a5;border-radius:10px;padding:12px 14px;margin-top:6px;';
  warning.innerHTML=
    '<div style="display:flex;align-items:flex-start;gap:8px;">'
    +'<span style="font-size:18px;line-height:1;">⚠️</span>'
    +'<div>'
    +'<div style="font-size:13px;font-weight:800;color:#991b1b;margin-bottom:4px;">Room already assigned!</div>'
    +'<div style="font-size:12px;color:#7f1d1d;margin-bottom:8px;">Room <strong>'+esc(room)+'</strong> is currently assigned to:</div>'
    +clashTeachers.map(t=>'<div style="display:flex;justify-content:space-between;align-items:center;background:#fff;border:1px solid #fca5a5;border-radius:6px;padding:6px 10px;margin-bottom:4px;">'
      +'<span style="font-size:13px;font-weight:700;color:#991b1b;">👤 '+esc(t)+'</span>'
      +'<button type="button" onclick="switchTeacherRoom(\''+esc(t)+'\')" style="background:#163a63;color:#fff;border:none;border-radius:6px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer;">Change their room</button>'
      +'</div>').join('')
    +'<div style="font-size:11px;color:#991b1b;margin-top:4px;">You can still keep this room — or click "Change their room" to reassign the other teacher.</div>'
    +'</div></div>';
  // Insert after the room select wrapper
  const roomWrapper=el('roomNo')?.closest('div');
  if(roomWrapper)roomWrapper.insertAdjacentElement('afterend',warning);
}

function switchTeacherRoom(teacher){
  // Load that teacher into the form so coordinator can change their room
  if(el('teacherName')){
    el('teacherName').value=teacher;
    updateTeacherId();
    // Load their saved room
    const recs=database.filter(r=>r.teacherName===teacher);
    if(recs.length&&el('roomNo'))el('roomNo').value=recs[0].roomNo||'';
    loadTeacherToForm(teacher);
    // Clear room so coordinator can pick a new one
    if(el('roomNo'))el('roomNo').value='';
    const existing=document.getElementById('roomClashWarning');
    if(existing)existing.remove();
    showToast('Loaded '+teacher+' — please assign a new room and save.');
    // Scroll to room field
    el('roomNo')?.scrollIntoView({behavior:'smooth',block:'center'});
  }
}

function bindEvents(){
  el('academicYear')?.addEventListener('change',()=>{loadFromLocalStorage();const r=deduplicateDatabase();if(r>0)saveToLocalStorage();renderTeacherNames();renderRooms();renderPositions();renderCreditMasterInputs();renderCreditMasterList();renderSubjectTeacherGrid();renderTeacherGradeLevelGrid();renderTeacherSubjectList();renderAssignmentFilters();renderSubjectCards();updateAll();updateHeaderCampus();showToast('Year: '+el('academicYear').value);});
  el('campus')?.addEventListener('change',onCampusChange);
  el('teacherName')?.addEventListener('change',()=>{
    updateTeacherId();
    const teacher=el('teacherName').value;
    const savedStatus=teacher?(teacherStatusMap[teacher]||'Active'):'Active';
    document.querySelectorAll('input[name="teacherStatus"]').forEach(inp=>{inp.checked=inp.value===savedStatus;});
    const existing=document.getElementById('roomClashWarning');
    if(existing)existing.remove();
    checkRoomClash();
    renderTeacherOverview();
  });
  el('roomNo')?.addEventListener('change',()=>{
    checkRoomClash();
    renderTeacherOverview();
  });
  document.querySelectorAll('input[name="teacherStatus"]').forEach(inp=>inp.addEventListener('change',()=>{const teacher=el('teacherName')?el('teacherName').value:'';if(teacher)teacherStatusMap[teacher]=getTeacherStatus();renderTeacherNames();renderTeacherOverview();saveToLocalStorage();}));
  document.querySelectorAll('input[name="teacherGender"]').forEach(inp=>inp.addEventListener('change',renderTeacherOverview));
  el('teacherMobile')?.addEventListener('input',renderTeacherOverview);
  el('teacherEmail')?.addEventListener('input',renderTeacherOverview);
  el('planningPeriods')?.addEventListener('input',renderTeacherOverview);
  el('recessDuty')?.addEventListener('input',renderTeacherOverview);
  el('proctoringDuty')?.addEventListener('input',renderTeacherOverview);
  el('addRoomBtn')?.addEventListener('click',addRoomMaster);
  el('removeRoomBtn')?.addEventListener('click',removeRoomMaster);
  el('addTeacherBtn')?.addEventListener('click',addTeacherName);
  el('bulkAddTeacherBtn')?.addEventListener('click',bulkAddTeacherNames);
  el('removeTeacherBtn')?.addEventListener('click',removeTeacherName);
  el('addPositionBtn')?.addEventListener('click',addPositionMaster);
  el('removePositionBtn')?.addEventListener('click',removePositionMaster);
  el('assignTeacherSubjectsBtn')?.addEventListener('click',assignSubjectsToTeacher);
  el('clearTeacherSubjectBtn')?.addEventListener('click',clearTeacherSubjects);
  el('addSubjectBtn')?.addEventListener('click',addSubjectMaster);
  el('addSubjectAsIbdpBtn')?.addEventListener('click',addSubjectAsIbdp);
  el('removeSubjectBtn')?.addEventListener('click',removeSubjectMaster);
  el('saveBtn')?.addEventListener('click',saveRecord);
  el('clearBtn')?.addEventListener('click',clearForm);
  el('exportBtn')?.addEventListener('click',exportJSON);
  el('creditToggleBtn')?.addEventListener('click',()=>showFrame('creditModal','creditToggleBtn'));
  el('step2AToggleBtn')?.addEventListener('click',()=>showFrame('step2AFrame','step2AToggleBtn'));
  el('step2BToggleBtn')?.addEventListener('click',()=>showFrame('step2BFrame','step2BToggleBtn'));
  el('step2CToggleBtn')?.addEventListener('click',()=>showFrame('step2CFrame','step2CToggleBtn'));
  el('copyYearBtn')?.addEventListener('click',copyAcademicYearData);
  el('addCreditBtn')?.addEventListener('click',addCreditRule);
  el('resetCreditBtn')?.addEventListener('click',resetCreditMaster);
  el('addSectionBtn')?.addEventListener('click',addSectionMaster);
  el('removeSectionBtn')?.addEventListener('click',removeSectionMaster);
  el('creditGrade')?.addEventListener('change',renderCreditSectionOptions);
  el('creditFilterSubject')?.addEventListener('change',renderCreditMasterList);
  el('subjectTeacherName')?.addEventListener('change',updateTeacherSubjectSelectionUI);
  el('assignmentSubjectFilter')?.addEventListener('change',()=>{state.assignmentSubjectFilter=el('assignmentSubjectFilter').value;state.assignmentTeacherFilter='';renderAssignmentFilters();renderSubjectCards();updateAll();});
  el('assignmentTeacherFilter')?.addEventListener('change',()=>{state.assignmentTeacherFilter=el('assignmentTeacherFilter').value;renderSubjectCards();updateAll();});
  el('applyReportBtn')?.addEventListener('click',()=>{state.reportCampusFilter=el('reportCampusFilter')?el('reportCampusFilter').value:'';state.reportTeacherFilter=el('reportTeacherFilter')?el('reportTeacherFilter').value:'';state.reportSubjectFilter=el('reportSubjectFilter')?el('reportSubjectFilter').value:'';state.reportViewType=el('reportViewType')?el('reportViewType').value:'teacher_summary';renderReport();});
  el('reportTeacherSummaryBtn')?.addEventListener('click',()=>{state.reportViewType='teacher_summary';renderReportFilters();renderReport();});
  el('reportSubjectLoadBtn')?.addEventListener('click',()=>{state.reportViewType='subject_load';renderReportFilters();renderReport();});
  el('reportRoomListBtn')?.addEventListener('click',()=>{state.reportViewType='room_list';renderReportFilters();renderReport();});
  el('reportDutyBtn')?.addEventListener('click',()=>{state.reportViewType='duty_report';renderReportFilters();renderReport();});
  el('clearReportBtn')?.addEventListener('click',()=>{state.reportCampusFilter='';state.reportTeacherFilter='';state.reportSubjectFilter='';state.reportViewType='teacher_summary';renderReportFilters();renderReport();});

  el('ibdpSetupBtn')?.addEventListener('click',ibdpSetup);
  el('ibdpAddSubjectsBtn')?.addEventListener('click',ibdpAddSubjects);
  el('ibdpClearBtn')?.addEventListener('click',ibdpClear);
  el('addIbdpSubjectBtn')?.addEventListener('click',addCustomIbdpSubject);
  el('tabStep1Btn')?.addEventListener('click',()=>switchToStep(1));
  el('tabStep2Btn')?.addEventListener('click',()=>switchToStep(2));
  el('tabStep3Btn')?.addEventListener('click',()=>switchToStep(3));
  el('step1SaveBtn')?.addEventListener('click',step1Save);
  el('step1ClearBtn')?.addEventListener('click',()=>{
    ['teacherMobile','teacherEmail','newTeacherName'].forEach(id=>{if(el(id))el(id).value='';});
    document.querySelector('input[name="teacherStatus"][value="Active"]')&&(document.querySelector('input[name="teacherStatus"][value="Active"]').checked=true);
    document.querySelector('input[name="teacherGender"][value="Male"]')&&(document.querySelector('input[name="teacherGender"][value="Male"]').checked=true);
    showToast('Form cleared.');
  });

  document.addEventListener('change',event=>{
    const t=event.target;
    if(t.matches('[data-position]')){togglePosition(t.dataset.position,t.checked);return;}
    if(t.matches('[data-action="toggle-section"]')){toggleSection(Number(t.dataset.subjectIndex),t.dataset.section,t.checked);return;}
    if(t.matches('[data-action="set-credit-override"]')){setCreditOverride(Number(t.dataset.subjectIndex),t.value);return;}
    if(t.matches('[data-action="subject-teacher-pick"]')){renderTeacherGradeLevelGrid();return;}
  });
  document.addEventListener('click',event=>{
    const sssdBtn=event.target.closest('[data-action="toggle-sssd-combine-box"]');
    if(sssdBtn){const idx=sssdBtn.dataset.subjectIndex;const box=document.getElementById('sssd-combine-box-'+idx);if(box){const vis=box.style.display==='grid';box.style.display=vis?'none':'grid';sssdBtn.textContent=vis?'➕ Combine SSSD':'➖ Hide SSSD Combine';}return;}
    const combBtn=event.target.closest('[data-action="toggle-combine-box"]');
    if(combBtn){const idx=combBtn.dataset.subjectIndex;const grade=combBtn.dataset.grade;const box=document.getElementById('combine-box-'+idx+'-'+grade.replace(/[^a-zA-Z0-9]/g,'_'));if(box){const vis=box.style.display==='grid';box.style.display=vis?'none':'grid';combBtn.textContent=vis?'➕ Combine Sections':'➖ Hide Combine';}return;}
    const btn=event.target.closest('button[data-action]');if(!btn)return;
    const action=btn.dataset.action;
    if(action==='remove-credit')removeCreditRule(btn.dataset.subject,btn.dataset.label,btn.dataset.type);
    else if(action==='remove-teacher-subject-map')removeTeacherSubjectMap(btn.dataset.teacher);
    else if(action==='select-all-grade')selectAllGrade(Number(btn.dataset.subjectIndex),btn.dataset.grade,btn.dataset.select==='1');
    else if(action==='add-combined-multi')addCombinedMulti(Number(btn.dataset.subjectIndex),btn.dataset.grade);
    else if(action==='remove-combined')removeCombined(Number(btn.dataset.subjectIndex),Number(btn.dataset.combinedIndex));
    else if(action==='add-support-item')addSupportItem(Number(btn.dataset.subjectIndex),btn.dataset.key);
    else if(action==='remove-support-item')removeSupportItem(Number(btn.dataset.subjectIndex),btn.dataset.key,btn.dataset.section);
    else if(action==='add-sssd-combined')addSssdCombined(Number(btn.dataset.subjectIndex));
    else if(action==='remove-sssd-combined')removeSssdCombined(Number(btn.dataset.subjectIndex),Number(btn.dataset.combinedIndex));
  });
}

// ---- IBDP Mode Functions ----
const IBDP_SECTIONS={
  'Grade 11':['11F','11F-HL','11F-SL'],
  'Grade 12':['12F','12F-HL','12F-SL']
};

function ibdpSetup(){
  let sectionsAdded=0,creditsAdded=0;
  // Add HL/SL sections to Grade 11 and 12
  Object.entries(IBDP_SECTIONS).forEach(([grade,secs])=>{
    if(!GRADES[grade])GRADES[grade]=[];
    secs.forEach(sec=>{
      if(!GRADES[grade].includes(sec)){GRADES[grade].push(sec);GRADES[grade].sort();sectionsAdded++;}
    });
  });
  rebuildSectionLookup();
  // Set section-level credit rules for all IBDP subjects × HL/SL sections
  IBDP_SUBJECTS.forEach(sub=>{
    const defCredit=getIbdpDefaultCredit(sub);
    // HL / SL sections
    ['11F-HL','11F-SL','12F-HL','12F-SL'].forEach(sec=>{
      const cr=sec.endsWith('-HL')?IBDP_CREDIT_HL:IBDP_CREDIT_SL;
      const finalCr=sub.includes('(HL)')||sub.includes('(SL)')||sub.includes('TOK')||sub.includes('EXTENDED')||sub.includes('CAS')?defCredit:cr;
      if(!SECTION_CREDIT_MAP[sub])SECTION_CREDIT_MAP[sub]={};
      if(SECTION_CREDIT_MAP[sub][sec]===undefined){SECTION_CREDIT_MAP[sub][sec]=finalCr;creditsAdded++;}
    });
    // 11F / 12F whole-class sections (Ethics, PE, TOK, etc.) — use grade-level credit or defCredit
    ['11F','12F'].forEach(sec=>{
      if(!SECTION_CREDIT_MAP[sub])SECTION_CREDIT_MAP[sub]={};
      if(SECTION_CREDIT_MAP[sub][sec]===undefined){
        const gradeCredit=getGradeCredit(sub,'Grade 11')||defCredit||2;
        SECTION_CREDIT_MAP[sub][sec]=gradeCredit;creditsAdded++;
      }
    });
  });
  renderCreditMasterInputs();renderCreditMasterList();renderSubjectCards();updateAll();saveToLocalStorage();
  const msg=sectionsAdded+' sections added, '+creditsAdded+' credit rules set. ✓';
  setText('ibdpStatusMsg',msg);
  showToast('IBDP Setup complete: '+msg);
}

function ibdpAddSubjects(){
  let added=0;
  IBDP_SUBJECTS.forEach(sub=>{if(!SUBJECTS.includes(sub)){SUBJECTS.push(sub);added++;}});
  renderSubjectTeacherGrid();renderCreditMasterInputs();renderAssignmentFilters();
  setText('ibdpStatusMsg',added+' IBDP subjects added to subject list. ✓');
  updateAll();saveToLocalStorage();
  showToast(added+' IBDP subjects added.');
}

function ibdpClear(){
  // Remove HL/SL sections from grades
  Object.entries(IBDP_SECTIONS).forEach(([grade,secs])=>{
    if(GRADES[grade])GRADES[grade]=GRADES[grade].filter(s=>!secs.includes(s));
  });
  // Remove IBDP section credit rules
  IBDP_SUBJECTS.forEach(sub=>{delete SECTION_CREDIT_MAP[sub];});
  // Remove IBDP subjects from SUBJECTS list
  IBDP_SUBJECTS.forEach(sub=>{const idx=SUBJECTS.indexOf(sub);if(idx!==-1)SUBJECTS.splice(idx,1);});
  // Clean assignments
  state.assignments.forEach(item=>{
    ['11F-HL','11F-SL','12F-HL','12F-SL'].forEach(sec=>{
      item.sections=item.sections.filter(s=>s!==sec);
      item.studySupport=item.studySupport.filter(s=>s!==sec);
      item.sssd=item.sssd.filter(s=>s!==sec);
    });
  });
  rebuildSectionLookup();renderCreditMasterInputs();renderCreditMasterList();renderSubjectTeacherGrid();renderAssignmentFilters();renderSubjectCards();updateAll();saveToLocalStorage();
  setText('ibdpStatusMsg','IBDP setup cleared.');
  showToast('IBDP sections and credits cleared.');
}

// ---- Step tab switching ----
function switchToStep(step){
  const s1=el('step1Panel'),s2=el('step2Panel'),s3=el('step3Panel');
  const t1=el('tabStep1Btn'),t2=el('tabStep2Btn'),t3=el('tabStep3Btn');
  const layout=document.querySelector('.layout');
  [t1,t2,t3].forEach(t=>t&&t.classList.remove('active'));
  if(step===1){
    if(s1)s1.style.display='';if(s2)s2.style.display='none';if(s3)s3.style.display='none';
    t1&&t1.classList.add('active');
    layout&&layout.classList.remove('step2-active');
  } else if(step===2){
    if(s1)s1.style.display='none';if(s2)s2.style.display='';if(s3)s3.style.display='none';
    t2&&t2.classList.add('active');
    layout&&layout.classList.add('step2-active');
    const anyOpen=['creditModal','step2AFrame','step2BFrame'].some(id=>{const f=el(id);return f&&f.style.display==='block';});
    if(!anyOpen)showFrame('step2AFrame','step2AToggleBtn');
  } else {
    if(s1)s1.style.display='none';if(s2)s2.style.display='none';if(s3)s3.style.display='';
    t3&&t3.classList.add('active');
    layout&&layout.classList.remove('step2-active');
    r3Render();
  }
}

// ============================================================
// STEP 3 — CUSTOM REPORTS
// ============================================================
const r3State={campus:'',teacher:'',subject:'',level:'',tab:'overview'};
// classAdvisors: { "1A": "CHAN", "1B": "HALA", ... }
let classAdvisors={};
// coordinatorSubjects: { "ARABIC": "RANDA EID", "MATH": "CHAN", ... }  subject→coordinator teacher
let coordinatorSubjects={};

// Return the base subject group for any subject name
// e.g. "IB ENGLISH A (HL)" → "ENGLISH",  "AP MATH" → "MATH",  "ARABIC" → "ARABIC"
function getSubjectGroup(subjectName){
  if(!subjectName)return '';
  const s=subjectName.toUpperCase();
  // Strip IB prefix: "IB ENGLISH A (HL)" → "ENGLISH A (HL)"
  const noIB=s.replace(/^IB\s+/,'');
  // Core subjects list — order matters (longer first to avoid partial match)
  const CORE_SUBJECTS=[
    'SOCIAL STUDIES','UAE SOCIAL STUDIES','PHYSICAL EDUCATION',
    'COMPUTER SCIENCE','COMPUTER','BUSINESS STUDIES','BUSINESS / ECON / PSYCHOLOGY',
    'BUSINESS MGMT','BUSINESS','DESIGN & TECHNOLOGY',
    'ECONOMICS','PSYCHOLOGY','ACCOUNTING','GEOGRAPHY','HISTORY',
    'ENGLISH','ARABIC','MATH','SCIENCE','PHYSICS','BIOLOGY','CHEMISTRY',
    'FRENCH','ISLAMIC','ENG.ISLAMIC','MUSIC','ART','ICT',
    'THEORY OF KNOWLEDGE','EXTENDED ESSAY','CAS',
    'HOMEROOM'
  ];
  for(const core of CORE_SUBJECTS){
    if(noIB.startsWith(core)||s.startsWith(core))return core;
  }
  return subjectName; // no match — return as-is
}

// Check if a record's subject matches the selected filter subject
function subjectMatchesFilter(recSubject, filterSubject){
  if(!filterSubject)return true;
  // Exact match first
  if(recSubject===filterSubject)return true;
  // Group match: both belong to same base group
  const recGroup=getSubjectGroup(recSubject);
  const filterGroup=getSubjectGroup(filterSubject);
  return recGroup===filterGroup && recGroup!=='';
}

function r3GetData(){
  return database.filter(rec=>{
    if(r3State.campus&&rec.campus!==r3State.campus)return false;
    if(r3State.teacher&&rec.teacherName!==r3State.teacher)return false;
    if(r3State.subject&&!subjectMatchesFilter(rec.subject,r3State.subject))return false;
    if(r3State.level){
      const bd=rec.creditBreakdown||{};
      if(r3State.level==='KG'&&!bd.kgTotal)return false;
      if(r3State.level==='ES'&&!bd.esTotal)return false;
      if(r3State.level==='HS'&&!bd.hsTotal)return false;
      if(r3State.level==='IBDP'&&!IBDP_SUBJECTS.includes(rec.subject))return false;
    }
    return true;
  });
}

function r3RenderFilters(){
  const campuses=['MBZ Campus','AD Campus'];
  const teachers=Array.from(new Set(database.map(r=>r.teacherName))).sort();
  const subjects=Array.from(new Set(database.map(r=>r.subject))).sort();
  // Build grouped subject list: base subjects first, then individual variants
  const subjectGroups={};
  subjects.forEach(s=>{
    const grp=getSubjectGroup(s);
    if(!subjectGroups[grp])subjectGroups[grp]=[];
    subjectGroups[grp].push(s);
  });
  // Build dropdown: group entry if >1 variant, otherwise just the subject
  let subjectOptions='<option value="">All Subjects</option>';
  const sortedGroups=Object.keys(subjectGroups).sort();
  sortedGroups.forEach(grp=>{
    const variants=subjectGroups[grp];
    if(variants.length>1){
      // Group entry — shows all variants when selected
      const groupLabel=grp+' (All — '+variants.length+' variants)';
      subjectOptions+='<option value="'+esc(variants[0])+'" data-group="'+esc(grp)+'"'+(r3State.subject&&getSubjectGroup(r3State.subject)===grp?' selected':'')
        +' style="font-weight:700;background:#eff6ff;">📚 '+esc(groupLabel)+'</option>';
      // Individual variants indented
      variants.forEach(v=>{
        subjectOptions+='<option value="'+esc(v)+'"'+(r3State.subject===v?' selected':'')
          +' style="padding-left:20px;color:#555;">　↳ '+esc(v)+'</option>';
      });
    } else {
      subjectOptions+='<option value="'+esc(variants[0])+'"'+(r3State.subject===variants[0]?' selected':'')+'>'+esc(variants[0])+'</option>';
    }
  });
  setHTML('r3Campus','<option value="">All Campuses</option>'+campuses.map(v=>'<option value="'+esc(v)+'"'+(r3State.campus===v?' selected':'')+'>'+esc(v)+'</option>').join(''));
  setHTML('r3Teacher','<option value="">All Teachers</option>'+teachers.map(v=>'<option value="'+esc(v)+'"'+(r3State.teacher===v?' selected':'')+'>'+esc(v)+'</option>').join(''));
  setHTML('r3Subject',subjectOptions);
  // When group entry selected, store base group name in r3State for filter matching
  const subjectEl=el('r3Subject');
  if(subjectEl&&!subjectEl._groupListenerAdded){
    subjectEl._groupListenerAdded=true;
    subjectEl.addEventListener('change',function(){
      const opt=this.options[this.selectedIndex];
      r3State.subject=opt?opt.value:'';
    });
  }
}

function r3RenderStatCards(rows){
  const totalTeachers=new Set(rows.map(r=>r.teacherName)).size;
  const totalSubjects=new Set(rows.map(r=>r.subject)).size;
  const totalRooms=new Set(rows.map(r=>r.roomNo).filter(Boolean)).size;
  const totalCredits=rows.reduce((s,r)=>s+Number((r.creditBreakdown||{}).grandTotal||r.totalCredits||0),0);
  const totalSections=rows.reduce((s,r)=>s+(r.assignment&&r.assignment.sections?r.assignment.sections.length:0),0);
  const totalSS=rows.reduce((s,r)=>s+Number((r.creditBreakdown||{}).ssTotal||0),0);
  const totalSssd=rows.reduce((s,r)=>s+Number((r.creditBreakdown||{}).sssdTotal||0),0);
  const ibdpTeachers=new Set(rows.filter(r=>{
    const s=[...((r.assignment&&r.assignment.sections)||[]),...((r.assignment&&r.assignment.studySupport)||[]),...((r.assignment&&r.assignment.sssd)||[])];
    return s.some(isIBSection)||IBDP_SUBJECTS.includes(r.subject);
  }).map(r=>r.teacherName)).size;
  const byTeacherForPreps={};rows.forEach(r=>{if(!byTeacherForPreps[r.teacherName])byTeacherForPreps[r.teacherName]=[];byTeacherForPreps[r.teacherName].push(r);});
  const totalPrepsAll=Object.values(byTeacherForPreps).reduce((s,recs)=>s+calcTotalPreparationsForTeacher(recs),0);
  const avgPreps=Object.keys(byTeacherForPreps).length?Math.round(totalPrepsAll/Object.keys(byTeacherForPreps).length*10)/10:0;
  setHTML('r3StatCards',[
    {label:'Total Teachers',value:totalTeachers,sub:'in filtered data',color:'#163a63'},
    {label:'Subjects Assigned',value:totalSubjects,sub:'unique subjects',color:'#2563a8'},
    {label:'Total Credits',value:totalCredits,sub:'teaching + support',color:'#2fb07d'},
    {label:'Total Sections',value:totalSections,sub:'teaching sections',color:'#4a90d9'},
    {label:'Study Support Cr.',value:totalSS,sub:'SS credits',color:'#f59e0b'},
    {label:'SSSD Credits',value:totalSssd,sub:'SSSD credits',color:'#8b5cf6'},
    {label:'Rooms Used',value:totalRooms,sub:'unique rooms',color:'#ef4444'},
    {label:'IBDP Teachers',value:ibdpTeachers,sub:'teaching IBDP',color:'#6d28d9'},
  ].map(c=>'<div class="r3-stat-card"><div class="r3-label">'+esc(c.label)+'</div><div class="r3-value" style="color:'+c.color+'">'+esc(c.value)+'</div><div class="r3-sub">'+esc(c.sub)+'</div></div>').join(''));
}

function r3ColHeader(){
  return'<div class="r3-col-header"><span>Subject</span><span>Sections</span><span>KG/PS</span><span>Gr1-5</span><span>Gr6-12</span><span>Teaching</span><span>SS</span><span>SSSD</span><span>Total</span></div>';
}
function r3SubjectRow(rec,indent){
  const bd=rec.creditBreakdown||{kgTotal:0,esTotal:0,hsTotal:0,teachingTotal:0,ssTotal:0,sssdTotal:0,grandTotal:rec.totalCredits||0};
  const sections=(rec.assignment&&rec.assignment.sections||[]).join(', ')||'—';
  const isIbdp=IBDP_SUBJECTS.includes(rec.subject);
  return'<div class="r3-subject-row"><div class="r3-subject-name">'+(indent?'<span style="color:var(--muted);margin-right:6px;">└</span>':'')+esc(rec.subject)+(isIbdp?'<span class="r3-ibdp-badge">IB</span>':'')+'</div>'
    +'<div class="r3-cell" style="text-align:left;font-size:12px;color:var(--muted);">'+esc(sections)+'</div>'
    +'<div class="r3-cell">'+esc(bd.kgTotal||'—')+'</div>'
    +'<div class="r3-cell">'+esc(bd.esTotal||'—')+'</div>'
    +'<div class="r3-cell">'+esc(bd.hsTotal||'—')+'</div>'
    +'<div class="r3-cell bold">'+esc(bd.teachingTotal||0)+'</div>'
    +'<div class="r3-cell">'+esc(bd.ssTotal||'—')+'</div>'
    +'<div class="r3-cell">'+esc(bd.sssdTotal||'—')+'</div>'
    +'<div class="r3-cell bold" style="color:var(--navy);">'+esc(bd.grandTotal||0)+'</div>'
    +'</div>';
}

function r3RenderOverview(rows){
  if(!rows.length){return'<div class="r3-no-data">No saved records match your filters. Save assignments in Step 2B first.</div>';}
  // group by teacher
  const byTeacher={};
  rows.forEach(r=>{if(!byTeacher[r.teacherName])byTeacher[r.teacherName]=[];byTeacher[r.teacherName].push(r);});
  return Object.keys(byTeacher).sort().map(teacher=>{
    const recs=byTeacher[teacher];
    const totKG=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).kgTotal||0),0);
    const totES=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).esTotal||0),0);
    const totHS=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).hsTotal||0),0);
    const totSS=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).ssTotal||0),0);
    const totSssd=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).sssdTotal||0),0);
    const grand=totKG+totES+totHS+totSS+totSssd;
    const r0=recs[0];
    return'<div class="r3-teacher-card">'
      +'<div class="r3-teacher-head"><div><div class="r3-teacher-name">👤 '+esc(teacher)+'</div><div class="r3-teacher-meta">'+esc(r0.campus||'')+(r0.roomNo?' · Room '+esc(r0.roomNo):'')+(r0.teacherStatus?' · '+esc(r0.teacherStatus):'')+'</div></div><div class="r3-credit-badge">'+esc(grand)+' credits</div></div>'
      +r3ColHeader()
      +recs.map(r=>r3SubjectRow(r,true)).join('')
      +'<div class="r3-subject-row subtotal"><div class="r3-subject-name">Subtotal</div><div></div>'
      +'<div class="r3-cell bold">'+esc(totKG||'—')+'</div><div class="r3-cell bold">'+esc(totES||'—')+'</div><div class="r3-cell bold">'+esc(totHS||'—')+'</div>'
      +'<div class="r3-cell bold">'+esc(totKG+totES+totHS)+'</div><div class="r3-cell bold">'+esc(totSS||'—')+'</div><div class="r3-cell bold">'+esc(totSssd||'—')+'</div>'
      +'<div class="r3-cell bold" style="font-size:15px;color:var(--navy);">'+esc(grand)+'</div></div>'
      +'</div>';
  }).join('');
}

function r3RenderTeacherLoad(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  const byTeacher={};
  rows.forEach(r=>{if(!byTeacher[r.teacherName])byTeacher[r.teacherName]=[];byTeacher[r.teacherName].push(r);});
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#f8fbff;"><th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Teacher</th><th style="padding:12px 14px;text-align:left;">Campus</th><th style="padding:12px 14px;text-align:left;">Room</th><th style="padding:12px 14px;text-align:left;">Status</th><th style="padding:12px 14px;text-align:left;">Subjects</th><th style="padding:12px 14px;text-align:center;">KG/PS</th><th style="padding:12px 14px;text-align:center;">Gr1-5</th><th style="padding:12px 14px;text-align:center;">Gr6-12</th><th style="padding:12px 14px;text-align:center;">Teaching</th><th style="padding:12px 14px;text-align:center;">SS</th><th style="padding:12px 14px;text-align:center;">SSSD</th><th style="padding:12px 14px;text-align:center;font-weight:800;">Total</th><th style="padding:12px 14px;text-align:center;background:#fff7ed;color:#92400e;">📝 Preps</th><th style="padding:12px 14px;text-align:center;">Planning</th><th style="padding:12px 14px;text-align:center;">Recess</th><th style="padding:12px 14px;text-align:center;">Proctoring</th></tr></thead><tbody>';
  Object.keys(byTeacher).sort().forEach(teacher=>{
    const recs=byTeacher[teacher];const r0=recs[0];
    const totKG=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).kgTotal||0),0);
    const totES=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).esTotal||0),0);
    const totHS=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).hsTotal||0),0);
    const totSS=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).ssTotal||0),0);
    const totSssd=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).sssdTotal||0),0);
    const grand=totKG+totES+totHS+totSS+totSssd;
    const preps=calcTotalPreparationsForTeacher(recs);
    const subs=recs.map(r=>r.subject).join(', ');
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:12px 14px;font-weight:800;color:var(--navy);">'+esc(teacher)+'</td>'
      +'<td style="padding:12px 14px;font-size:13px;">'+esc(r0.campus||'—')+'</td>'
      +'<td style="padding:12px 14px;font-size:13px;">'+esc(r0.roomNo||'—')+'</td>'
      +'<td style="padding:12px 14px;font-size:13px;">'+esc(r0.teacherStatus||'—')+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc(subs)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(totKG||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(totES||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(totHS||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(totKG+totES+totHS)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(totSS||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(totSssd||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:800;color:var(--navy);font-size:15px;">'+esc(grand)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:800;color:#92400e;background:#fffbf0;">'+esc(preps)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(r0.planningPeriods||0)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(r0.recessDuty||0)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;">'+esc(r0.proctoringDuty||0)+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

function r3RenderSubjectLoad(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  const bySubject={};
  rows.forEach(r=>{if(!bySubject[r.subject])bySubject[r.subject]={teachers:[],totalCredits:0,isIbdp:IBDP_SUBJECTS.includes(r.subject)};bySubject[r.subject].teachers.push(r.teacherName);bySubject[r.subject].totalCredits+=Number((r.creditBreakdown||{}).grandTotal||r.totalCredits||0);});
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#f8fbff;"><th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Subject</th><th>Type</th><th>Teachers</th><th style="text-align:center;">Teacher Count</th><th style="text-align:center;">Total Credits</th></tr></thead><tbody>';
  Object.keys(bySubject).sort().forEach(sub=>{
    const d=bySubject[sub];
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:12px 14px;font-weight:700;color:var(--navy);">'+esc(sub)+(d.isIbdp?'<span class="r3-ibdp-badge">IB</span>':'')+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;">'+esc(d.isIbdp?'IBDP':'Regular')+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc([...new Set(d.teachers)].join(', '))+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(new Set(d.teachers).size)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:800;color:var(--navy);">'+esc(d.totalCredits)+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

function r3RenderRoomList(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  const byRoom={};
  rows.forEach(r=>{const room=r.roomNo||'Unassigned';if(!byRoom[room])byRoom[room]=[];byRoom[room].push({teacher:r.teacherName,subject:r.subject});});
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#f8fbff;"><th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Room</th><th>Teacher / Subject</th><th style="text-align:center;">Count</th></tr></thead><tbody>';
  Object.keys(byRoom).sort().forEach(room=>{
    const items=byRoom[room];
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:12px 14px;font-weight:800;color:var(--navy);">'+esc(room)+'</td>'
      +'<td style="padding:12px 14px;font-size:13px;">'+items.map(i=>'<span style="display:inline-block;background:#f0f7ff;border:1px solid #c8def8;border-radius:6px;padding:2px 8px;margin:2px;font-size:12px;">'+esc(i.teacher)+' · '+esc(i.subject)+'</span>').join('')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(items.length)+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

function r3RenderDuty(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  const byTeacher={};
  rows.forEach(r=>{if(!byTeacher[r.teacherName])byTeacher[r.teacherName]=r;});
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#f8fbff;"><th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Teacher</th><th>Campus</th><th style="text-align:center;">Planning Periods</th><th style="text-align:center;">Recess Duty</th><th style="text-align:center;">Proctoring Duty</th><th>Status</th><th>Positions</th></tr></thead><tbody>';
  Object.keys(byTeacher).sort().forEach(teacher=>{
    const r=byTeacher[teacher];
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:12px 14px;font-weight:800;color:var(--navy);">'+esc(teacher)+'</td>'
      +'<td style="padding:12px 14px;">'+esc(r.campus||'—')+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(r.planningPeriods||0)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(r.recessDuty||0)+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(r.proctoringDuty||0)+'</td>'
      +'<td style="padding:12px 14px;">'+esc(r.teacherStatus||'—')+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc((r.positions||[]).join(', ')||'—')+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

function r3RenderIbdp(rows){
  const ibdpRows=rows.filter(r=>IBDP_SUBJECTS.includes(r.subject));
  if(!ibdpRows.length)return'<div class="r3-no-data">No IBDP assignments found. Set up IBDP in Step 2 Credit Master first.</div>';
  return r3RenderOverview(ibdpRows);
}

function r3RenderSectionCoverage(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  // Build section → subjects/teachers map
  const bySec={};
  rows.forEach(r=>{
    (r.assignment&&r.assignment.sections||[]).forEach(sec=>{
      if(!bySec[sec])bySec[sec]={grade:SEC_TO_GRADE[sec]||'?',subjects:[],teachers:[]};
      bySec[sec].subjects.push(r.subject);bySec[sec].teachers.push(r.teacherName);
    });
  });
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#f8fbff;"><th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Section</th><th>Grade</th><th>Subjects Covered</th><th>Teachers</th><th style="text-align:center;">Subject Count</th></tr></thead><tbody>';
  Object.keys(bySec).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).forEach(sec=>{
    const d=bySec[sec];
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:12px 14px;font-weight:800;color:var(--navy);">'+esc(sec)+'</td>'
      +'<td style="padding:12px 14px;font-size:13px;">'+esc(d.grade)+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;">'+[...new Set(d.subjects)].map(s=>'<span style="display:inline-block;background:#f0f7ff;border:1px solid #c8def8;border-radius:6px;padding:2px 7px;margin:2px;font-size:11px;">'+esc(s)+'</span>').join('')+'</td>'
      +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc([...new Set(d.teachers)].join(', '))+'</td>'
      +'<td style="padding:12px 14px;text-align:center;font-weight:700;">'+esc(new Set(d.subjects).size)+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

function r3RenderPreps(rows){
  if(!rows.length)return'<div class="r3-no-data">No data.</div>';
  const byTeacher={};
  rows.forEach(r=>{if(!byTeacher[r.teacherName])byTeacher[r.teacherName]=[];byTeacher[r.teacherName].push(r);});
  let html='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
  html+='<thead><tr style="background:#fff7ed;">'
    +'<th style="padding:12px 14px;text-align:left;font-size:12px;color:#92400e;text-transform:uppercase;border-bottom:2px solid #fed7aa;">Teacher</th>'
    +'<th style="padding:12px 14px;text-align:left;color:#92400e;">Campus</th>'
    +'<th style="padding:12px 14px;text-align:left;color:#92400e;">Subject</th>'
    +'<th style="padding:12px 14px;text-align:left;color:#92400e;">Sections Assigned</th>'
    +'<th style="padding:12px 14px;text-align:left;color:#92400e;">Prep Groups</th>'
    +'<th style="padding:12px 14px;text-align:center;color:#92400e;">Preps (this subject)</th>'
    +'<th style="padding:12px 14px;text-align:center;font-weight:800;color:#92400e;">Total Preps (teacher)</th>'
    +'</tr></thead><tbody>';
  Object.keys(byTeacher).sort().forEach(teacher=>{
    const recs=byTeacher[teacher];
    const totalPreps=calcTotalPreparationsForTeacher(recs);
    recs.forEach((rec,i)=>{
      const secs=(rec.assignment&&rec.assignment.sections)||[];
      const ss=(rec.assignment&&rec.assignment.studySupport)||[];
      const sssd=(rec.assignment&&rec.assignment.sssd)||[];
      const allSecs=[...secs,...ss,...sssd];
      const subjectPreps=calcPreparations(allSecs);
      // Show unique prep group names
      const groups=[...new Set(allSecs.map(getSectionPrepGroup))].sort();
      html+='<tr style="border-bottom:1px solid #fde8c8;">'
        +(i===0?'<td style="padding:12px 14px;font-weight:800;color:var(--navy);" rowspan="'+recs.length+'">'+esc(teacher)+'</td>'
                +'<td style="padding:12px 14px;font-size:13px;" rowspan="'+recs.length+'">'+esc(recs[0].campus||'—')+'</td>'
               :'')
        +'<td style="padding:12px 14px;font-size:13px;font-weight:700;">'+esc(rec.subject)+'</td>'
        +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc(allSecs.join(', ')||'—')+'</td>'
        +'<td style="padding:12px 14px;">'
        +groups.map(g=>'<span style="display:inline-block;background:#fff7ed;border:1px solid #fed7aa;border-radius:5px;padding:2px 7px;font-size:11px;font-weight:700;color:#92400e;margin:2px;">'+esc(g)+'</span>').join('')
        +'</td>'
        +'<td style="padding:12px 14px;text-align:center;font-weight:700;color:#92400e;font-size:15px;">'+esc(subjectPreps)+'</td>'
        +(i===0?'<td style="padding:12px 14px;text-align:center;font-weight:800;color:#fff;background:#92400e;font-size:16px;" rowspan="'+recs.length+'">'+esc(totalPreps)+'</td>':'')
        +'</tr>';
    });
  });
  html+='</tbody></table></div>';
  return html;
}
// ---- Helpers ----
// Class-level sections (for advisor assignment — one per class, not per subject level)
const CLASS_LEVEL_SECTIONS_11_12=['11A','11B','11C','11D','11E','11F','11GAP','12A','12B','12C','12D','12E','12FIB','12F','12GAP'];
function isClassLevelSection(sec){return CLASS_LEVEL_SECTIONS_11_12.includes(sec)||!/^1[12]/.test(sec);}
function isIBSection(sec){return /11F(-HL|-SL|$)|12F(-HL|-SL|$)/i.test(sec);}
function isAPSection(sec){return /11GAP|12GAP|11GAP-AP|12GAP-AP/i.test(sec);}
function getAllSections(){
  const s=new Set();
  Object.values(GRADES).forEach(secs=>secs.forEach(sec=>s.add(sec)));
  return [...s].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
}

// ---- Fixed IB/AP Report ----
function r3RenderIbdp(rows){
  // IB = any teacher with a section matching 11F/12F; AP = 11G/12G/GAP
  const ibTeachers=new Set();
  const apTeachers=new Set();
  rows.forEach(r=>{
    const allSecs=[...((r.assignment&&r.assignment.sections)||[]),...((r.assignment&&r.assignment.studySupport)||[]),...((r.assignment&&r.assignment.sssd)||[])];
    if(allSecs.some(isIBSection))ibTeachers.add(r.teacherName);
    if(allSecs.some(isAPSection))apTeachers.add(r.teacherName);
  });
  const ibRows=rows.filter(r=>ibTeachers.has(r.teacherName));
  const apRows=rows.filter(r=>apTeachers.has(r.teacherName));
  let html='';
  if(ibRows.length){
    html+='<div class="r3-section-title" style="color:#6d28d9;">🎓 IB Teachers (11F / 12F — HL & SL)</div>';
    html+=r3RenderOverview(ibRows);
  }
  if(apRows.length){
    html+='<div class="r3-section-title" style="color:#b45309;margin-top:20px;">🏅 AP / GAP Teachers (11G / 12G / GAP)</div>';
    html+=r3RenderOverview(apRows);
  }
  if(!ibRows.length&&!apRows.length)html='<div class="r3-no-data">No IB or AP teachers found in filtered data.</div>';
  return html;
}

// ---- Class Report ----
function r3RenderClassReport(rows){
  // All sections — for Gr11/12 show class-level + subject-level separately
  const allSecs=getAllSections();
  const selSec=r3State.classSection||'';
  // Build dropdown HTML (returned inline, rendered via setHTML)
  const ddHtml='<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end;margin-bottom:18px;">'
    +'<div class="field" style="min-width:180px;">'
    +'<label>Select Section</label>'
    +'<select id="classReportSectionPick" onchange="r3State.classSection=this.value;r3Render();">'
    +'<option value="">— Choose section —</option>'
    +allSecs.map(s=>'<option value="'+esc(s)+'"'+(selSec===s?' selected':'')+'>'+esc(s)+'</option>').join('')
    +'</select></div></div>';
  if(!selSec)return ddHtml+'<div class="r3-no-data">Select a section to see the class report.</div>';
  // Find all records whose sections include selSec
  const matched=rows.filter(r=>{
    const allSecs2=[...((r.assignment&&r.assignment.sections)||[]),...((r.assignment&&r.assignment.studySupport)||[]),...((r.assignment&&r.assignment.sssd)||[])];
    return allSecs2.includes(selSec);
  });
  const advisor=classAdvisors[selSec]||'—';
  let html=ddHtml;
  html+='<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding:14px 18px;background:linear-gradient(135deg,#163a63,#2563a8);color:#fff;border-radius:14px;">'
    +'<div style="font-size:22px;font-weight:900;">🏫 '+esc(selSec)+'</div>'
    +'<div style="margin-left:auto;text-align:right;"><div style="font-size:11px;opacity:.8;">Class Advisor</div>'
    +'<div style="font-size:14px;font-weight:800;">'+esc(advisor)+'</div></div></div>';
  if(!matched.length)return html+'<div class="r3-no-data">No teachers assigned to '+esc(selSec)+' yet.</div>';
  html+='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">'
    +'<thead><tr style="background:#f8fbff;">'
    +'<th style="padding:11px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">#</th>'
    +'<th style="padding:11px 14px;text-align:left;">Subject</th>'
    +'<th style="padding:11px 14px;text-align:left;">Teacher</th>'
    +'<th style="padding:11px 14px;text-align:left;">Room</th>'
    +'<th style="padding:11px 14px;text-align:center;">Type</th>'
    +'<th style="padding:11px 14px;text-align:center;">Credits</th>'
    +'</tr></thead><tbody>';
  matched.forEach((r,i)=>{
    const isIbdp=IBDP_SUBJECTS.includes(r.subject);
    const isIB=((r.assignment&&r.assignment.sections)||[]).some(isIBSection);
    const bd=r.creditBreakdown||{};
    html+='<tr style="border-bottom:1px solid #ebeff5;">'
      +'<td style="padding:10px 14px;color:var(--muted);font-size:12px;">'+(i+1)+'</td>'
      +'<td style="padding:10px 14px;font-weight:700;color:var(--navy);">'+esc(r.subject)+(isIbdp||isIB?'<span style="background:#ede9fe;color:#6d28d9;border-radius:4px;padding:1px 6px;font-size:10px;margin-left:4px;">IB</span>':'')+'</td>'
      +'<td style="padding:10px 14px;font-weight:700;">'+esc(r.teacherName)+'</td>'
      +'<td style="padding:10px 14px;font-size:13px;">'+esc(r.roomNo||'—')+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-size:12px;">'+esc(isIbdp||isIB?'IBDP':'Regular')+'</td>'
      +'<td style="padding:10px 14px;text-align:center;font-weight:700;color:var(--navy);">'+esc(bd.grandTotal||0)+'</td>'
      +'</tr>';
  });
  html+='</tbody></table></div>';
  return html;
}

// ---- Class Advisor Manager ----
function r3RenderAdvisorManager(rows){
  // Show only class-level sections (not subject-split sections like 11F-HL, 11F-SL, 11GAP-AP)
  const allSecs=getAllSections().filter(isClassLevelSection);
  let html='<div style="margin-bottom:18px;"><div class="r3-section-title">🧑‍🏫 Assign Class Advisor per Section</div>'
    +'<div class="tiny" style="margin-bottom:12px;">Assign one teacher as Class Advisor per class section. Note: 11F and 12F represent the whole IB class; 11GAP and 12GAP represent the whole AP/GAP class.</div></div>'
    +'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;">';
  const teachers=teacherNames.slice().sort();
  allSecs.forEach(sec=>{
    const cur=classAdvisors[sec]||'';
    const isIB=/^1[12]F$/.test(sec);
    const isAP=/^1[12]GAP$/.test(sec);
    const badge=isIB?'<span style="background:#ede9fe;color:#6d28d9;border-radius:4px;padding:1px 5px;font-size:10px;margin-left:4px;">IB</span>'
                :isAP?'<span style="background:#fef3c7;color:#92400e;border-radius:4px;padding:1px 5px;font-size:10px;margin-left:4px;">AP</span>':'';
    html+='<div style="background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 14px;">'
      +'<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:6px;">'+esc(sec)+badge+'</div>'
      +'<select style="width:100%;padding:6px 8px;border-radius:6px;border:1px solid var(--line);font-size:12px;" onchange="classAdvisors[\''+esc(sec)+'\']=this.value;saveToLocalStorage();showToast(\'Advisor set: \'+this.value+\' → '+esc(sec)+'\');">'
      +'<option value="">— No Advisor —</option>'
      +teachers.map(t=>'<option value="'+esc(t)+'"'+(cur===t?' selected':'')+'>'+esc(t)+'</option>').join('')
      +'</select></div>';
  });
  html+='</div>';
  return html;
}

// ---- Coordinator Report ----
// ============================================================
// COORDINATOR REPORT — 3 reports in one tab
// Auto-detects coordinators from position containing "Coordinator"
// Their coordinator subject = the subject(s) they teach
// ============================================================
function getCoordinators(){
  // Returns [{teacher, positions, subjects, coordSubjects}]
  // A coordinator is a teacher whose position includes "Coordinator"
  const result=[];
  teacherNames.forEach(t=>{
    const pos=teacherStatusMap[t+'_positions']||(database.find(r=>r.teacherName===t)?.positions)||[];
    const isCoord=pos.some(p=>p.toLowerCase().includes('coordinator'));
    if(!isCoord)return;
    const taughtSubjects=[...new Set(database.filter(r=>r.teacherName===t).map(r=>r.subject))];
    result.push({teacher:t,positions:pos,subjects:taughtSubjects});
  });
  return result;
}
function getCoordinatorFromDatabase(){
  // Build coordinator list from saved database records (positions stored on record)
  const coordMap={};// teacher → {positions, subjects[]}
  database.forEach(r=>{
    if(!r.positions||!r.positions.length)return;
    if(!r.positions.some(p=>p.toLowerCase().includes('coordinator')))return;
    if(!coordMap[r.teacherName])coordMap[r.teacherName]={positions:r.positions,subjects:new Set()};
    coordMap[r.teacherName].subjects.add(r.subject);
  });
  return Object.entries(coordMap).map(([t,d])=>({teacher:t,positions:d.positions,subjects:[...d.subjects]}));
}

function r3RenderCoordinatorReport(rows){
  const allSubjectsInDB=[...new Set(database.map(r=>r.subject))].sort();
  const coordList=getCoordinatorFromDatabase();
  const coordTab=r3State.coordTab||'summary';

  // ── Tab bar ──
  let html='<div style="display:flex;gap:0;border-bottom:2px solid var(--line);background:#fff;margin-bottom:18px;overflow-x:auto;">';
  [['summary','📊 Coordinator Summary'],['bycoord','📌 By Coordinator'],['bysubject','📚 Subject-wise Report']].forEach(([key,label])=>{
    html+='<button type="button" onclick="r3State.coordTab=\''+key+'\';r3Render();" style="padding:10px 18px;font-size:13px;font-weight:700;border:none;cursor:pointer;white-space:nowrap;border-bottom:3px solid '+(coordTab===key?'var(--blue)':'transparent')+';background:'+( coordTab===key?'#fff':'transparent')+';color:'+(coordTab===key?'var(--navy)':'var(--muted)')+';">'+label+'</button>';
  });
  html+='</div>';

  // ══════════════════════════════════════════
  // REPORT 1 — COORDINATOR SUMMARY
  // ══════════════════════════════════════════
  if(coordTab==='summary'){
    if(!coordList.length)return html+'<div class="r3-no-data">No coordinators found. Assign a position containing "Coordinator" to teachers in Step 1, then save their assignments.</div>';
    html+='<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">';
    html+='<thead><tr style="background:#f8fbff;">'
      +'<th style="padding:12px 14px;text-align:left;font-size:12px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Coordinator</th>'
      +'<th style="padding:12px 14px;text-align:left;">Position</th>'
      +'<th style="padding:12px 14px;text-align:left;">Subject(s)</th>'
      +'<th style="padding:12px 14px;text-align:center;">Teachers Under</th>'
      +'<th style="padding:12px 14px;text-align:center;">Own Periods</th>'
      +'<th style="padding:12px 14px;text-align:center;">Own Preps</th>'
      +'<th style="padding:12px 14px;text-align:left;">Grade Levels</th>'
      +'<th style="padding:12px 14px;text-align:left;">Sections Teaching</th>'
      +'</tr></thead><tbody>';
    coordList.forEach(c=>{
      const ownRecs=database.filter(r=>r.teacherName===c.teacher);
      const ownPeriods=ownRecs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).grandTotal||0),0);
      const ownPreps=calcTotalPreparationsForTeacher(ownRecs);
      const ownSections=[...new Set(ownRecs.flatMap(r=>(r.assignment&&r.assignment.sections)||[]))];
      const gradeLevels=[...new Set(ownSections.map(s=>SEC_TO_GRADE[s]).filter(Boolean))];
      // Count teachers under this coordinator (same subjects)
      const underTeachers=new Set();
      c.subjects.forEach(sub=>{
        database.filter(r=>r.subject===sub&&r.teacherName!==c.teacher).forEach(r=>underTeachers.add(r.teacherName));
      });
      const posLabel=c.positions.filter(p=>p.toLowerCase().includes('coordinator')).join(', ')||'—';
      html+='<tr style="border-bottom:1px solid #ebeff5;">'
        +'<td style="padding:12px 14px;font-weight:800;color:var(--navy);">'+esc(c.teacher)+'</td>'
        +'<td style="padding:12px 14px;font-size:12px;color:#6d28d9;">'+esc(posLabel)+'</td>'
        +'<td style="padding:12px 14px;font-size:12px;font-weight:700;">'+esc(c.subjects.join(', ')||'—')+'</td>'
        +'<td style="padding:12px 14px;text-align:center;font-weight:800;color:var(--navy);">'+esc(underTeachers.size)+'</td>'
        +'<td style="padding:12px 14px;text-align:center;font-weight:700;color:#2563a8;">'+esc(ownPeriods)+'</td>'
        +'<td style="padding:12px 14px;text-align:center;font-weight:700;color:#92400e;">'+esc(ownPreps)+'</td>'
        +'<td style="padding:12px 14px;font-size:12px;color:var(--muted);">'+esc([...new Set(gradeLevels)].join(', ')||'—')+'</td>'
        +'<td style="padding:12px 14px;font-size:11px;color:var(--muted);max-width:200px;">'+esc(ownSections.join(', ')||'—')+'</td>'
        +'</tr>';
    });
    html+='</tbody></table></div>';
    return html;
  }

  // ══════════════════════════════════════════
  // REPORT 2 — BY COORDINATOR
  // ══════════════════════════════════════════
  if(coordTab==='bycoord'){
    if(!coordList.length)return html+'<div class="r3-no-data">No coordinators found. Assign a "Coordinator" position in Step 1 and save.</div>';
    const selCoord=r3State.selCoord||'';
    html+='<div class="field" style="max-width:280px;margin-bottom:18px;">'
      +'<label>Select Coordinator</label>'
      +'<select onchange="r3State.selCoord=this.value;r3Render();">'
      +'<option value="">— Choose coordinator —</option>'
      +coordList.map(c=>'<option value="'+esc(c.teacher)+'"'+(selCoord===c.teacher?' selected':'')+'>'+esc(c.teacher)+' ('+esc(c.subjects.join(', '))+')</option>').join('')
      +'</select></div>';
    if(!selCoord)return html+'<div class="r3-no-data">Select a coordinator above.</div>';
    const coord=coordList.find(c=>c.teacher===selCoord);
    if(!coord)return html+'<div class="r3-no-data">Coordinator not found.</div>';

    // Count all unique teachers under this coordinator (across all their subjects, excluding themselves)
    const allUnderTeachers=new Set();
    coord.subjects.forEach(sub=>{
      database.filter(r=>r.subject===sub&&r.teacherName!==selCoord).forEach(r=>allUnderTeachers.add(r.teacherName));
    });
    const underCount=allUnderTeachers.size;

    // Coordinator's own load stats
    const ownRecs=database.filter(r=>r.teacherName===selCoord);
    const ownSecs=[...new Set(ownRecs.flatMap(r=>(r.assignment&&r.assignment.sections)||[]))];
    const ownGrades=[...new Set(ownSecs.map(s=>SEC_TO_GRADE[s]).filter(Boolean))];
    const ownPeriods=ownRecs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).grandTotal||0),0);
    const ownPreps=calcTotalPreparationsForTeacher(ownRecs);
    const ownSubjects=[...new Set(ownRecs.map(r=>r.subject))];

    // ── HEADER ──
    html+='<div style="background:linear-gradient(135deg,#163a63,#2563a8);color:#fff;padding:20px 24px;border-radius:16px;margin-bottom:20px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">'
      +'<div>'
      +'<div style="font-size:20px;font-weight:900;">📌 '+esc(selCoord)+'</div>'
      +'<div style="font-size:12px;opacity:.8;margin-top:4px;">'+esc(coord.positions.filter(p=>p.toLowerCase().includes('coordinator')).join(' · '))+'</div>'
      +'<div style="font-size:13px;opacity:.9;margin-top:2px;">Subject(s): <strong>'+esc(coord.subjects.join(', '))+'</strong></div>'
      +'</div>'
      +'<div style="display:flex;gap:10px;flex-wrap:wrap;">'
      +'<div style="background:rgba(255,255,255,.15);border-radius:12px;padding:10px 16px;text-align:center;">'
      +'<div style="font-size:28px;font-weight:900;">'+esc(underCount)+'</div>'
      +'<div style="font-size:11px;opacity:.85;">Teachers Under</div>'
      +'</div>'
      +'<div style="background:rgba(255,255,255,.15);border-radius:12px;padding:10px 16px;text-align:center;">'
      +'<div style="font-size:28px;font-weight:900;">'+esc(ownPeriods)+'</div>'
      +'<div style="font-size:11px;opacity:.85;">Own Periods</div>'
      +'</div>'
      +'<div style="background:rgba(255,255,255,.15);border-radius:12px;padding:10px 16px;text-align:center;">'
      +'<div style="font-size:28px;font-weight:900;">'+esc(ownPreps)+'</div>'
      +'<div style="font-size:11px;opacity:.85;">Own Preps</div>'
      +'</div>'
      +'</div>'
      +'</div>';

    // ── TEACHERS TABLE per subject ──
    coord.subjects.forEach(sub=>{
      const subRows=database.filter(r=>r.subject===sub);
      const subTeacherCount=[...new Set(subRows.map(r=>r.teacherName))].length;
      html+='<div style="font-size:13px;font-weight:800;color:var(--navy);border-left:4px solid var(--blue);padding-left:10px;margin:16px 0 8px;">📘 '+esc(sub)+'<span style="font-weight:400;color:var(--muted);font-size:12px;margin-left:8px;">'+subTeacherCount+' teacher'+(subTeacherCount!==1?'s':'')+'</span></div>';
      if(!subRows.length){html+='<div class="r3-no-data">No teachers assigned to this subject yet.</div>';return;}
      const byT={};subRows.forEach(r=>{if(!byT[r.teacherName])byT[r.teacherName]=[];byT[r.teacherName].push(r);});
      html+='<table style="width:100%;border-collapse:collapse;margin-bottom:8px;">'
        +'<thead><tr style="background:#f8fbff;">'
        +'<th style="padding:9px 12px;text-align:left;font-size:11px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">#</th>'
        +'<th style="padding:9px 12px;text-align:left;">Teacher</th>'
        +'<th style="padding:9px 12px;text-align:left;">Sections</th>'
        +'<th style="padding:9px 12px;text-align:center;">Credits</th>'
        +'<th style="padding:9px 12px;text-align:center;">Preps</th>'
        +'<th style="padding:9px 12px;text-align:left;">Grade Levels</th>'
        +'</tr></thead><tbody>';
      let idx=0;
      Object.keys(byT).sort().forEach(t=>{
        idx++;
        const recs=byT[t];
        const secs=[...new Set(recs.flatMap(r=>(r.assignment&&r.assignment.sections)||[]))];
        const grades=[...new Set(secs.map(s=>SEC_TO_GRADE[s]).filter(Boolean))];
        const credits=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).grandTotal||0),0);
        const preps=calcTotalPreparationsForTeacher(recs);
        const isCoord=(t===selCoord);
        html+='<tr style="border-bottom:1px solid #ebeff5;'+(isCoord?'background:#f0fdf4;':'')+';">'
          +'<td style="padding:9px 12px;color:var(--muted);font-size:12px;">'+idx+'</td>'
          +'<td style="padding:9px 12px;font-weight:800;color:var(--navy);">'+esc(t)+(isCoord?'&nbsp;<span style="background:#dcfce7;color:#166534;border-radius:4px;padding:1px 5px;font-size:10px;">Coordinator</span>':'')+'</td>'
          +'<td style="padding:9px 12px;font-size:11px;color:var(--muted);">'+esc(secs.join(', ')||'—')+'</td>'
          +'<td style="padding:9px 12px;text-align:center;font-weight:700;">'+esc(credits)+'</td>'
          +'<td style="padding:9px 12px;text-align:center;font-weight:700;color:#92400e;">'+esc(preps)+'</td>'
          +'<td style="padding:9px 12px;font-size:11px;color:var(--muted);">'+esc(grades.join(', ')||'—')+'</td>'
          +'</tr>';
      });
      html+='</tbody></table>';
    });

    // ── FOOTER — Own Teaching Load ──
    if(ownRecs.length){
      html+='<div style="margin-top:24px;border:2px solid var(--line);border-radius:16px;overflow:hidden;">'
        +'<div style="background:#f8fbff;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;">'
        +'<div style="font-size:14px;font-weight:800;color:var(--navy);">👤 '+esc(selCoord)+' — Own Teaching Load</div>'
        +'<div style="font-size:12px;color:var(--muted);">'+ownSubjects.length+' subject'+(ownSubjects.length!==1?'s':'')+' · '+ownRecs.length+' assignment'+(ownRecs.length!==1?'s':'')+'</div>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:0;border-bottom:1px solid var(--line);">'
        +[
          ['Own Periods',ownPeriods,'#2563a8'],
          ['Own Preps',ownPreps,'#92400e'],
          ['Sections',ownSecs.join(', ')||'—','#163a63'],
          ['Grade Levels',ownGrades.join(', ')||'—','#163a63'],
        ].map((item,i)=>'<div style="padding:12px 14px;border-right:1px solid var(--line);'+(i===1?'':'')+'"><div style="font-size:10px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">'+item[0]+'</div><div style="font-size:15px;font-weight:800;color:'+item[2]+';margin-top:4px;">'+esc(item[1])+'</div></div>').join('')
        +'</div>'
        +'<div style="padding:12px 16px;">'
        +ownRecs.map(r=>{
          const secs=(r.assignment&&r.assignment.sections)||[];
          const bd=r.creditBreakdown||{};
          return'<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f0f4f8;">'
            +'<span style="font-size:13px;font-weight:700;color:var(--navy);">'+esc(r.subject)+'</span>'
            +'<span style="font-size:11px;color:var(--muted);">'+esc(secs.join(', ')||'—')+'</span>'
            +'<span style="font-size:13px;font-weight:800;color:var(--navy);background:#f0f7ff;border-radius:6px;padding:2px 8px;">'+esc(bd.grandTotal||0)+' cr</span>'
            +'</div>';
        }).join('')
        +'</div></div>';
    }
    return html;
  }

  // ══════════════════════════════════════════
  // REPORT 3 — SUBJECT-WISE (multi-select)
  // ══════════════════════════════════════════
  if(coordTab==='bysubject'){
    if(!r3State.selSubjects)r3State.selSubjects=[];
    html+='<div style="background:#f8fbff;border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin-bottom:18px;">'
      +'<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:10px;">Select Subject(s) to print in one report</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:6px;">'
      +allSubjectsInDB.map(sub=>{
        const checked=r3State.selSubjects.includes(sub);
        return'<label style="display:flex;align-items:center;gap:5px;background:'+(checked?'#163a63':'#fff')+';color:'+(checked?'#fff':'var(--navy)')+';border:1px solid '+(checked?'#163a63':'var(--line)')+';border-radius:8px;padding:5px 12px;cursor:pointer;font-size:12px;font-weight:700;">'
          +'<input type="checkbox" style="display:none;" '+(checked?'checked':'')+' onchange="if(this.checked){if(!r3State.selSubjects.includes(\''+esc(sub)+'\'))r3State.selSubjects.push(\''+esc(sub)+'\');}else{r3State.selSubjects=r3State.selSubjects.filter(x=>x!==\''+esc(sub)+'\');}r3Render();">'+esc(sub)+'</label>';
      }).join('')
      +'</div>'
      +'<button type="button" onclick="r3State.selSubjects=[];r3Render();" style="margin-top:10px;background:none;border:none;color:var(--muted);cursor:pointer;font-size:12px;">✕ Clear selection</button>'
      +'</div>';
    const sel=r3State.selSubjects||[];
    if(!sel.length)return html+'<div class="r3-no-data">Select one or more subjects above to generate the combined report.</div>';
    // Header
    html+='<div style="background:linear-gradient(135deg,#163a63,#2563a8);color:#fff;padding:14px 18px;border-radius:12px;margin-bottom:16px;">'
      +'<div style="font-size:16px;font-weight:900;">📚 '+esc(sel.join(' + '))+' — Combined Teacher Report</div></div>';
    // Group by subject then by teacher
    sel.forEach(sub=>{
      const subRows=database.filter(r=>r.subject===sub);
      html+='<div class="r3-section-title" style="margin-top:16px;background:#f8fbff;padding:8px 12px;border-radius:8px;">📘 '+esc(sub)+'</div>';
      if(!subRows.length){html+='<div class="r3-no-data">No teachers assigned to '+esc(sub)+' yet.</div>';return;}
      const byT={};subRows.forEach(r=>{if(!byT[r.teacherName])byT[r.teacherName]=[];byT[r.teacherName].push(r);});
      html+='<table style="width:100%;border-collapse:collapse;margin-bottom:12px;">'
        +'<thead><tr style="background:#f8fbff;"><th style="padding:9px 12px;text-align:left;font-size:11px;color:var(--muted);text-transform:uppercase;border-bottom:2px solid var(--line);">Teacher</th><th>Sections</th><th style="text-align:center;">KG</th><th style="text-align:center;">ES</th><th style="text-align:center;">HS</th><th style="text-align:center;">Teaching</th><th style="text-align:center;">Preps</th><th>Grade Levels</th></tr></thead><tbody>';
      Object.keys(byT).sort().forEach(t=>{
        const recs=byT[t];
        const secs=[...new Set(recs.flatMap(r=>(r.assignment&&r.assignment.sections)||[]))];
        const grades=[...new Set(secs.map(s=>SEC_TO_GRADE[s]).filter(Boolean))];
        const kg=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).kgTotal||0),0);
        const es=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).esTotal||0),0);
        const hs=recs.reduce((s,r)=>s+Number((r.creditBreakdown||{}).hsTotal||0),0);
        const preps=calcTotalPreparationsForTeacher(recs);
        // Check if this teacher is a coordinator
        const coordPos=(recs[0].positions||[]).filter(p=>p.toLowerCase().includes('coordinator'));
        html+='<tr style="border-bottom:1px solid #ebeff5;">'
          +'<td style="padding:9px 12px;font-weight:800;color:var(--navy);">'+esc(t)+(coordPos.length?'&nbsp;<span style="background:#ede9fe;color:#6d28d9;border-radius:4px;padding:1px 5px;font-size:10px;">'+esc(coordPos[0])+'</span>':'')+'</td>'
          +'<td style="padding:9px 12px;font-size:11px;color:var(--muted);">'+esc(secs.join(', ')||'—')+'</td>'
          +'<td style="padding:9px 12px;text-align:center;">'+esc(kg||'—')+'</td>'
          +'<td style="padding:9px 12px;text-align:center;">'+esc(es||'—')+'</td>'
          +'<td style="padding:9px 12px;text-align:center;">'+esc(hs||'—')+'</td>'
          +'<td style="padding:9px 12px;text-align:center;font-weight:800;color:var(--navy);">'+esc(kg+es+hs)+'</td>'
          +'<td style="padding:9px 12px;text-align:center;font-weight:700;color:#92400e;">'+esc(preps)+'</td>'
          +'<td style="padding:9px 12px;font-size:11px;color:var(--muted);">'+esc(grades.join(', ')||'—')+'</td>'
          +'</tr>';
      });
      html+='</tbody></table>';
    });
    return html;
  }
  return html;
}

function r3Render(){
  r3RenderFilters();
  const rows=r3GetData();
  r3RenderStatCards(rows);
  let content='';
  if(r3State.tab==='overview')content=r3RenderOverview(rows);
  else if(r3State.tab==='teacher')content=r3RenderTeacherLoad(rows);
  else if(r3State.tab==='subject')content=r3RenderSubjectLoad(rows);
  else if(r3State.tab==='room')content=r3RenderRoomList(rows);
  else if(r3State.tab==='duty')content=r3RenderDuty(rows);
  else if(r3State.tab==='ibdp')content=r3RenderIbdp(rows);
  else if(r3State.tab==='sections')content=r3RenderSectionCoverage(rows);
  else if(r3State.tab==='preps')content=r3RenderPreps(rows);
  else if(r3State.tab==='classreport')content=r3RenderClassReport(rows);
  else if(r3State.tab==='advisor')content=r3RenderAdvisorManager(rows);
  else if(r3State.tab==='coordinator')content=r3RenderCoordinatorReport(rows);
  setHTML('r3ReportOutput',content);
}

function r3ExportCsv(){
  const rows=r3GetData();
  if(!rows.length){showToast('No data to export.');return;}
  const headers=['Teacher','Gender','Mobile','Email','Campus','Room','Status','Positions','Subject','Type','Sections','KG Credits','ES Credits','HS Credits','Teaching Total','SS Credits','SSSD Credits','Grand Total','Planning','Recess Duty','Proctoring','Saved At'];
  const csvRows=rows.map(r=>{
    const bd=r.creditBreakdown||{};
    return[r.teacherName,r.gender||'',r.mobile||'',r.email||'',r.campus,r.roomNo||'',r.teacherStatus,(r.positions||[]).join('; '),r.subject,IBDP_SUBJECTS.includes(r.subject)?'IBDP':'Regular',(r.assignment&&r.assignment.sections||[]).join('; '),bd.kgTotal||0,bd.esTotal||0,bd.hsTotal||0,bd.teachingTotal||0,bd.ssTotal||0,bd.sssdTotal||0,bd.grandTotal||r.totalCredits||0,r.planningPeriods||0,r.recessDuty||0,r.proctoringDuty||0,r.savedAt||''].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',');
  });
  const csv=[headers.join(','),...csvRows].join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='AIS_Teacher_Report.csv';a.click();URL.revokeObjectURL(url);
  showToast('CSV exported.');
}

function r3BindEvents(){
  el('r3ApplyBtn')?.addEventListener('click',()=>{
    r3State.campus=el('r3Campus')?el('r3Campus').value:'';
    r3State.teacher=el('r3Teacher')?el('r3Teacher').value:'';
    // Store selected subject value (group matching handled in subjectMatchesFilter)
    r3State.subject=el('r3Subject')?el('r3Subject').value:'';
    r3State.level=el('r3Level')?el('r3Level').value:'';
    r3Render();
  });
  el('r3ClearBtn')?.addEventListener('click',()=>{
    r3State.campus='';r3State.teacher='';r3State.subject='';r3State.level='';
    if(el('r3Campus'))el('r3Campus').value='';
    if(el('r3Teacher'))el('r3Teacher').value='';
    if(el('r3Subject'))el('r3Subject').value='';
    if(el('r3Level'))el('r3Level').value='';
    r3Render();
  });
  document.querySelectorAll('.r3-tab').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.r3-tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      r3State.tab=btn.dataset.r3tab;
      r3Render();
    });
  });
  el('printReportBtn')?.addEventListener('click',()=>window.print());
  el('exportCsvBtn')?.addEventListener('click',r3ExportCsv);
  el('exportJsonBtn2')?.addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(r3GetData(),null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='AIS_Teacher_Report.json';a.click();URL.revokeObjectURL(url);showToast('JSON exported.');
  });
}

// ---- LOGIN SYSTEM ----
const USERS = [
  { username: 'admin',   password: 'ais2026',  role: 'Admin',  label: '⚙️ Admin'   },
  { username: 'viewer',  password: 'view2026', role: 'Viewer', label: '👁 Viewer'  },
  { username: 'hod',     password: 'hod2026',  role: 'HOD',    label: '🏫 HOD'     },
];

let currentUser = null;

function showLoginOverlay(){
  const ov=el('loginOverlay');
  if(ov)ov.classList.remove('hidden');
}
function hideLoginOverlay(){
  const ov=el('loginOverlay');
  if(ov){ov.classList.add('hidden');}
}
function doLogin(){
  const user=(el('loginUser')?el('loginUser').value.trim():'');
  const pass=(el('loginPass')?el('loginPass').value:'');
  const match=USERS.find(u=>u.username===user&&u.password===pass);
  if(!match){
    const errEl=el('loginError');
    if(errEl){errEl.classList.add('show');setTimeout(()=>errEl.classList.remove('show'),3000);}
    if(el('loginPass'))el('loginPass').value='';
    return;
  }
  currentUser=match;
  // Store session for this browser tab
  try{sessionStorage.setItem('ais_session',JSON.stringify({username:match.username,role:match.role}));}catch(e){}
  applyRole(match.role);
  hideLoginOverlay();
  // Update header role badge
  const rb=el('headerRoleBadge');
  if(rb)rb.textContent=match.label;
  showToast('Welcome, '+match.username+' · '+match.role);
}
function doLogout(){
  try{sessionStorage.removeItem('ais_session');}catch(e){}
  currentUser=null;
  if(el('loginUser'))el('loginUser').value='';
  if(el('loginPass'))el('loginPass').value='';
  if(el('loginError'))el('loginError').classList.remove('show');
  showLoginOverlay();
}
function applyRole(role){
  const app=document.querySelector('.app');
  if(!app)return;
  if(role==='Viewer'){
    app.classList.add('readonly-mode');
    // Disable all action buttons for viewers
    document.querySelectorAll('button:not(#logoutBtn):not(.step-tab):not(.link-btn)').forEach(btn=>{
      if(!btn.id||!['creditToggleBtn','step2AToggleBtn','step2BToggleBtn','step2CToggleBtn'].includes(btn.id)){
        btn.disabled=true;btn.style.opacity='0.5';btn.style.cursor='not-allowed';
      }
    });
  } else {
    app.classList.remove('readonly-mode');
    document.querySelectorAll('button').forEach(btn=>{btn.disabled=false;btn.style.opacity='';btn.style.cursor='';});
  }
}
function checkSession(){
  try{
    const raw=sessionStorage.getItem('ais_session');
    if(raw){
      const saved=JSON.parse(raw);
      const match=USERS.find(u=>u.username===saved.username&&u.role===saved.role);
      if(match){currentUser=match;applyRole(match.role);hideLoginOverlay();const rb=el('headerRoleBadge');if(rb)rb.textContent=match.label;return true;}
    }
  }catch(e){}
  return false;
}

// ---- Init ----
function init(){
  state.campus=el('campus')?el('campus').value:'MBZ';
  applyCampusDefaults(state.campus);
  loadFromLocalStorage();
  const removed=deduplicateDatabase();
  if(removed>0)saveToLocalStorage();
  renderTeacherNames();renderRooms();renderPositions();
  renderCreditMasterInputs();renderCreditMasterList();
  renderSubjectTeacherGrid();renderTeacherGradeLevelGrid();renderTeacherSubjectList();
  renderAssignmentFilters();updateTeacherId();updateHeaderCampus();
  renderSubjectCards();updateAll();
  bindEvents();
  r3BindEvents();
  switchToStep(1);

  // Login events
  el('loginBtn')?.addEventListener('click',doLogin);
  el('loginPass')?.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  el('loginUser')?.addEventListener('keydown',e=>{if(e.key==='Enter')el('loginPass')?.focus();});
  el('logoutBtn')?.addEventListener('click',doLogout);

  // Check for existing session, else show login
  if(!checkSession()){
    showLoginOverlay();
  }
}
init();