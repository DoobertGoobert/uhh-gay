// Background music play/pause control, continues across pages using localStorage
const bgMusic = document.getElementById('bg-music');

// Try to auto-play music, fallback to user interaction
function playMusic() {
  bgMusic.play().catch(() => {
    // Wait for user interaction
    window.addEventListener('click', () => bgMusic.play());
  });
}

// Restore music state from localStorage
const musicPlaying = localStorage.getItem('musicPlaying');
if (musicPlaying === 'true') {
  playMusic();
  bgMusic.loop = true;
}

bgMusic.addEventListener('play', () => {
  localStorage.setItem('musicPlaying', 'true');
});
bgMusic.addEventListener('pause', () => {
  localStorage.setItem('musicPlaying', 'false');
});

// Glitch title cycling Russian, Arabic, and English
const glitchTitle = document.getElementById('glitch-title');

const glitchTexts = ['Экспок', 'إكسبوك', 'Expok'];
let glitchIndex = 0;

function cycleGlitchText() {
  glitchTitle.textContent = glitchTexts[glitchIndex];
  glitchIndex = (glitchIndex + 1) % glitchTexts.length;
}

setInterval(cycleGlitchText, 2500); // cycle every 2.5 sec

// Start immediately
cycleGlitchText();

// Gennesis easter egg: type "gennesis" anywhere to redirect
let typed = '';
const easterEgg = 'gennesis';

window.addEventListener('keydown', e => {
  typed += e.key.toLowerCase();
  if (!easterEgg.startsWith(typed)) {
    typed = '';
  }
  if (typed === easterEgg) {
    window.location.href = 'https://gennesis.cc';
  }
});
