// Zodiac signs array for reference
const zodiacOrder = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

// Basic Moon sign interpretations (mock)
const moonInterpretations = {
  Aries: "Your emotions are fiery and impulsive, you react quickly but also move on fast.",
  Taurus: "You seek emotional stability and comfort in familiar surroundings.",
  Gemini: "Curious and communicative emotionally, your moods shift often.",
  Cancer: "Highly intuitive and sensitive, you nurture others deeply.",
  Leo: "You express emotions dramatically and need to feel appreciated.",
  Virgo: "You tend to analyze your feelings and seek perfection in emotional responses.",
  Libra: "You strive for balance and harmony in relationships and emotions.",
  Scorpio: "Your emotional intensity runs deep and you feel things profoundly.",
  Sagittarius: "You’re optimistic emotionally and crave freedom in expression.",
  Capricorn: "You may seem reserved but you take emotional commitments seriously.",
  Aquarius: "Independent emotionally, you value intellectual connections.",
  Pisces: "Deeply empathetic and dreamy, emotions flow like a river."
};

// Basic Rising sign interpretations (mock)
const risingInterpretations = {
  Aries: "You come across as energetic and direct; a natural leader in first impressions.",
  Taurus: "You appear calm, grounded, and reliable to others.",
  Gemini: "You show curiosity and wit, quick to engage with new people.",
  Cancer: "You give a nurturing, caring vibe that makes others feel safe.",
  Leo: "You shine with confidence and warmth, drawing attention effortlessly.",
  Virgo: "You present yourself as organized, practical, and detail-oriented.",
  Libra: "You seem charming, sociable, and diplomatic.",
  Scorpio: "You have an intense presence that captivates and intrigues.",
  Sagittarius: "You appear adventurous, optimistic, and straightforward.",
  Capricorn: "You give an impression of seriousness and strong ambition.",
  Aquarius: "You show uniqueness and forward-thinking ideas.",
  Pisces: "You come off as gentle, imaginative, and sensitive."
};

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

  // Calculate Sun sign
  const sunSign = getSunSign(birthdate);

  // Random Moon and Rising signs (simulation)
  const moonSign = zodiacOrder[Math.floor(Math.random() * zodiacOrder.length)];
  const risingSign = zodiacOrder[Math.floor(Math.random() * zodiacOrder.length)];

  // Generate and show birth chart result
  birthChartResult.innerHTML = `
    <h3>Birth Chart for ${name}</h3>
    <p><strong>Birth Date:</strong> ${birthdate}</p>
    <p><strong>Birth Time:</strong> ${birthtime}</p>
    <p><strong>Birth Place:</strong> ${birthplace}</p>
    
    <div class="zodiac-wheel-container">
      ${generateZodiacWheelSVG(sunSign)}
    </div>

    <h4>Key Signs</h4>
    <ul>
      <li><strong>Sun Sign:</strong> ${sunSign} — ${getSunSignInterpretation(sunSign)}</li>
      <li><strong>Moon Sign:</strong> ${moonSign} — ${moonInterpretations[moonSign]}</li>
      <li><strong>Rising Sign:</strong> ${risingSign} — ${risingInterpretations[risingSign]}</li>
    </ul>

    <p><em>Note: This is a simplified and simulated birth chart interpretation for demonstration only.</em></p>
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

function getSunSignInterpretation(sign) {
  switch(sign) {
    case "Aries": return "Energetic, courageous, and confident.";
    case "Taurus": return "Reliable, patient, and practical.";
    case "Gemini": return "Adaptable, curious, and communicative.";
    case "Cancer": return "Emotional, nurturing, and protective.";
    case "Leo": return "Warmhearted, generous, and creative.";
    case "Virgo": return "Analytical, kind, and hardworking.";
    case "Libra": return "Diplomatic, charming, and social.";
    case "Scorpio": return "Passionate, resourceful, and brave.";
    case "Sagittarius": return "Optimistic, adventurous, and honest.";
    case "Capricorn": return "Disciplined, responsible, and ambitious.";
    case "Aquarius": return "Innovative, independent, and humanitarian.";
    case "Pisces": return "Compassionate, artistic, and intuitive.";
    default: return "Unique and mysterious.";
  }
}

// Zodiac symbols for wheel
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

// Generate zodiac wheel SVG with highlighted Sun sign slice
function generateZodiacWheelSVG(sunSign) {
  const sliceAngle = 30;
  const radius = 120;
  const cx = 130;
  const cy = 130;

  const sunIndex = zodiacOrder.findIndex(s => s === sunSign);

  let slices = '';
  for (let i = 0; i < 12; i++) {
    const startAngle = (i * sliceAngle) - 90;
    const endAngle = startAngle + sliceAngle;

    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    const x1 = cx + radius * Math.cos(startAngle * Math.PI / 180);
    const y1 = cy + radius * Math.sin(startAngle * Math.PI / 180);
    const x2 = cx + radius * Math.cos(endAngle * Math.PI / 180);
    const y2 = cy + radius * Math.sin(endAngle * Math.PI / 180);

    const fillColor = (i === sunIndex) ? "#f0c674" : "#222";

    slices += `
      <path d="M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z" fill="${fillColor}" stroke="#555" stroke-width="1" />
    `;
  }

  let symbols = '';
  for (let i = 0; i < 12; i++) {
    const angle = ((i * sliceAngle) + (sliceAngle / 2)) - 90;
    const x = cx + (radius + 20) * Math.cos(angle * Math.PI / 180);
    const y = cy + (radius + 20) * Math.sin(angle * Math.PI / 180);

    symbols += `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-family="Cinzel, serif" font-size="18" fill="#eee">${zodiacUnicode[zodiacOrder[i].toLowerCase()]}</text>`;
  }

  return `
    <svg width="260" height="260" viewBox="0 0 260 260" role="img" aria-label="Zodiac Wheel highlighting Sun sign">
      ${slices}
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="#555" stroke-width="1" />
      ${symbols}
    </svg>
  `;
}
