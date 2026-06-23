// src/data/siteData.js

export const SITE = {
  name: 'Pravalika Kuchipudi Kalakshetram',
  nameShort: 'PKK',
  tagline: 'Where Tradition Meets Expression',
  founder: 'Guru Pravalika Kuppili',
  phone: '+91 7993870126',
  email: 'pravalikakuppili08@gmail.com',
  address: {
    flat: 'FLAT NO 68, SIXTH FLOOR',
    building: 'GENIOUS ELITE',
    locality: 'SOUTHERN BLOCK RAIDURG NAVKHALSA VILLAGE',
    landmark: 'NEAR MALKAM CHERUVU',
    mandal: 'SERILINGAMPALLY MANDAL',
    vtc: 'Raidurg NowKhalsa',
    po: 'Gachibowli',
    district: 'K.V. Rangareddy',
    state: 'Telangana',
    pin: '500032',
  },
  copyright: '© 2026 Pravalika Kuchipudi Kalakshetram. All rights reserved.',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'History', path: '/history' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const WHY_CHOOSE = [
  {
    icon: 'certificate',
    title: 'Classical Heritage',
    desc: 'Celebrating and preserving the beauty of Kuchipudi through dedication, discipline, and artistic expression.',
  },
  {
    icon: 'heart',
    title: 'Cultural Values',
    desc: "Encouraging a deeper appreciation for India's rich classical traditions and storytelling heritage.",
  },
  {
    icon: 'stage',
    title: 'Artistic Journey',
    desc: 'Creating a space where learners can explore rhythm, expression, and the timeless spirit of Kuchipudi.',
  },
];



export const FAQS = [
  {
    q: 'What is the minimum age to join?',
    a: 'We welcome students from age 5 onwards. Young learners join us with age-appropriate guidance.',
  },
  {
    q: 'Do I need prior dance experience?',
    a: 'No prior experience is needed. We welcome learners of all stages to explore the art form.',
  },
  {
    q: 'How are batches scheduled?',
    a: 'Classes are conducted in small batches. Weekend and weekday slots are available. Contact us to schedule your preferred batch.',
  },
  {
    q: 'What is an Arangetram?',
    a: 'An Arangetram is the formal solo debut performance of a classical dancer — a grand celebration of years of dedicated practice and artistry.',
  },
  {
    q: 'Do you issue certificates?',
    a: 'Yes. We guide our students with dedication, and dedicated learners are supported in their artistic journey.',
  },
  {
    q: 'Is there an online learning option?',
    a: 'We offer hybrid learning options for outstation students. Contact us to discuss an arrangement suited to your location.',
  },
];

export const HISTORY_TIMELINE = [
  {
    year: '2nd Century BCE',
    title: 'Ancient Origins',
    desc: 'Kuchipudi traces its roots to Kuchipudi village in Andhra Pradesh, where it was performed as sacred Yakshagana — a devotional art offering to Lord Venkateswara.',
    icon: '🏛️',
  },
  {
    year: '17th Century',
    title: 'Siddhendra Yogi\'s Vision',
    desc: 'Siddhendra Yogi revolutionized Kuchipudi by composing Bhama Kalapam — making it a sophisticated solo dance-drama performed exclusively by Brahmin men of the village.',
    icon: '🪔',
  },
  {
    year: '18th–19th Century',
    title: 'Temple Tradition',
    desc: 'The art form flourished under royal patronage of Andhra kings. Kuchipudi became synonymous with temple festivals and devotional narrations across the Godavari region.',
    icon: '🛕',
  },
  {
    year: 'Early 20th Century',
    title: 'Reform & Evolution',
    desc: 'Visionaries like Lakshminarayana Shastri opened Kuchipudi to women and introduced it to proscenium stages, transforming it from ritual to performing art.',
    icon: '⭐',
  },
  {
    year: '1958',
    title: 'National Recognition',
    desc: 'Kuchipudi was performed in New Delhi before Prime Minister Nehru, gaining national attention and government support that secured its future.',
    icon: '🎭',
  },
  {
    year: '1984 Onwards',
    title: 'Sangeet Natak Akademi',
    desc: 'Kuchipudi received full recognition as one of India\'s eight classical dance forms, with dedicated institutions and universities establishing dedicated curricula.',
    icon: '🏅',
  },
  {
    year: 'Present Day',
    title: 'Global Recognition',
    desc: 'Kuchipudi has captivated audiences across continents. Academies like Pravalika Kuchipudi Kalakshetram carry the living flame of this ancient tradition into the modern world.',
    icon: '🌍',
  },
];

export const GALLERY_IMAGES = [
  { id: 1, category: 'Performances', src: '/gallery/p1.jpg', alt: 'Classical Kuchipudi Performance' },
  { id: 2, category: 'Performances', src: '/gallery/p2.jpg', alt: 'Stage Performance' },
  { id: 3, category: 'Practice Sessions', src: '/gallery/pr1.jpg', alt: 'Practice Session' },
  { id: 4, category: 'Events', src: '/gallery/e1.jpg', alt: 'Annual Event' },
  { id: 5, category: 'Workshops', src: '/gallery/w1.jpg', alt: 'Workshop' },
  { id: 6, category: 'Performances', src: '/gallery/p3.jpg', alt: 'Arangetram Performance' },
];

export const FEATURED_VIDEOS = [
  {
    id: 'dwepzVxQdUw',
    title: 'Tarangam — A Kuchipudi Masterpiece',
    views: '12K views',
  },
  {
    id: '_yG75mxbeFw',
    title: 'Varnam in Ragamalika',
    views: '8.5K views',
  },
  {
    id: 'pVICo5mMeVs',
    title: 'Pushpanjali — Opening Invocation',
    views: '15K views',
  },
  {
    id: 'Pkcoe1b9nGY',
    title: 'Ashtapadi — Jayadeva\'s Verses',
    views: '6K views',
  },
];
