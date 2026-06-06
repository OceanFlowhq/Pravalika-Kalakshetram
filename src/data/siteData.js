// src/data/siteData.js

export const SITE = {
  name: 'Pravalika Kuchipudi Kalakshetram',
  nameShort: 'PKK',
  tagline: 'Where Tradition Meets Expression',
  founder: 'Guru Pravalika Kuppili',
  phone: '7330677471',
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
  { label: 'Courses', path: '/courses' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const WHY_CHOOSE = [
  {
    icon: 'certificate',
    title: 'Certified Training',
    desc: 'Authentic Kuchipudi curriculum designed by our Guru — structured, classical, and recognized.',
  },
  {
    icon: 'stage',
    title: 'Stage Performance Opportunities',
    desc: 'Regular arangetrams, cultural festivals, and national-level performance platforms.',
  },
  {
    icon: 'scroll',
    title: 'Traditional Curriculum',
    desc: 'Rooted in Andhra heritage — from basic adavus to full-length abhinaya presentations.',
  },
  {
    icon: 'heart',
    title: 'Personalized Guidance',
    desc: 'Small batch sizes ensure every student receives individual mentorship and care.',
  },
];

export const COUNTERS = [
  { value: 200, suffix: '+', label: 'Students Trained' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Stage Performances' },
  { value: 100, suffix: '%', label: 'Student Satisfaction' },
];

export const TESTIMONIALS = [
  {
    name: 'Ananya Reddy',
    role: 'Student — Advanced Batch',
    text: "Guru Pravalika's teaching transformed my understanding of Kuchipudi. Every class is a journey into the depths of classical expression.",
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Parent',
    text: 'My daughter blossomed here — not just as a dancer but as a confident young woman. The academy instills discipline and artistry together.',
    stars: 5,
  },
  {
    name: 'Meghana Rao',
    role: 'Student — Intermediate Batch',
    text: 'The personalized attention and authentic curriculum here is unmatched. I feel deeply connected to my cultural roots through this art form.',
    stars: 5,
  },
  {
    name: 'Kavitha Nair',
    role: 'Parent',
    text: 'A nurturing environment that combines tradition with modern teaching methods. My child looks forward to every single class.',
    stars: 5,
  },
];

export const COURSES = [
  {
    level: 'Beginner',
    subtitle: 'Foundation & Fundamentals',
    duration: '12 Months',
    sessions: '3 Sessions / Week',
    price: 'Contact for Pricing',
    features: [
      'Basic Adavus & Footwork',
      'Introduction to Abhinaya',
      'Mudras & Hastas',
      'Rhythm & Tala Basics',
      'Classical Music Appreciation',
      'Annual Performance Participation',
    ],
    ideal: 'Ages 5 and above, no prior experience required.',
    color: 'from-amber-50 to-yellow-50',
  },
  {
    level: 'Intermediate',
    subtitle: 'Expression & Artistry',
    duration: '18 Months',
    sessions: '4 Sessions / Week',
    price: 'Contact for Pricing',
    features: [
      'Advanced Adavu Sequences',
      'Keertanams & Javalis',
      'Detailed Abhinaya Training',
      'Stage Choreography',
      'Costume & Makeup Workshop',
      'Festival Performance Slots',
    ],
    ideal: 'Students with minimum 1 year of Kuchipudi training.',
    color: 'from-yellow-50 to-orange-50',
    featured: true,
  },
  {
    level: 'Advanced',
    subtitle: 'Mastery & Arangetram',
    duration: '24+ Months',
    sessions: '5 Sessions / Week',
    price: 'Contact for Pricing',
    features: [
      'Full Margam Presentation',
      'Arangetram Preparation',
      'Tillana & Padam Mastery',
      'Solo Choreography Design',
      'National Level Competitions',
      'Teaching Assistant Role',
    ],
    ideal: 'Dedicated students pursuing a professional dance career.',
    color: 'from-orange-50 to-amber-50',
  },
];

export const FAQS = [
  {
    q: 'What is the minimum age to join?',
    a: 'We welcome students from age 5 onwards. Young learners join our Beginner program with age-appropriate training methodology.',
  },
  {
    q: 'Do I need prior dance experience?',
    a: 'No prior experience is needed for the Beginner program. Intermediate and Advanced programs require prior Kuchipudi training.',
  },
  {
    q: 'How are batches scheduled?',
    a: 'Classes are conducted in small batches. Weekend and weekday slots are available. Contact us to schedule your preferred batch.',
  },
  {
    q: 'What is an Arangetram?',
    a: 'An Arangetram is the formal solo debut performance of a classical dancer — a grand celebration of years of dedicated training and artistry.',
  },
  {
    q: 'Do you issue certificates?',
    a: 'Yes. Students who complete each level receive certified documentation. Advanced students are supported in obtaining Sangeet Natak Akademi recognition.',
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
