// script.js

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Daily Horoscope Data (mock)
const horoscopes = {
  aries: "Today is a perfect day for new beginnings and bold actions.",
  taurus: "Patience and persistence will bring you rewards today.",
  gemini: "Communication opens doors; speak your truth.",
  cancer: "Nurture your relationships, emotional balance is key.",
  leo: "Your creativity shines; take center stage with confidence.",
  virgo: "Focus on details; organization leads to success.",
  libra: "Seek harmony and balance in your decisions today.",
  scorpio: "Intensity fuels your passion; trust your instincts.",
  sagittarius: "Adventure calls; embrace the unexpected.",
  capricorn: "Hard work pays off; stay committed to your goals.",
  aquarius: "Innovation and independence define your day.",
  pisces: "Dreams and intuition guide your path."
};

const zodiacSigns = [
  {
    id: "aries",
    name: "Aries",
    dateRange: "Mar 21 - Apr 19",
    icon: "fa-ram",
    traits: "Confident, courageous, enthusiastic",
    love: "Compatible with Leo and Sagittarius",
    career: "Great leaders and innovators"
  },
  {
    id: "taurus",
    name: "Taurus",
    dateRange: "Apr 20 - May 20",
    icon: "fa-bull",
    traits: "Reliable, patient, practical",
    love: "Compatible with Virgo and Capricorn",
    career: "Excellent in finance and art"
  },
  {
    id: "gemini",
    name: "Gemini",
    dateRange: "May 21 - Jun 20",
    icon: "fa-twins",
    traits: "Adaptable, curious, witty",
    love: "Compatible with Libra and Aquarius",
    career: "Great communicators and writers"
  },
  {
    id: "cancer",
    name: "Cancer",
    dateRange: "Jun 21 - Jul 22",
    icon: "fa-crab",
    traits: "Emotional, intuitive, protective",
    love: "Compatible with Scorpio and Pisces",
    career: "Caring professionals and artists"
  },
  {
    id: "leo",
    name: "Leo",
    dateRange: "Jul 23 - Aug 22",
    icon: "fa-lion",
    traits: "Generous, warmhearted, creative",
    love: "Compatible with Aries and Sagittarius",
    career: "Natural leaders and performers"
  },
  {
    id: "virgo",
    name: "Virgo",
    dateRange: "Aug 23 - Sep 22",
    icon: "fa-maiden",
    traits: "Analytical, kind, hardworking",
    love: "Compatible with Taurus and Capricorn",
    career: "Skilled in service and healthcare"
  },
  {
    id: "libra",
    name: "Libra",
    dateRange: "Sep 23 - Oct 22",
    icon: "fa-scales",
    traits: "Diplomatic, charming, social",
    love: "Compatible with Gemini and Aquarius",
    career: "Great negotiators and artists"
  },
  {
    id: "scorpio",
    name: "Scorpio",
    dateRange: "Oct 23 - Nov 21",
    icon: "fa-scorpion",
    traits: "Passionate, resourceful, brave",
    love: "Compatible with Cancer and Pisces",
    career: "Excellent in research and strategy"
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    dateRange: "Nov 22 - Dec 21",
    icon: "fa-archer",
    traits: "Optimistic, adventurous, honest",
    love: "Compatible with Aries and Leo",
    career: "Lovers of travel and philosophy"
  },
  {
    id: "capricorn",
    name: "Capricorn",
    dateRange: "Dec 22 - Jan 19",
    icon: "fa-goat",
    traits: "Disciplined, responsible, ambitious",
    love: "Compatible with Taurus and Virgo",
    career: "Strong in business and management"
  },
  {
    id: "aquarius",
    name: "Aquarius",
    dateRange: "Jan 20 - Feb 18",
    icon: "fa-water",
    traits: "Innovative, independent, humanitarian",
    love: "Compatible with Gemini and Libra",
    career: "Inventors and visionaries"
  },
  {
    id: "pisces",
    name: "Pisces",
    dateRange: "Feb 19 - Mar 20",
    icon: "fa-fish",
    traits: "Compassionate, artistic, intuitive",
    love: "Compatible with Cancer and Scorpio",
    career: "Creative and healing professions"
  }
];

// Replace icon with FA icon classes
const faIconMap = {
  "fa-ram": "fa-solid fa-bullhorn",
  "fa-bull": "fa-solid fa-bull",
  "fa-twins": "fa-solid fa-venus-mars",
  "fa-crab": "fa-solid fa-spider",
  "fa-lion": "fa-solid fa-dragon",
  "fa-maiden": "fa-solid fa-female",
  "fa-scales": "fa-solid fa-balance-scale",
  "fa-scorpion": "fa-solid fa-skull-crossbones",
  "fa-archer": "fa-solid fa-bow-arrow",
  "fa-goat": "fa-solid fa-mountain",
  "fa-water": "fa-solid fa-water",
  "fa-fish": "fa-solid fa-fish"
};

// For demo: Simplify icons - use zodiac symbols from Unicode or FontAwesome if available
const zodiacUnicode = {
  aries: "♈",
  taurus: "♉",
  gemini: "♊",
  cancer: "♋",
  leo: "♌",
  virgo: "♍",
  libra: "♎",
  scorpio: "♏",
  sagittarius: "♐",
  capricorn: "♑",
  aquarius: "♒",
  pisces: "♓"
};

function populateZodiacGrid() {
  const grid = document.getElementById('zodiac-grid');
  zodiacSigns.forEach(sign => {
    const card = document.createElement('div');
    card.classList.add('zodiac-card');
    card.innerHTML = `
      <h3>${zodiacUnicode[sign.id]} ${sign.name}</h3>
      <p><strong>Date:</strong> ${sign.dateRange}</p>
      <p><strong>Traits:</strong> ${sign.traits}</p>
      <p><strong>Love:</strong> ${sign.love}</p>
      <p><strong>Career:</strong> ${sign.career}</p>
    `;
    grid.appendChild(card);
  });
}

function populateDailyHoroscope(date) {
  const container = document.getElementById('horoscope-container');
  container.innerHTML = ''; // Clear previous

  zodiacSigns.forEach(sign => {
    const card = document.createElement('div');
    card.classList.add('horoscope-card');
    card.innerHTML = `
      <h3>${sign.name}</h3>
      <p>${horoscopes[sign.id]}</p>
    `;
    container.appendChild(card);
  });
}

// Set max date for horoscope date input to today
const horoscopeDateInput = document.getElementById('horoscope-date');
const todayISO = new Date().toISOString().split('T')[0];
horoscopeDateInput.setAttribute('max', todayISO);
horoscopeDateInput.value = todayISO;

// On date change, update horoscope (currently static, can extend to API)
horoscopeDateInput.addEventListener('change', (e) => {
  populateDailyHoroscope(e.target.value);
});

// Initial population
populateDailyHoroscope(todayISO);
populateZodiacGrid();

// Birth Chart Calculator - simple mock
const birthChartForm = document.getElementById('birth-chart-form');
const birthChartResult = document.getElementById('birth-chart-result');

birthChartForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = birthChartForm.name.value.trim();
  const birthdate = birthChartForm.birthdate.value;
  const birthtime = birthChartForm.birthtime.value;
  const birthplace = birthChartForm.birthplace.value.trim();

  if (!name || !birthdate || !birthtime || !birthplace) {
    birthChartResult.textContent = "Please fill in all fields.";
    return;
  }

  // Mock birth chart calculation
  birthChartResult.innerHTML = `
    <h3>Birth Chart for ${name}</h3>
    <p><strong>Birth Date:</strong> ${birthdate}</p>
    <p><strong>Birth Time:</strong> ${birthtime}</p>
    <p><strong>Birth Place:</strong> ${birthplace}</p>
    <p>Your Sun sign is <em>${getSunSign(birthdate)}</em>.</p>
    <p>More detailed birth chart calculations coming soon!</p>
  `;
});

function getSunSign(dateString) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 'Aries';
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 'Taurus';
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'Gemini';
  else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'Cancer';
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 'Leo';
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 'Virgo';
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 'Libra';
  else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 'Scorpio';
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 'Sagittarius';
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 'Capricorn';
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 'Aquarius';
  else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'Pisces';
  else return 'Unknown';
}

// Blog posts mock data
const blogPosts = [
  {
    title: "The Power of Your Sun Sign",
    date: "2025-07-10",
    excerpt: "Learn how your Sun sign influences your personality and life path.",
    url: "#"
  },
  {
    title: "Understanding Your Moon Sign",
    date: "2025-06-22",
    excerpt: "Discover the emotional core of your astrology chart with your Moon sign.",
    url: "#"
  },
  {
    title: "Mercury Retrograde: Myth vs Reality",
    date: "2025-06-05",
    excerpt: "Is Mercury retrograde really that bad? Find out what astrology says.",
    url: "#"
  }
];

function populateBlog() {
  const container = document.getElementById('blog-container');
  blogPosts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('blog-card');
    card.innerHTML = `
      <h3>${post.title}</h3>
      <small>${new Date(post.date).toLocaleDateString()}</small>
      <p>${post.excerpt}</p>
      <a href="${post.url}" class="btn" target="_blank" rel="noopener noreferrer">Read More</a>
    `;
    container.appendChild(card);
  });
}

populateBlog();

// Contact Form submission - simple demo validation & alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm['contact-name'].value.trim();
  const email = contactForm['contact-email'].value.trim();
  const message = contactForm['contact-message'].value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
});