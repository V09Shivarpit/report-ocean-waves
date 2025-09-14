export type Language = 'en' | 'hi' | 'ta' | 'te' | 'ur' | 'or';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
];

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    liveMap: 'Live Map',
    features: 'Features',
    login: 'Login',
    
    // Hero Section
    heroTitle: 'Unified Ocean Hazard Reporting',
    heroSubtitle: 'Real-time monitoring and citizen-driven reporting for ocean safety and marine conservation',
    reportHazard: 'Report a Hazard',
    
    // Dashboard
    hazardDashboard: 'Live Hazard Dashboard',
    dashboardSubtitle: 'Monitor ocean conditions and hazards in real-time',
    filtersAndTrends: 'Filters & Trends',
    eventType: 'Event Type',
    dataSource: 'Data Source',
    selectDate: 'Select Date',
    socialMediaFeed: 'Social Media Feed',
    
    // Satellite Data
    satelliteData: 'Live Satellite Data',
    satelliteSubtitle: 'Current ocean conditions from satellite monitoring',
    seaSurfaceTemp: 'Sea Surface Temperature',
    waveHeight: 'Wave Height',
    windSpeed: 'Wind Speed',
    oceanCurrents: 'Ocean Currents',
    
    // Features
    platformFeatures: 'Platform Features',
    citizenReporting: 'Citizen Reporting',
    citizenReportingDesc: 'Enable public participation in ocean hazard monitoring',
    roleBasedAccess: 'Role-Based Access',
    roleBasedAccessDesc: 'Secure access control for different user types',
    nlpAnalysis: 'NLP Analysis',
    nlpAnalysisDesc: 'Advanced text analysis for social media monitoring',
    
    // Report Modal
    reportModalTitle: 'Report Ocean Hazard',
    reportType: 'Type of Event',
    location: 'Location',
    description: 'Description',
    mediaUpload: 'Upload Media',
    submitReport: 'Submit Report',
    cancel: 'Cancel',
    
    // Event Types
    tsunami: 'Tsunami',
    cyclone: 'Cyclone',
    highWaves: 'High Waves',
    oilSpill: 'Oil Spill',
    algaeBloom: 'Algae Bloom',
    marineDebris: 'Marine Debris',
    
    // Footer
    about: 'About',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    aboutIncois: 'About INCOIS',
    services: 'Services',
    research: 'Research',
    contactUs: 'Contact Us',
    emailUs: 'Email Us',
    
    // Demo Messages
    demoMode: 'Demo Mode - Click markers to view hazard reports',
    reportSubmitted: 'Hazard report submitted successfully!',
  },
  
  hi: {
    // Navigation  
    home: 'होम',
    liveMap: 'लाइव मैप',
    features: 'सुविधाएं',
    login: 'लॉगिन',
    
    // Hero Section
    heroTitle: 'एकीकृत समुद्री खतरा रिपोर्टिंग',
    heroSubtitle: 'समुद्री सुरक्षा और संरक्षण के लिए वास्तविक समय निगरानी और नागरिक-संचालित रिपोर्टिंग',
    reportHazard: 'खतरे की रिपोर्ट करें',
    
    // Dashboard
    hazardDashboard: 'लाइव खतरा डैशबोर्ड',
    dashboardSubtitle: 'वास्तविक समय में समुद्री स्थितियों और खतरों की निगरानी करें',
    filtersAndTrends: 'फिल्टर और रुझान',
    eventType: 'घटना का प्रकार',
    dataSource: 'डेटा स्रोत',
    selectDate: 'तारीख चुनें',
    socialMediaFeed: 'सोशल मीडिया फीड',
    
    reportModalTitle: 'समुद्री खतरे की रिपोर्ट करें',
    reportType: 'घटना का प्रकार',
    location: 'स्थान',
    description: 'विवरण',
    mediaUpload: 'मीडिया अपलोड करें',
    submitReport: 'रिपोर्ट जमा करें',
    cancel: 'रद्द करें',
    
    // Add other translations as needed
    satelliteData: 'लाइव उपग्रह डेटा',
    platformFeatures: 'प्लेटफॉर्म सुविधाएं',
    citizenReporting: 'नागरिक रिपोर्टिंग',
    about: 'के बारे में',
    contact: 'संपर्क',
  },
  
  ta: {
    home: 'முகப்பு',
    liveMap: 'நேரடி வரைபடம்',
    features: 'அம்சங்கள்',
    login: 'உள்நுழைய',
    heroTitle: 'ஒருங்கிணைந்த கடல் ஆபத்து அறிக்கை',
    heroSubtitle: 'கடல் பாதுகாப்பு மற்றும் கடல் பாதுகாப்பிற்கான நேரடி கண்காணிப்பு மற்றும் குடிமக்கள் தலைமையிலான அறிக்கை',
    reportHazard: 'ஆபத்தை புகாரளிக்கவும்',
    reportModalTitle: 'கடல் ஆபத்தை புகாரளிக்கவும்',
    about: 'பற்றி',
    contact: 'தொடர்பு',
  },
  
  te: {
    home: 'హోమ్',
    liveMap: 'లైవ్ మ్యాప్',
    features: 'ఫీచర్లు',
    login: 'లాగిన్',
    heroTitle: 'ఏకీకృత సముద్ర ప్రమాద రిపోర్టింగ్',
    heroSubtitle: 'సముద్ర భద్రత మరియు సముద్ర పరిరక్షణ కోసం నిజ-సమయ పర్యవేక్షణ మరియు పౌర-నడిచే రిపోర్టింగ్',
    reportHazard: 'ప్రమాదాన్ని నివేదించండి',
    reportModalTitle: 'సముద్ర ప్రమాదాన్ని నివేదించండి',
    about: 'గురించి',
    contact: 'సంప్రదించండి',
  },
  
  ur: {
    home: 'ہوم',
    liveMap: 'لائیو نقشہ',
    features: 'خصوصیات',
    login: 'لاگ ان',
    heroTitle: 'متحد سمندری خطرہ رپورٹنگ',
    heroSubtitle: 'سمندری حفاظت اور سمندری تحفظ کے لیے حقیقی وقت کی نگرانی اور شہریوں کی جانب سے رپورٹنگ',
    reportHazard: 'خطرے کی اطلاع دیں',
    reportModalTitle: 'سمندری خطرے کی اطلاع دیں',
    about: 'کے بارے میں',
    contact: 'رابطہ',
  },
  
  or: {
    home: 'ଘର',
    liveMap: 'ଜୀବନ୍ତ ମାନଚିତ୍ର',
    features: 'ବିଶେଷତା',
    login: 'ଲଗଇନ୍',
    heroTitle: 'ଏକୀଭୂତ ସମୁଦ୍ର ବିପଦ ରିପୋର୍ଟିଂ',
    heroSubtitle: 'ସମୁଦ୍ର ସୁରକ୍ଷା ଏବଂ ସାମୁଦ୍ରିକ ସଂରକ୍ଷଣ ପାଇଁ ପ୍ରକୃତ-ସମୟ ନିରୀକ୍ଷଣ ଏବଂ ନାଗରିକ-ଚାଳିତ ରିପୋର୍ଟିଂ',
    reportHazard: 'ବିପଦ ରିପୋର୍ଟ କରନ୍ତୁ',
    reportModalTitle: 'ସମୁଦ୍ର ବିପଦ ରିପୋର୍ଟ କରନ୍ତୁ',
    about: 'ବିଷୟରେ',
    contact: 'ଯୋଗାଯୋଗ',
  },
};

export const getTranslation = (language: Language, key: string): string => {
  const translation = translations[language];
  return (translation as any)[key] || translations.en[key as keyof typeof translations.en] || key;
};