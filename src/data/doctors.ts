export type Doctor = {
  slug: string;
  firstName: string;
  lastName: string;
  credentials: string;
  shortTitle: string;
  tagline: string;
  focus: string[];
  languages: string[];
  education: { year: string; detail: string }[];
  bio: string[];
  hospital?: string;
  image: string;
  reviewUrl?: string;
};

export const doctors: Doctor[] = [
  {
    slug: 'nimesh-desai',
    firstName: 'Nimesh',
    lastName: 'Desai',
    credentials: 'MD, FRCS(C)',
    shortTitle: 'Eye Physician & Surgeon',
    image: '/doctors/nimesh-desai.jpg',
    tagline: 'Comprehensive ophthalmology with a focus on cataract, medical retina, and glaucoma care.',
    focus: [
      'Cataract surgery with premium IOL implantation',
      'Medical retina — anti-VEGF injections and laser',
      'Wet AMD, diabetic retinopathy, vein occlusions',
      'Medical and laser glaucoma management',
    ],
    languages: ['English'],
    education: [],
    hospital: 'Cambridge Memorial Hospital',
    bio: [
      'Dr. Desai is a comprehensive ophthalmologist serving the Tri-City region. He performs cataract surgery with premium intraocular lens options and manages a wide range of medical retina and glaucoma conditions.',
      'On-site at Tri-City Eye Care, he offers anti-VEGF injections and laser therapies for retinal and glaucoma conditions, reducing the need for travel to other facilities.',
    ],
  },
  {
    slug: 'manreet-alangh',
    firstName: 'Manreet',
    lastName: 'Alangh',
    credentials: 'MD, FRCS(C)',
    shortTitle: 'Eye Physician & Surgeon',
    image: '/doctors/manreet-alangh.jpg',
    tagline: 'Comprehensive ophthalmologist with subspecialty interest in medical retina.',
    focus: [
      'Medical retina — wet AMD, diabetic retinopathy, vein occlusions',
      'Anti-VEGF injections and retinal laser',
      'Cataract surgery with premium IOLs',
      'Medical and laser glaucoma care',
    ],
    languages: ['English', 'Punjabi', 'Hindi'],
    education: [
      { year: '2008', detail: 'BHSc, Life Sciences — University of Waterloo' },
      { year: '2011', detail: 'MD — McMaster University' },
      { year: '2016', detail: 'FRCS(C), Ophthalmology — McMaster University' },
    ],
    hospital: 'Cambridge Memorial Hospital',
    reviewUrl: 'https://www.ratemds.com/doctor-ratings/dr-manreet-alangh-cambridge-on-ca/',
    bio: [
      'Dr. Alangh grew up in the Kitchener–Waterloo region and returned to practice in his hometown. He is a comprehensive eye physician and surgeon with a particular interest in medical retina.',
      'His research interests center on medical retina and premium intraocular lens technology, with six peer-reviewed publications in ophthalmology journals.',
    ],
  },
  {
    slug: 'husayn-gulamhusein',
    firstName: 'Husayn',
    lastName: 'Gulamhusein',
    credentials: 'MD, MPH, FRCS(C)',
    shortTitle: 'Eye Physician & Surgeon',
    image: '/doctors/husayn-gulamhusein.png',
    tagline: 'Medical glaucoma, retina, and cataract surgery with advanced fellowship training.',
    focus: [
      'Medical glaucoma — drops, laser, and surgical referral',
      'Medical retina — anti-VEGF and laser',
      'Cataract surgery, including complex cases',
      'Premium IOL technology',
    ],
    languages: ['English'],
    education: [
      { year: '2014', detail: 'BHSc — McMaster University' },
      { year: '2017', detail: 'MPH — University of Newcastle' },
      { year: '2017', detail: 'MD — McMaster University' },
      { year: '2018', detail: 'Glaucoma & Advanced Anterior Segment Fellowship — University of Toronto' },
      { year: '2022', detail: 'Manual Small Incision Cataract Surgery — Aravind Eye Hospital' },
      { year: '2023', detail: 'FRCS(C), Ophthalmology — McMaster University' },
    ],
    hospital: 'Cambridge Memorial Hospital',
    reviewUrl: 'https://www.ratemds.com/doctor-ratings/dr-husayn-gulamhusein-kitchener-on-ca/',
    bio: [
      'Dr. Gulamhusein subspecializes in medical glaucoma alongside a comprehensive ophthalmology and cataract surgery practice. He completed fellowship training in glaucoma and advanced anterior segment surgery at the University of Toronto.',
      'He completed additional training in manual small incision cataract surgery at Aravind Eye Hospital — one of the world’s leading high-volume cataract institutions. He continues to teach medical students and residents at McMaster University.',
    ],
  },
  {
    slug: 'john-wilkinson',
    firstName: 'John',
    lastName: 'Wilkinson',
    credentials: 'MD, FRCS(C)',
    shortTitle: 'Eye Physician & Surgeon',
    image: '/doctors/john-wilkinson.jpg',
    tagline: 'Three decades of comprehensive community ophthalmology and cataract surgery.',
    focus: [
      'Comprehensive community ophthalmology',
      'Cataract surgery',
      'Anti-VEGF injections for AMD and diabetic edema',
      'Retinal laser and glaucoma management',
      'International eye care',
    ],
    languages: ['English'],
    education: [
      { year: '1984', detail: 'BSc (Hons), Biochemistry — University of Guelph' },
      { year: '1994', detail: 'MD — University of Western Ontario' },
      { year: '1997', detail: 'FRCS(C), Ophthalmology — University of Western Ontario' },
    ],
    hospital: 'Cambridge Memorial Hospital',
    bio: [
      'Dr. Wilkinson has practiced comprehensive community ophthalmology for over a quarter century. His scope covers cataract surgery, retinal injections for macular degeneration and diabetic edema, laser treatments, and glaucoma management.',
      'He also has a long-standing involvement in international eye care.',
    ],
  },
  {
    slug: 'tarek-bin-yameen',
    firstName: 'Tarek',
    lastName: 'Bin Yameen',
    credentials: 'MD, MBiotech, FRCS(C)',
    shortTitle: 'Eye Physician & Surgeon',
    image: '/doctors/tarek-bin-yameen.png',
    tagline: 'Comprehensive ophthalmology with interests in medical glaucoma and complex cataract surgery.',
    focus: [
      'Medical glaucoma',
      'Diabetic retinopathy and AMD',
      'Cataract surgery, including femtosecond laser-assisted',
      'Anti-VEGF injections and laser',
      'Comprehensive ophthalmology',
    ],
    languages: ['English', 'Arabic'],
    education: [
      { year: '2012', detail: 'HBSc (with distinction) — University of Toronto' },
      { year: '2014', detail: 'Master of Biotechnology (with distinction) — University of Toronto' },
      { year: '2020', detail: 'MD — University of Toronto' },
      { year: '2025', detail: 'FRCS(C), Ophthalmology — McMaster University' },
    ],
    hospital: 'Cambridge Memorial Hospital',
    bio: [
      'Dr. Bin Yameen is a comprehensive ophthalmologist who served as Chief Resident during his surgical residency at McMaster University. He was awarded the Wilkinson Scholarship in Ophthalmology in medical school and received both an Academic Achievement Award and a Resident Appreciation Award during residency.',
      'Prior to medicine, he worked in the pharmaceutical industry following his biotechnology degree. He remains active in medical education at McMaster.',
    ],
  },
];

export const getDoctor = (slug: string) => doctors.find((d) => d.slug === slug);
