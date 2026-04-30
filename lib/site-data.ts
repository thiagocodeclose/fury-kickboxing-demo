// lib/site-data.ts
export const studioInfo = {
  name: 'Fury Kickboxing',
  tagline: 'Train. Compete. Dominate.',
  subheadline: 'Las Vegas\'s #1 competitive kickboxing gym. K-1 rules, Muay Thai rules, and full contact boxing. Amateur and professional programs for all levels.',
  address: '3500 S Las Vegas Blvd, Las Vegas, NV 89109',
  phone: '(702) 555-0188',
  email: 'info@furykickboxing.com',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  hours: {
    'Mon–Fri': '6:00 AM – 10:00 PM',
    'Saturday': '8:00 AM – 6:00 PM',
    'Sunday': '9:00 AM – 3:00 PM',
  },
};

export const stats = [
  { value: '500+', label: 'Active Members' },
  { value: '120+', label: 'Competition Alumni' },
  { value: '8', label: 'World Champions' },
  { value: '15+', label: 'Years in Las Vegas' },
];

export const programs = [
  {
    name: 'Fundamentals',
    level: 'Beginner',
    description: 'Master the foundation: stance, guard, footwork, jab-cross-hook-kick combos. 8-week structured program with progressive belt testing.',
  },
  {
    name: 'Intermediate Striking',
    level: 'Intermediate',
    description: 'Add knees, elbows, and clinch work. Technical sparring begins here. Combination boxing and kickboxing circuits with padwork.',
  },
  {
    name: 'Advanced Competition Prep',
    level: 'Advanced',
    description: 'K-1 and Muay Thai rules sparring. Full strategy sessions, gameplan development, opponent study. Coach-assigned sparring partners.',
  },
  {
    name: 'Amateur Fight Team',
    level: 'Competition',
    description: 'Regional and national amateur kickboxing circuit. Fury represents you in K-1 and Muay Thai bouts. Full corner team support at events.',
  },
  {
    name: 'Fitness Kickboxing',
    level: 'All Levels',
    description: 'High-energy cardio kickboxing. No sparring. Bags, mitts, and interval circuits. Burn 800+ calories and build real striking form.',
  },
  {
    name: 'Youth Strike Team',
    level: 'Ages 10–17',
    description: 'Structured youth kickboxing with discipline and confidence-building. Optional competition track for ambitious young athletes.',
  },
];

export const coaches = [
  {
    name: 'Remy "The Hurricane" Delacroix',
    title: 'Head Coach · 3x K-1 World Champion',
    bio: 'Former K-1 World MAX champion and WBC Muay Thai titleholder. Remy brings 22 years of elite competition experience and has cornered 35+ professional world title fights.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Tomoko "Hellfire" Tanaka',
    title: 'Women\'s Head Coach · National Champion',
    bio: 'Undefeated amateur Muay Thai national champion turned elite coach. Tomoko runs our women\'s competition program and has produced 3 national champions.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  },
  {
    name: 'Coach Marcus Webb',
    title: 'Strength & Conditioning · Youth Program',
    bio: 'CSCS-certified S&C specialist who built conditioning programs for multiple UFC fighters. Leads fight prep and the youth strike team with a focus on athletic development.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
];

export const testimonials = [
  { name: 'Jordan H.', rating: 5, text: 'Remy\'s technical coaching is on a different level. I went from never competing to winning my first two K-1 amateur bouts in 6 months. The level of instruction here is elite.' },
  { name: 'Priya S.', rating: 5, text: 'Started fitness kickboxing just for the workout and fell in love with striking. Tomoko encouraged me to compete and I just won my first amateur title. Incredible place.' },
  { name: 'Derek T.', rating: 5, text: 'Marcus\'s conditioning program transformed my fight prep. I\'ve never felt better going into a fight. The S&C approach here is pro-level.' },
  { name: 'Ashley M.', rating: 5, text: 'My 13-year-old started the youth program skeptical and shy. He\'s competed three times now and the confidence improvement is night and day. The coaches truly care.' },
];

export const upcoming = [
  { event: 'Fury Fight Night Vol. 12', date: 'Feb 15, 2026', location: 'Palms Casino, Las Vegas', rules: 'K-1' },
  { event: 'SW Regional Amateur Championship', date: 'Mar 8, 2026', location: 'Henderson Pavilion', rules: 'Muay Thai' },
  { event: 'Fury vs. Desert Storm Invitational', date: 'Apr 19, 2026', location: 'Fury Gym, Las Vegas', rules: 'K-1 + MT' },
];

export const pricing = [
  {
    name: 'Striker',
    price: '$99',
    period: '/mo',
    features: ['Unlimited fitness kickboxing', 'Fundamentals class access', 'Bag & equipment access', 'Online tracking app'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Fighter',
    price: '$149',
    period: '/mo',
    features: ['All Striker benefits', 'All striking classes', 'Sparring access', 'S&C classes', 'Competition preparation'],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Champion',
    price: '$199',
    period: '/mo',
    features: ['All Fighter benefits', 'Fight team access', 'Corner team at events', 'Monthly private session', 'Video review sessions'],
    cta: 'Join Fight Team',
    highlight: false,
  },
];
