export const clinic = {
  name: 'Tri-City Eye Care',
  address: {
    line1: '4278 King St E, Unit A',
    city: 'Kitchener',
    province: 'Ontario',
    postal: 'N2P 2G5',
    country: 'Canada',
  },
  // Patients reach us via referral. Phone is for clinical staff and providers.
  // We intentionally do not promote it as a first-line contact.
  phone: '(519) 804-8858',
  fax: '(519) 804-8859',
  email: 'tcecreception@gmail.com',
  // Update once confirmed. Left empty so we don't publish incorrect hours.
  hours: [
    { day: 'Monday – Friday', time: 'By appointment' },
    { day: 'Saturday – Sunday', time: 'Closed' },
  ],
  // Hospitals our ophthalmologists operate at:
  hospitals: [
    'Cambridge Memorial Hospital',
    'Grand River Hospital',
    "St. Mary's General Hospital",
  ],
  // Google Maps embed lat/lng for 4278 King St E, Kitchener
  mapsEmbed:
    'https://www.google.com/maps?q=4278+King+St+E+Unit+A,+Kitchener,+ON+N2P+2G5&output=embed',
  mapsLink:
    'https://www.google.com/maps/dir/?api=1&destination=4278+King+St+E+Unit+A,+Kitchener,+ON+N2P+2G5',
};
