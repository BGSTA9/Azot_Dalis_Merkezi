import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface Translations {
  // Navigation
  home: string;
  about: string;
  courses: string;
  diveSites: string;
  instructors: string;
  pricing: string;
  contact: string;
  instructorLogin: string;
  bookYourDive: string;

  // Hero
  badgeText: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroDescription: string;
  exploreCourses: string;
  scrollToExplore: string;

  // Stats
  divesLogged: string;
  certifiedDivers: string;
  diveSitesCount: string;
  yearsExperience: string;

  // Services
  servicesTitle: string;
  servicesDescription: string;
  scubaCourses: string;
  scubaCoursesDesc: string;
  dailyDiving: string;
  dailyDivingDesc: string;
  equipmentRental: string;
  equipmentRentalDesc: string;
  privateTours: string;
  privateToursDesc: string;

  // Featured Dive Sites
  featuredSitesTitle: string;
  featuredSitesDescription: string;
  viewAllSites: string;
  depth: string;

  // Why Choose Us
  whyChooseTitle: string;
  whyChooseDescription: string;
  expertInstructors: string;
  expertInstructorsDesc: string;
  smallGroups: string;
  smallGroupsDesc: string;
  qualityEquipment: string;
  qualityEquipmentDesc: string;
  marineConservation: string;
  marineConservationDesc: string;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  startAdventure: string;

  // Footer
  explore: string;
  certifications: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  footerDescription: string;
  scubaCoursesLink: string;
  diveSitesLink: string;
  ourTeamLink: string;
  pricingLink: string;
  aboutUsLink: string;
  weekdays: string;
  weekends: string;

  // Courses Page
  coursesPageTitle: string;
  coursesPageDescription: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  professional: string;
  duration: string;
  prerequisites: string;
  whatsIncluded: string;
  bookThisCourse: string;
  notSureWhichCourse: string;
  letUsHelpYouChoose: string;
  letUsHelpDescription: string;
  contactOurTeam: string;
  scubaCoursesPage: string;
  yourJourneyStartsHere: string;
  coursesPageDesc: string;
  certification: string;

  // Instructors Page
  ourTeam: string;
  meetOurInstructors: string;
  instructorsDescription: string;
  experience: string;
  joinOurTeam: string;
  becomeAnInstructor: string;
  joinTeamDescription: string;
  contactUsAboutOpportunities: string;

  // Pricing Page
  transparentPricing: string;
  pricingDescription: string;
  mostPopular: string;
  perPerson: string;
  bookNow: string;
  equipment: string;
  equipmentDescription: string;
  importantInformation: string;
  equipmentRentalSection: string;
  maskSnorkel: string;
  wetsuit: string;
  bcdRegulator: string;
  diveComputer: string;
  finsBoots: string;
  underwaterCamera: string;
  priceNote1: string;
  priceNote2: string;
  priceNote3: string;
  priceNote4: string;
  priceNote5: string;
  priceNote6: string;

  // About Page
  ourStory: string;
  aboutHeroTitle: string;
  aboutDescription: string;
  ourMission: string;
  missionDescription: string;
  ourValues: string;
  aboutMissionTitle: string;
  aboutMissionP1: string;
  aboutMissionP2: string;
  aboutMissionP3: string;
  yearsOfExcellence: string;
  passion: string;
  passionDesc: string;
  excellence: string;
  excellenceDesc: string;
  safety: string;
  safetyDesc: string;
  community: string;
  communityDesc: string;
  whatDrivesUs: string;
  valuesSectionDesc: string;
  conservation: string;
  conservationTitle: string;
  conservationP1: string;
  conservationP2: string;

  // Contact Page
  getInTouch: string;
  contactDescription: string;
  sendMessage: string;
  yourName: string;
  yourEmail: string;
  phone: string;
  subject: string;
  message: string;
  sendInquiry: string;
  contactUs: string;
  letsStartAdventure: string;
  contactPageDesc: string;
  location: string;
  hours: string;
  followUs: string;
  sendUsMessage: string;
  emailAddress: string;
  phoneNumber: string;
  courseInquiry: string;
  messagePlaceholder: string;
  sending: string;
  messageSent: string;
  messageThankYou: string;
  findUs: string;

  // Dive Sites Page
  discoverParadise: string;
  diveSitesPageDesc: string;
  highlights: string;
  marineLife: string;
  level: string;
  locationSection: string;
  findUsAegean: string;
  findUsAegeanDesc: string;

  // Login Page
  accessDiveLogs: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  signingIn: string;
  signIn: string;
  notInstructor: string;
  joinTeam: string;
  backToHome: string;
  authRequired: string;
  connectBackend: string;
  emailValidation: string;
  passwordValidation: string;
  nameValidation: string;
  subjectValidation: string;
  messageValidation: string;

  // NotFound Page
  pageNotFound: string;
  returnHome: string;

  // Common
  learnMore: string;
  viewDetails: string;
  perDay: string;
}

const translations: Record<Language, Translations> = {
  tr: {
    // Navigation
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    courses: 'Kurslar',
    diveSites: 'Dalış Noktaları',
    instructors: 'Eğitmenler',
    pricing: 'Fiyatlar',
    contact: 'İletişim',
    instructorLogin: 'Eğitmen Girişi',
    bookYourDive: 'Dalış Rezervasyonu',

    // Hero
    badgeText: 'Azot Dalış Merkezi',
    heroTitle1: 'Sualtı',
    heroTitle2: 'Harikalarını',
    heroTitle3: 'Keşfedin',
    heroDescription: 'İlk nefesten profesyonel ustalığa—güvenebileceğiniz uzmanlarla maceraya dalın. Ege Denizi\'nin büyüsünü yaşayın.',
    exploreCourses: 'Kursları Keşfet',
    scrollToExplore: 'Keşfetmek için kaydır',

    // Stats
    divesLogged: 'Kayıtlı Dalış',
    certifiedDivers: 'Sertifikalı Dalgıç',
    diveSitesCount: 'Dalış Noktası',
    yearsExperience: 'Yıl Deneyim',

    // Services
    servicesTitle: 'Hizmetlerimiz',
    servicesDescription: 'Yeni başlayandan profesyonele, her seviyede dalgıç için kapsamlı dalış hizmetleri.',
    scubaCourses: 'Tüplü Dalış Kursları',
    scubaCoursesDesc: 'CMAS/TSSF, SSI ve RAID sertifikasyonlarıyla temel seviyeden profesyonel seviyeye kurslar.',
    dailyDiving: 'Günlük Dalış Turları',
    dailyDivingDesc: 'Deneyimli rehberlerimizle yerel resifler ve batıklarda günlük tekne dalışları.',
    equipmentRental: 'Ekipman Kiralama',
    equipmentRentalDesc: 'Her dalış için bakımlı, premium kalite dalış ekipmanları.',
    privateTours: 'Özel Turlar',
    privateToursDesc: 'Dalış gruplarına ve özel isteklere yönelik özelleştirilmiş deneyimler.',

    // Featured Dive Sites
    featuredSitesTitle: 'Öne Çıkan Dalış Noktaları',
    featuredSitesDescription: 'Ege\'nin en iyi sualtı lokasyonlarını keşfedin.',
    viewAllSites: 'Tüm Noktaları Gör',
    depth: 'Derinlik',

    // Why Choose Us
    whyChooseTitle: 'Neden Bizi Seçmelisiniz?',
    whyChooseDescription: 'Güvenliğiniz ve memnuniyetiniz her zaman önceliğimizdir.',
    expertInstructors: 'Uzman Eğitmenler',
    expertInstructorsDesc: 'Onlarca yıl deneyime ve binlerce dalışa sahip sertifikalı profesyoneller.',
    smallGroups: 'Küçük Gruplar',
    smallGroupsDesc: 'Kişiselleştirilmiş eğitim ve daha fazla bireysel ilgi için küçük gruplar.',
    qualityEquipment: 'Kaliteli Ekipman',
    qualityEquipmentDesc: 'Düzenli olarak bakımı yapılan, en son teknoloji dalış ekipmanları.',
    marineConservation: 'Deniz Koruma',
    marineConservationDesc: 'Okyanuslarımızı gelecek nesiller için korumaya kararlıyız.',

    // CTA
    ctaTitle: 'Sualtı Maceranıza Başlayın',
    ctaDescription: 'İlk dalışınız olsun ya da bir sonraki sertifikanız, size rehberlik etmeye hazırız.',
    startAdventure: 'Maceraya Başla',

    // Footer
    explore: 'Keşfet',
    certifications: 'Sertifikasyonlar',
    allRightsReserved: 'Tüm hakları saklıdır.',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfService: 'Kullanım Şartları',
    footerDescription: 'Mavi Evimizin Derinliklerini Keşfetmek. Ege\'nin kalbinde sualtı maceraları ve deniz korumanız için kapınız.',
    scubaCoursesLink: 'Tüplü Dalış Kursları',
    diveSitesLink: 'Dalış Noktaları',
    ourTeamLink: 'Ekibimiz',
    pricingLink: 'Fiyatlar',
    aboutUsLink: 'Hakkımızda',
    weekdays: 'Hafta içi',
    weekends: 'Hafta sonu',

    // Courses Page
    coursesPageTitle: 'Dalış Yolculuğunuz Burada Başlar',
    coursesPageDescription: 'CMAS/TSSF, SSI ve RAID programlarıyla temel seviyeden profesyonel sertifikalara kadar uzman eğitmenlerimiz her adımda yanınızda.',
    beginner: 'Başlangıç',
    intermediate: 'Orta Seviye',
    advanced: 'İleri Seviye',
    professional: 'Profesyonel',
    duration: 'Süre',
    prerequisites: 'Ön Koşullar',
    whatsIncluded: 'Neler Dahil',
    bookThisCourse: 'Bu Kursu Rezerve Et',
    notSureWhichCourse: 'Hangi Kursu Seçeceğinize Emin Değil Misiniz?',
    letUsHelpYouChoose: 'Size Yardımcı Olalım',
    letUsHelpDescription: 'Ekibimiz deneyim seviyenizi ve hedeflerinizi değerlendirerek size en uygun kursu önermekten mutluluk duyar.',
    contactOurTeam: 'Ekibimizle İletişime Geçin',
    scubaCoursesPage: 'Dalış Kursları',
    yourJourneyStartsHere: 'Yolculuğunuz Burada Başlar',
    coursesPageDesc: 'İlk sualtı nefesinizden profesyonel sertifikalara kadar, uzman eğitmenlerimiz CMAS/TSSF, SSI ve RAID programlarıyla her adımda yanınızda.',
    certification: 'Sertifika',

    // Instructors Page
    ourTeam: 'Ekibimiz',
    meetOurInstructors: 'Uzman Eğitmenlerimizle Tanışın',
    instructorsDescription: 'Binlerce dalış ve onlarca yıl deneyime sahip tutkulu profesyoneller. Güvenliğiniz ve gelişiminiz en iyi ellerde.',
    experience: 'Deneyim',
    joinOurTeam: 'Ekibimize Katılın',
    becomeAnInstructor: 'AZOT Eğitmeni Olun',
    joinTeamDescription: 'Yeni fırsatlar arayan sertifikalı bir dalış profesyoneli misiniz? Ekibimize katılacak tutkulu bireyler arıyoruz.',
    contactUsAboutOpportunities: 'Fırsatlar Hakkında Bize Ulaşın',

    // Pricing Page
    transparentPricing: 'Şeffaf Fiyatlandırma',
    pricingDescription: 'Gizli ücret yok. İnanılmaz bir dalış deneyimi için ihtiyacınız olan her şey adil, rekabetçi fiyatlarla.',
    mostPopular: 'En Popüler',
    perPerson: '/ kişi başı',
    bookNow: 'Şimdi Rezerve Et',
    equipment: 'Ekipman',
    equipmentDescription: 'Kendi ekipmanınız yok mu? Sorun değil. Kiralık yüksek kaliteli, bakımlı ekipmanlarımız var.',
    importantInformation: 'Önemli Bilgiler',
    equipmentRentalSection: 'Ekipman Kiralama',
    maskSnorkel: 'Maske & Şnorkel',
    wetsuit: 'Dalış Elbisesi (3mm/5mm)',
    bcdRegulator: 'BCD & Regülatör',
    diveComputer: 'Dalış Bilgisayarı',
    finsBoots: 'Palet & Patik',
    underwaterCamera: 'Sualtı Kamerası',
    priceNote1: 'Tüm fiyatlar Euro (€) cinsindendir ve geçerli vergileri içerir.',
    priceNote2: 'Sertifikalı dalgıçlar dalış öncesi geçerli sertifikalarını ibraz etmelidir.',
    priceNote3: 'Fiyatlara tekne transferleri, tüpler, ağırlıklar ve dalış rehberi dahildir.',
    priceNote4: 'Birlikte rezervasyon yapan 4+ dalgıç için grup indirimi mevcuttur.',
    priceNote5: 'İptal politikası: 48+ saat önceden iptal durumunda tam iade.',
    priceNote6: 'Özel kurslar ve özel paketler talep üzerine mevcuttur.',

    // About Page
    ourStory: 'Hikayemiz',
    aboutHeroTitle: 'Mavi Evimizin Derinliklerini Keşfetmek',
    aboutDescription: 'Ege\'nin kalbinde kurulan AZOT Dalış Merkezi, 15 yılı aşkın süredir bireyleri güvenli, yetkin ve tutkulu sualtı elçilerine dönüştürüyor.',
    ourMission: 'Misyonumuz',
    missionDescription: 'Her bireyi güvenli bir şekilde sualtı dünyasında ustalaştırmak için güçlendirmek.',
    ourValues: 'Değerlerimiz',
    aboutMissionTitle: 'Her Bireyi Derinliklerde Ustalaştırmak İçin Güçlendirmek',
    aboutMissionP1: 'Misyonumuz, cinsiyet, renk, etnik köken, inanç veya yaştan bağımsız olarak her bireyin güvenle derinliklerde ustalaşabileceği küresel bir topluluk oluşturmaktır.',
    aboutMissionP2: 'Sualtı dünyasının herkese ait olduğuna inanıyoruz. Dünya standartlarında eğitim, çevre eğitimi ve unutulmaz deneyimlerle, mavi gezegenimizi keşfetme ve koruma tutkusuyla birleşmiş çeşitli elçilerden oluşan bir topluluk oluşturuyoruz.',
    aboutMissionP3: 'İlk sualtı nefesinizden profesyonel seviye sertifikalarına kadar, bu inanılmaz yolculuğunuzda güvenilir ortağınız olmaya kararlıyız.',
    yearsOfExcellence: 'Yıllık Mükemmellik',
    passion: 'Tutku',
    passionDesc: 'Dalışla yaşıyor ve soluyoruz. Her sıçrama, her kabarcık, deniz yaşamıyla her karşılaşma bağlılığımızı besliyor.',
    excellence: 'Mükemmellik',
    excellenceDesc: 'Ekipman bakımından eğitim kalitesine kadar, operasyonlarımızın her alanında mükemmelliği takip ediyoruz.',
    safety: 'Güvenlik',
    safetyDesc: 'Güvenliğiniz en büyük önceliğimizdir. Titiz protokolleri sürdürüyor ve standartlardan asla ödün vermiyoruz.',
    community: 'Topluluk',
    communityDesc: 'Okyanuslarımızı keşfetme ve koruma tutkusuyla birleşmiş küresel bir dalgıç topluluğu oluşturuyoruz.',
    whatDrivesUs: 'Bizi Ne Yönlendiriyor',
    valuesSectionDesc: 'Bu temel değerler, yeni dalgıçları eğitmekten deniz ekosistemlerini korumaya kadar yaptığımız her şeye rehberlik ediyor.',
    conservation: 'Koruma',
    conservationTitle: 'Sualtı Mirasımızı Korumak',
    conservationP1: 'Her dalgıcın keşfettiği sualtı ortamlarını koruma sorumluluğu olduğuna inanıyoruz. Bu nedenle koruma, öğrettiğimiz her kursa dahil edilmiştir.',
    conservationP2: 'Girişimlerimiz arasında düzenli resif temizlikleri, deniz yaşamı izleme programlarına katılım ve yerel koruma kuruluşlarıyla ortaklıklar yer almaktadır. Mavi gezegenimizin elçileri olmaktan gurur duyuyoruz.',

    // Contact Page
    getInTouch: 'İletişime Geçin',
    contactDescription: 'Sorularınız mı var? Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.',
    sendMessage: 'Mesaj Gönder',
    yourName: 'Adınız',
    yourEmail: 'E-posta Adresiniz',
    phone: 'Telefon',
    subject: 'Konu',
    message: 'Mesaj',
    sendInquiry: 'Sorgu Gönder',
    contactUs: 'İletişim',
    letsStartAdventure: 'Maceranıza Başlayalım',
    contactPageDesc: 'Sorularınız mı var? Rezervasyon yapmaya hazır mısınız? Mükemmel dalış deneyiminizi planlamanıza yardımcı olmak için buradayız.',
    location: 'Konum',
    hours: 'Çalışma Saatleri',
    followUs: 'Bizi Takip Edin',
    sendUsMessage: 'Bize Mesaj Gönderin',
    emailAddress: 'E-posta Adresi',
    phoneNumber: 'Telefon Numarası',
    courseInquiry: 'Kurs sorgusu',
    messagePlaceholder: 'Dalış deneyiminizi, ziyaret etmek istediğiniz tarihi ve sorularınızı yazın...',
    sending: 'Gönderiliyor...',
    messageSent: 'Mesaj Gönderildi!',
    messageThankYou: 'Sorgunuz için teşekkür ederiz. 24 saat içinde size geri döneceğiz.',
    findUs: 'Bizi Bulun',

    // Dive Sites Page
    discoverParadise: 'Sualtı Cennetimizi Keşfedin',
    diveSitesPageDesc: 'Canlı mercan bahçelerinden gizemli batıklara kadar, Ege Denizi\'nin çeşitli sualtı manzaralarını keşfedin.',
    highlights: 'Öne Çıkanlar',
    marineLife: 'Deniz Yaşamı',
    level: 'Seviye',
    locationSection: 'Konum',
    findUsAegean: 'Ege\'nin Kalbinde Bizi Bulun',
    findUsAegeanDesc: 'Dalış noktalarımız, Türkiye\'nin en iyi dalışlarına kolay erişim sunan muhteşem Marmara kıyılarında yer almaktadır.',

    // Login Page
    accessDiveLogs: 'Dalış kayıtlarınıza ve programlarınıza erişin',
    password: 'Şifre',
    rememberMe: 'Beni hatırla',
    forgotPassword: 'Şifremi unuttum?',
    signingIn: 'Giriş yapılıyor...',
    signIn: 'Giriş Yap',
    notInstructor: 'Eğitmen değil misiniz?',
    joinTeam: 'ekibimize katılmak için bize ulaşın.',
    backToHome: '← Ana Sayfaya Dön',
    authRequired: 'Kimlik Doğrulama Gerekli',
    connectBackend: 'Eğitmen girişini etkinleştirmek için lütfen bir backend bağlayın.',
    emailValidation: 'Lütfen geçerli bir e-posta adresi girin',
    passwordValidation: 'Şifre en az 6 karakter olmalıdır',
    nameValidation: 'Ad en az 2 karakter olmalıdır',
    subjectValidation: 'Konu en az 5 karakter olmalıdır',
    messageValidation: 'Mesaj en az 10 karakter olmalıdır',

    // NotFound Page
    pageNotFound: 'Sayfa bulunamadı',
    returnHome: 'Ana Sayfaya Dön',

    // Common
    learnMore: 'Daha Fazla Bilgi',
    viewDetails: 'Detayları Gör',
    perDay: '/gün',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    diveSites: 'Dive Sites',
    instructors: 'Instructors',
    pricing: 'Pricing',
    contact: 'Contact',
    instructorLogin: 'Instructor Login',
    bookYourDive: 'Book Your Dive',

    // Hero
    badgeText: 'Azot Dive Center',
    heroTitle1: 'Unveil the',
    heroTitle2: 'Underwater',
    heroTitle3: 'Wonders',
    heroDescription: 'From your first breath underwater to professional mastery—dive into adventure with experts you can trust. Experience the magic of the Aegean Sea.',
    exploreCourses: 'Explore Courses',
    scrollToExplore: 'Scroll to explore',

    // Stats
    divesLogged: 'Dives Logged',
    certifiedDivers: 'Certified Divers',
    diveSitesCount: 'Dive Sites',
    yearsExperience: 'Years Experience',

    // Services
    servicesTitle: 'Our Services',
    servicesDescription: 'Comprehensive diving services for divers of all levels, from beginners to professionals.',
    scubaCourses: 'Scuba Courses',
    scubaCoursesDesc: 'From beginner to professional levels with CMAS/TSSF, SSI and RAID certifications.',
    dailyDiving: 'Daily Diving Trips',
    dailyDivingDesc: 'Daily boat dives at local reefs and wrecks with our experienced guides.',
    equipmentRental: 'Equipment Rental',
    equipmentRentalDesc: 'Well-maintained, premium quality diving equipment for every dive.',
    privateTours: 'Private Tours',
    privateToursDesc: 'Customized experiences for dive groups and special requests.',

    // Featured Dive Sites
    featuredSitesTitle: 'Featured Dive Sites',
    featuredSitesDescription: 'Discover the best underwater locations in the Aegean.',
    viewAllSites: 'View All Sites',
    depth: 'Depth',

    // Why Choose Us
    whyChooseTitle: 'Why Choose Us?',
    whyChooseDescription: 'Your safety and satisfaction are always our priority.',
    expertInstructors: 'Expert Instructors',
    expertInstructorsDesc: 'Certified professionals with decades of experience and thousands of dives.',
    smallGroups: 'Small Groups',
    smallGroupsDesc: 'Small groups for personalized training and more individual attention.',
    qualityEquipment: 'Quality Equipment',
    qualityEquipmentDesc: 'Regularly maintained, state-of-the-art diving equipment.',
    marineConservation: 'Marine Conservation',
    marineConservationDesc: 'Committed to protecting our oceans for future generations.',

    // CTA
    ctaTitle: 'Start Your Underwater Adventure',
    ctaDescription: 'Whether it\'s your first dive or your next certification, we\'re ready to guide you.',
    startAdventure: 'Start Your Adventure',

    // Footer
    explore: 'Explore',
    certifications: 'Certifications',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    footerDescription: 'Exploring The Depth Of Our Blue Home. Your gateway to underwater adventures and marine conservation in the heart of the Aegean.',
    scubaCoursesLink: 'Scuba Courses',
    diveSitesLink: 'Dive Sites',
    ourTeamLink: 'Our Team',
    pricingLink: 'Pricing',
    aboutUsLink: 'About Us',
    weekdays: 'Weekdays',
    weekends: 'Weekends',

    // Courses Page
    coursesPageTitle: 'Your Journey Starts Here',
    coursesPageDescription: 'From your first underwater breath to professional certifications, our expert instructors guide you every step of the way with CMAS/TSSF, SSI and RAID programs.',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    professional: 'Professional',
    duration: 'Duration',
    prerequisites: 'Prerequisites',
    whatsIncluded: "What's Included",
    bookThisCourse: 'Book This Course',
    notSureWhichCourse: 'Not Sure Which Course?',
    letUsHelpYouChoose: 'Let Us Help You Choose',
    letUsHelpDescription: 'Our team is happy to assess your experience level and goals to recommend the perfect course for you.',
    contactOurTeam: 'Contact Our Team',
    scubaCoursesPage: 'Scuba Courses',
    yourJourneyStartsHere: 'Your Journey Starts Here',
    coursesPageDesc: 'From your first underwater breath to professional certifications, our expert instructors guide you every step of the way with CMAS/TSSF, SSI and RAID programs.',
    certification: 'Certification',

    // Instructors Page
    ourTeam: 'Our Team',
    meetOurInstructors: 'Meet Our Expert Instructors',
    instructorsDescription: 'Passionate professionals with thousands of dives and decades of combined experience. Your safety and growth are in the best hands.',
    experience: 'Experience',
    joinOurTeam: 'Join Our Team',
    becomeAnInstructor: 'Become an AZOT Instructor',
    joinTeamDescription: 'Are you a certified diving professional looking for new opportunities? We\'re always looking for passionate individuals to join our team.',
    contactUsAboutOpportunities: 'Contact Us About Opportunities',

    // Pricing Page
    transparentPricing: 'Transparent Pricing',
    pricingDescription: 'No hidden fees. Everything you need for an incredible diving experience at fair, competitive prices.',
    mostPopular: 'Most Popular',
    perPerson: '/ per person',
    bookNow: 'Book Now',
    equipment: 'Equipment',
    equipmentDescription: "Don't have your own gear? No problem. We offer high-quality, well-maintained equipment for rent.",
    importantInformation: 'Important Information',
    equipmentRentalSection: 'Equipment Rental',
    maskSnorkel: 'Mask & Snorkel',
    wetsuit: 'Wetsuit (3mm/5mm)',
    bcdRegulator: 'BCD & Regulator',
    diveComputer: 'Dive Computer',
    finsBoots: 'Fins & Boots',
    underwaterCamera: 'Underwater Camera',
    priceNote1: 'All prices are in Euros (€) and include applicable taxes.',
    priceNote2: 'Certified divers must present valid certification cards before diving.',
    priceNote3: 'Prices include boat transfers, tanks, weights, and dive guide.',
    priceNote4: 'Group discounts available for 4+ divers booking together.',
    priceNote5: 'Cancellation policy: Full refund if cancelled 48+ hours in advance.',
    priceNote6: 'Private courses and custom packages available upon request.',

    // About Page
    ourStory: 'Our Story',
    aboutHeroTitle: 'Exploring The Depth Of Our Blue Home',
    aboutDescription: 'Founded in the heart of the Aegean, AZOT Diving Center has been transforming individuals into safe, competent, and passionate underwater ambassadors for over 15 years.',
    ourMission: 'Our Mission',
    missionDescription: 'To empower every individual to safely master the underwater world.',
    ourValues: 'Our Values',
    aboutMissionTitle: 'Empowering Every Individual to Master the Deep',
    aboutMissionP1: 'Our mission is to create a global community where every individual—regardless of gender, color, ethnicity, belief, or age—is empowered to safely master the deep.',
    aboutMissionP2: 'We believe that the underwater world belongs to everyone. Through world-class training, environmental education, and unforgettable experiences, we foster a diverse community of ambassadors united by a shared passion for exploring and protecting our blue planet.',
    aboutMissionP3: 'From your very first breath underwater to achieving professional-level certifications, we\'re committed to being your trusted partner on this incredible journey.',
    yearsOfExcellence: 'Years of Excellence',
    passion: 'Passion',
    passionDesc: 'We live and breathe diving. Every splash, every bubble, every encounter with marine life fuels our dedication.',
    excellence: 'Excellence',
    excellenceDesc: 'From equipment maintenance to instruction quality, we pursue excellence in every aspect of our operations.',
    safety: 'Safety',
    safetyDesc: 'Your safety is our top priority. We maintain rigorous protocols and never compromise on standards.',
    community: 'Community',
    communityDesc: 'We foster a global community of divers united by a shared passion for exploring and protecting our oceans.',
    whatDrivesUs: 'What Drives Us',
    valuesSectionDesc: 'These core values guide everything we do, from training new divers to protecting marine ecosystems.',
    conservation: 'Conservation',
    conservationTitle: 'Protecting Our Underwater Heritage',
    conservationP1: 'We believe that every diver has a responsibility to protect the underwater environments they explore. That\'s why conservation is woven into every course we teach.',
    conservationP2: 'Our initiatives include regular reef cleanups, participation in marine life monitoring programs, and partnerships with local conservation organizations. We\'re proud to be ambassadors for our blue planet.',

    // Contact Page
    getInTouch: 'Get In Touch',
    contactDescription: 'Have questions? Contact us and we\'ll be happy to help.',
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    phone: 'Phone',
    subject: 'Subject',
    message: 'Message',
    sendInquiry: 'Send Inquiry',
    contactUs: 'Contact Us',
    letsStartAdventure: 'Let\'s Start Your Adventure',
    contactPageDesc: 'Have questions? Ready to book? We\'re here to help you plan your perfect diving experience.',
    location: 'Location',
    hours: 'Hours',
    followUs: 'Follow Us',
    sendUsMessage: 'Send Us a Message',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    courseInquiry: 'Course inquiry',
    messagePlaceholder: 'Tell us about your diving experience, when you\'d like to visit, and any questions you have...',
    sending: 'Sending...',
    messageSent: 'Message Sent!',
    messageThankYou: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',
    findUs: 'Find Us',

    // Dive Sites Page
    discoverParadise: 'Discover Our Underwater Paradise',
    diveSitesPageDesc: 'From vibrant coral gardens to mysterious shipwrecks, explore the diverse underwater landscapes of the Aegean Sea.',
    highlights: 'Highlights',
    marineLife: 'Marine Life',
    level: 'Level',
    locationSection: 'Location',
    findUsAegean: 'Find Us in the Heart of the Aegean',
    findUsAegeanDesc: 'Our dive sites are located along the stunning Marmara coastline, offering easy access to some of Turkey\'s best diving.',

    // Login Page
    accessDiveLogs: 'Access your dive logs and schedules',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signingIn: 'Signing in...',
    signIn: 'Sign In',
    notInstructor: 'Not an instructor?',
    joinTeam: 'Contact us to join our team.',
    backToHome: '← Back to Homepage',
    authRequired: 'Authentication Required',
    connectBackend: 'Please connect a backend to enable instructor login.',
    emailValidation: 'Please enter a valid email address',
    passwordValidation: 'Password must be at least 6 characters',
    nameValidation: 'Name must be at least 2 characters',
    subjectValidation: 'Subject must be at least 5 characters',
    messageValidation: 'Message must be at least 10 characters',

    // NotFound Page
    pageNotFound: 'Oops! Page not found',
    returnHome: 'Return to Home',

    // Common
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    perDay: '/day',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
