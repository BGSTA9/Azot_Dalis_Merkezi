export interface DiveSite {
  id: string;
  name: string;
  description: string;
  depth: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  highlights: string[];
  marineLife: string[];
  image: string;
}

export interface Course {
  id: string;
  name: string;
  nameTr: string;
  certification: 'CMAS/TSSF' | 'SSI' | 'RAID';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  durationTr: string;
  price: number;
  description: string;
  descriptionTr: string;
  includes: string[];
  includesTr: string[];
  prerequisites?: string;
  prerequisitesTr?: string;
  image: string;
}

export interface Instructor {
  id: string;
  role: string;
  roleTr: string;
  certifications: string[];
  experience: string;
  experienceTr: string;
  specialties: string[];
  specialtiesTr: string[];
  bio: string;
  bioTr: string;
  languages: string[];
  avatarColor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  nameTr: string;
  price: number;
  description: string;
  descriptionTr: string;
  features: string[];
  featuresTr: string[];
  popular?: boolean;
}

export const diveSites: DiveSite[] = [
  {
    id: 'blue-cave',
    name: 'Blue Cave',
    description: 'A stunning underwater cave system with crystal-clear blue waters and mesmerizing light effects. Perfect for experiencing the magical interplay of sunlight and water.',
    depth: '5-18m',
    difficulty: 'Beginner',
    highlights: ['Natural light show', 'Cave formations', 'Photo opportunities'],
    marineLife: ['Groupers', 'Moray eels', 'Octopus'],
    image: '/dive-sites/blue-cave.jpg'
  },
  {
    id: 'coral-garden',
    name: 'Coral Garden',
    description: 'A vibrant reef ecosystem teeming with colorful hard and soft corals, creating a underwater paradise for marine life and divers alike.',
    depth: '8-25m',
    difficulty: 'Beginner',
    highlights: ['Pristine coral formations', 'Abundant fish life', 'Clear visibility'],
    marineLife: ['Clownfish', 'Parrotfish', 'Sea turtles', 'Reef sharks'],
    image: '/dive-sites/coral-garden.jpg'
  },
  {
    id: 'ancient-wreck',
    name: 'Ancient Shipwreck',
    description: 'Explore the remains of a historic cargo vessel resting on the sandy bottom, now home to diverse marine ecosystems and full of mystery.',
    depth: '22-35m',
    difficulty: 'Advanced',
    highlights: ['Historical artifacts', 'Intact hull sections', 'Technical diving'],
    marineLife: ['Barracuda', 'Lionfish', 'Giant groupers'],
    image: '/dive-sites/wreck.jpg'
  },
  {
    id: 'dolphin-point',
    name: 'Dolphin Point',
    description: 'A deep wall dive known for regular dolphin encounters and pelagic visitors. The dramatic drop-off creates an unforgettable diving experience.',
    depth: '15-40m',
    difficulty: 'Intermediate',
    highlights: ['Dolphin encounters', 'Wall diving', 'Pelagic species'],
    marineLife: ['Dolphins', 'Eagle rays', 'Tuna', 'Hammerhead sharks'],
    image: '/dive-sites/dolphin-point.jpg'
  },
  {
    id: 'turtle-bay',
    name: 'Turtle Bay',
    description: 'A protected sanctuary where sea turtles come to feed and rest. This gentle dive site offers incredible opportunities to observe these majestic creatures up close.',
    depth: '6-15m',
    difficulty: 'Beginner',
    highlights: ['Turtle encounters', 'Seagrass meadows', 'Peaceful atmosphere'],
    marineLife: ['Green turtles', 'Hawksbill turtles', 'Stingrays'],
    image: '/dive-sites/turtle-bay.jpg'
  },
  {
    id: 'pinnacle-reef',
    name: 'The Pinnacle',
    description: 'An underwater mountain rising from the depths, creating strong currents that attract large pelagic fish and offer thrilling drift diving opportunities.',
    depth: '18-45m',
    difficulty: 'Advanced',
    highlights: ['Drift diving', 'Large pelagics', 'Dramatic topography'],
    marineLife: ['Manta rays', 'Whale sharks (seasonal)', 'Schools of jacks'],
    image: '/dive-sites/pinnacle.jpg'
  }
];

export const courses: Course[] = [
  // CMAS/TSSF Courses
  {
    id: 'cmas-1-star',
    name: 'CMAS 1 Star Diver',
    nameTr: 'CMAS 1 Yıldız Dalgıç',
    certification: 'CMAS/TSSF',
    level: 'Beginner',
    duration: '4-5 days',
    durationTr: '4-5 gün',
    price: 400,
    description: 'The entry-level certification for scuba diving. Learn fundamental diving skills and safety procedures to dive up to 20 meters with a buddy.',
    descriptionTr: 'Tüplü dalış için giriş seviyesi sertifikası. Bir arkadaşla 20 metreye kadar dalış yapmak için temel dalış becerilerini ve güvenlik prosedürlerini öğrenin.',
    includes: ['Theory lessons', 'Pool training', '4 open water dives', 'CMAS certification', 'All equipment'],
    includesTr: ['Teori dersleri', 'Havuz eğitimi', '4 açık su dalışı', 'CMAS sertifikası', 'Tüm ekipman'],
    image: '/courses/cmas-1.jpg'
  },
  {
    id: 'cmas-2-star',
    name: 'CMAS 2 Star Diver',
    nameTr: 'CMAS 2 Yıldız Dalgıç',
    certification: 'CMAS/TSSF',
    level: 'Intermediate',
    duration: '3-4 days',
    durationTr: '3-4 gün',
    price: 450,
    description: 'Expand your diving skills with deeper dives, navigation, and rescue techniques. Dive up to 30 meters independently.',
    descriptionTr: 'Daha derin dalışlar, navigasyon ve kurtarma teknikleriyle dalış becerilerinizi geliştirin. 30 metreye kadar bağımsız dalış yapın.',
    includes: ['Advanced theory', '5 training dives', 'Navigation skills', 'Rescue basics', 'CMAS certification'],
    includesTr: ['İleri teori', '5 eğitim dalışı', 'Navigasyon becerileri', 'Kurtarma temelleri', 'CMAS sertifikası'],
    prerequisites: 'CMAS 1 Star + 25 logged dives',
    prerequisitesTr: 'CMAS 1 Yıldız + 25 kayıtlı dalış',
    image: '/courses/cmas-2.jpg'
  },
  {
    id: 'cmas-3-star',
    name: 'CMAS 3 Star Diver',
    nameTr: 'CMAS 3 Yıldız Dalgıç',
    certification: 'CMAS/TSSF',
    level: 'Advanced',
    duration: '5-6 days',
    durationTr: '5-6 gün',
    price: 600,
    description: 'The highest recreational diving certification. Master advanced techniques, dive planning, and group leadership. Dive up to 40 meters.',
    descriptionTr: 'En yüksek rekreasyonel dalış sertifikası. İleri tekniklerde, dalış planlamasında ve grup liderliğinde ustalaşın. 40 metreye kadar dalış yapın.',
    includes: ['Expert theory', '6 specialized dives', 'Leadership training', 'Deep diving', 'CMAS certification'],
    includesTr: ['Uzman teorisi', '6 uzmanlaşmış dalış', 'Liderlik eğitimi', 'Derin dalış', 'CMAS sertifikası'],
    prerequisites: 'CMAS 2 Star + 50 logged dives',
    prerequisitesTr: 'CMAS 2 Yıldız + 50 kayıtlı dalış',
    image: '/courses/cmas-3.jpg'
  },
  // SSI Courses
  {
    id: 'ssi-open-water',
    name: 'SSI Open Water Diver',
    nameTr: 'SSI Açık Su Dalgıcı',
    certification: 'SSI',
    level: 'Beginner',
    duration: '4-5 days',
    durationTr: '4-5 gün',
    price: 420,
    description: 'SSI\'s comprehensive entry-level certification. Learn to dive safely and confidently with our experienced SSI instructors.',
    descriptionTr: 'SSI\'ın kapsamlı giriş seviyesi sertifikası. Deneyimli SSI eğitmenlerimizle güvenle ve özgüvenle dalış yapmayı öğrenin.',
    includes: ['Digital learning', 'Pool training', '4 open water dives', 'SSI certification', 'All equipment'],
    includesTr: ['Dijital öğrenme', 'Havuz eğitimi', '4 açık su dalışı', 'SSI sertifikası', 'Tüm ekipman'],
    image: '/courses/ssi-open.jpg'
  },
  {
    id: 'ssi-advanced',
    name: 'SSI Advanced Adventurer',
    nameTr: 'SSI İleri Maceraperest',
    certification: 'SSI',
    level: 'Intermediate',
    duration: '2-3 days',
    durationTr: '2-3 gün',
    price: 380,
    description: 'Experience 5 specialty adventure dives including deep, navigation, and night diving. Perfect for exploring new diving horizons.',
    descriptionTr: 'Derin, navigasyon ve gece dalışı dahil 5 uzmanlık macera dalışı deneyimleyin. Yeni dalış ufuklarını keşfetmek için mükemmel.',
    includes: ['5 adventure dives', 'Deep dive', 'Night dive', 'Navigation', 'SSI certification'],
    includesTr: ['5 macera dalışı', 'Derin dalış', 'Gece dalışı', 'Navigasyon', 'SSI sertifikası'],
    prerequisites: 'SSI Open Water Diver',
    prerequisitesTr: 'SSI Açık Su Dalgıcı',
    image: '/courses/ssi-advanced.jpg'
  },
  {
    id: 'ssi-stress-rescue',
    name: 'SSI Stress & Rescue',
    nameTr: 'SSI Stres ve Kurtarma',
    certification: 'SSI',
    level: 'Advanced',
    duration: '3-4 days',
    durationTr: '3-4 gün',
    price: 450,
    description: 'Learn to prevent and manage diving emergencies. This challenging course will make you a more confident and capable diver.',
    descriptionTr: 'Dalış acil durumlarını önlemeyi ve yönetmeyi öğrenin. Bu zorlu kurs sizi daha güvenli ve yetenekli bir dalgıç yapacaktır.',
    includes: ['Stress management', 'Rescue techniques', 'Emergency scenarios', 'First aid', 'SSI certification'],
    includesTr: ['Stres yönetimi', 'Kurtarma teknikleri', 'Acil durum senaryoları', 'İlk yardım', 'SSI sertifikası'],
    prerequisites: 'SSI Advanced Adventurer',
    prerequisitesTr: 'SSI İleri Maceraperest',
    image: '/courses/ssi-rescue.jpg'
  },
  // RAID Courses
  {
    id: 'raid-open-water',
    name: 'RAID Open Water 20',
    nameTr: 'RAID Açık Su 20',
    certification: 'RAID',
    level: 'Beginner',
    duration: '4-5 days',
    durationTr: '4-5 gün',
    price: 430,
    description: 'RAID\'s modern approach to diver training. Learn essential skills with emphasis on dive planning and self-reliance.',
    descriptionTr: 'RAID\'in dalgıç eğitimine modern yaklaşımı. Dalış planlaması ve özgüvene vurgu yaparak temel becerileri öğrenin.',
    includes: ['Online theory', 'Pool sessions', '4 open water dives', 'RAID certification', 'All equipment'],
    includesTr: ['Çevrimiçi teori', 'Havuz seansları', '4 açık su dalışı', 'RAID sertifikası', 'Tüm ekipman'],
    image: '/courses/raid-open.jpg'
  },
  {
    id: 'raid-advanced-35',
    name: 'RAID Advanced 35',
    nameTr: 'RAID İleri Seviye 35',
    certification: 'RAID',
    level: 'Intermediate',
    duration: '3 days',
    durationTr: '3 gün',
    price: 400,
    description: 'Develop your skills to dive confidently to 35 meters. Includes deep diving, navigation, and buoyancy perfection.',
    descriptionTr: '35 metreye kadar güvenle dalış yapma becerilerinizi geliştirin. Derin dalış, navigasyon ve batma perfeksiyonu dahildir.',
    includes: ['4 training dives', 'Deep diving', 'Perfect buoyancy', 'Navigation', 'RAID certification'],
    includesTr: ['4 eğitim dalışı', 'Derin dalış', 'Mükemmel batma', 'Navigasyon', 'RAID sertifikası'],
    prerequisites: 'RAID Open Water 20',
    prerequisitesTr: 'RAID Açık Su 20',
    image: '/courses/raid-advanced.jpg'
  },
  {
    id: 'raid-rescue',
    name: 'RAID Rescue Diver',
    nameTr: 'RAID Kurtarma Dalgıcı',
    certification: 'RAID',
    level: 'Advanced',
    duration: '3-4 days',
    durationTr: '3-4 gün',
    price: 480,
    description: 'Comprehensive rescue training with modern techniques. Learn to handle emergencies and assist fellow divers.',
    descriptionTr: 'Modern tekniklerle kapsamlı kurtarma eğitimi. Acil durumları yönetmeyi ve diğer dalgıçlara yardım etmeyi öğrenin.',
    includes: ['Rescue scenarios', 'Emergency management', 'Search & recovery', 'First aid', 'RAID certification'],
    includesTr: ['Kurtarma senaryoları', 'Acil durum yönetimi', 'Arama ve kurtarma', 'İlk yardım', 'RAID sertifikası'],
    prerequisites: 'RAID Advanced 35',
    prerequisitesTr: 'RAID İleri Seviye 35',
    image: '/courses/raid-rescue.jpg'
  }
];

export const instructors: Instructor[] = [
  {
    id: 'instructor-1',
    role: 'Dive Center Director & Course Director',
    roleTr: 'Dalış Merkezi Müdürü & Kurs Direktörü',
    certifications: ['CMAS 3 Star Instructor', 'SSI Instructor Trainer', 'RAID Instructor'],
    experience: '20+ years',
    experienceTr: '20+ yıl',
    specialties: ['Technical Diving', 'Cave Diving', 'Underwater Photography'],
    specialtiesTr: ['Teknik Dalış', 'Mağara Dalışı', 'Sualtı Fotoğrafçılığı'],
    bio: 'A true ocean ambassador with over 10,000 logged dives. Founded AZOT Diving Center with a vision to share the beauty of our underwater world while promoting marine conservation.',
    bioTr: '10.000\'den fazla kayıtlı dalışla gerçek bir okyanus elçisi. Deniz korumayı teşvik ederken sualtı dünyamızın güzelliğini paylaşma vizyonuyla AZOT Dalış Merkezi\'ni kurdu.',
    languages: ['Türkçe', 'English', 'Deutsch'],
    avatarColor: 'bg-blue-500'
  },
  {
    id: 'instructor-2',
    role: 'Senior Instructor',
    roleTr: 'Kıdemli Eğitmen',
    certifications: ['CMAS 2 Star Instructor', 'SSI Instructor', 'Nitrox Instructor'],
    experience: '12 years',
    experienceTr: '12 yıl',
    specialties: ['Beginner Training', 'Underwater Naturalist', 'Night Diving'],
    specialtiesTr: ['Başlangıç Eğitimi', 'Sualtı Doğa Bilimi', 'Gece Dalışı'],
    bio: 'Known for patience and enthusiasm, has certified over 2,000 divers. Believes everyone deserves to experience the magic of the underwater world.',
    bioTr: 'Sabrı ve coşkusuyla tanınır, 2.000\'den fazla dalgıcı sertifikalandırmıştır. Herkesin sualtı dünyasının büyüsünü deneyimlemeyi hak ettiğine inanır.',
    languages: ['Türkçe', 'English', 'Français'],
    avatarColor: 'bg-emerald-500'
  },
  {
    id: 'instructor-3',
    role: 'Technical Diving Instructor',
    roleTr: 'Teknik Dalış Eğitmeni',
    certifications: ['TDI Advanced Trimix', 'CMAS 3 Star', 'Cave Diver'],
    experience: '15 years',
    experienceTr: '15 yıl',
    specialties: ['Deep Diving', 'Wreck Penetration', 'Rebreather Diving'],
    specialtiesTr: ['Derin Dalış', 'Batık Girişi', 'Kapalı Devre Dalış'],
    bio: 'A technical diving specialist who has explored wrecks and caves around the world. Brings precision and safety expertise to every dive.',
    bioTr: 'Dünya çapında batıkları ve mağaraları keşfetmiş bir teknik dalış uzmanı. Her dalışa hassasiyet ve güvenlik uzmanlığı getirir.',
    languages: ['Türkçe', 'English', 'Русский'],
    avatarColor: 'bg-purple-500'
  },
  {
    id: 'instructor-4',
    role: 'Freediving & Yoga Instructor',
    roleTr: 'Serbest Dalış & Yoga Eğitmeni',
    certifications: ['AIDA Instructor', 'SSI Freediver Instructor', 'Yoga Alliance RYT-500'],
    experience: '8 years',
    experienceTr: '8 yıl',
    specialties: ['Freediving', 'Breath Work', 'Mindful Diving'],
    specialtiesTr: ['Serbest Dalış', 'Nefes Çalışması', 'Bilinçli Dalış'],
    bio: 'Combining the art of freediving with yoga philosophy, teaches divers to connect deeply with the ocean through breath and presence.',
    bioTr: 'Serbest dalış sanatını yoga felsefesiyle birleştirerek, dalgıçlara nefes ve farkındalık yoluyla okyanusla derin bağ kurmayı öğretir.',
    languages: ['Türkçe', 'English', 'Español'],
    avatarColor: 'bg-rose-500'
  },
  {
    id: 'instructor-5',
    role: 'Dive Guide & Assistant Instructor',
    roleTr: 'Dalış Rehberi & Yardımcı Eğitmen',
    certifications: ['SSI Divemaster', 'CMAS 2 Star', 'EFR Instructor'],
    experience: '6 years',
    experienceTr: '6 yıl',
    specialties: ['Local Dive Sites', 'Marine Biology', 'Underwater Navigation'],
    specialtiesTr: ['Yerel Dalış Noktaları', 'Deniz Biyolojisi', 'Sualtı Navigasyonu'],
    bio: 'Passionate about the local marine ecosystem, provides insightful guided dives with a focus on marine life identification and conservation.',
    bioTr: 'Yerel deniz ekosistemine tutkuyla bağlı, deniz yaşamı tanımlama ve korumaya odaklı bilgilendirici rehberli dalışlar sunar.',
    languages: ['Türkçe', 'English'],
    avatarColor: 'bg-amber-500'
  },
  {
    id: 'instructor-6',
    role: 'Equipment Technician & Instructor',
    roleTr: 'Ekipman Teknisyeni & Eğitmen',
    certifications: ['RAID Instructor', 'Equipment Specialist', 'Nitrox Instructor'],
    experience: '10 years',
    experienceTr: '10 yıl',
    specialties: ['Equipment Maintenance', 'Gear Configuration', 'Technical Setup'],
    specialtiesTr: ['Ekipman Bakımı', 'Teçhizat Konfigürasyonu', 'Teknik Kurulum'],
    bio: 'Expert in dive equipment maintenance and configuration. Ensures all gear is in perfect condition and helps divers optimize their setup.',
    bioTr: 'Dalış ekipmanı bakımı ve konfigürasyonunda uzman. Tüm ekipmanın mükemmel durumda olmasını sağlar ve dalgıçların kurulumlarını optimize etmelerine yardımcı olur.',
    languages: ['Türkçe', 'English', 'Italiano'],
    avatarColor: 'bg-cyan-500'
  }
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'single-dive',
    name: 'Single Boat Dive',
    nameTr: 'Tekli Tekne Dalışı',
    price: 60,
    description: 'Perfect for certified divers wanting a quick underwater adventure.',
    descriptionTr: 'Hızlı bir sualtı macerası isteyen sertifikalı dalgıçlar için mükemmel.',
    features: ['1 guided boat dive', 'Tank & weights included', 'Refreshments on board', 'Experienced dive guide'],
    featuresTr: ['1 rehberli tekne dalışı', 'Tüp & ağırlık dahil', 'Teknede ikramlar', 'Deneyimli dalış rehberi']
  },
  {
    id: 'double-dive',
    name: 'Double Dive Package',
    nameTr: 'Çiftli Dalış Paketi',
    price: 100,
    description: 'Two dives in one day at different sites.',
    descriptionTr: 'Farklı noktalarda bir günde iki dalış.',
    features: ['2 guided boat dives', 'Tank & weights included', 'Lunch on board', 'Surface interval snacks', 'Two dive sites'],
    featuresTr: ['2 rehberli tekne dalışı', 'Tüp & ağırlık dahil', 'Teknede öğle yemeği', 'Yüzey arası atıştırmalıklar', 'İki dalış noktası'],
    popular: true
  },
  {
    id: 'weekly-package',
    name: 'Weekly Dive Pass',
    nameTr: 'Haftalık Dalış Kartı',
    price: 350,
    description: 'Unlimited diving for a full week of underwater exploration.',
    descriptionTr: 'Bir hafta boyunca sınırsız sualtı keşfi.',
    features: ['Unlimited boat dives', 'Priority booking', 'Equipment rental discount', 'Night dive included', 'Dive log review'],
    featuresTr: ['Sınırsız tekne dalışı', 'Öncelikli rezervasyon', 'Ekipman kiralama indirimi', 'Gece dalışı dahil', 'Dalış günlüğü incelemesi']
  },
  {
    id: 'full-equipment',
    name: 'Full Equipment Rental',
    nameTr: 'Tam Ekipman Kiralama',
    price: 40,
    description: 'Complete scuba gear set for the day.',
    descriptionTr: 'Günlük komple tüplü dalış seti.',
    features: ['BCD & Regulator', 'Wetsuit', 'Mask, fins & boots', 'Dive computer', 'SMB & torch'],
    featuresTr: ['BCD & Regülatör', 'Dalış elbisesi', 'Maske, palet & patik', 'Dalış bilgisayarı', 'SMB & fener']
  }
];

export const contactInfo = {
  phone: '+90 252 XXX XX XX',
  whatsapp: '+90 5XX XXX XX XX',
  email: 'dive@azotdiving.com',
  address: 'Bodrum Marina, Muğla, Turkey',
  addressTr: 'Bodrum Marina, Muğla, Türkiye',
  coordinates: { lat: 37.0344, lng: 27.4305 },
  hours: {
    weekdays: '08:00 - 18:00',
    weekends: '07:00 - 19:00'
  },
  social: {
    instagram: 'https://instagram.com/azotdiving',
    facebook: 'https://facebook.com/azotdiving',
    youtube: 'https://youtube.com/@azotdiving'
  }
};
