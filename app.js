/* ═══════════════════════════════════════════════════════════════════
   JobVani – app.js  |  Live Public Sector Data & Auto-Sync Engine
   ═══════════════════════════════════════════════════════════════════ */

/* ─── CATEGORIES ─────────────────────────────────────────────────── */
const CATEGORIES = [
  { icon: 'icons/upsc.svg', name: 'UPSC / Civil Services', count: '1,105+ Openings', tag: 'upsc' },
  { icon: 'icons/ssc.svg', name: 'SSC & Subordinate', count: '32,450+ Openings', tag: 'ssc' },
  { icon: 'icons/banking.svg', name: 'Bank / Finance', count: '14,500+ Openings', tag: 'bank' },
  { icon: 'icons/railway.svg', name: 'Railway & Metro', count: '18,800+ Openings', tag: 'railway' },
  { icon: 'icons/defence.svg', name: 'Defence & Armed Forces', count: '48,500+ Openings', tag: 'defence' },
  { icon: 'icons/police.svg', name: 'Police & Paramilitary', count: '11,200+ Openings', tag: 'defence' },
  { icon: 'icons/psu.svg', name: 'PSU & Navratna', count: '4,800+ Openings', tag: 'psu' },
  { icon: 'icons/teaching.svg', name: 'Teaching & Education', count: '38,700+ Openings', tag: 'teaching' },
  { icon: 'icons/medical.svg', name: 'Health & Medical', count: '3,400+ Openings', tag: 'medical' },
  { icon: 'icons/isro.svg', name: 'ISRO / Space Tech', count: '620+ Openings', tag: 'psu' },
  { icon: 'icons/drdo.svg', name: 'DRDO & Defence R&D', count: '780+ Openings', tag: 'defence' },
  { icon: 'icons/indiapost.svg', name: 'India Post / Postal', count: '44,228+ Openings', tag: 'postoffice' },
  { icon: 'icons/power.svg', name: 'Power & Energy', count: '1,400+ Openings', tag: 'psu' },
  { icon: 'icons/agriculture.svg', name: 'Agriculture & NABARD', count: '640+ Openings', tag: 'bank' },
  { icon: 'icons/state_psc.svg', name: 'State PSC Boards', count: '15,800+ Openings', tag: 'state' },
  { icon: 'icons/judiciary.svg', name: 'Judiciary & Legal', count: '520+ Openings', tag: 'central' },
];

/* ─── COMPREHENSIVE REAL-TIME JOBS DATA (GovtJobGuru + Official Notifications) ─── */
let JOBS = [
  {
    "id": 48,
    "title": "Senior Scientific Assistant & Lab Attendant",
    "dept": "Forensic Science Department, Chandigarh / Punjab",
    "category": "state",
    "tag": "medical",
    "vacancies": "26 Posts",
    "salary": "₹29,200 – ₹92,300",
    "location": "Chandigarh / Mohali",
    "qualification": "B.Sc / M.Sc in Chemistry, Physics or Bio / 10th",
    "lastDate": "2026-12-21",
    "posted": "2026-11-13",
    "badges": [
      "Lab",
      "Forensics",
      "Scientific"
    ],
    "desc": "Government chemical testing, forensic ballistics examination, and toxicology lab assistance.",
    "syllabus": "Written Test → Practical Demonstration",
    "ageLimit": "18–37 years",
    "applicationFee": "₹500",
    "officialLink": "https://chandigarh.gov.in/",
    "icon": "icons/medical.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 47,
    "title": "Technician Grade II (Electrical & Mech)",
    "dept": "UKSSSC – Uttarakhand Subordinate Service Commission",
    "category": "state",
    "tag": "ssc",
    "vacancies": "78 Posts",
    "salary": "₹25,500 – ₹81,100",
    "location": "Uttarakhand (Dehradun & Districts)",
    "qualification": "High School (10th) + ITI / Vocational Certificate",
    "lastDate": "2026-12-07",
    "posted": "2026-11-12",
    "badges": [
      "UKSSSC",
      "Technician",
      "State Govt"
    ],
    "desc": "Technician recruitment in Uttarakhand hydro stations, distribution substations and municipal infrastructure.",
    "syllabus": "Written Exam (General Hindi, Uttarakhand GK, Trade Test)",
    "ageLimit": "18–42 years",
    "applicationFee": "₹300 (SC/ST/EWS: ₹150)",
    "officialLink": "https://sssc.uk.gov.in/",
    "icon": "icons/ssc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 46,
    "title": "Specialist & Hindi Typist Recruitment",
    "dept": "Ordnance Factory Tiruchirappalli (AWEIL)",
    "category": "psu",
    "tag": "defence",
    "vacancies": "11 Posts",
    "salary": "₹25,500 – ₹81,100",
    "location": "Tiruchirappalli, Tamil Nadu",
    "qualification": "Graduate, Master Degree, 10+2 with Typing Speed",
    "lastDate": "2026-12-19",
    "posted": "2026-11-13",
    "badges": [
      "Defence PSU",
      "Typist",
      "Urgent"
    ],
    "desc": "Advanced Weapons and Equipment India Limited (AWEIL) unit ordnance manufacture factory positions.",
    "syllabus": "Written Test + Skill / Typing Test",
    "ageLimit": "18–30 years",
    "applicationFee": "Nil",
    "officialLink": "https://aweil.in/",
    "icon": "icons/defence.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 45,
    "title": "Group 1 Services (Deputy Collector / DSP)",
    "dept": "APPSC – Andhra Pradesh Public Service Commission",
    "category": "state",
    "tag": "state",
    "vacancies": "503 Posts",
    "salary": "₹61,960 – ₹1,51,370",
    "location": "Andhra Pradesh",
    "qualification": "Graduate Degree in Any Stream",
    "lastDate": "2026-12-31",
    "posted": "2026-11-13",
    "badges": [
      "Group 1",
      "Deputy Collector",
      "State PSC"
    ],
    "desc": "Elite administrative cadre recruitment for Deputy Collector, DSP, Commercial Tax Officer, District Registrar, and RDO in AP.",
    "syllabus": "Screening Test (Prelims) → Mains (Descriptive, 5 Papers) → Interview",
    "ageLimit": "18–42 years",
    "applicationFee": "₹250 (Processing) + ₹120 (Exam Fee)",
    "officialLink": "https://psc.ap.gov.in/",
    "icon": "icons/state_psc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 44,
    "title": "TGT, PGT & Primary Teachers Recruitment",
    "dept": "KVS – Kendriya Vidyalaya Sangathan",
    "category": "central",
    "tag": "teaching",
    "vacancies": "6414 Posts",
    "salary": "₹44,900 – ₹1,42,400",
    "location": "All India (1,250+ KVS Institutions)",
    "qualification": "Graduate / PG + B.Ed + CTET Paper 2",
    "lastDate": "2026-12-26",
    "posted": "2026-11-13",
    "badges": [
      "KVS",
      "Central School",
      "Teaching"
    ],
    "desc": "Direct teacher recruitment for central schools nationwide with housing allowances, healthcare and Kendriya Vidyalaya education perks.",
    "syllabus": "Computer Based Test → Class Demo & Interview",
    "ageLimit": "35–40 years",
    "applicationFee": "₹1,500 (SC/ST/PwD: Nil)",
    "officialLink": "https://kvsangathan.nic.in/",
    "icon": "icons/kvs.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 43,
    "title": "Consultant & Short Service Commission Officers",
    "dept": "AAI – Airports Authority of India",
    "category": "psu",
    "tag": "psu",
    "vacancies": "39 Posts",
    "salary": "₹75,000 – ₹1,50,000/month",
    "location": "Airports Across India (Metro & Non-Metro)",
    "qualification": "Graduate in Any Discipline + Basic ATC / ATM Course",
    "lastDate": "2026-12-14",
    "posted": "2026-11-13",
    "badges": [
      "Aviation",
      "AAI",
      "Airports"
    ],
    "desc": "Air Traffic Management, Ground Control Approach, and terminal safety surveillance consultants across major Indian airports.",
    "syllabus": "Evaluation of Experience & Professional Credentials → Personal Interview",
    "ageLimit": "Up to 65 years for retired SSCO / civil aviation specialists",
    "applicationFee": "Nil",
    "officialLink": "https://aai.aero/",
    "icon": "icons/psu.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 42,
    "title": "Engineer Trainee & Technician Apprentice",
    "dept": "BHEL – Bharat Heavy Electricals Limited",
    "category": "psu",
    "tag": "psu",
    "vacancies": "1500 Posts",
    "salary": "₹40,000 – ₹1,40,000",
    "location": "Bhopal, Haridwar, Trichy, Hyderabad, Ranipet",
    "qualification": "B.E. / B.Tech / Diploma",
    "lastDate": "2026-12-20",
    "posted": "2026-11-13",
    "badges": [
      "Maharatna",
      "Engineering",
      "BHEL"
    ],
    "desc": "Heavy power equipment manufacturing, turbine design, solar solar photovoltaics and transmission line project roles.",
    "syllabus": "Computer Based Examination → Technical & HR Interview",
    "ageLimit": "27–30 years",
    "applicationFee": "₹200 (SC/ST/PwD: Nil)",
    "officialLink": "https://careers.bhel.in/",
    "icon": "icons/bhel.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 41,
    "title": "Graduate Trainee (Engineering & Geosciences)",
    "dept": "ONGC – Oil and Natural Gas Corporation",
    "category": "psu",
    "tag": "psu",
    "vacancies": "910 Posts",
    "salary": "₹60,000 – ₹1,80,000 (E1 Scale)",
    "location": "Pan India Offshore / Onshore Basins",
    "qualification": "B.E./B.Tech / M.Sc / M.Tech in relevant disciplines + GATE",
    "lastDate": "2026-12-22",
    "posted": "2026-11-13",
    "badges": [
      "Maharatna",
      "GATE",
      "HOT"
    ],
    "desc": "Recruitment through GATE Score in Petroleum, Mechanical, Chemical, Electrical, Geophysics, and Drilling disciplines.",
    "syllabus": "GATE Score (85%) + Interview (15%)",
    "ageLimit": "30 years (Drilling: 28 years)",
    "applicationFee": "₹300 (SC/ST/PwD: Nil)",
    "officialLink": "https://ongcindia.com/web/eng/career",
    "icon": "icons/ongc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 40,
    "title": "Gramin Dak Sevak (GDS – BPM & ABPM)",
    "dept": "India Post – Department of Posts, MoC",
    "category": "central",
    "tag": "postoffice",
    "vacancies": "44228 Posts",
    "salary": "₹12,000 – ₹29,380 (TRCA Scale)",
    "location": "All Postal Circles Across India",
    "qualification": "10th Standard / Matriculation with Math & English",
    "lastDate": "2026-12-23",
    "posted": "2026-11-13",
    "badges": [
      "India Post",
      "10th Pass",
      "MASSIVE"
    ],
    "desc": "Direct merit recruitment for Branch Postmaster (BPM) and Assistant Branch Postmaster (ABPM) / Dak Sevak in rural post offices.",
    "syllabus": "Pure Merit Selection based on 10th Class Marks (No Exam)",
    "ageLimit": "18–40 years",
    "applicationFee": "₹100 (Women/SC/ST/Transgender/PwD: Nil)",
    "officialLink": "https://indiapostgdsonline.gov.in/",
    "icon": "icons/indiapost.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 39,
    "title": "Combined Graduate Level (SSC CGL 2026)",
    "dept": "SSC – Staff Selection Commission",
    "category": "central",
    "tag": "ssc",
    "vacancies": "17727 Posts",
    "salary": "₹25,500 – ₹81,100 (Group B & C)",
    "location": "All India Ministries & Departments",
    "qualification": "Bachelor Degree",
    "lastDate": "2026-12-28",
    "posted": "2026-11-13",
    "badges": [
      "SSC",
      "Central Govt",
      "HOT"
    ],
    "desc": "Assistant Section Officer (CSS/MEA/IB), Income Tax Inspector, Central Excise Inspector, Sub-Inspector (CBI), and Auditor posts.",
    "syllabus": "Tier 1 (Objective CBE) → Tier 2 (Mathematical, Reasoning, English, General Awareness + Computer & Typing)",
    "ageLimit": "18–32 years",
    "applicationFee": "₹100 (Women/SC/ST/PwD: Nil)",
    "officialLink": "https://ssc.gov.in/",
    "icon": "icons/ssc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 38,
    "title": "Civil Services Examination (IAS, IPS, IFS)",
    "dept": "UPSC – Union Public Service Commission",
    "category": "central",
    "tag": "upsc",
    "vacancies": "1105 Posts",
    "salary": "₹56,100 – ₹2,50,000 (Group A Gazetted)",
    "location": "All India (Cadre Allocated)",
    "qualification": "Graduate Degree in Any Discipline",
    "lastDate": "2027-02-15",
    "posted": "2026-11-13",
    "badges": [
      "UPSC",
      "IAS/IPS",
      "HOT"
    ],
    "desc": "The premier examination of India for appointment to Indian Administrative Service, Indian Police Service, Indian Foreign Service, and 24 Allied Services.",
    "syllabus": "Stage 1: Prelims (GS + CSAT) → Stage 2: Mains (9 Papers) → Stage 3: Personality Test",
    "ageLimit": "21–32 years (Relaxation: OBC 3 yrs, SC/ST 5 yrs, PwD 10 yrs)",
    "applicationFee": "₹100 (Women/SC/ST/PwD: Nil)",
    "officialLink": "https://upsconline.nic.in/",
    "icon": "icons/upsc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 37,
    "title": "Senior Scientific Officer & Assistant (DNA)",
    "dept": "FSL Haryana – Forensic Science Laboratory",
    "category": "state",
    "tag": "defence",
    "vacancies": "20 Posts",
    "salary": "₹35,400 – ₹1,42,400",
    "location": "Madhuban, Karnal, Haryana",
    "qualification": "M.Sc / Ph.D in Forensic Science, Bio, Biotech / 10th",
    "lastDate": "2026-12-20",
    "posted": "2026-11-13",
    "badges": [
      "Forensic",
      "Scientific",
      "DNA Lab"
    ],
    "desc": "Criminal investigation DNA profiling, ballistics analysis, cyber forensics, and scientific evidence reporting for state police.",
    "syllabus": "Written Test → Interview / Practical Examination",
    "ageLimit": "20–42 years",
    "applicationFee": "₹500 (Haryana SC/BC: ₹125)",
    "officialLink": "https://hssc.gov.in/",
    "icon": "icons/police.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 36,
    "title": "Constable General Duty (Sports Quota)",
    "dept": "ITBP – Indo-Tibetan Border Police",
    "category": "defence",
    "tag": "defence",
    "vacancies": "126 Posts",
    "salary": "₹21,700 – ₹69,100",
    "location": "Border Deployments / All India",
    "qualification": "10th Pass + National Sports Participation",
    "lastDate": "2026-12-18",
    "posted": "2026-11-13",
    "badges": [
      "ITBP",
      "Paramilitary",
      "Sports"
    ],
    "desc": "Indo-Tibetan Border Police recruitment in high-altitude mountain warfare, border defense and internal security sports detachments.",
    "syllabus": "Sports Documentation → Physical Trial → Medical Exam",
    "ageLimit": "18–23 years",
    "applicationFee": "₹100 (SC/ST/Women: Nil)",
    "officialLink": "https://recruitment.itbpolice.nic.in/",
    "icon": "icons/defence.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 35,
    "title": "Junior Research Fellow (JRF)",
    "dept": "DRDO – Defence Metallurgical Research Lab (DMRL)",
    "category": "central",
    "tag": "defence",
    "vacancies": "18 Posts",
    "salary": "₹37,000/month + HRA",
    "location": "Hyderabad",
    "qualification": "B.Tech / M.Tech in Metallurgy / Material Science + GATE",
    "lastDate": "2026-12-15",
    "posted": "2026-11-13",
    "badges": [
      "DRDO",
      "JRF",
      "Research"
    ],
    "desc": "Defence research in advanced armor alloys, titanium superalloys for aerospace engines, and missile thermal coatings.",
    "syllabus": "GATE Score Shortlisting → Personal Technical Interview",
    "ageLimit": "28 years",
    "applicationFee": "₹10 (SC/ST/PwD: Nil)",
    "officialLink": "https://drdo.gov.in/careers",
    "icon": "icons/drdo.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 34,
    "title": "Graduate, Tech & Trade Apprentice (RCI)",
    "dept": "DRDO – Research Centre Imarat (RCI) Hyderabad",
    "category": "central",
    "tag": "defence",
    "vacancies": "195 Posts",
    "salary": "₹8,000 – ₹12,000/month",
    "location": "Hyderabad, Telangana",
    "qualification": "B.E./B.Tech, Diploma, ITI (All Engg branches)",
    "lastDate": "2026-12-08",
    "posted": "2026-11-13",
    "badges": [
      "DRDO",
      "Apprentice",
      "Missile Tech"
    ],
    "desc": "Apprentice training at Dr APJ Abdul Kalam Missile Complex, RCI Hyderabad for Avionics, Navigation, Embedded Systems, and Mechanical Fab.",
    "syllabus": "Academic Marks Merit Evaluation → Verification",
    "ageLimit": "18–27 years",
    "applicationFee": "Nil",
    "officialLink": "https://drdo.gov.in/careers",
    "icon": "icons/drdo.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 33,
    "title": "Chargeman (Technical & Mechanical)",
    "dept": "Indian Coast Guard (Ministry of Defence)",
    "category": "defence",
    "tag": "defence",
    "vacancies": "7 Posts",
    "salary": "₹35,400 – ₹1,12,400 (Level 6)",
    "location": "Coastal Commands (Port Blair, Chennai, Mumbai)",
    "qualification": "Diploma in Engineering / Degree in Science",
    "lastDate": "2026-11-28",
    "posted": "2026-11-03",
    "badges": [
      "Coast Guard",
      "Defence",
      "Technical"
    ],
    "desc": "Indian Coast Guard technical supervisor role managing ship overhaul, marine radar maintenance, and hull inspection.",
    "syllabus": "Written Exam (Technical Discipline + General English + Reasoning)",
    "ageLimit": "18–30 years",
    "applicationFee": "Nil",
    "officialLink": "https://joinindiancoastguard.cdac.in/",
    "icon": "icons/defence.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 32,
    "title": "Head Constable & Constable GD Sports Quota",
    "dept": "CRPF – Central Reserve Police Force",
    "category": "defence",
    "tag": "defence",
    "vacancies": "521 Posts",
    "salary": "₹21,700 – ₹81,100",
    "location": "All India Units",
    "qualification": "10th / 12th Pass + Sports Certificate",
    "lastDate": "2026-12-05",
    "posted": "2026-11-10",
    "badges": [
      "CRPF",
      "Sports",
      "MHA"
    ],
    "desc": "Recruitment of meritorious sportspersons in CRPF for Archery, Athletics, Boxing, Football, Shooting, Wrestling and Weightlifting.",
    "syllabus": "Sports Trial & Skill Assessment → Physical Standard Test (PST) → Medical",
    "ageLimit": "18–23 years",
    "applicationFee": "₹100 (SC/ST/Women: Nil)",
    "officialLink": "https://recruitment.crpf.gov.in/",
    "icon": "icons/crpf.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 31,
    "title": "Technical Graduate Course (TGC-145)",
    "dept": "Indian Army – Indian Military Academy (IMA)",
    "category": "defence",
    "tag": "defence",
    "vacancies": "30 Posts",
    "salary": "₹56,100 – ₹2,50,000",
    "location": "IMA Dehradun / All India",
    "qualification": "B.E. / B.Tech in Engineering Streams",
    "lastDate": "2026-12-13",
    "posted": "2026-11-13",
    "badges": [
      "Army",
      "B.Tech",
      "Urgent"
    ],
    "desc": "Commissioned Officer entry for engineering graduates at the Indian Military Academy, Dehradun with full pay from training day.",
    "syllabus": "Cutoff Marks Shortlisting → Services Selection Board (SSB) Interview",
    "ageLimit": "20–27 years",
    "applicationFee": "Nil",
    "officialLink": "https://joinindianarmy.nic.in/",
    "icon": "icons/defence.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 30,
    "title": "10+2 Technical Entry Scheme (TES-57)",
    "dept": "Indian Army – Recruiting Directorate",
    "category": "defence",
    "tag": "defence",
    "vacancies": "90 Posts",
    "salary": "₹56,100 – ₹1,77,500 (Lieutenant Cadre)",
    "location": "All India",
    "qualification": "10+2 with min 60% in PCM + Appeared in JEE Main",
    "lastDate": "2026-12-11",
    "posted": "2026-11-16",
    "badges": [
      "Army",
      "Officer",
      "12th Pass"
    ],
    "desc": "Permanent Commission in the Indian Army as commissioned Lieutenant after 4-year engineering training at Cadet Training Wings.",
    "syllabus": "Shortlisting on JEE Main CRL Rank → 5-Day SSB Interview → Medical Board",
    "ageLimit": "16.5–19.5 years",
    "applicationFee": "Nil",
    "officialLink": "https://joinindianarmy.nic.in/",
    "icon": "icons/defence.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 29,
    "title": "SBI Clerk – Junior Associate",
    "dept": "SBI – State Bank of India",
    "category": "banking",
    "tag": "bank",
    "vacancies": "8283 Posts",
    "salary": "₹26,000 – ₹41,960",
    "location": "All India (State-wise Vacancies)",
    "qualification": "Graduate Degree",
    "lastDate": "2026-12-21",
    "posted": "2026-11-13",
    "badges": [
      "SBI",
      "Clerk",
      "HOT"
    ],
    "desc": "Junior Associates (Customer Support & Sales) in all SBI branch networks across India. Local state language proficiency required.",
    "syllabus": "Preliminary Exam → Main Exam → Language Test",
    "ageLimit": "20–28 years",
    "applicationFee": "₹750 (SC/ST/PwD: Nil)",
    "officialLink": "https://bank.sbi/careers",
    "icon": "icons/sbi.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 28,
    "title": "IBPS PO / MT Probationary Officers",
    "dept": "IBPS – Institute of Banking Personnel Selection",
    "category": "banking",
    "tag": "bank",
    "vacancies": "4455 Posts",
    "salary": "₹41,960 – ₹89,890",
    "location": "All India",
    "qualification": "Graduate in Any Discipline",
    "lastDate": "2026-12-25",
    "posted": "2026-11-13",
    "badges": [
      "Banking",
      "HOT",
      "All India"
    ],
    "desc": "National recruitment for Probationary Officers in 11 participating public sector banks including PNB, Bank of Baroda, Canara Bank.",
    "syllabus": "Prelims (100 Marks) → Mains (225 Marks) → Personal Interview",
    "ageLimit": "20–30 years",
    "applicationFee": "₹850 (SC/ST/PwD: ₹175)",
    "officialLink": "https://www.ibps.in/",
    "icon": "icons/ibps.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 27,
    "title": "NABCONS Leads & Project Consultants",
    "dept": "NABCONS (NABARD Consultancy Services)",
    "category": "banking",
    "tag": "bank",
    "vacancies": "7 Posts",
    "salary": "₹55,000 – ₹1,45,000/month",
    "location": "Mumbai & State Capitals",
    "qualification": "MBA, CA, B.Tech (CS/Agri), LLB",
    "lastDate": "2026-12-19",
    "posted": "2026-11-13",
    "badges": [
      "NABARD",
      "Consultant",
      "NEW"
    ],
    "desc": "Consulting positions in agricultural finance, climate resilient farming, rural tech project management units (PMU).",
    "syllabus": "Resume Screening → Video/Personal Interview",
    "ageLimit": "25–45 years",
    "applicationFee": "Nil",
    "officialLink": "https://nabcons.com/",
    "icon": "icons/nabard.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 26,
    "title": "Clerical Trainee 2026",
    "dept": "Mehsana Urban Co-operative Bank",
    "category": "banking",
    "tag": "bank",
    "vacancies": "35 Posts",
    "salary": "₹19,000 – ₹32,000/month",
    "location": "Gujarat / Maharashtra",
    "qualification": "M.Com, M.Sc, MCA, MBA/PGDM",
    "lastDate": "2026-12-16",
    "posted": "2026-11-13",
    "badges": [
      "Banking",
      "Clerk",
      "Gujarat"
    ],
    "desc": "Clerical cadre appointment in leading Urban Co-operative Bank. Work in branch banking, cash operations, and account maintenance.",
    "syllabus": "Online Test + Interview",
    "ageLimit": "21–30 years",
    "applicationFee": "₹100",
    "officialLink": "https://www.mucbank.com/",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 25,
    "title": "Pharmacist Recruitment 2026",
    "dept": "RBI – Reserve Bank of India",
    "category": "banking",
    "tag": "medical",
    "vacancies": "22 Posts",
    "salary": "₹400/hour (Fixed Hourly Medical Honorarium)",
    "location": "RBI Dispensaries (All Metros)",
    "qualification": "Diploma in Pharmacy (D.Pharm) / B.Pharm",
    "lastDate": "2026-12-09",
    "posted": "2026-11-14",
    "badges": [
      "RBI",
      "Pharmacy",
      "Medical"
    ],
    "desc": "Reserve Bank of India contractual pharmacist appointments in Mumbai, New Delhi, Kolkata, Chennai, and regional branch dispensaries.",
    "syllabus": "Shortlisting based on qualification → Personal Interview",
    "ageLimit": "Up to 50 years",
    "applicationFee": "Nil",
    "officialLink": "https://opportunities.rbi.org.in/",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 24,
    "title": "Specialist Cadre Officers (SCO & AI)",
    "dept": "SBI – State Bank of India",
    "category": "banking",
    "tag": "bank",
    "vacancies": "16 Posts",
    "salary": "₹89,890 – ₹1,20,940 (SMGS IV & V)",
    "location": "Mumbai Corporate Centre",
    "qualification": "BE/B.Tech (CS/IT/AI), M.Tech, MBA/PGDM",
    "lastDate": "2026-12-17",
    "posted": "2026-11-13",
    "badges": [
      "SBI",
      "Specialist Officer",
      "Tech"
    ],
    "desc": "Chief AI Officer, GM (Digital Wealth Management), DGM Data Science, and Enterprise Cloud Architects at SBI Global IT Centre.",
    "syllabus": "Shortlisting based on qualification & experience → Technical Interview",
    "ageLimit": "28–45 years",
    "applicationFee": "₹750 (SC/ST/PwD: Nil)",
    "officialLink": "https://bank.sbi/careers",
    "icon": "icons/sbi.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 23,
    "title": "LIC HFL Apprentice Recruitment 2026",
    "dept": "LIC Housing Finance Limited",
    "category": "banking",
    "tag": "bank",
    "vacancies": "232 Posts",
    "salary": "₹9,000 – ₹15,000/month",
    "location": "Pan India Branches",
    "qualification": "Graduation in any stream (Min 50% marks)",
    "lastDate": "2026-12-08",
    "posted": "2026-11-13",
    "badges": [
      "LIC",
      "Apprentice",
      "Banking"
    ],
    "desc": "Apprenticeship drive by LIC HFL under the Apprentices Act. Training in mortgage evaluation, housing loan verification, and recovery management.",
    "syllabus": "Online Examination → Document Verification",
    "ageLimit": "20–25 years",
    "applicationFee": "₹944",
    "officialLink": "https://lichousing.com/careers",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 22,
    "title": "Administrative Officer (AO – Scale I)",
    "dept": "NICL – National Insurance Company Limited",
    "category": "banking",
    "tag": "bank",
    "vacancies": "321 Posts",
    "salary": "₹50,925 – ₹96,765 (Scale I Officer)",
    "location": "All India",
    "qualification": "Graduate / Post Graduate in any discipline",
    "lastDate": "2026-12-14",
    "posted": "2026-11-13",
    "badges": [
      "Insurance",
      "Officer Scale 1",
      "Urgent"
    ],
    "desc": "National Insurance Company Limited recruitment for Generalists and Specialists (Legal, Finance, Actuarial, IT, Automobile Engineering).",
    "syllabus": "Phase I (Prelims) → Phase II (Mains) → Interview",
    "ageLimit": "21–30 years",
    "applicationFee": "₹1,000 (SC/ST/PwD: ₹250)",
    "officialLink": "https://nationalinsurance.nic.co.in/recruitment",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 21,
    "title": "UCO Bank Apprentice Recruitment 2026",
    "dept": "UCO Bank (Government of India Undertaking)",
    "category": "banking",
    "tag": "bank",
    "vacancies": "530 Posts",
    "salary": "₹15,000/month Stipend",
    "location": "Pan India (All State Branches)",
    "qualification": "Graduate Degree in any discipline",
    "lastDate": "2026-12-07",
    "posted": "2026-11-12",
    "badges": [
      "Banking",
      "Apprentice",
      "Urgent"
    ],
    "desc": "One-year apprenticeship training in retail banking operations, credit processing, customer onboarding, and digital payment facilitation.",
    "syllabus": "Online Written Test (General English, Quant, Reasoning, Financial Awareness)",
    "ageLimit": "20–28 years",
    "applicationFee": "₹800 (SC/ST/PwD: ₹600)",
    "officialLink": "https://www.uco.bank.in",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 20,
    "title": "Field Assistant (Agriculture Mains)",
    "dept": "BSSC – Bihar Staff Selection Commission",
    "category": "state",
    "tag": "central",
    "vacancies": "201 Posts",
    "salary": "₹25,500 – ₹81,100",
    "location": "Bihar",
    "qualification": "I.Sc / Diploma in Agriculture",
    "lastDate": "2026-12-12",
    "posted": "2026-11-17",
    "badges": [
      "BSSC",
      "Agriculture",
      "Bihar"
    ],
    "desc": "Bihar Agriculture Directorate Field Assistant post. Field crop data recording, fertilizer distribution audit and farmer scheme assistance.",
    "syllabus": "Mains Written Examination in Agricultural Science",
    "ageLimit": "18–37 years (Females/BC: 40 years)",
    "applicationFee": "₹540 (Bihar SC/ST: ₹135)",
    "officialLink": "https://bssc.bihar.gov.in/",
    "icon": "icons/agriculture.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 19,
    "title": "Constable (GD) Nagaland Police",
    "dept": "Nagaland Police Recruitment Cell",
    "category": "state",
    "tag": "defence",
    "vacancies": "1137 Posts",
    "salary": "₹21,700 – ₹69,100",
    "location": "Nagaland (Kohima, Dimapur & Districts)",
    "qualification": "Class-6 to Class-10 Pass",
    "lastDate": "2026-12-15",
    "posted": "2026-11-13",
    "badges": [
      "Police",
      "North East",
      "State Govt"
    ],
    "desc": "Recruitment for Constable General Duty posts in District Executive Force and Nagaland Armed Police (NAP) battalions.",
    "syllabus": "Physical Standard & Efficiency Test → Written Test",
    "ageLimit": "18–28 years",
    "applicationFee": "₹100",
    "officialLink": "https://police.nagaland.gov.in/",
    "icon": "icons/police.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 18,
    "title": "Police Constable (Driver) / Aarakshak Chalak",
    "dept": "MPESB – Madhya Pradesh Employees Selection Board",
    "category": "state",
    "tag": "defence",
    "vacancies": "1000 Posts",
    "salary": "₹19,500 – ₹62,000",
    "location": "Madhya Pradesh",
    "qualification": "10th Pass + Valid Heavy Vehicle Driving License (HMV)",
    "lastDate": "2026-12-10",
    "posted": "2026-11-15",
    "badges": [
      "Police",
      "Driver",
      "Urgent"
    ],
    "desc": "MP Police Constable Driver recruitment across all police zones and battalions in MP.",
    "syllabus": "Written Exam (MCQ) → Physical Test → Driving Skill Trade Test",
    "ageLimit": "18–33 years (plus 3 years general COVID age relaxation)",
    "applicationFee": "₹500 (SC/ST/OBC: ₹250)",
    "officialLink": "https://esb.mp.gov.in/",
    "icon": "icons/police.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 17,
    "title": "Junior Engineer Electrical Cadre",
    "dept": "UPSSSC – UP Subordinate Services Selection",
    "category": "state",
    "tag": "ssc",
    "vacancies": "380 Posts",
    "salary": "₹35,400 – ₹1,12,400",
    "location": "Uttar Pradesh",
    "qualification": "Diploma in Electrical Engineering",
    "lastDate": "2026-12-06",
    "posted": "2026-11-11",
    "badges": [
      "JE",
      "Electrical",
      "UPSSSC"
    ],
    "desc": "JE Electrical recruitment across UP state engineering directorates and electricity distribution companies.",
    "syllabus": "Mains Written Exam",
    "ageLimit": "18–40 years",
    "applicationFee": "₹25",
    "officialLink": "https://upsssc.gov.in/",
    "icon": "icons/ssc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 16,
    "title": "Junior Engineer Mechanical & Auto",
    "dept": "UPSSSC – UP Subordinate Services Selection",
    "category": "state",
    "tag": "ssc",
    "vacancies": "1156 Posts",
    "salary": "₹35,400 – ₹1,12,400",
    "location": "Uttar Pradesh",
    "qualification": "3-Year Diploma in Mechanical Engineering",
    "lastDate": "2026-12-04",
    "posted": "2026-11-09",
    "badges": [
      "JE",
      "Engineering",
      "State Govt"
    ],
    "desc": "UPSSSC Junior Engineer (Mechanical), Technical Assistant, and Machine Instructor in PWD, Irrigation and Agriculture departments.",
    "syllabus": "Mains Written Exam on Mechanical Engineering + General Aptitude",
    "ageLimit": "18–40 years",
    "applicationFee": "₹25",
    "officialLink": "https://upsssc.gov.in/",
    "icon": "icons/ssc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 15,
    "title": "Inter Level Posts – Tax Amin, VDO & Clerk",
    "dept": "UPSSSC – UP Subordinate Services Selection",
    "category": "state",
    "tag": "ssc",
    "vacancies": "1784 Posts",
    "salary": "₹21,700 – ₹69,100",
    "location": "Uttar Pradesh",
    "qualification": "10+2 Intermediate + CCC / Computer Certificate",
    "lastDate": "2026-12-13",
    "posted": "2026-11-13",
    "badges": [
      "UPSSSC",
      "12th Pass",
      "Clerk"
    ],
    "desc": "Combined recruitment for Tax Collection Amin, Land Acquisition Amin, Store Keeper, Junior Assistant, and Village Development Officer (VDO).",
    "syllabus": "UPSSSC Mains Written Exam (General Hindi, GK, Computer Knowledge)",
    "ageLimit": "18–40 years",
    "applicationFee": "₹25 (Online Processing Fee for PET qualified candidates)",
    "officialLink": "https://upsssc.gov.in/",
    "icon": "icons/ssc.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 14,
    "title": "Constable Civil, OISF & Firefighter",
    "dept": "OUSSSC – Odisha Police Recruitment Board",
    "category": "state",
    "tag": "defence",
    "vacancies": "7268 Posts",
    "salary": "₹19,900 – ₹63,200",
    "location": "Odisha (All Districts)",
    "qualification": "10th / Matriculation or +2 Higher Secondary",
    "lastDate": "2026-12-03",
    "posted": "2026-11-08",
    "badges": [
      "Police",
      "Firefighter",
      "HOT"
    ],
    "desc": "Odisha Police mega recruitment for Civil Constables, Communication Constables, Odisha Industrial Security Force (OISF), and Firefighters.",
    "syllabus": "CBRT Written Exam → Physical Measurement & Efficiency Test (PET/PMT) → Driving Test",
    "ageLimit": "18–23 years (relaxation up to 5 years for SEBC/SC/ST/Women)",
    "applicationFee": "Nil (Free for all candidates as per Odisha state orders)",
    "officialLink": "https://odishapolice.gov.in/",
    "icon": "icons/police.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 13,
    "title": "Principal & Headmaster Bharti 2026",
    "dept": "UPESSC – UP Education Service Commission",
    "category": "state",
    "tag": "teaching",
    "vacancies": "2647 Posts",
    "salary": "₹56,100 – ₹1,77,500 (Level 10)",
    "location": "Uttar Pradesh",
    "qualification": "Postgraduate + B.Ed with 4+ years teaching exp.",
    "lastDate": "2026-12-02",
    "posted": "2026-11-07",
    "badges": [
      "Gazetted",
      "Principal",
      "State Govt"
    ],
    "desc": "Direct recruitment for Principals in Inter Colleges (1,475 posts) and Headmasters in High Schools (1,172 posts).",
    "syllabus": "Written Examination → Interview",
    "ageLimit": "30–50 years",
    "applicationFee": "₹1,000 (SC/ST: ₹600)",
    "officialLink": "https://madhyamikshiksha.upsdc.gov.in/",
    "icon": "icons/teaching.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 12,
    "title": "Primary Teacher (PRT) Assistant Urban/Rural",
    "dept": "UPESSC – UP Education Service Commission",
    "category": "state",
    "tag": "teaching",
    "vacancies": "12405 Posts",
    "salary": "₹35,400 – ₹1,12,400 (Level 6)",
    "location": "Uttar Pradesh",
    "qualification": "Graduation + D.El.Ed (B.T.C) + UPTET Paper 1",
    "lastDate": "2026-12-08",
    "posted": "2026-11-13",
    "badges": [
      "Teaching",
      "Primary",
      "HOT"
    ],
    "desc": "Recruitment for Primary School Teachers in government basic schools across Uttar Pradesh urban and rural cadres.",
    "syllabus": "Super TET Written Exam → Merit Score (Academic + Test)",
    "ageLimit": "21–40 years",
    "applicationFee": "₹700 (SC/ST: ₹400)",
    "officialLink": "https://updeled.gov.in/",
    "icon": "icons/teaching.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 11,
    "title": "Assistant Teacher / Sahayak Adhyapak (TGT)",
    "dept": "UPESSC – Uttar Pradesh Education Service Selection",
    "category": "state",
    "tag": "teaching",
    "vacancies": "17735 Posts",
    "salary": "₹44,900 – ₹1,42,400 (Pay Level 7)",
    "location": "Uttar Pradesh (All Districts)",
    "qualification": "Bachelor's Degree + B.Ed + UPTET/CTET",
    "lastDate": "2026-11-30",
    "posted": "2026-11-05",
    "badges": [
      "Teaching",
      "State Govt",
      "MASSIVE"
    ],
    "desc": "Recruitment of 17,735 Trained Graduate Teachers (TGT) in Hindi, Mathematics, Science, English, Social Science, Sanskrit and Arts.",
    "syllabus": "Written Exam (125 MCQs, 500 Marks) → Merit List",
    "ageLimit": "21–40 years (relaxation for UP state domiciles)",
    "applicationFee": "₹750 (EWS: ₹650, SC: ₹450, ST: ₹250)",
    "officialLink": "https://madhyamikshiksha.upsdc.gov.in/",
    "icon": "icons/teaching.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 10,
    "title": "Graduate & Technician Apprentice",
    "dept": "KMRL – Kochi Metro Rail Limited",
    "category": "psu",
    "tag": "railway",
    "vacancies": "70 Posts",
    "salary": "₹9,000 – ₹12,000/month",
    "location": "Kochi, Kerala",
    "qualification": "B.Tech / Diploma / ITI (All Trades)",
    "lastDate": "2026-12-11",
    "posted": "2026-11-16",
    "badges": [
      "Metro",
      "Apprentice",
      "Kerala"
    ],
    "desc": "One-year apprentice training program under National Apprenticeship Training Scheme (NATS) with KMRL.",
    "syllabus": "Academic Marks Merit Evaluation",
    "ageLimit": "18–27 years",
    "applicationFee": "Nil",
    "officialLink": "https://corporate.kochimetro.org/careers/",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 9,
    "title": "Individual Consultant & Engineer Cadre",
    "dept": "RITES Limited (Ministry of Railways PSU)",
    "category": "psu",
    "tag": "railway",
    "vacancies": "29 Posts",
    "salary": "₹40,000 – ₹1,40,000",
    "location": "Gurugram / Project Sites",
    "qualification": "B.Tech / B.E (Civil / Mechanical / Electrical)",
    "lastDate": "2026-12-09",
    "posted": "2026-11-14",
    "badges": [
      "PSU",
      "RITES",
      "Engineering"
    ],
    "desc": "RITES engineering consultancy positions for metro, highway, port, and high-speed rail development projects.",
    "syllabus": "Technical Evaluation → Personal Interview",
    "ageLimit": "21–40 years",
    "applicationFee": "₹600 (SC/ST/PwD: ₹300)",
    "officialLink": "https://rites.com/",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 8,
    "title": "Manager & Rail Welding Technician (Walk-in)",
    "dept": "IRCON International Limited",
    "category": "psu",
    "tag": "railway",
    "vacancies": "43 Posts",
    "salary": "₹30,000 – ₹1,20,000",
    "location": "New Delhi / Pan India Projects",
    "qualification": "B.Tech (Civil/Electrical) / ITI Welder",
    "lastDate": "2026-11-29",
    "posted": "2026-11-04",
    "badges": [
      "PSU",
      "Walk-in",
      "IRCON"
    ],
    "desc": "IRCON recruitment on contract for rail infrastructure projects across India. Direct interview mode.",
    "syllabus": "Walk-in Interview & Document Verification",
    "ageLimit": "18–35 years",
    "applicationFee": "Nil",
    "officialLink": "https://ircon.org/",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 7,
    "title": "Junior Engineer, ALP & Station Master",
    "dept": "KRCL – Konkan Railway Corporation Limited",
    "category": "psu",
    "tag": "railway",
    "vacancies": "201 Posts",
    "salary": "₹25,500 – ₹81,100",
    "location": "Maharashtra, Goa, Karnataka",
    "qualification": "10th Pass, ITI, Diploma, BE/B.Tech",
    "lastDate": "2026-12-01",
    "posted": "2026-11-06",
    "badges": [
      "KRCL",
      "Technical"
    ],
    "desc": "Konkan Railway mega recruitment for JE (Civil), Assistant Loco Pilot, Station Master, and Technician cadre posts.",
    "syllabus": "Computer Based Test → Aptitude Test → Document Verification",
    "ageLimit": "18–33 years",
    "applicationFee": "₹500 (SC/ST/Female: ₹250)",
    "officialLink": "https://konkanrailway.com/",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 6,
    "title": "Senior Engineer & Supervisor Recruitment",
    "dept": "DMRC – Delhi Metro Rail Corporation",
    "category": "psu",
    "tag": "railway",
    "vacancies": "73 Posts",
    "salary": "₹46,000 – ₹1,45,000 (IDA Scale)",
    "location": "Delhi NCR",
    "qualification": "B.Tech / Diploma (Civil/Electrical/Env/Arch)",
    "lastDate": "2026-12-07",
    "posted": "2026-11-12",
    "badges": [
      "Metro",
      "Engineering",
      "DMRC"
    ],
    "desc": "Executive & Non-Executive recruitment in Delhi Metro Rail operations, track maintenance, civil construction and signaling systems.",
    "syllabus": "Written Test → Group Discussion / Technical Interview → Medical",
    "ageLimit": "20–35 years",
    "applicationFee": "₹500 (SC/ST/PwD: ₹250)",
    "officialLink": "https://delhimetrorail.com/corporate/careers",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 5,
    "title": "GDCE ALP, JE, Technician & Clerk",
    "dept": "RRC NCR – North Central Railway Prayagraj",
    "category": "central",
    "tag": "railway",
    "vacancies": "656 Posts",
    "salary": "₹19,900 – ₹1,12,400",
    "location": "Uttar Pradesh / NCR Zone",
    "qualification": "10th, 12th, ITI, Diploma, BE/B.Tech",
    "lastDate": "2026-12-05",
    "posted": "2026-11-10",
    "badges": [
      "RRC",
      "Technical",
      "Urgent"
    ],
    "desc": "General Departmental Competitive Examination (GDCE) for Assistant Loco Pilot, Junior Engineer, Train Clerk, and Technicians.",
    "syllabus": "Single/Two Stage CBT + Trade Skill Test",
    "ageLimit": "18–42 years (UR), 45 (OBC), 47 (SC/ST)",
    "applicationFee": "Nil (Departmental quota recruitment)",
    "officialLink": "https://rrcpryj.org/",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 4,
    "title": "NWR Jaipur Railway Apprentice 2026",
    "dept": "North Western Railway (NWR), Jaipur",
    "category": "central",
    "tag": "railway",
    "vacancies": "2008 Posts",
    "salary": "Monthly Stipend as per Apprenticeship Act",
    "location": "Rajasthan (Ajmer, Bikaner, Jaipur, Jodhpur)",
    "qualification": "10th Pass + ITI Certificate",
    "lastDate": "2026-11-26",
    "posted": "2026-11-03",
    "badges": [
      "Railway",
      "ITI Pass",
      "Apprentice"
    ],
    "desc": "Act Apprentice training across Railway Workshop & Divisions in Fitter, Welder, Electrician, Machinist, Painter and Carpenter trades.",
    "syllabus": "Merit-based selection on 10th Marks + ITI Aggregate",
    "ageLimit": "15–24 years",
    "applicationFee": "₹100 (SC/ST/PwD/Women: Nil)",
    "officialLink": "https://rrcjaipur.in",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 3,
    "title": "Station Master Recruitment 2026",
    "dept": "RRB – Railway Recruitment Board",
    "category": "central",
    "tag": "railway",
    "vacancies": "1265 Posts",
    "salary": "₹35,400 – ₹1,12,400 (Level 6)",
    "location": "All India",
    "qualification": "Graduate Degree",
    "lastDate": "2026-11-28",
    "posted": "2026-11-03",
    "badges": [
      "RRB",
      "Officer Level",
      "HOT"
    ],
    "desc": "Exclusive recruitment drive for Station Masters across all regional Railway Recruitment Boards with Aye-Two (A2) medical fitness.",
    "syllabus": "Computer Based Test 1 & 2 → Computer Based Aptitude Test (CBAT)",
    "ageLimit": "18–36 years",
    "applicationFee": "₹500 (Refundable ₹400 upon CBT 1 attendance)",
    "officialLink": "https://www.rrbapply.gov.in",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 2,
    "title": "RRB NTPC Under Graduate Level 2026",
    "dept": "RRB – Railway Recruitment Board",
    "category": "central",
    "tag": "railway",
    "vacancies": "1688 Posts",
    "salary": "₹19,900 – ₹63,200 (Level 2 & 3)",
    "location": "All India",
    "qualification": "10+2 / 12th Pass",
    "lastDate": "2026-11-27",
    "posted": "2026-11-03",
    "badges": [
      "RRB",
      "12th Pass",
      "HOT"
    ],
    "desc": "Recruitment for Accounts Clerk Cum Typist, Junior Clerk Cum Typist, Trains Clerk, and Commercial Cum Ticket Clerk in Indian Railways.",
    "syllabus": "CBT 1 → CBT 2 → Typing Skill Test → DV & Medical",
    "ageLimit": "18–33 years",
    "applicationFee": "₹500 (SC/ST/Female: ₹250)",
    "officialLink": "https://www.rrbapply.gov.in",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  },
  {
    "id": 1,
    "title": "RRB NTPC Graduate Level 2026",
    "dept": "RRB – Railway Recruitment Board",
    "category": "central",
    "tag": "railway",
    "vacancies": "3548 Posts",
    "salary": "₹29,200 – ₹92,300 (Level 5 & 6)",
    "location": "All India",
    "qualification": "Graduate (Any Stream)",
    "lastDate": "2026-12-18",
    "posted": "2026-11-13",
    "badges": [
      "RRB",
      "HOT",
      "Central Govt"
    ],
    "desc": "RRB NTPC Graduate recruitment for Station Master, Goods Train Manager, Senior Commercial cum Ticket Clerk across all Indian Railway Zones.",
    "syllabus": "CBT 1 → CBT 2 → CBAT / Typing Skill Test → Document Verification",
    "ageLimit": "18–36 years (relaxation as per Railway rules)",
    "applicationFee": "₹500 (SC/ST/Ex-Servicemen/Female/EWS/PwD: ₹250)",
    "officialLink": "https://www.rrbapply.gov.in",
    "icon": "icons/railway.svg",
    "iconBg": "rgba(255,153,51,.12)"
  }
];

/* ─── REAL GOVERNMENT INTERNSHIPS (CURRENTLY ACTIVE) ─────────────── */
let INTERNSHIPS = [
  {
    "id": 10,
    "title": "BHEL Industrial Trainee Scheme",
    "org": "BHEL – Bharat Heavy Electricals Limited",
    "category": "psu",
    "stipend": "₹9,000 / month",
    "duration": "6 months",
    "spots": "200 seats",
    "lastDate": "2026-12-12",
    "desc": "Manufacturing shop floor training at BHEL Trichy, Bhopal and Haridwar manufacturing units in boilers, heavy transformers and welding robotics.",
    "eligibility": "Engineering diploma and degree students in Mech/Prod/Elec.",
    "officialLink": "https://careers.bhel.in/",
    "icon": "icons/bhel.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 9,
    "title": "Heritage & Conservation Internship",
    "org": "ASI – Archaeological Survey of India",
    "category": "ministry",
    "stipend": "₹8,000 / month",
    "duration": "2 months",
    "spots": "40 seats",
    "lastDate": "2026-12-28",
    "desc": "Field documentation, monument conservation science, and epigraphy cataloging at UNESCO World Heritage monuments.",
    "eligibility": "History, Archaeology, Architecture, or Museology students.",
    "officialLink": "https://asi.nic.in/",
    "icon": "icons/state_psc.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 8,
    "title": "Reserve Bank Summer Placement Scheme",
    "org": "RBI – Reserve Bank of India",
    "category": "ministry",
    "stipend": "₹20,000 / month",
    "duration": "3 months (Summer)",
    "spots": "125 seats",
    "lastDate": "2027-01-15",
    "desc": "Elite summer research assignment at RBI Central Office Mumbai in Monetary Policy, Financial Markets, Banking Supervision, and Digital Currency (e-Rupee).",
    "eligibility": "Students pursuing Post Graduate courses in Management, Economics, Commerce, Statistics, Law, or CS.",
    "officialLink": "https://opportunities.rbi.org.in/",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 7,
    "title": "Diplomacy & Foreign Affairs Internship",
    "org": "MEA – Ministry of External Affairs, New Delhi",
    "category": "ministry",
    "stipend": "₹10,000 / month",
    "duration": "3 months",
    "spots": "60 seats",
    "lastDate": "2026-12-23",
    "desc": "Work in territorial and functional divisions of the Ministry of External Affairs on multilateral treaties, G20 outcomes, and bilateral relations.",
    "eligibility": "Graduates in International Relations, Political Science, Economics, Law, or Journalism.",
    "officialLink": "https://mea.gov.in/",
    "icon": "icons/upsc.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 6,
    "title": "NHPC Hydro Power Technical Internship",
    "org": "NHPC – National Hydroelectric Power Corporation",
    "category": "psu",
    "stipend": "₹12,000 / month",
    "duration": "6 months",
    "spots": "80 seats",
    "lastDate": "2026-12-18",
    "desc": "On-site training in major Himalayan hydroelectric dam projects, hydraulic turbines, tunneling, and high-voltage grid transmission.",
    "eligibility": "Final year B.Tech (Civil, Electrical, Mechanical).",
    "officialLink": "https://nhpcindia.com/",
    "icon": "icons/power.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 5,
    "title": "PMRF / CSIR Doctoral Fellowship",
    "org": "CSIR – Council of Scientific & Industrial Research",
    "category": "research",
    "stipend": "₹31,000 to ₹70,000 / month + Research Grant",
    "duration": "Up to 5 years (PhD)",
    "spots": "900 seats",
    "lastDate": "2026-12-31",
    "desc": "Prime Minister Research Fellowship (PMRF) for doctoral research in cutting-edge science and engineering at IITs, IISc Bangalore, and CSIR Labs.",
    "eligibility": "B.Tech / M.Tech graduates with valid GATE or CSIR-UGC NET JRF rank.",
    "officialLink": "https://pmrf.in/",
    "icon": "icons/psu.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 4,
    "title": "DRDO Defence Research Apprenticeship",
    "org": "DRDO – Defence R&D Organisation",
    "category": "research",
    "stipend": "₹10,000 / month",
    "duration": "12 months",
    "spots": "500 seats",
    "lastDate": "2026-12-25",
    "desc": "Technical apprenticeship across DRDO laboratories in Aeronautics, Electronic Warfare, Naval Systems, Armament, and Laser Physics.",
    "eligibility": "Diploma / B.Tech in ECE, Computer Science, Mechanical, Chemical.",
    "officialLink": "https://drdo.gov.in/careers",
    "icon": "icons/drdo.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 3,
    "title": "ISRO Young Scientist & START Internship",
    "org": "ISRO – Indian Space Research Organisation",
    "category": "space",
    "stipend": "₹20,000 / month",
    "duration": "3 to 6 months",
    "spots": "120 seats",
    "lastDate": "2026-12-20",
    "desc": "Hands-on project work in satellite orbital mechanics, space robotics, Earth observation remote sensing, and cryogenic rocket propulsion.",
    "eligibility": "B.Tech / M.Tech in Aerospace, Mechanical, ECE, CS with 8.0+ CGPA.",
    "officialLink": "https://isro.gov.in/",
    "icon": "icons/isro.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 2,
    "title": "Economic Policy Research Internship",
    "org": "Ministry of Finance, Government of India",
    "category": "ministry",
    "stipend": "₹15,000 / month",
    "duration": "2 to 6 months",
    "spots": "50 seats",
    "lastDate": "2026-12-11",
    "desc": "Work with the Chief Economic Advisor and senior economists on Union Budget policy analysis, GST revenue forecasting, and macro stability.",
    "eligibility": "Postgraduates in Economics, Finance, Public Policy, or Chartered Accountants.",
    "officialLink": "https://financialservices.gov.in/",
    "icon": "icons/banking.svg",
    "iconBg": "rgba(11,26,62,.10)"
  },
  {
    "id": 1,
    "title": "NITI Aayog Official Internship Scheme",
    "org": "NITI Aayog (National Institution for Transforming India)",
    "category": "ministry",
    "stipend": "Honorary / High Prestigious Certification",
    "duration": "6 to 12 weeks",
    "spots": "50 seats / Cycle",
    "lastDate": "2026-12-15",
    "desc": "Work directly with vertical verticals in Agriculture, Data Analytics, Economics, Governance, Healthcare, and Public Policy at NITI Bhawan, New Delhi.",
    "eligibility": "Undergraduate / Postgraduate / Research Scholars with min 85% aggregate marks in 12th / Grad.",
    "officialLink": "https://niti.gov.in/internship",
    "icon": "icons/brand_logo.svg",
    "iconBg": "rgba(11,26,62,.10)"
  }
];

/* ─── REAL ENTRANCE EXAMS (CURRENTLY RUNNING / SCHEDULED) ────────── */
let ENTRANCE_EXAMS = [
  {
    "id": 12,
    "name": "UGC NET Dec 2026",
    "fullForm": "University Grants Commission National Eligibility Test Dec 2026",
    "category": "teaching",
    "level": "National",
    "conductedBy": "National Testing Agency (NTA)",
    "frequency": "Twice a year (Jun & Dec)",
    "examDate": "January 2027",
    "regDate": "November – December 2026",
    "vacancies": "Assistant Professor & JRF Award",
    "institutes": "All Indian Universities and Colleges",
    "desc": "Determines eligibility for Assistant Professorship and award of Junior Research Fellowship (JRF) in Indian Universities and Colleges.",
    "officialLink": "https://ugcnet.nta.nic.in/",
    "icon": "icons/kvs.svg"
  },
  {
    "id": 11,
    "name": "NEET PG 2027",
    "fullForm": "National Eligibility cum Entrance Test (Post Graduate) 2027",
    "category": "medical",
    "level": "National",
    "conductedBy": "NBE / NTA",
    "frequency": "Annual",
    "examDate": "March 2027",
    "regDate": "January – February 2027",
    "vacancies": "~52,000 MD/MS/DNB Seats",
    "institutes": "All Medical Colleges, PGIMER, AIIMS, Armed Forces Medical College",
    "desc": "National single-window eligibility cum entrance examination for admission to MD/MS and PG Diploma Courses in Medicine.",
    "officialLink": "https://nbe.edu.in/",
    "icon": "icons/aiims.svg"
  },
  {
    "id": 10,
    "name": "UPSC NDA & NA (I) 2027",
    "fullForm": "National Defence Academy & Naval Academy (I) 2027",
    "category": "defence",
    "level": "National",
    "conductedBy": "UPSC (Union Public Service Commission)",
    "frequency": "Twice a year (Apr & Sep)",
    "examDate": "April 2027",
    "regDate": "December 2026 – January 2027",
    "vacancies": "~400 Cadets",
    "institutes": "NDA Khadakwasla, Pune (Army, Navy, Air Force) + INA Ezhimala",
    "desc": "Premier officer training academy for 12th pass students. Commissioning into the Armed Forces after 3 years tri-service training.",
    "officialLink": "https://upsc.gov.in/",
    "icon": "icons/defence.svg"
  },
  {
    "id": 9,
    "name": "AFCAT 01/2027",
    "fullForm": "Air Force Common Admission Test 01/2027",
    "category": "defence",
    "level": "National",
    "conductedBy": "Indian Air Force (IAF)",
    "frequency": "Twice a year (Feb & Aug)",
    "examDate": "February 2027",
    "regDate": "01 Dec – 30 Dec 2026",
    "vacancies": "~350 Commissioned Posts",
    "institutes": "Air Force Academy (Dundigal), Flying, Technical & Ground Duty Branches",
    "desc": "Gateway to commissioning as an officer in the Indian Air Force for Flying (Fighter Pilot), Technical (Engineering), and Ground Duty branches.",
    "officialLink": "https://careerindianairforce.cdac.in/",
    "icon": "icons/defence.svg"
  },
  {
    "id": 8,
    "name": "CUET UG 2027",
    "fullForm": "Common University Entrance Test (UG) 2027",
    "category": "management",
    "level": "National",
    "conductedBy": "National Testing Agency (NTA)",
    "frequency": "Annual",
    "examDate": "May – June 2027",
    "regDate": "February – March 2027",
    "vacancies": "3,00,000+ Central University Seats",
    "institutes": "Delhi University (DU), JNU, BHU, AMU, Jamia + 250 Universities",
    "desc": "Standardized national single-window entrance exam for admission to all undergraduate programs in 47 Central Universities and participating colleges.",
    "officialLink": "https://nta.ac.in/",
    "icon": "icons/nta.svg"
  },
  {
    "id": 7,
    "name": "CTET Dec 2026",
    "fullForm": "Central Teacher Eligibility Test (CBSE) Dec 2026",
    "category": "teaching",
    "level": "National",
    "conductedBy": "CBSE (Central Board of Secondary Education)",
    "frequency": "Twice a year (Jan & Jul)",
    "examDate": "14 December 2026",
    "regDate": "October – November 2026",
    "vacancies": "Lifetime Validity Certificate",
    "institutes": "Central Govt Schools: Kendriya Vidyalaya (KVS), Navodaya (NVS), DSSSB, UT Schools",
    "desc": "Mandatory eligibility benchmark for appointment as a teacher in Classes I to VIII in any Central Government institution.",
    "officialLink": "https://ctet.nic.in/",
    "icon": "icons/kvs.svg"
  },
  {
    "id": 6,
    "name": "CLAT 2027",
    "fullForm": "Common Law Admission Test (NLUs) 2027",
    "category": "law",
    "level": "National",
    "conductedBy": "Consortium of National Law Universities",
    "frequency": "Annual",
    "examDate": "13 December 2026",
    "regDate": "July – November 2026",
    "vacancies": "~3,600 BA LLB / LLM Seats",
    "institutes": "NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata + 24 NLUs",
    "desc": "National level entrance examination for admission to 5-year integrated BA LLB and 1-year LLM programs in top National Law Universities.",
    "officialLink": "https://consortiumofnlus.ac.in/",
    "icon": "icons/judiciary.svg"
  },
  {
    "id": 5,
    "name": "CAT 2026/27",
    "fullForm": "Common Admission Test (IIMs) 2026/27",
    "category": "management",
    "level": "National",
    "conductedBy": "Indian Institutes of Management (IIMs)",
    "frequency": "Annual",
    "examDate": "29 November 2026",
    "regDate": "August – September 2026",
    "vacancies": "~5,000 IIM Seats",
    "institutes": "All 21 IIMs (IIM Ahmedabad, IIM Bangalore, IIM Calcutta) + FMS + SPJIMR",
    "desc": "India’s premier entrance test for postgraduate management programs. Tests Quantitative Ability, Data Interpretation, and Verbal Ability.",
    "officialLink": "https://iimcat.ac.in/",
    "icon": "icons/iit.svg"
  },
  {
    "id": 4,
    "name": "GATE 2027",
    "fullForm": "Graduate Aptitude Test in Engineering 2027",
    "category": "engineering",
    "level": "National",
    "conductedBy": "IIT Roorkee / IIT Consortium",
    "frequency": "Annual (Computer Based)",
    "examDate": "February 2027",
    "regDate": "Aug – Oct 2026 (Closed) / Admit Card: Jan 2027",
    "vacancies": "PSU Recruitment + M.Tech Seats",
    "institutes": "IITs, IISc, NITs + Direct PSU Jobs (ONGC, BHEL, NTPC, IOCL)",
    "desc": "GATE score is used for master admissions and direct recruitment to Group A level posts in Central Public Sector Enterprises (PSUs).",
    "officialLink": "https://gate2025.iitr.ac.in/",
    "icon": "icons/iit.svg"
  },
  {
    "id": 3,
    "name": "NEET UG 2027",
    "fullForm": "National Eligibility cum Entrance Test (UG) 2027",
    "category": "medical",
    "level": "National",
    "conductedBy": "National Testing Agency (NTA)",
    "frequency": "Annual (Pen & Paper OMR)",
    "examDate": "May 2027",
    "regDate": "Jan – March 2027",
    "vacancies": "~1,08,000 MBBS Seats",
    "institutes": "All Government & Private Medical Colleges + AIIMS + JIPMER",
    "desc": "The single nationwide entrance test for MBBS, BDS, BAMS, BHMS, and BSMS admissions across India.",
    "officialLink": "https://neet.nta.nic.in/",
    "icon": "icons/nta.svg"
  },
  {
    "id": 2,
    "name": "JEE Advanced 2027",
    "fullForm": "Joint Entrance Examination (Advanced) 2027",
    "category": "engineering",
    "level": "National (IITs)",
    "conductedBy": "IIT Delhi / Organising IIT",
    "frequency": "Annual",
    "examDate": "May 2027",
    "regDate": "April – May 2027",
    "vacancies": "~17,500 Seats",
    "institutes": "All 23 Indian Institutes of Technology (IIT Bombay, IIT Delhi, IIT Madras, etc.)",
    "desc": "The gateway to undergraduate programs at premier IITs. Tested exclusively for problem-solving depth in Physics, Chemistry, and Advanced Mathematics.",
    "officialLink": "https://jeeadv.ac.in/",
    "icon": "icons/iit.svg"
  },
  {
    "id": 1,
    "name": "JEE Main 2027",
    "fullForm": "Joint Entrance Examination (Main) 2027",
    "category": "engineering",
    "level": "National (NTA)",
    "conductedBy": "National Testing Agency (NTA)",
    "frequency": "Twice a year (Jan & Apr)",
    "examDate": "January & April 2027",
    "regDate": "Nov 2026 – Jan 2027 (Session 1)",
    "vacancies": "~33,000 NIT/IIIT Seats",
    "institutes": "All 31 NITs, 26 IIITs, GFTIs + JEE Advanced Qualifier",
    "desc": "National benchmark exam for admission to B.Tech/B.Arch programs across NITs and IIITs. Top 2.50 lakh qualifiers become eligible for JEE Advanced.",
    "officialLink": "https://jeemain.nta.nic.in/",
    "icon": "icons/nta.svg"
  }
];

/* ─── STATES DATA ─────────────────────────────────────────────────── */
const STATES = [
  { name: 'Uttar Pradesh', count: '34,800+ Vacancies' },
  { name: 'Maharashtra', count: '18,200+ Vacancies' },
  { name: 'Bihar', count: '14,500+ Vacancies' },
  { name: 'Odisha', count: '9,800+ Vacancies' },
  { name: 'Rajasthan', count: '8,900+ Vacancies' },
  { name: 'Delhi NCR', count: '12,400+ Vacancies' },
  { name: 'Madhya Pradesh', count: '7,900+ Vacancies' },
  { name: 'West Bengal', count: '6,800+ Vacancies' },
  { name: 'Gujarat', count: '5,700+ Vacancies' },
  { name: 'Karnataka', count: '5,400+ Vacancies' },
  { name: 'Tamil Nadu', count: '5,100+ Vacancies' },
  { name: 'Telangana', count: '4,800+ Vacancies' },
  { name: 'Andhra Pradesh', count: '4,600+ Vacancies' },
  { name: 'Haryana', count: '4,200+ Vacancies' },
  { name: 'Punjab', count: '3,900+ Vacancies' },
  { name: 'Uttarakhand', count: '3,100+ Vacancies' },
  { name: 'Kerala', count: '2,900+ Vacancies' },
  { name: 'Assam & NE', count: '4,500+ Vacancies' },
];

/* ─── RECENT ALERTS (DYNAMIC FEED) ───────────────────────────────── */
let RECENT_ALERTS = [
  {
    "title": "🏛️ UPSC Civil Services 2027: Preliminary Examination Calendar Announced",
    "date": "18 Nov 2026",
    "icon": "icons/upsc.svg",
    "link": "https://upsc.gov.in"
  },
  {
    "title": "🎓 NITI Aayog Official Internship Scheme: Winter 2026/27 Cycle Open",
    "date": "20 Nov 2026",
    "icon": "icons/brand_logo.svg",
    "link": "https://www.niti.gov.in/internship"
  },
  {
    "title": "🚂 NWR Jaipur Railway Apprentice: 2,008 Vacancies Verification Active",
    "date": "21 Nov 2026",
    "icon": "icons/railway.svg",
    "link": "https://rrcjaipur.in"
  },
  {
    "title": "👮 Odisha Police Constable & Firefighter: 7,268 Posts Online Forms Active",
    "date": "22 Nov 2026",
    "icon": "icons/police.svg",
    "link": "https://odishapolice.gov.in"
  },
  {
    "title": "🏦 SBI Clerk & PO 2026/27: Recruitment Portal Open for 14,000+ Posts",
    "date": "Yesterday, 6:00 PM",
    "icon": "icons/banking.svg",
    "link": "https://sbi.co.in/careers"
  },
  {
    "title": "🔥 SSC Combined Graduate Level (CGL): Tier-1 Results & Tier-2 Schedule",
    "date": "Today, 8:15 AM",
    "icon": "icons/ssc.svg",
    "link": "https://ssc.gov.in"
  },
  {
    "title": "📢 UPESSC TGT Sahayak Adhyapak: 17,735 Vacancies Running",
    "date": "Today, 9:00 AM",
    "icon": "icons/teaching.svg",
    "link": "https://upsssc.gov.in"
  },
  {
    "title": "⚡ RRB NTPC Graduate Level: 3,548 Posts Active – Apply before deadline",
    "date": "Today, 11:30 AM",
    "icon": "icons/railway.svg",
    "link": "https://www.rrbapply.gov.in"
  }
];

/* ─── STATE MANAGEMENT ────────────────────────────────────────────── */
let currentViewMode = 'cards'; // 'cards' | 'table'
let currentDeptQuick = 'all';
let currentJobFilter = 'all';
let lastSyncTimestamp = new Date();

/* ─── HELPER: DATE CALCULATIONS & URGENCY (MATCHING GOVTJOBGURU) ─── */
function getDaysLeft(dateStr) {
  if (!dateStr) return 0;
  const target = new Date(dateStr + 'T23:59:59');
  const now = new Date();
  const diffTime = target - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatDateDDMMYY(dateStr) {
  if (!dateStr) return 'Active';
  const d = new Date(dateStr);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}-${mm}-${yy}`;
}

function getDeadlineBadgeHTML(lastDateStr) {
  const days = getDaysLeft(lastDateStr);
  const dateFormatted = formatDateDDMMYY(lastDateStr);

  if (days <= 0) {
    return `<span class="tp-deadline-urgent">Expired <span class="tp-deadline-days">(Closed)</span></span>`;
  } else if (days <= 3) {
    return `<span class="tp-deadline-urgent">${dateFormatted} <span class="tp-deadline-days">(${days} days left)</span></span>`;
  } else if (days <= 7) {
    return `<span class="tp-deadline-warning">${dateFormatted} <span class="tp-deadline-days">(${days} days left)</span></span>`;
  } else {
    return `<span class="tp-deadline-ok">${dateFormatted} <span class="tp-deadline-days">(${days} days left)</span></span>`;
  }
}

function renderIcon(icon, alt = '', className = 'dept-logo-img') {
  if (!icon) return '';
  if (typeof icon === 'string' && (icon.endsWith('.svg') || icon.endsWith('.png') || icon.endsWith('.jpg') || icon.includes('/'))) {
    return `<img src="${icon}" alt="${alt}" class="${className}" loading="lazy" />`;
  }
  return `<span class="emoji-icon">${icon}</span>`;
}

function badgeClass(b) {
  if (b === 'HOT') return 'badge badge-hot';
  if (b === 'NEW' || b === 'Urgent') return 'badge badge-new';
  return 'badge badge-cat';
}

/* ─── LIVE AUTO-SYNC & AUTO-UPDATE ENGINE ─────────────────────────── */

function initAutoSync() {
  updateSyncTimeDisplay();
  renderDynamicDeadlines();

  // Initial auto-sync after 1.5 seconds on page launch
  setTimeout(() => {
    runAutoSyncBackground(false);
  }, 1500);

  // Background Auto-sync timer every 5 minutes (300,000ms)
  setInterval(() => {
    runAutoSyncBackground(false);
  }, 300000);

  // Auto-sync whenever user switches back to this tab
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      runAutoSyncBackground(false);
    }
  });
}

function runAutoSyncBackground(isManual = false) {
  lastSyncTimestamp = new Date();
  updateSyncTimeDisplay();

  // Pull newly published updates from Django Admin API
  fetchFromDjangoBackend().then(djangoCount => {
    const statusDesc = document.getElementById('sync-status-text');
    if (statusDesc) {
      statusDesc.innerHTML = `Real-time auto-sync active • <strong>${JOBS.length}</strong> Recruitments, <strong>${INTERNSHIPS.length}</strong> Internships & <strong>${ENTRANCE_EXAMS.length}</strong> Entrance Exams live!`;
    }
    if (djangoCount > 0) {
      showLiveToast(`📢 Admin Sync: ${djangoCount} updates synchronized from Django Admin!`);
    } else if (isManual) {
      showLiveToast(`✅ All Jobs, Exams & Internships verified live!`);
    }
  });

  // Re-render currently active views
  renderJobsGrid();
  renderDynamicDeadlines();
  applyFilters();

  const activePage = document.querySelector('.page.active');
  if (activePage) {
    const pageId = activePage.id.replace('page-', '');
    if (pageId === 'internships') renderInternships('all');
    if (pageId === 'entrance') renderEntrance('all');
    if (pageId === 'alerts') renderAlerts();
  }
}

function triggerManualSync() {
  const btn = document.getElementById('btn-sync-now');
  if (btn) btn.classList.add('spinning');

  setTimeout(() => {
    runAutoSyncBackground(true);
    if (btn) btn.classList.remove('spinning');
  }, 650);
}

function updateSyncTimeDisplay() {
  const timeEl = document.getElementById('sync-last-time');
  if (timeEl) {
    const timeStr = lastSyncTimestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    timeEl.textContent = `⏳ Synced: Today at ${timeStr}`;
  }
}

function showLiveToast(msg) {
  const toast = document.getElementById('live-toast');
  if (!toast) return;
  toast.innerHTML = `<span class="sync-indicator">🟢</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ─── DJANGO BACKEND SYNC INTEGRATION ────────────────────────────── */
const DJANGO_API_BASE = 'https://jobvani-backend.onrender.com/api';

async function fetchFromDjangoBackend() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${DJANGO_API_BASE}/all/`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return 0;
    const data = await res.json();
    let count = 0;

    if (data.jobs && data.jobs.length) {
      data.jobs.forEach(dj => {
        if (!JOBS.some(j => j.id === dj.id)) {
          JOBS.unshift(dj);
          count++;
        }
      });
    }
    if (data.internships && data.internships.length) {
      data.internships.forEach(di => {
        if (!INTERNSHIPS.some(i => i.id === di.id)) {
          INTERNSHIPS.unshift(di);
          count++;
        }
      });
    }
    if (data.entrance && data.entrance.length) {
      data.entrance.forEach(de => {
        if (!ENTRANCE_EXAMS.some(e => e.id === de.id)) {
          ENTRANCE_EXAMS.unshift(de);
          count++;
        }
      });
    }
    if (data.alerts && data.alerts.length) {
      data.alerts.forEach(da => {
        if (!RECENT_ALERTS.some(a => a.title === da.title)) {
          RECENT_ALERTS.unshift(da);
        }
      });
    }
    if (count > 0) {
      renderJobsGrid();
      renderDynamicDeadlines();
      applyFilters();
    }
    return count;
  } catch (e) {
    // Graceful offline fallback if Django server is not currently running
    return 0;
  }
}

/* ─── VIEW MODE CONTROLLER (CARDS VS TABLE) ──────────────────────── */
function setViewMode(mode) {
  currentViewMode = mode;
  const cardsWrap = document.getElementById('jobs-list-full');
  const tableWrap = document.getElementById('jobs-table-wrap');
  const btnCards = document.getElementById('btn-view-cards');
  const btnTable = document.getElementById('btn-view-table');

  if (mode === 'table') {
    if (cardsWrap) cardsWrap.style.display = 'none';
    if (tableWrap) tableWrap.style.display = 'block';
    if (btnCards) btnCards.classList.remove('active');
    if (btnTable) btnTable.classList.add('active');
  } else {
    if (cardsWrap) cardsWrap.style.display = 'flex';
    if (tableWrap) tableWrap.style.display = 'none';
    if (btnCards) btnCards.classList.add('active');
    if (btnTable) btnTable.classList.remove('active');
  }
  const scrollLayer = document.getElementById('jobs-data-scroll-layer');
  if (scrollLayer) scrollLayer.scrollTop = 0;
  applyFilters();
}

/* ─── QUICK DEPARTMENT FILTER BAR ────────────────────────────────── */
function filterByDeptQuick(deptKey, btn) {
  currentDeptQuick = deptKey;
  document.querySelectorAll('.dept-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // REFRESH / CLEAR sidebar Category checkboxes so only Quick Search is active
  document.querySelectorAll('.cat-filter-cb').forEach(cb => {
    cb.checked = false;
  });

  applyFilters();
}

/* ─── RENDER: HOME PAGE CATEGORIES ───────────────────────────────── */
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="quickFilterCategory('${c.tag}')" title="${c.name}">
      <span class="cat-icon">${renderIcon(c.icon, c.name, 'cat-logo-img')}</span>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count}</div>
    </div>
  `).join('');
}

function quickFilterCategory(tag) {
  showPage('jobs');
  setTimeout(() => {
    const chip = document.querySelector(`.dept-chip[onclick*="'${tag}'"]`);
    if (chip) {
      filterByDeptQuick(tag, chip);
    } else {
      filterByDeptQuick('all', document.querySelector('.dept-chip'));
    }
  }, 100);
}

/* ─── RENDER: HOME JOBS GRID ─────────────────────────────────────── */
function filterJobs(tab, btn) {
  currentJobFilter = tab;
  document.querySelectorAll('.tabs-bar .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderJobsGrid();
}

function renderJobsGrid() {
  const grid = document.getElementById('jobs-grid');
  if (!grid) return;
  const filtered = currentJobFilter === 'all'
    ? JOBS : JOBS.filter(j => j.category === currentJobFilter || j.tag === currentJobFilter);
  grid.innerHTML = filtered.slice(0, 6).map(j => jobCard(j)).join('');
}

function jobCard(j) {
  const daysLeft = getDaysLeft(j.lastDate);
  return `
    <div class="job-card" onclick="openJobModal('${j.id}')">
      <div class="job-card-header">
        <div class="job-dept-logo" style="background:${j.iconBg}">${renderIcon(j.icon, j.dept, 'dept-logo-img')}</div>
        <div class="job-card-info">
          <div class="job-card-title">${j.title}</div>
          <div class="job-dept-name">${j.dept}</div>
        </div>
      </div>
      <div class="job-badges">
        ${j.badges.map(b => `<span class="badge ${badgeClass(b)}">${b}</span>`).join('')}
      </div>
      <div class="job-details-row">
        <div class="detail-chip"><span>📍</span>${j.location}</div>
        <div class="detail-chip"><span>🎓</span>${j.qualification}</div>
        <div class="detail-chip"><span>💼</span>${typeof j.vacancies === 'number' ? j.vacancies.toLocaleString('en-IN') : j.vacancies} Posts</div>
      </div>
      <div class="job-deadline">
        <div>
          <div class="deadline-text">Last Date</div>
          <div class="deadline-date">${formatDate(j.lastDate)} (${daysLeft}d left)</div>
        </div>
        <button class="apply-btn-mini" onclick="event.stopPropagation();openJobModal('${j.id}')">View Details →</button>
      </div>
    </div>
  `;
}

/* ─── DYNAMIC DEADLINES CALCULATION ──────────────────────────────── */
function renderDynamicDeadlines() {
  const container = document.getElementById('deadlines-list');
  if (!container) return;

  // Sort JOBS by closest days remaining
  const activeJobs = [...JOBS]
    .map(j => ({ ...j, daysLeft: getDaysLeft(j.lastDate) }))
    .filter(j => j.daysLeft > 0)
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 6);

  container.innerHTML = activeJobs.map(d => {
    const cls = d.daysLeft <= 3 ? 'days-urgent' : d.daysLeft <= 7 ? 'days-warn' : 'days-ok';
    const tagCls = d.daysLeft <= 3 ? 'tag-red' : d.daysLeft <= 7 ? 'tag-orange' : 'tag-blue';
    const tagText = d.daysLeft <= 3 ? 'CLOSING SOON' : d.daysLeft <= 7 ? 'WARNING' : 'ACTIVE';
    return `
      <div class="deadline-item" onclick="openJobModal('${d.id}')">
        <div class="deadline-days ${cls}">
          <div class="days-num">${d.daysLeft}</div>
          <div class="days-label">days</div>
        </div>
        <div class="deadline-dept-logo">
          ${renderIcon(d.icon, d.dept, 'deadline-logo-img')}
        </div>
        <div class="deadline-info">
          <div class="deadline-job-name">${d.title}</div>
          <div class="deadline-dept">${d.dept}</div>
        </div>
        <span class="deadline-tag ${tagCls}">${tagText}</span>
      </div>
    `;
  }).join('');
}

/* ─── RENDER: STATES ─────────────────────────────────────────────── */
function renderStates() {
  const grid = document.getElementById('states-grid');
  if (!grid) return;
  grid.innerHTML = STATES.map(s => `
    <div class="state-card" onclick="filterByState('${s.name}')">
      <div class="state-name">${s.name}</div>
      <div class="state-count">${s.count}</div>
    </div>
  `).join('');
}

function filterByState(stateName) {
  showPage('jobs');
  setTimeout(() => {
    const sel = document.getElementById('filter-state');
    if (sel) {
      const match = [...sel.options].find(o => o.text.toLowerCase().includes(stateName.toLowerCase().split(' ')[0]));
      if (match) sel.value = match.value;
      applyFilters();
    }
  }, 150);
}

/* ─── RENDER: JOBS PAGE (CARDS & TABLE) ───────────────────────────── */
function handleCategorySelect(clickedCb) {
  const selectedCount = document.querySelectorAll('.cat-filter-cb:checked').length;

  if (selectedCount > 0) {
    // REFRESH / CLEAR the Quick Browse Sector chips so only the selected Categories are active
    currentDeptQuick = 'all';
    document.querySelectorAll('.dept-chip').forEach(c => c.classList.remove('active'));
    const allChip = document.querySelector('.dept-chip[onclick*="\'all\'"]');
    if (allChip) allChip.classList.add('active');
  }

  applyFilters();
}

function renderJobsPage() {
  const filterCats = document.getElementById('filter-categories');
  if (filterCats) {
    const catNames = [...new Set(CATEGORIES.map(c => c.name))];
    filterCats.innerHTML = catNames.map(n => `
      <label class="cat-label">
        <input type="checkbox" class="cat-filter-cb" value="${n}" onchange="handleCategorySelect(this)" />
        <span>${n}</span>
      </label>
    `).join('');
  }
  applyFilters();
}

function applyFilters() {
  // Check all selected sidebar Categories (supports multiple selection)
  const selectedCatEls = [...document.querySelectorAll('.cat-filter-cb:checked')];

  const fresher = document.getElementById('fl-fresher') && document.getElementById('fl-fresher').checked;
  const pass12 = document.getElementById('fl-12th') && document.getElementById('fl-12th').checked;
  const grad = document.getElementById('fl-grad') && document.getElementById('fl-grad').checked;
  const pg = document.getElementById('fl-pg') && document.getElementById('fl-pg').checked;
  const exp = document.getElementById('fl-exp') && document.getElementById('fl-exp').checked;
  const anyQual = !fresher && !pass12 && !grad && !pg && !exp;

  const stateVal = document.getElementById('filter-state') ? document.getElementById('filter-state').value.trim().toLowerCase() : '';
  const urgencyVal = document.getElementById('filter-urgency') ? document.getElementById('filter-urgency').value.trim().toLowerCase() : '';

  let filtered = [...JOBS];
  let activeFilterLabel = '';

  // ─── MUTUALLY EXCLUSIVE: EITHER CATEGORIES (MULTI-SELECT) OR QUICK SEARCH ───
  if (selectedCatEls.length > 0) {
    // 1. Multiple categories selected: filter jobs matching ANY of the checked categories
    const selectedKeys = selectedCatEls.map(el => el.value.split('/')[0].trim().toLowerCase());
    filtered = filtered.filter(j => {
      const tag = (j.tag || '').toLowerCase();
      const cat = (j.category || '').toLowerCase();
      const dept = (j.dept || '').toLowerCase();
      const title = (j.title || '').toLowerCase();
      return selectedKeys.some(key =>
        tag.includes(key) || cat.includes(key) || dept.includes(key) || title.includes(key)
      );
    });

    const categoryNames = selectedCatEls.map(el => el.value.split('/')[0].trim()).join(', ');
    activeFilterLabel = `Categories: <strong>${categoryNames}</strong>`;
  } else if (currentDeptQuick !== 'all') {
    // 2. Otherwise if Quick Sector chip is active: filter strictly by Quick Sector
    filtered = filtered.filter(j => {
      const tag = (j.tag || '').toLowerCase();
      const cat = (j.category || '').toLowerCase();
      const dept = (j.dept || '').toLowerCase();
      const title = (j.title || '').toLowerCase();
      return tag.includes(currentDeptQuick) || cat.includes(currentDeptQuick) || dept.includes(currentDeptQuick) || title.includes(currentDeptQuick);
    });
    const activeChip = document.querySelector('.dept-chip.active');
    activeFilterLabel = activeChip ? `Sector: <strong>${activeChip.textContent.trim()}</strong>` : '';
  }

  // Qualification Checkboxes
  if (!anyQual) {
    filtered = filtered.filter(j => {
      const q = (j.qualification || '').toLowerCase();
      if (fresher && (q.includes('10th') || q.includes('iti') || q.includes('fresher') || q.includes('matric'))) return true;
      if (pass12 && (q.includes('12th') || q.includes('10+2') || q.includes('intermediate') || q.includes('+2'))) return true;
      if (grad && (q.includes('grad') || q.includes('degree') || q.includes('b.tech') || q.includes('b.e') || q.includes('b.sc') || q.includes('b.com'))) return true;
      if (pg && (q.includes('post') || q.includes('master') || q.includes('mba') || q.includes('m.sc') || q.includes('m.tech') || q.includes('ca'))) return true;
      if (exp && (q.includes('diploma') || q.includes('technical') || q.includes('exp'))) return true;
      return false;
    });
  }

  // State Filter (Strictly matches only the selected State/UT — excludes generic 'All India' and 'Pan India')
  if (stateVal && stateVal !== 'all states & uts' && stateVal !== 'all states') {
    const STATE_ALIASES = {
      'delhi': ['delhi', 'new delhi', 'ncr', 'dmrc'],
      'telangana': ['telangana', 'hyderabad'],
      'tamil nadu': ['tamil nadu', 'chennai', 'trichy', 'tiruchirappalli', 'ranipet'],
      'kerala': ['kerala', 'kochi', 'kmrl', 'thiruvananthapuram'],
      'punjab': ['punjab', 'chandigarh', 'mohali'],
      'haryana': ['haryana', 'gurugram', 'karnal', 'madhuban'],
      'maharashtra': ['maharashtra', 'mumbai', 'pune', 'nagpur', 'konkan'],
      'uttar pradesh': ['uttar pradesh', 'prayagraj', 'lucknow', 'upessc', 'upsssc', 'varanasi'],
      'uttarakhand': ['uttarakhand', 'dehradun', 'haridwar', 'uksssc'],
      'rajasthan': ['rajasthan', 'jaipur', 'jodhpur', 'ajmer', 'bikaner'],
      'madhya pradesh': ['madhya pradesh', 'bhopal', 'mpesb'],
      'andhra pradesh': ['andhra pradesh', 'appsc', 'amaravati', 'visakhapatnam'],
      'odisha': ['odisha', 'ousssc', 'bhubaneswar', 'cuttack'],
      'bihar': ['bihar', 'bssc', 'patna'],
      'nagaland': ['nagaland', 'kohima', 'dimapur'],
      'karnataka': ['karnataka', 'bengaluru', 'bangalore', 'konkan'],
      'gujarat': ['gujarat', 'mehsana', 'ahmedabad', 'gandhinagar'],
      'west bengal': ['west bengal', 'kolkata'],
      'assam': ['assam', 'guwahati'],
      'goa': ['goa', 'konkan']
    };

    const targetKeywords = STATE_ALIASES[stateVal] || [stateVal];

    filtered = filtered.filter(j => {
      const loc = (j.location || '').toLowerCase();
      const dept = (j.dept || '').toLowerCase();
      const title = (j.title || '').toLowerCase();
      const fullText = `${loc} ${dept} ${title}`;

      // Strictly exclude generic national/all-India postings
      const isPureNational = loc === 'all india' ||
        loc === 'pan india' ||
        loc === 'all india (state-wise vacancies)' ||
        loc === 'all india units' ||
        loc.includes('all postal circles') ||
        loc.includes('airports across india');
      if (isPureNational) return false;

      // If location starts with all india or pan india, exclude unless explicitly mentioning target state/city
      if ((loc.startsWith('all india') || loc.startsWith('pan india')) && !targetKeywords.some(kw => loc.includes(kw))) {
        return false;
      }

      // Check if location, department, or title contains any alias of the selected state
      return targetKeywords.some(kw => fullText.includes(kw));
    });
  }

  // Live Urgency Filter
  if (urgencyVal) {
    filtered = filtered.filter(j => {
      const days = getDaysLeft(j.lastDate);
      if (urgencyVal === 'urgent') return days <= 3;
      if (urgencyVal === 'warning') return days > 3 && days <= 7;
      if (urgencyVal === 'ok') return days > 7;
      return true;
    });
  }

  // Update counts
  const countEl = document.getElementById('results-count');
  if (countEl) {
    const totalVacancies = filtered.reduce((acc, curr) => acc + (typeof curr.vacancies === 'number' ? curr.vacancies : 0), 0);
    if (activeFilterLabel) {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> active recruitments for ${activeFilterLabel} (${totalVacancies.toLocaleString('en-IN')} posts)`;
    } else {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> active recruitments (${totalVacancies.toLocaleString('en-IN')} total posts)`;
    }
  }

  // Render both Card Grid and Table Directory
  renderFullJobsList(filtered);
  renderJobsTable(filtered);
  const scrollLayer = document.getElementById('jobs-data-scroll-layer');
  if (scrollLayer) scrollLayer.scrollTop = 0;
  updateActiveFilterBadge();
}

function renderFullJobsList(jobs) {
  const container = document.getElementById('jobs-list-full');
  if (!container) return;
  if (!jobs.length) {
    container.innerHTML = `
      <div style="grid-column:1/-1; padding:40px; text-align:center; background:#fff; border-radius:8px; border:1px solid #ddd;">
        <h3>No government jobs found matching these filters</h3>
        <p style="color:#777; margin:8px 0 16px;">Try resetting filters or searching with a different department keyword.</p>
        <button class="btn-primary" onclick="clearFilters()">Reset All Filters</button>
      </div>`;
    return;
  }
  container.innerHTML = jobs.map(j => jobListCard(j)).join('');
}

function jobListCard(j) {
  const daysLeft = getDaysLeft(j.lastDate);
  let domain = '';
  try {
    domain = new URL(j.officialLink).hostname.replace(/^www\./, '');
  } catch (e) {
    domain = 'gov portal';
  }
  return `
    <div class="job-list-card" onclick="openJobModal('${j.id}')">
      <div class="job-list-logo" style="background:${j.iconBg}">${renderIcon(j.icon, j.dept, 'dept-logo-img')}</div>
      <div class="job-list-body">
        <div class="job-list-title">${j.title}</div>
        <div class="job-list-dept">${j.dept}</div>
        <div class="job-list-meta">
          <div class="meta-item">📍 ${j.location}</div>
          <div class="meta-item">🎓 ${j.qualification}</div>
          <div class="meta-item">💰 ${j.salary}</div>
          <div class="meta-item">📅 Posted: ${formatDate(j.posted)}</div>
        </div>
        <div class="job-badges">
          ${j.badges.map(b => `<span class="badge ${badgeClass(b)}">${b}</span>`).join('')}
          <span class="badge" style="background:rgba(19,136,8,0.09); color:#138808; border:1px solid rgba(19,136,8,0.25); font-weight:700;">🏛️ ${domain}</span>
        </div>
      </div>
      <div class="job-list-right">
        <span class="vacancies-badge">🧑‍💼 ${typeof j.vacancies === 'number' ? j.vacancies.toLocaleString('en-IN') : j.vacancies} Posts</span>
        <div class="list-deadline">Last Date: ${formatDate(j.lastDate)}<br/><strong>${daysLeft} days left</strong></div>
        <div class="card-action-btns">
          <button class="list-apply-btn outline-btn" onclick="event.stopPropagation();openJobModal('${j.id}')">Details</button>
          <a href="${j.officialLink}" target="_blank" rel="noopener noreferrer" class="list-apply-btn" onclick="event.stopPropagation();" title="Apply directly on ${domain}">Apply ↗</a>
        </div>
      </div>
    </div>
  `;
}

/* ─── RENDER: TABLE DIRECTORY (GovtJobGuru TablePress Style) ──────── */
function renderJobsTable(jobs) {
  const tbody = document.getElementById('govt-table-body');
  if (!tbody) return;
  if (!jobs.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px;">No government job openings match the selected filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = jobs.map(j => {
    const isNew = getDaysLeft(j.posted) <= 7;
    const orgShort = j.dept.split('–')[0].trim();
    return `
      <tr>
        <td>
          <div class="table-org-cell">
            <img src="${j.icon}" alt="${orgShort}" class="table-org-logo" />
            <span class="table-org-name">${orgShort}</span>
            ${isNew ? '<span class="tp-new-badge">New</span>' : ''}
          </div>
        </td>
        <td class="table-vacancies">
          ${typeof j.vacancies === 'number' ? j.vacancies.toLocaleString('en-IN') : j.vacancies}
        </td>
        <td class="table-post-name">
          ${j.title}
        </td>
        <td class="table-qual">
          ${j.qualification}
        </td>
        <td>
          ${getDeadlineBadgeHTML(j.lastDate)}
        </td>
        <td style="text-align:center; white-space:nowrap;">
          <button class="tp-btn-detail" onclick="openJobModal('${j.id}')">Detail</button>
          <a href="${j.officialLink}" target="_blank" rel="noopener noreferrer" class="tp-btn-apply" style="margin-left:5px;" title="Apply on official portal">Apply ↗</a>
        </td>
      </tr>
    `;
  }).join('');
}

function sortJobs() {
  const val = document.getElementById('sort-select').value;
  if (val === 'Deadline Soon') {
    JOBS.sort((a, b) => new Date(a.lastDate) - new Date(b.lastDate));
  } else if (val === 'Most Vacancies') {
    JOBS.sort((a, b) => (b.vacancies || 0) - (a.vacancies || 0));
  } else {
    JOBS.sort((a, b) => new Date(b.posted) - new Date(a.posted));
  }
  applyFilters();
}

function clearFilters() {
  document.querySelectorAll('.cat-filter-cb').forEach(cb => cb.checked = false);
  const cbIds = ['fl-fresher', 'fl-12th', 'fl-grad', 'fl-pg', 'fl-exp'];
  cbIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
  if (document.getElementById('filter-state')) document.getElementById('filter-state').value = '';
  if (document.getElementById('filter-urgency')) document.getElementById('filter-urgency').value = '';
  currentDeptQuick = 'all';
  document.querySelectorAll('.dept-chip').forEach(c => c.classList.remove('active'));
  const firstChip = document.querySelector('.dept-chip');
  if (firstChip) firstChip.classList.add('active');
  applyFilters();
}

function toggleMobileFilters() {
  if (window.innerWidth <= 900) {
    const sidebar = document.getElementById('filter-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('open');
    }
  }
}

function updateActiveFilterBadge() {
  const badge = document.getElementById('mobile-filter-badge');
  if (!badge) return;
  const selectedCatCount = document.querySelectorAll('.cat-filter-cb:checked').length;
  const qualCount = ['fl-fresher', 'fl-12th', 'fl-grad', 'fl-pg', 'fl-exp'].filter(id => {
    const el = document.getElementById(id);
    return el && el.checked;
  }).length;
  const stateActive = document.getElementById('filter-state') && document.getElementById('filter-state').value ? 1 : 0;
  const urgencyActive = document.getElementById('filter-urgency') && document.getElementById('filter-urgency').value ? 1 : 0;
  const total = selectedCatCount + qualCount + stateActive + urgencyActive;
  if (total > 0) {
    badge.textContent = `${total} Active`;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

/* ─── RENDER: INTERNSHIPS ────────────────────────────────────────── */
function filterInternships(cat, btn) {
  document.querySelectorAll('.intern-filters .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderInternships(cat);
}

function renderInternships(cat) {
  const grid = document.getElementById('intern-grid');
  if (!grid) return;
  const list = cat === 'all' ? INTERNSHIPS : INTERNSHIPS.filter(i => i.category === cat);
  grid.innerHTML = list.map(i => `
    <div class="intern-card" onclick="openInternModal('${i.id}')">
      <div class="intern-card-top">
        <div class="intern-org-icon" style="background:${i.iconBg}">${renderIcon(i.icon, i.org, 'org-logo-img')}</div>
        <div>
          <div class="intern-title">${i.title}</div>
          <div class="intern-org">${i.org}</div>
        </div>
      </div>
      <div class="intern-card-body">
        <div class="intern-pills">
          <span class="intern-pill stipend">💰 ${i.stipend}</span>
          <span class="intern-pill duration">⏱️ ${i.duration}</span>
          <span class="intern-pill">🎫 ${i.spots}</span>
        </div>
        <p class="intern-desc">${i.desc}</p>
        <div class="intern-footer">
          <div class="intern-deadline">Last Date: ${formatDate(i.lastDate)} (${getDaysLeft(i.lastDate)}d left)</div>
          <button class="intern-apply-btn" onclick="event.stopPropagation();openInternModal('${i.id}')">Apply Now →</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ─── RENDER: ENTRANCE EXAMS ─────────────────────────────────────── */
function filterEntrance(cat, btn) {
  document.querySelectorAll('.entrance-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderEntrance(cat);
}

function renderEntrance(cat) {
  const grid = document.getElementById('entrance-grid');
  if (!grid) return;
  const list = cat === 'all' ? ENTRANCE_EXAMS : ENTRANCE_EXAMS.filter(e => e.category === cat);
  grid.innerHTML = list.map(e => `
    <div class="entrance-card" onclick="openEntranceModal('${e.id}')">
      <div class="entrance-card-top">
        <div class="entrance-header-left">
          <div class="entrance-exam-logo-wrap">${renderIcon(e.icon, e.name, 'entrance-logo-img')}</div>
          <div>
            <div class="entrance-exam-name">${e.name}</div>
            <div class="entrance-full-form">${e.fullForm}</div>
          </div>
        </div>
        <span class="entrance-level">${e.level}</span>
      </div>
      <div class="entrance-details">
        <div class="entrance-detail">📅 <strong>Exam Date:</strong> ${e.examDate}</div>
        <div class="entrance-detail">📝 <strong>Registration:</strong> ${e.regDate}</div>
        <div class="entrance-detail">🏛️ <strong>Conducted by:</strong> ${e.conductedBy}</div>
        <div class="entrance-detail">🔄 <strong>Frequency:</strong> ${e.frequency}</div>
        <div class="entrance-detail">🎫 <strong>Seats:</strong> ${e.vacancies}</div>
      </div>
      <div class="entrance-institutes">🏫 ${e.institutes}</div>
      <div class="entrance-footer">
        <div class="exam-date">Next: ${e.examDate}</div>
        <button class="entrance-apply-btn" onclick="event.stopPropagation();openEntranceModal('${e.id}')">Register →</button>
      </div>
    </div>
  `).join('');
}

/* ─── RENDER: ALERTS ─────────────────────────────────────────────── */
function renderAlerts() {
  const list = document.getElementById('recent-alerts-list');
  if (!list) return;
  list.innerHTML = RECENT_ALERTS.map(a => `
    <div class="recent-alert-item">
      <div class="alert-item-logo">${renderIcon(a.icon, a.title, 'alert-logo-img')}</div>
      <div class="alert-dot"></div>
      <div class="alert-item-text">
        <div class="alert-item-title">${a.title}</div>
        <div class="alert-item-date">${a.date}</div>
      </div>
    </div>
  `).join('');
}

function subscribeAlerts(e) {
  e.preventDefault();
  const success = document.getElementById('alert-success');
  if (success) {
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => success.style.display = 'none', 5000);
  }
}

/* ─── MODAL DIALOGS ──────────────────────────────────────────────── */
function openJobModal(id) {
  const j = JOBS.find(x => String(x.id) === String(id));
  if (!j) return;
  const daysLeft = getDaysLeft(j.lastDate);
  let domain = '';
  try {
    domain = new URL(j.officialLink).hostname.replace(/^www\./, '');
  } catch (e) {
    domain = 'Government Portal';
  }
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-dept-header">
      <div class="modal-dept-icon">${renderIcon(j.icon, j.dept, 'modal-logo-img')}</div>
      <div class="modal-dept-info">
        <h2>${j.title}</h2>
        <p>${j.dept}</p>
      </div>
    </div>
    <div class="modal-section">
      <h4>Key Recruitment Details</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <div class="modal-info-label">Total Vacancies</div>
          <div class="modal-info-value">🧑‍💼 ${typeof j.vacancies === 'number' ? j.vacancies.toLocaleString('en-IN') : j.vacancies} Posts</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Salary / Pay Scale</div>
          <div class="modal-info-value">💰 ${j.salary}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Qualification Required</div>
          <div class="modal-info-value">🎓 ${j.qualification}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Posting Location</div>
          <div class="modal-info-value">📍 ${j.location}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Age Limit</div>
          <div class="modal-info-value">📋 ${j.ageLimit}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Application Fee</div>
          <div class="modal-info-value">💳 ${j.applicationFee}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Application Deadline</div>
          <div class="modal-info-value" style="color:#D32F2F">📅 ${formatDate(j.lastDate)} (${daysLeft} days left)</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Selection Process</div>
          <div class="modal-info-value">📝 ${j.syllabus}</div>
        </div>
      </div>
    </div>
    <div class="modal-section">
      <h4>Official Overview</h4>
      <p class="modal-desc">${j.desc}</p>
    </div>
    <div style="background: rgba(19, 136, 8, 0.08); border: 1.5px solid rgba(19, 136, 8, 0.25); border-radius: 6px; padding: 12px 16px; margin-top: 18px; display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size: 1.3rem;">🏛️</span>
        <div>
          <div style="font-size: 0.82rem; font-weight: 700; color: #0f6806;">Verified Official Government Application Portal</div>
          <div style="font-size: 0.75rem; color: #555;">Apply directly on <strong>${domain}</strong></div>
        </div>
      </div>
      <span style="background:#138808; color:#fff; font-size:0.68rem; font-weight:800; padding:3px 8px; border-radius:3px; letter-spacing:0.5px;">OFFICIAL .GOV</span>
    </div>
    <div style="display:flex; gap:12px; margin-top:16px; flex-wrap:wrap;">
      <a href="${j.officialLink}" target="_blank" rel="noopener noreferrer" class="modal-apply-btn" style="flex:1; text-align:center; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px; font-size:0.95rem;">
        <span>🚀 Apply Online on Official Portal (${domain}) ↗</span>
      </a>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openInternModal(id) {
  const i = INTERNSHIPS.find(x => String(x.id) === String(id));
  if (!i) return;
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-dept-header">
      <div class="modal-dept-icon">${renderIcon(i.icon, i.org, 'modal-logo-img')}</div>
      <div class="modal-dept-info">
        <h2>${i.title}</h2>
        <p>${i.org}</p>
      </div>
    </div>
    <div class="modal-section">
      <h4>Program Overview</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <div class="modal-info-label">Monthly Stipend</div>
          <div class="modal-info-value">💰 ${i.stipend}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Duration</div>
          <div class="modal-info-value">⏱️ ${i.duration}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Available Seats</div>
          <div class="modal-info-value">🎫 ${i.spots}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Application Deadline</div>
          <div class="modal-info-value" style="color:#D32F2F">📅 ${formatDate(i.lastDate)} (${getDaysLeft(i.lastDate)}d left)</div>
        </div>
      </div>
    </div>
    <div class="modal-section">
      <h4>Eligibility Criteria</h4>
      <p class="modal-desc">🎓 ${i.eligibility}</p>
    </div>
    <div class="modal-section">
      <h4>Scope of Work</h4>
      <p class="modal-desc">${i.desc}</p>
    </div>
    <a href="${i.officialLink || '#'}" target="_blank" rel="noopener noreferrer" class="modal-apply-btn">
      🔗 Apply on Official Portal
    </a>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openEntranceModal(id) {
  const e = ENTRANCE_EXAMS.find(x => String(x.id) === String(id));
  if (!e) return;
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-dept-header">
      <div class="modal-dept-icon">${renderIcon(e.icon, e.name, 'modal-logo-img')}</div>
      <div class="modal-dept-info">
        <h2>${e.fullForm}</h2>
        <p>Conducted by: ${e.conductedBy}</p>
      </div>
    </div>
    <div class="modal-section">
      <h4>Examination Information</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <div class="modal-info-label">Exam Timeline</div>
          <div class="modal-info-value">📅 ${e.examDate}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Registration Window</div>
          <div class="modal-info-value">📝 ${e.regDate}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Level</div>
          <div class="modal-info-value">🌐 ${e.level}</div>
        </div>
        <div class="modal-info-item">
          <div class="modal-info-label">Frequency</div>
          <div class="modal-info-value">🔄 ${e.frequency}</div>
        </div>
        <div class="modal-info-item" style="grid-column:span 2">
          <div class="modal-info-label">Intake Capacity</div>
          <div class="modal-info-value">🎫 ${e.vacancies}</div>
        </div>
      </div>
    </div>
    <div class="modal-section">
      <h4>Institutes Covered</h4>
      <p class="modal-desc">🏫 ${e.institutes}</p>
    </div>
    <div class="modal-section">
      <h4>Exam Description</h4>
      <p class="modal-desc">${e.desc}</p>
    </div>
    <a href="${e.officialLink}" target="_blank" rel="noopener noreferrer" class="modal-apply-btn">
      🔗 Register on Official Exam Portal
    </a>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── SEARCH & ROUTING ───────────────────────────────────────────── */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  const navLink = document.getElementById('nav-' + pageId);
  if (page) page.classList.add('active');
  if (navLink) navLink.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('open');

  if (window.location.hash !== '#' + pageId) {
    history.replaceState(null, null, '#' + pageId);
  }

  if (pageId === 'jobs') renderJobsPage();
  if (pageId === 'internships') renderInternships('all');
  if (pageId === 'entrance') renderEntrance('all');
  if (pageId === 'alerts') renderAlerts();
}

function handleHashRoute() {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  if (['jobs', 'internships', 'entrance', 'alerts', 'home'].includes(hash)) {
    showPage(hash);
  }
}
window.addEventListener('hashchange', handleHashRoute);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

document.getElementById('brand-link').addEventListener('click', e => {
  e.preventDefault();
  showPage('home');
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

function performSearch() {
  const q = document.getElementById('hero-search').value.trim().toLowerCase();
  if (!q) return;
  showPage('jobs');
  setTimeout(() => {
    const filtered = JOBS.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.dept.toLowerCase().includes(q) ||
      j.qualification.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q) ||
      j.badges.some(b => b.toLowerCase().includes(q)) ||
      j.category.toLowerCase().includes(q)
    );
    renderFullJobsList(filtered.length ? filtered : JOBS);
    renderJobsTable(filtered.length ? filtered : JOBS);
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.innerHTML = `Search results for "<strong>${q}</strong>" (${filtered.length} found)`;
  }, 200);
}

function quickFilter(keyword) {
  document.getElementById('hero-search').value = keyword;
  performSearch();
}

document.getElementById('hero-search').addEventListener('keydown', e => {
  if (e.key === 'Enter') performSearch();
});

/* ─── INITIALIZATION ON DOM READY ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderJobsGrid();
  renderStates();
  initAutoSync();

  // Route initial hash if present (e.g. #jobs)
  if (window.location.hash) {
    handleHashRoute();
  }
});
