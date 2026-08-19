// ============================================
// CHĂN KIẾN - ANT HERDING GAME
// Full Game Engine (English & Vietnamese)
// ============================================

// --- Multi-language Translations ---
const TRANSLATIONS = {
  vi: {
    animals: {
      ant: {
        title: "Chăn Kiến",
        emoji: "🐜",
        subtitle: "Vẽ vòng tròn · Đặt kiến vào · Chạm kiến đổi hướng",
        btnName: "Chăn Kiến",
        addBtn: "Thêm kiến",
        rule1: "Vẽ một vòng khép kín",
        rule2: "Chạm vào kiến để đổi hướng",
        rule3: "Đừng để kiến thoát ra!",
        gameOver: "Kiến Thoát Rồi!",
        countLabel: "Số kiến",
        unit: "kiến",
        drawInstruction: "Vẽ một vòng khép kín trên màn hình!",
        tapTaunts: [
          "Á đù! 😵", "Đau nha má! 💢", "Né đẹp chưa! 💃", "Quay xe! 🚗💨",
          "Bắt hộ cái! 😜", "Gà mờ! 🐔", "Đừng sờ tui! 😤", "Ahihi hụt rồi! 😝",
          "Chóng mặt quá! 🌀", "Ui da! 💥", "Còn non lắm! 🍼", "Ủa alo? 📱",
          "Lêu lêu! 😛", "Chạy đâu cho thoát! 🏃"
        ],
        taunts: [
          "Lêu lêu! Lêu lêu! Đồ con gà!",
          "A hi hi, lêu lêu! Bắt hụt rồi!",
          "Lêu lêu! Non và xanh lắm!",
          "Chăn kiến mà để kiến chạy mất! Lêu lêu!",
          "Gà thế này thì chăn ai! Lêu lêu!"
        ]
      },
      cow: {
        title: "Chăn Bò",
        emoji: "🐮",
        subtitle: "Vẽ chuồng bò · Giữ đàn bò sữa · Chạm bò quay xe",
        btnName: "Chăn Bò",
        addBtn: "Thêm bò",
        rule1: "Vẽ chuồng bò khép kín",
        rule2: "Chạm vào bò để đổi hướng",
        rule3: "Đừng để bò xổng chuồng!",
        gameOver: "Bò Xổng Chuồng!",
        countLabel: "Số bò",
        unit: "bò",
        drawInstruction: "Vẽ một chuồng bò khép kín trên màn hình!",
        tapTaunts: [
          "Ùm bòooo! 🐮", "Đau nha sen! 💢", "Húc bay màu giờ! 💥", "Né đẹp chưa! 💃",
          "Quay xe! 🐮💨", "Bò chứ đâu phải gà! 🐔", "Cho một bãi giờ! 💩",
          "Xổng chuồng nè! 🏃", "Ủa alo sen? 📱", "Chóng mặt quá! 🌀", "Ahihi hụt rồi! 😝"
        ],
        taunts: [
          "Ùm bòooo! Bò xổng chuồng rồi!",
          "Chăn bò mà để bò chạy mất! Lêu lêu!",
          "Đồ con gà! Bò chạy mất tiêu rồi!",
          "Lêu lêu! Có đàn bò cũng không giữ nổi!",
          "Ùm bòooo! Bò tự do rồi nè!"
        ]
      }
    },
    modeFree: "Tự Do",
    modeLevel: "Cấp Độ",
    modeDescFree: "Chế độ Tự Do: Tự nhấn ➕ để thêm thú tùy thích",
    modeDescLevel: "Chế độ Cấp Độ: Cứ mỗi 10 giây tăng 1 cấp và thêm 1 con thú!",
    startBtn: "Bắt Đầu",
    installBtn: "Cài Đặt App Vào Điện Thoại",
    shopeeBtn: "Click Shopee để ủng hộ",
    floatingShopee: "Ủng hộ Shopee",
    levelBadge: "Cấp",
    scoreMode: "Chế độ",
    scoreLevel: "Cấp đạt được",
    scoreTime: "Thời gian",
    scoreHigh: "Kỷ lục",
    restartBtn: "Chơi Lại",
    adTag: "Quảng Cáo / Ủng Hộ",
    adSubtitle: "Ủng hộ duy trì máy chủ",
    adPlaceholder: "Cảm ơn bạn đã chơi! Bấm ủng hộ giúp tác giả duy trì máy chủ nhé.",
    pauseTitle: "⏸ Đang Tạm Dừng",
    resumeBtn: "Tiếp Tục Chơi",
    pauseRestart: "Chơi Lại",
    mainMenuBtn: "Menu",
    shareBtn: "Chia Sẻ",
    shareCopied: "Đã sao chép thành tựu! Hãy dán để khoe bạn bè 🎉",
    shareText: (animalName, score, count, unit, mode, level) =>
      `🐾 Tôi vừa giữ được ${count} con ${unit} trong ${score} ${mode === 'level' ? `(Cấp ${level})` : ''} ở game ${animalName}!\n👉 Thử thách xem bạn có bắt kịp tôi không: https://chan-kien.pages.dev`,
    tauntInitial: "Lêu lêu! 😝",
    tauntVoiceLang: "vi-VN",
    interactiveTaunts: [
      "Bắt hộ cái! 😜",
      "Còn non lắm! 🤣",
      "Lêu lêu đồ con gà! 🤪",
      "Ahihi đồ ngốc! 😝",
      "Chạy thoát rồi nè! 🏃‍♂️",
      "Lêu lêu! Lêu lêu! 😛"
    ],
    levelUpVoice: (lvl) => `Cấp ${lvl}! Cố lên!`
  },
  en: {
    animals: {
      ant: {
        title: "Ant Herder",
        emoji: "🐜",
        subtitle: "Draw a circle · Trap the ants · Tap to redirect",
        btnName: "Ant Herder",
        addBtn: "Add Ant",
        rule1: "Draw a closed loop fence",
        rule2: "Tap ants to bounce & redirect",
        rule3: "Don't let any ant escape!",
        gameOver: "Ants Escaped!",
        countLabel: "Ants Count",
        unit: "ants",
        drawInstruction: "Draw a closed loop on the screen!",
        tapTaunts: [
          "Ouch! 😵", "Missed me! 😜", "U-Turn! ↩️", "Too slow! 💨",
          "Hey watch it! 😤", "Dodge! 💃", "Haha noob! 🐔", "Spinning! 🌀",
          "Can't touch this! 🕺", "Whoops! 😝", "Boing! 💥", "Na-na boo-boo! 🤪"
        ],
        taunts: [
          "Na-na-na boo-boo! Too slow!",
          "You let the ants escape! Haha!",
          "Too slow! Try harder!",
          "Can't even catch a little ant!"
        ]
      },
      cow: {
        title: "Cow Herder",
        emoji: "🐮",
        subtitle: "Draw a fence · Herd dairy cows · Tap to redirect",
        btnName: "Cow Herder",
        addBtn: "Add Cow",
        rule1: "Draw a closed fence for cows",
        rule2: "Tap cows to bounce & redirect",
        rule3: "Don't let cows escape the ranch!",
        gameOver: "Cows Escaped!",
        countLabel: "Cows Count",
        unit: "cows",
        drawInstruction: "Draw a closed fence on the screen!",
        tapTaunts: [
          "Moooo! 🐮", "Don't touch me! 💢", "Escaping! 🏃", "Holy Cow! 💥",
          "Too slow! 💨", "Udderly ridiculous! 🥛", "Moo-ve out of the way! 💃",
          "Haha noob! 🐔", "Spinning! 🌀", "Na-na boo-boo! 🤪"
        ],
        taunts: [
          "Moooo! The cows broke out!",
          "Na-na-na boo-boo! Cows ran away!",
          "Too slow! Cows are too fast for you!",
          "Haha! You let the whole herd escape!"
        ]
      }
    },
    modeFree: "Free Mode",
    modeLevel: "Level Mode",
    modeDescFree: "Free Mode: Tap ➕ anytime to add animals and test your reflexes!",
    modeDescLevel: "Level Mode: Level up and spawn a new animal every 10 seconds!",
    startBtn: "Start Game",
    installBtn: "Install App on Phone",
    shopeeBtn: "Support Creator",
    floatingShopee: "Support Us",
    levelBadge: "Level",
    scoreMode: "Mode",
    scoreLevel: "Level Reached",
    scoreTime: "Time Survived",
    scoreHigh: "High Score",
    restartBtn: "Play Again",
    adTag: "Ads / Support",
    adSubtitle: "Support to keep servers running",
    adPlaceholder: "Thank you for playing! Click ads to support developer with new game updates.",
    pauseTitle: "⏸ Game Paused",
    resumeBtn: "Resume Game",
    pauseRestart: "Restart",
    mainMenuBtn: "Menu",
    shareBtn: "Share",
    shareCopied: "Achievement copied! Paste to challenge your friends 🎉",
    shareText: (animalName, score, count, unit, mode, level) =>
      `🐾 I survived ${score} with ${count} ${unit} ${mode === 'level' ? `(Level ${level})` : ''} in ${animalName}!\n👉 Can you beat my high score? Play now: https://chan-kien.pages.dev`,
    tauntInitial: "Na-na-na boo-boo! 😝",
    tauntVoiceLang: "en-US",
    interactiveTaunts: [
      "Catch me if you can! 😜",
      "Way too slow! 🤣",
      "Na-na-na boo-boo! 🤪",
      "Haha missed me! 😝",
      "I'm free! Run! 🏃‍♂️",
      "Na-na-na-na boo-boo! 😛"
    ],
    levelUpVoice: (lvl) => `Level ${lvl}! Keep going!`
  }
};

// --- Configuration ---
const CONFIG = {
  ANT_SPEED: 55,
  ANT_SIZE: 14,
  ANT_HIT_RADIUS: 38,
  WANDER_STRENGTH: 1.8,
  BIG_TURN_CHANCE: 0.008,
  MIN_PATH_POINTS: 15,
  MIN_DRAW_DIST: 4,
  NEON_COLOR: '#00ff88',
  NEON_GLOW: 18,
  ANT_BODY_COLOR: '#2d1810',
  ANT_BODY_MID: '#3d2518',
  ANT_LEG_COLOR: '#4a3020',
  REDIRECT_SPREAD: Math.PI / 3,
  ESCAPE_MARGIN: 6,
};

// --- Game States ---
const STATE = {
  MENU: 'menu',
  DRAWING: 'drawing',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'gameover',
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function dist(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function isPointInPolygon(px, py, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x, yi = polygon[i].y;
    const xj = polygon[j].x, yj = polygon[j].y;
    if (((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

function polygonCentroid(polygon) {
  let cx = 0, cy = 0;
  for (const p of polygon) { cx += p.x; cy += p.y; }
  return { x: cx / polygon.length, y: cy / polygon.length };
}

function distToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return dist(px, py, ax, ay);
  let t = ((px - ax) * dx + (py - ay) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return dist(px, py, ax + t * dx, ay + t * dy);
}

function normalizeAngle(a) {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
}

// ============================================
// SOUND MANAGER (Web Audio API & Speech Synthesis)
// ============================================

class SoundManager {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    this.lang = 'vi';
  }

  setLanguage(lang) {
    this.lang = lang;
  }

  init() {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  _createOsc(type, freq, duration, volume = 0.25) {
    if (!this.ctx) return null;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    return { osc, gain, t: this.ctx.currentTime };
  }

  playTap() {
    const s = this._createOsc('sine', 0, 0.1, 0.3);
    if (!s) return;
    s.osc.frequency.setValueAtTime(900, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(350, s.t + 0.08);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.1);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.1);
  }

  playAddAnt() {
    const s = this._createOsc('sine', 0, 0.15, 0.2);
    if (!s) return;
    s.osc.frequency.setValueAtTime(350, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(900, s.t + 0.12);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.15);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.15);
  }

  playDrawComplete() {
    if (!this.ctx) return;
    const s1 = this._createOsc('sine', 0, 0.15, 0.2);
    s1.osc.frequency.setValueAtTime(523, s1.t);
    s1.gain.gain.exponentialRampToValueAtTime(0.001, s1.t + 0.15);
    s1.osc.start(s1.t);
    s1.osc.stop(s1.t + 0.15);

    const s2 = this._createOsc('sine', 0, 0.2, 0.2);
    s2.osc.frequency.setValueAtTime(659, s2.t + 0.12);
    s2.gain.gain.setValueAtTime(0.001, s2.t);
    s2.gain.gain.linearRampToValueAtTime(0.2, s2.t + 0.12);
    s2.gain.gain.exponentialRampToValueAtTime(0.001, s2.t + 0.3);
    s2.osc.start(s2.t + 0.1);
    s2.osc.stop(s2.t + 0.3);
  }

  playGameOver() {
    if (!this.ctx) return;
    const s = this._createOsc('sawtooth', 0, 0.5, 0.18);
    s.osc.frequency.setValueAtTime(450, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(70, s.t + 0.5);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.5);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.55);
  }

  playRaspberry(delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;

    const bufferSize = this.ctx.sampleRate * 0.45;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const flutter = Math.sin((i / this.ctx.sampleRate) * 26 * Math.PI * 2);
      data[i] = (Math.random() * 2 - 1) * (0.5 + 0.5 * flutter);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, t);
    filter.frequency.linearRampToValueAtTime(280, t + 0.4);
    filter.Q.setValueAtTime(4, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + 0.45);

    const buzzy = this.ctx.createOscillator();
    const buzzyGain = this.ctx.createGain();
    buzzy.type = 'sawtooth';
    buzzy.frequency.setValueAtTime(140, t);
    buzzy.frequency.linearRampToValueAtTime(90, t + 0.4);

    buzzyGain.gain.setValueAtTime(0.01, t);
    buzzyGain.gain.linearRampToValueAtTime(0.2, t + 0.05);
    buzzyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    buzzy.connect(buzzyGain);
    buzzyGain.connect(this.ctx.destination);
    buzzy.start(t);
    buzzy.stop(t + 0.45);
  }

  playSlideWhistle(delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(250, t + 0.25);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.45);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.45);
  }

  playMockingMelody(delay = 0) {
    if (!this.ctx) return;
    const notes = [
      { f: 784, dur: 0.15, pause: 0.05 },
      { f: 659, dur: 0.15, pause: 0.05 },
      { f: 880, dur: 0.18, pause: 0.05 },
      { f: 784, dur: 0.18, pause: 0.08 },
      { f: 659, dur: 0.35, pause: 0.05 },
    ];

    let curT = this.ctx.currentTime + delay;
    notes.forEach((n) => {
      const s = this._createOsc('triangle', n.f, n.dur, 0.22);
      if (s) {
        s.osc.frequency.setValueAtTime(n.f, curT);
        s.gain.gain.setValueAtTime(0.001, curT);
        s.gain.gain.linearRampToValueAtTime(0.22, curT + 0.02);
        s.gain.gain.exponentialRampToValueAtTime(0.001, curT + n.dur);
        s.osc.start(curT);
        s.osc.stop(curT + n.dur + 0.02);
      }
      curT += n.dur + n.pause;
    });
  }

  playVoiceTaunt(customPhrase = null) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
      const phrase = customPhrase || currentTrans.taunts[Math.floor(Math.random() * currentTrans.taunts.length)];
      const utter = new SpeechSynthesisUtterance(phrase);
      utter.lang = currentTrans.tauntVoiceLang;
      utter.pitch = 1.75;
      utter.rate = 1.35;
      utter.volume = 1.0;
      
      setTimeout(() => {
        window.speechSynthesis.speak(utter);
      }, 350);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }

  playLevelUp(level) {
    if (!this.ctx) return;
    const notes = [523, 659, 784, 1046];
    const timing = [0, 0.12, 0.24, 0.38];
    notes.forEach((freq, i) => {
      const s = this._createOsc('triangle', freq, 0.25, 0.3);
      if (s) {
        const t = s.t + timing[i];
        s.osc.frequency.setValueAtTime(freq, t);
        s.gain.gain.setValueAtTime(0.001, t);
        s.gain.gain.linearRampToValueAtTime(0.3, t + 0.02);
        s.gain.gain.exponentialRampToValueAtTime(0.001, t + (i === 3 ? 0.45 : 0.2));
        s.osc.start(t);
        s.osc.stop(t + (i === 3 ? 0.5 : 0.25));
      }
    });

    if ('speechSynthesis' in window) {
      try {
        const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
        const utter = new SpeechSynthesisUtterance(currentTrans.levelUpVoice(level));
        utter.lang = currentTrans.tauntVoiceLang;
        utter.pitch = 1.6;
        utter.rate = 1.3;
        setTimeout(() => window.speechSynthesis.speak(utter), 400);
      } catch (e) {}
    }
  }

  playVoiceTaunt(customPhrase = null, animalType = 'ant') {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
      const animalData = currentTrans.animals[animalType] || currentTrans.animals.ant;
      const phrase = customPhrase || animalData.taunts[Math.floor(Math.random() * animalData.taunts.length)];
      const utter = new SpeechSynthesisUtterance(phrase);
      utter.lang = currentTrans.tauntVoiceLang;
      utter.pitch = animalType === 'cow' ? 1.25 : 1.75;
      utter.rate = animalType === 'cow' ? 1.2 : 1.35;
      utter.volume = 1.0;
      
      setTimeout(() => {
        window.speechSynthesis.speak(utter);
      }, 350);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }

  playBuaTaunt(animalType = 'ant') {
    if (animalType === 'cow') {
      this.playCowMoo();
      this.playRaspberry(0.3);
      this.playMockingMelody(0.55);
      this.playVoiceTaunt(null, 'cow');
    } else {
      this.playSlideWhistle(0);
      this.playRaspberry(0.25);
      this.playRaspberry(0.75);
      this.playMockingMelody(0.5);
      this.playVoiceTaunt(null, 'ant');
    }
  }

  playClick() {
    const s = this._createOsc('sine', 0, 0.05, 0.15);
    if (!s) return;
    s.osc.frequency.setValueAtTime(1200, s.t);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.05);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.05);
  }

  playAnimalTap(animalType, phrase = null) {
    if (animalType === 'cow') {
      this.playCowMoo(phrase);
    } else {
      this.playAntSqueak(phrase);
    }
  }

  playAntSqueak(phrase = null) {
    if (!this.ctx) return;
    const s = this._createOsc('sine', 400, 0.15, 0.25);
    if (s) {
      s.osc.frequency.setValueAtTime(450, s.t);
      s.osc.frequency.exponentialRampToValueAtTime(1600, s.t + 0.1);
      s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.15);
      s.osc.start(s.t);
      s.osc.stop(s.t + 0.15);
    }

    if (phrase && Math.random() < 0.35 && 'speechSynthesis' in window) {
      try {
        const cleanPhrase = phrase.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ\s!?']/g, '').trim();
        if (cleanPhrase) {
          const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
          const utter = new SpeechSynthesisUtterance(cleanPhrase);
          utter.lang = currentTrans.tauntVoiceLang;
          utter.pitch = 2.0;
          utter.rate = 1.6;
          utter.volume = 0.9;
          window.speechSynthesis.speak(utter);
        }
      } catch (e) {}
    }
  }

  playCowMoo(phrase = null) {
    if (!this.ctx) return;
    // Low frequency cow moo resonance
    const s = this._createOsc('sawtooth', 130, 0.45, 0.35);
    if (s) {
      s.osc.frequency.setValueAtTime(120, s.t);
      s.osc.frequency.linearRampToValueAtTime(165, s.t + 0.12);
      s.osc.frequency.exponentialRampToValueAtTime(95, s.t + 0.45);
      s.gain.gain.setValueAtTime(0.001, s.t);
      s.gain.gain.linearRampToValueAtTime(0.35, s.t + 0.08);
      s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.45);
      s.osc.start(s.t);
      s.osc.stop(s.t + 0.47);
    }

    // Cowbell ding
    this.playCowBell();

    if (phrase && Math.random() < 0.4 && 'speechSynthesis' in window) {
      try {
        const cleanPhrase = phrase.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ\s!?']/g, '').trim();
        if (cleanPhrase) {
          const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
          const utter = new SpeechSynthesisUtterance(cleanPhrase);
          utter.lang = currentTrans.tauntVoiceLang;
          utter.pitch = 1.25;
          utter.rate = 1.35;
          utter.volume = 1.0;
          window.speechSynthesis.speak(utter);
        }
      } catch (e) {}
    }
  }

  playCowBell() {
    if (!this.ctx) return;
    const s = this._createOsc('triangle', 820, 0.25, 0.2);
    if (s) {
      s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.25);
      s.osc.start(s.t);
      s.osc.stop(s.t + 0.25);
    }
  }
}

// ============================================
// RIPPLE EFFECT CLASS
// ============================================

class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.maxRadius = 35;
    this.alpha = 0.8;
    this.alive = true;
  }

  update(dt) {
    this.radius += 90 * dt;
    this.alpha = 0.8 * (1 - this.radius / this.maxRadius);
    if (this.radius >= this.maxRadius) this.alive = false;
  }

  draw(ctx) {
    if (!this.alive) return;
    ctx.save();
    ctx.strokeStyle = `rgba(0, 255, 136, ${this.alpha})`;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = CONFIG.NEON_COLOR;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

// ============================================
// PARTICLE CLASS (for ant escape)
// ============================================

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 80;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.size = 2 + Math.random() * 3;
    this.alive = true;
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.alpha -= dt * 1.5;
    if (this.alpha <= 0) this.alive = false;
  }

  draw(ctx) {
    if (!this.alive) return;
    ctx.save();
    ctx.fillStyle = `rgba(255, 77, 106, ${this.alpha})`;
    ctx.shadowColor = '#ff4d6a';
    ctx.shadowBlur = 6;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ============================================
// FLOATING TEXT CLASS (Comic / Bựa Popups)
// ============================================

class FloatingText {
  constructor(x, y, text) {
    this.x = x;
    this.y = y - 18;
    this.text = text;
    this.vy = -45 - Math.random() * 20;
    this.vx = (Math.random() - 0.5) * 24;
    this.alpha = 1.0;
    this.life = 0;
    this.maxLife = 1.15;
    this.alive = true;
    this.scale = 0.5;
  }

  update(dt) {
    this.life += dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.scale < 1.0) {
      this.scale = Math.min(1.0, this.scale + dt * 4.5);
    }

    if (this.life > 0.55) {
      this.alpha = Math.max(0, 1 - (this.life - 0.55) / (this.maxLife - 0.55));
    }

    if (this.life >= this.maxLife) {
      this.alive = false;
    }
  }

  draw(ctx) {
    if (!this.alive || this.alpha <= 0) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    ctx.globalAlpha = this.alpha;

    ctx.font = 'bold 13px Outfit, sans-serif';
    const textMetrics = ctx.measureText(this.text);
    const boxW = textMetrics.width + 16;
    const boxH = 24;

    // Pill badge background
    ctx.fillStyle = 'rgba(10, 15, 45, 0.9)';
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 10;

    ctx.beginPath();
    ctx.roundRect(-boxW / 2, -boxH / 2, boxW, boxH, 12);
    ctx.fill();
    ctx.stroke();

    // Funny bubble tail
    ctx.beginPath();
    ctx.moveTo(-3, boxH / 2);
    ctx.lineTo(0, boxH / 2 + 5);
    ctx.lineTo(3, boxH / 2);
    ctx.fillStyle = 'rgba(10, 15, 45, 0.9)';
    ctx.fill();

    // Text with neon yellow / orange pop
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffe600';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.text, 0, 0);

    ctx.restore();
  }
}

// ============================================
// FLORA CLASS (Grass Patches, Flowers & Treats 🌿🌸🌼)
// ============================================

class Flora {
  constructor(x, y, floraType = 'grass') {
    this.x = x;
    this.y = y;
    this.type = floraType; // 'grass', 'flower_daisy', 'flower_pink', 'sugar'
    this.targetScale = 0.65 + Math.random() * 0.45;
    this.scale = 0.05; // Starts tiny as a sprout and grows up!
    this.growth = 0.05;
    this.rotation = (Math.random() - 0.5) * 0.6;
    this.alive = true;
    this.alpha = 0.2;
    this.eaten = false;
    this.eatenTimer = 0;
    this.swayPhase = Math.random() * Math.PI * 2;
  }

  update(dt) {
    this.swayPhase += dt * 2.5;

    // Smooth growth from ground
    if (this.growth < 1.0) {
      this.growth = Math.min(1.0, this.growth + dt * 1.6);
      this.scale = this.targetScale * this.growth;
      this.alpha = Math.min(1.0, this.growth * 1.2);
    }

    if (this.eaten) {
      this.alpha = Math.max(0, this.alpha - dt * 2.5);
      this.scale = Math.max(0, this.scale - dt * 1.8);
      if (this.alpha <= 0) this.alive = false;
    }
  }

  draw(ctx) {
    if (!this.alive || this.alpha <= 0) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    ctx.globalAlpha = this.alpha;

    const sway = Math.sin(this.swayPhase) * 0.12;
    ctx.rotate(this.rotation + sway);

    if (this.type === 'grass') {
      // Lush green grass blades
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';

      // Blade 1 (left)
      ctx.beginPath();
      ctx.moveTo(-4, 0);
      ctx.quadraticCurveTo(-7, -8, -10, -12);
      ctx.stroke();

      // Blade 2 (center, taller)
      ctx.strokeStyle = '#4ade80';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(2, -10, 1, -16);
      ctx.stroke();

      // Blade 3 (right)
      ctx.strokeStyle = '#16a34a';
      ctx.beginPath();
      ctx.moveTo(4, 0);
      ctx.quadraticCurveTo(7, -7, 9, -11);
      ctx.stroke();
    } else if (this.type === 'flower_daisy') {
      // White daisy with yellow center
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-2, -6, 0, -12);
      ctx.stroke();

      // Petals
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 6; i++) {
        const ang = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.ellipse(Math.cos(ang) * 4.2, -12 + Math.sin(ang) * 4.2, 3, 1.8, ang, 0, Math.PI * 2);
        ctx.fill();
      }

      // Center
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(0, -12, 2.6, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.type === 'flower_pink') {
      // Pink wildflower
      ctx.strokeStyle = '#16a34a';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(2, -5, 0, -11);
      ctx.stroke();

      // Petals
      ctx.fillStyle = '#f472b6';
      for (let i = 0; i < 5; i++) {
        const ang = (i * Math.PI * 2) / 5;
        ctx.beginPath();
        ctx.arc(Math.cos(ang) * 3.6, -11 + Math.sin(ang) * 3.6, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // Center
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(0, -11, 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.type === 'sugar') {
      // Sweet sugar candy / honey drop for ants
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-1, -1, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

// ============================================
// BIRD CLASS (Flying Birds & Soft Shadows 🕊️🦅🐦)
// ============================================

class Bird {
  constructor(screenWidth, screenHeight) {
    const fromLeft = Math.random() < 0.5;
    this.x = fromLeft ? -60 : screenWidth + 60;
    this.y = 40 + Math.random() * (screenHeight * 0.45);
    
    const targetX = fromLeft ? screenWidth + 90 : -90;
    const targetY = this.y + (Math.random() - 0.5) * 140;
    
    const angle = Math.atan2(targetY - this.y, targetX - this.x);
    this.speed = 100 + Math.random() * 60;
    this.vx = Math.cos(angle) * this.speed;
    this.vy = Math.sin(angle) * this.speed;
    this.angle = angle;

    this.wingPhase = Math.random() * Math.PI * 2;
    this.wingSpeed = 11 + Math.random() * 4;
    this.scale = 0.75 + Math.random() * 0.35;
    this.glideTimer = 0;
    this.alive = true;
    this.birdType = Math.random() < 0.45 ? 'white_dove' : 'swallow';
  }

  update(dt, screenWidth, screenHeight) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    // Flap wings or glide gracefully in wind
    this.glideTimer -= dt;
    if (this.glideTimer <= 0) {
      this.wingPhase += this.wingSpeed * dt;
      if (Math.random() < 0.018) {
        this.glideTimer = 0.8 + Math.random() * 1.2; // Glide with spread wings
      }
    }

    if (this.vx > 0 && this.x > screenWidth + 120) this.alive = false;
    if (this.vx < 0 && this.x < -120) this.alive = false;
  }

  draw(ctx) {
    if (!this.alive) return;
    ctx.save();

    // --- 1. Soft Ground Shadow ---
    const shadowOffsetY = 55 * this.scale;
    const shadowOffsetX = -8;
    ctx.save();
    ctx.translate(this.x + shadowOffsetX, this.y + shadowOffsetY);
    ctx.rotate(this.angle);
    ctx.scale(this.scale * 0.9, this.scale * 0.38);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.14)';
    ctx.beginPath();
    ctx.ellipse(0, 0, 14, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // --- 2. Bird Body in Air ---
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.scale(this.scale, this.scale);

    const wingFlap = Math.sin(this.wingPhase);
    const wingSpan = 13 * wingFlap;

    const isDove = this.birdType === 'white_dove';
    const bodyColor = isDove ? '#f8fafc' : '#1e293b';
    const wingColor = isDove ? '#ffffff' : '#0f172a';
    const wingHighlight = isDove ? '#e2e8f0' : '#334155';
    const beakColor = '#f59e0b';

    // --- Wings (Top & Bottom Wings) ---
    ctx.fillStyle = wingColor;
    ctx.strokeStyle = wingHighlight;
    ctx.lineWidth = 1;

    // Top Wing
    ctx.beginPath();
    ctx.moveTo(-2, 0);
    ctx.quadraticCurveTo(0, -12 - wingSpan, 8, -14 - wingSpan);
    ctx.quadraticCurveTo(3, -6, 2, 0);
    ctx.fill();
    ctx.stroke();

    // Bottom Wing
    ctx.beginPath();
    ctx.moveTo(-2, 0);
    ctx.quadraticCurveTo(0, 12 + wingSpan, 8, 14 + wingSpan);
    ctx.quadraticCurveTo(3, 6, 2, 0);
    ctx.fill();
    ctx.stroke();

    // --- Tail Feathers ---
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.moveTo(-7, 0);
    ctx.lineTo(-17, -4);
    ctx.lineTo(-13, 0);
    ctx.lineTo(-17, 4);
    ctx.closePath();
    ctx.fill();

    // --- Bird Torso / Body ---
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Head ---
    ctx.beginPath();
    ctx.arc(8, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // --- Beak ---
    ctx.fillStyle = beakColor;
    ctx.beginPath();
    ctx.moveTo(11, -1);
    ctx.lineTo(15, 0);
    ctx.lineTo(11, 1);
    ctx.closePath();
    ctx.fill();

    // --- Eye ---
    ctx.fillStyle = isDove ? '#0f172a' : '#ffffff';
    ctx.beginPath();
    ctx.arc(8.5, -1, 0.8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

// ============================================
// ANIMAL CLASS (Ant 🐜 & Dairy Cow 🐮)
// ============================================

class Animal {
  constructor(x, y, id, animalType = 'ant') {
    this.id = id;
    this.x = x;
    this.y = y;
    this.animalType = animalType;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = (animalType === 'cow' ? CONFIG.ANT_SPEED * 0.9 : CONFIG.ANT_SPEED) + (Math.random() - 0.5) * 10;
    this.wanderStrength = CONFIG.WANDER_STRENGTH;
    this.legPhase = Math.random() * Math.PI * 2;
    this.startled = false;
    this.startledTimer = 0;
    this.escaped = false;
    this.wanderTimer = 0;
    this.wanderTarget = this.angle;

    // Natural Animal Behaviors (Grazing, Sniffing & Chewing)
    this.behaviorState = 'WALK'; // 'WALK' | 'GRAZE' (Cow) | 'SNIFF' (Ant)
    this.idleTimer = 2.5 + Math.random() * 3.5;
    this.grazeDuration = 0;
    this.chewPhase = 0;
    this.sniffPhase = 0;
    this.isChewingGrass = false;
  }

  update(dt, gameRef = null) {
    if (this.startled) {
      this.behaviorState = 'WALK';
      this.startledTimer -= dt;
      if (this.startledTimer <= 0) this.startled = false;
    }

    // --- IDLE / GRAZING / SNIFFING BEHAVIOR ---
    if (this.behaviorState === 'GRAZE' || this.behaviorState === 'SNIFF') {
      this.grazeDuration -= dt;
      if (this.animalType === 'cow') {
        this.chewPhase += dt * 8.5;
      } else {
        this.sniffPhase += dt * 15;
      }

      // Check if cow is grazing close to a grass / flower patch
      if (gameRef && gameRef.floraList && this.animalType === 'cow' && !this.isChewingGrass) {
        for (const fl of gameRef.floraList) {
          if (fl.alive && !fl.eaten && dist(this.x, this.y, fl.x, fl.y) < 24) {
            fl.eaten = true;
            this.isChewingGrass = true;
            if (gameRef.particles) {
              for (let k = 0; k < 6; k++) {
                gameRef.particles.push(new Particle(fl.x, fl.y));
              }
            }
            break;
          }
        }
      }

      if (this.grazeDuration <= 0) {
        this.behaviorState = 'WALK';
        this.idleTimer = 3.5 + Math.random() * 4.5;
        this.isChewingGrass = false;
      }
      return; // Stand in place while eating / sniffing
    }

    // Normal walk & periodic grazing countdown
    this.idleTimer -= dt;
    if (this.idleTimer <= 0 && !this.startled && !this.escaped) {
      this.behaviorState = this.animalType === 'cow' ? 'GRAZE' : 'SNIFF';
      this.grazeDuration = 1.2 + Math.random() * 1.8;
      this.idleTimer = 4.0 + Math.random() * 5.0;

      // 30% chance to show cute floating thought
      if (gameRef && gameRef.floatingTexts && Math.random() < 0.32) {
        const viTaunts = this.animalType === 'cow'
          ? ["Nhai nhai 🌾", "Mlem mlem 🌸", "Cỏ non ngon quá 😋", "Ngon xỉu 🌿", "Nhai nhóp nhép 🐮"]
          : ["Ngửi ngửi 👃", "Mùi gì thơm thế 🍬", "Có đường nè 🍯", "Hít hà 👃", "Mùi mật ngọt 🐝"];
        const enTaunts = this.animalType === 'cow'
          ? ["Munch munch 🌾", "Yummy grass 😋", "Mlem mlem 🌸", "Chewing 🌿", "Delicious! 🐮"]
          : ["Sniff sniff 👃", "Smells sweet 🍬", "Found sugar! 🍯", "Sniffing 👃"];
        const list = (gameRef.lang === 'vi' ? viTaunts : enTaunts);
        const phrase = list[Math.floor(Math.random() * list.length)];
        gameRef.floatingTexts.push(new FloatingText(this.x, this.y, phrase));
      }
      return;
    }

    // Smooth random walk: pick a new target direction periodically
    this.wanderTimer -= dt;
    if (this.wanderTimer <= 0) {
      this.wanderTimer = 0.5 + Math.random() * 1.5;
      this.wanderTarget = this.angle + (Math.random() - 0.5) * Math.PI * 0.8;
    }

    // Smoothly rotate toward wander target
    let angleDiff = normalizeAngle(this.wanderTarget - this.angle);
    this.angle += angleDiff * this.wanderStrength * dt;

    // Occasional big turns for unpredictability
    if (Math.random() < CONFIG.BIG_TURN_CHANCE) {
      this.wanderTarget = this.angle + (Math.random() - 0.5) * Math.PI * 1.5;
    }

    // Startled state (faster movement after redirect)
    let currentSpeed = this.speed;
    if (this.startled) {
      currentSpeed *= 1.6;
    }

    // Move
    this.x += Math.cos(this.angle) * currentSpeed * dt;
    this.y += Math.sin(this.angle) * currentSpeed * dt;

    // Animate legs
    this.legPhase += currentSpeed * dt * (this.animalType === 'cow' ? 0.14 : 0.18);
  }

  redirect() {
    this.angle += Math.PI + (Math.random() - 0.5) * CONFIG.REDIRECT_SPREAD;
    this.wanderTarget = this.angle;
    this.behaviorState = 'WALK';
    this.startled = true;
    this.startledTimer = 0.4;
  }

  containsPoint(px, py) {
    const hitRadius = this.animalType === 'cow' ? 44 : CONFIG.ANT_HIT_RADIUS;
    return dist(this.x, this.y, px, py) < hitRadius;
  }

  draw(ctx) {
    if (this.animalType === 'cow') {
      this.drawCow(ctx);
    } else {
      this.drawAnt(ctx);
    }
  }

  drawAnt(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    const isSniffing = this.behaviorState === 'SNIFF';
    const sniffAntenna = isSniffing ? Math.sin(this.sniffPhase) * 5 : 0;
    const sniffHeadDip = isSniffing ? Math.sin(this.sniffPhase * 0.5) * 1.2 : 0;

    // --- Shadow ---
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(0, 3, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Legs (3 pairs) ---
    ctx.strokeStyle = CONFIG.ANT_LEG_COLOR;
    ctx.lineWidth = 1.6;
    ctx.lineCap = 'round';

    for (let i = 0; i < 3; i++) {
      const baseX = -7 + i * 6;
      const phase = this.legPhase + i * (Math.PI / 1.5);
      const swing = isSniffing ? 0 : Math.sin(phase);

      const kneeOffsetY = 7 + Math.abs(swing) * 3;
      const footOffsetX = swing * 4;

      // Left leg
      ctx.beginPath();
      ctx.moveTo(baseX, -3.5);
      ctx.quadraticCurveTo(baseX - 1, -(kneeOffsetY * 0.6), baseX + footOffsetX, -kneeOffsetY);
      ctx.stroke();

      // Right leg
      ctx.beginPath();
      ctx.moveTo(baseX, 3.5);
      ctx.quadraticCurveTo(baseX + 1, kneeOffsetY * 0.6, baseX - footOffsetX, kneeOffsetY);
      ctx.stroke();
    }

    // --- Abdomen ---
    ctx.fillStyle = CONFIG.ANT_BODY_COLOR;
    ctx.beginPath();
    ctx.ellipse(-11, 0, 8, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(-13, 0, 3, 4.5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // --- Petiole ---
    ctx.fillStyle = CONFIG.ANT_BODY_MID;
    ctx.beginPath();
    ctx.ellipse(-3, 0, 2.5, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Thorax ---
    ctx.fillStyle = CONFIG.ANT_BODY_MID;
    ctx.beginPath();
    ctx.ellipse(2, 0, 4.5, 3.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Head (with sniffing dip) ---
    ctx.fillStyle = CONFIG.ANT_BODY_COLOR;
    ctx.beginPath();
    ctx.ellipse(9 + sniffHeadDip, 0, 4.5, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Mandibles ---
    ctx.strokeStyle = CONFIG.ANT_LEG_COLOR;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(12.5 + sniffHeadDip, -2);
    ctx.quadraticCurveTo(15 + sniffHeadDip, -2.5, 16 + sniffHeadDip, -4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12.5 + sniffHeadDip, 2);
    ctx.quadraticCurveTo(15 + sniffHeadDip, 2.5, 16 + sniffHeadDip, 4);
    ctx.stroke();

    // --- Antennae (vibrate while sniffing) ---
    ctx.strokeStyle = CONFIG.ANT_LEG_COLOR;
    ctx.lineWidth = 1;
    const antennaWave = (isSniffing ? sniffAntenna : Math.sin(this.legPhase * 0.7) * 2);
    ctx.beginPath();
    ctx.moveTo(11 + sniffHeadDip, -3);
    ctx.quadraticCurveTo(16 + sniffHeadDip, -7 + antennaWave, 20 + sniffHeadDip, -9 + antennaWave);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(11 + sniffHeadDip, 3);
    ctx.quadraticCurveTo(16 + sniffHeadDip, 7 - antennaWave, 20 + sniffHeadDip, 9 - antennaWave);
    ctx.stroke();

    // --- Antenna tips ---
    ctx.fillStyle = CONFIG.ANT_LEG_COLOR;
    ctx.beginPath();
    ctx.arc(20 + sniffHeadDip, -9 + antennaWave, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(20 + sniffHeadDip, 9 - antennaWave, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // --- Eyes ---
    ctx.fillStyle = this.startled ? '#ff6b6b' : '#eee';
    ctx.beginPath();
    ctx.arc(10.5 + sniffHeadDip, -2.2, 1.4, 0, Math.PI * 2);
    ctx.arc(10.5 + sniffHeadDip, 2.2, 1.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = this.startled ? '#cc0000' : '#222';
    ctx.beginPath();
    ctx.arc(11 + sniffHeadDip, -2.2, 0.7, 0, Math.PI * 2);
    ctx.arc(11 + sniffHeadDip, 2.2, 0.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawCow(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    const isGrazing = this.behaviorState === 'GRAZE';
    const legWave = isGrazing ? 0 : Math.sin(this.legPhase) * 4.5;
    const tailWave = (isGrazing ? Math.sin(this.chewPhase * 1.2) * 0.5 : Math.sin(this.legPhase * 1.3) * 0.35);
    const chewMotion = isGrazing ? Math.sin(this.chewPhase) * 1.8 : 0;

    // --- Shadow ---
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.beginPath();
    ctx.ellipse(0, 3, 18, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- 4 Legs ---
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;

    // Rear legs
    ctx.beginPath();
    ctx.roundRect(-10, -9 + legWave * 0.7, 4.5, 7, 2);
    ctx.roundRect(-10, 3 - legWave * 0.7, 4.5, 7, 2);
    ctx.fill();
    ctx.stroke();

    // Front legs
    ctx.beginPath();
    ctx.roundRect(5, -9 - legWave * 0.7, 4.5, 7, 2);
    ctx.roundRect(5, 3 + legWave * 0.7, 4.5, 7, 2);
    ctx.fill();
    ctx.stroke();

    // Black hooves
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-10, -9 + legWave * 0.7 + 5, 4.5, 2.5);
    ctx.fillRect(-10, 3 - legWave * 0.7 + 5, 4.5, 2.5);
    ctx.fillRect(5, -9 - legWave * 0.7 + 5, 4.5, 2.5);
    ctx.fillRect(5, 3 + legWave * 0.7 + 5, 4.5, 2.5);

    // --- Tail ---
    ctx.save();
    ctx.translate(-14, 0);
    ctx.rotate(tailWave);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-6, 2, -9, 0);
    ctx.stroke();
    // Bushy tail tip
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(-9, 0, 2.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // --- Plump Body (White with Black Spots) ---
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.ellipse(-1, 0, 15, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cow spots
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.ellipse(-7, -4, 5, 4, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(3, 4, 5.5, 4, -Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-3, 6, 3.5, 2.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Golden Cowbell ---
    ctx.fillStyle = '#facc15';
    ctx.strokeStyle = '#a16207';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(9, 0, 3.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // --- Head (Lowers down when grazing) ---
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(14 + (isGrazing ? 1.5 : 0), 0, 8, 7.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Head patch
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.ellipse(12, -3, 3.8, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Ears (Wiggle slightly) ---
    const earWiggle = isGrazing ? Math.sin(this.chewPhase * 1.5) * 0.15 : 0;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(11, -8, 4, 2.2, -Math.PI / 3 + earWiggle, 0, Math.PI * 2);
    ctx.ellipse(11, 8, 4, 2.2, Math.PI / 3 - earWiggle, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f472b6'; // Pink inner ear
    ctx.beginPath();
    ctx.ellipse(11, -8, 2.4, 1.2, -Math.PI / 3 + earWiggle, 0, Math.PI * 2);
    ctx.ellipse(11, 8, 2.4, 1.2, Math.PI / 3 - earWiggle, 0, Math.PI * 2);
    ctx.fill();

    // --- Horns (Golden/Cream) ---
    ctx.fillStyle = '#fef08a';
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(12, -5);
    ctx.quadraticCurveTo(11, -10, 15, -9);
    ctx.lineTo(14, -5);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(12, 5);
    ctx.quadraticCurveTo(11, 10, 15, 9);
    ctx.lineTo(14, 5);
    ctx.fill();
    ctx.stroke();

    // --- Pink Muzzle & Chewing Motion ---
    ctx.fillStyle = '#fda4af';
    ctx.beginPath();
    ctx.ellipse(19 + (isGrazing ? 1.5 : 0), chewMotion * 0.7, 4.5, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Nostrils
    ctx.fillStyle = '#881337';
    ctx.beginPath();
    ctx.arc(20 + (isGrazing ? 1.5 : 0), -1.8 + chewMotion * 0.7, 1, 0, Math.PI * 2);
    ctx.arc(20 + (isGrazing ? 1.5 : 0), 1.8 + chewMotion * 0.7, 1, 0, Math.PI * 2);
    ctx.fill();

    // Grass blade in mouth when grazing or eating grass
    if (isGrazing || this.isChewingGrass) {
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(21, chewMotion * 0.7);
      ctx.quadraticCurveTo(25, -4, 28, -2);
      ctx.stroke();

      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.ellipse(28, -2, 2.5, 1.2, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // --- Eyes ---
    ctx.fillStyle = this.startled ? '#ef4444' : '#0f172a';
    ctx.beginPath();
    ctx.arc(15, -3.5, this.startled ? 2.3 : 1.6, 0, Math.PI * 2);
    ctx.arc(15, 3.5, this.startled ? 2.3 : 1.6, 0, Math.PI * 2);
    ctx.fill();

    if (!this.startled) {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(15.5, -3.8, 0.65, 0, Math.PI * 2);
      ctx.arc(15.5, 3.2, 0.65, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

const Ant = Animal; // Backward compatibility alias

// ============================================
// MAIN GAME CLASS
// ============================================

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');

    // UI Elements
    this.startScreen = document.getElementById('start-screen');
    this.pauseScreen = document.getElementById('pause-screen');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.hud = document.getElementById('hud');
    this.inGameControls = document.getElementById('in-game-controls');
    this.levelBadge = document.getElementById('level-badge');
    this.levelDivider = document.getElementById('level-divider');
    this.addAntBtn = document.getElementById('add-ant-btn');
    this.drawInstruction = document.getElementById('draw-instruction');
    this.scoreDisplay = document.getElementById('score');
    this.antCountDisplay = document.getElementById('ant-count');
    this.finalModeEl = document.getElementById('final-mode');
    this.finalLevelRow = document.getElementById('final-level-row');
    this.finalLevelEl = document.getElementById('final-level');
    this.finalScoreEl = document.getElementById('final-score');
    this.finalAntsEl = document.getElementById('final-ants');
    this.highScoreEl = document.getElementById('high-score');
    this.modeDescEl = document.getElementById('mode-desc');
    this.toastMsg = document.getElementById('toast-msg');

    // Pause Screen Elements
    this.pauseModeVal = document.getElementById('pause-mode-val');
    this.pauseTimeVal = document.getElementById('pause-time-val');
    this.pauseAntsVal = document.getElementById('pause-ants-val');

    // Sound
    this.sound = new SoundManager();

    // Language Detection & Setup
    const savedLang = localStorage.getItem('chan-kien-lang');
    const browserLang = (navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en';
    this.lang = savedLang || browserLang;

    // Animal Theme ('ant' or 'cow')
    this.animal = localStorage.getItem('chan-kien-animal') || 'ant';

    // Game Mode & Level State
    this.mode = 'free'; // 'free' or 'level'
    this.currentLevel = 1;
    this.levelTimer = 0;
    this.levelInterval = 10; // seconds per level in Level Mode

    // Game state
    this.state = STATE.MENU;
    this.previousState = STATE.PLAYING;
    this.enclosure = [];
    this.ants = [];
    this.floraList = [];
    this.birds = [];
    this.birdTimer = 2.0 + Math.random() * 3.0;
    this.floraSproutTimer = 1.5 + Math.random() * 1.5;
    this.ripples = [];
    this.particles = [];
    this.floatingTexts = [];
    this.score = 0;
    this.maxAnts = 0;
    this.antIdCounter = 0;
    this.isDrawing = false;
    this.currentPath = [];
    this.lastTime = 0;
    this.bgPattern = null;
    this.menuAnts = [];
    this.gameOverFlash = 0;
    this.centroid = { x: 0, y: 0 };
    this.pulseTime = 0;
    this.gameOverDelay = 0;
    this.toastTimeout = null;

    // High scores
    this.highScores = this.loadHighScore();

    // Setup
    this.resizeCanvas();
    this.createBgPattern();
    this.spawnFlora();
    this.createMenuAnts();
    this.bindEvents();
    this.setAnimal(this.animal, false);
    this.setLanguage(this.lang);
    this.updateUIVisibility();

    // Start loop
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  setAnimal(animalType, playSound = true) {
    this.animal = animalType || 'ant';
    localStorage.setItem('chan-kien-animal', this.animal);

    document.querySelectorAll('.animal-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.animal === this.animal);
    });

    if (playSound) {
      this.sound.playAnimalTap(this.animal);
    }

    this.spawnFlora();
    this.createMenuAnts();
    this.setLanguage(this.lang);
  }

  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('chan-kien-lang', lang);
    this.sound.setLanguage(lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = TRANSLATIONS[lang] || TRANSLATIONS.vi;
    const animalData = t.animals[this.animal] || t.animals.ant;
    
    document.title = `${animalData.emoji} ${animalData.title} - Herding Game`;
    const titleEmoji = document.getElementById('title-emoji');
    if (titleEmoji) titleEmoji.textContent = animalData.emoji;
    const titleText = document.getElementById('title-text');
    if (titleText) titleText.textContent = animalData.title;
    const gameSubtitle = document.getElementById('game-subtitle');
    if (gameSubtitle) gameSubtitle.textContent = animalData.subtitle;

    const animalAntText = document.getElementById('animal-ant-text');
    if (animalAntText) animalAntText.textContent = t.animals.ant.btnName;
    const animalCowText = document.getElementById('animal-cow-text');
    if (animalCowText) animalCowText.textContent = t.animals.cow.btnName;

    const modeFreeText = document.getElementById('mode-free-text');
    if (modeFreeText) modeFreeText.textContent = t.modeFree;
    const modeLevelText = document.getElementById('mode-level-text');
    if (modeLevelText) modeLevelText.textContent = t.modeLevel;
    
    if (this.modeDescEl) {
      this.modeDescEl.textContent = this.mode === 'level' ? t.modeDescLevel : t.modeDescFree;
    }

    const rule1 = document.getElementById('rule-1-text');
    if (rule1) rule1.textContent = animalData.rule1;
    const rule2 = document.getElementById('rule-2-text');
    if (rule2) rule2.textContent = animalData.rule2;
    const rule3 = document.getElementById('rule-3-text');
    if (rule3) rule3.textContent = animalData.rule3;

    const startBtnText = document.getElementById('start-btn-text');
    if (startBtnText) startBtnText.textContent = t.startBtn;
    const installBtnText = document.getElementById('install-btn-text');
    if (installBtnText) installBtnText.textContent = t.installBtn;
    const shopeeBtnText = document.getElementById('shopee-btn-text');
    if (shopeeBtnText) shopeeBtnText.textContent = t.shopeeBtn;
    const shopeeBtnText2 = document.getElementById('shopee-btn-text-2');
    if (shopeeBtnText2) shopeeBtnText2.textContent = t.shopeeBtn;
    const floatingShopee = document.getElementById('floating-shopee');
    if (floatingShopee) {
      floatingShopee.innerHTML = `<span class="floating-shopee-icon">🛍️</span><span class="floating-shopee-text">${t.floatingShopee}</span>`;
    }

    const addAntLabel = document.getElementById('add-ant-label');
    if (addAntLabel) addAntLabel.textContent = animalData.addBtn;
    const instructionText = document.getElementById('instruction-text');
    if (instructionText) instructionText.textContent = animalData.drawInstruction;

    const tauntBubble = document.getElementById('taunt-bubble');
    if (tauntBubble) tauntBubble.textContent = t.tauntInitial;

    const gameoverTitle = document.getElementById('gameover-title');
    if (gameoverTitle) gameoverTitle.textContent = animalData.gameOver;

    const labelMode = document.getElementById('score-label-mode');
    if (labelMode) labelMode.textContent = `🎮 ${t.scoreMode}`;
    const labelLevel = document.getElementById('score-label-level');
    if (labelLevel) labelLevel.textContent = `⭐ ${t.scoreLevel}`;
    const labelTime = document.getElementById('score-label-time');
    if (labelTime) labelTime.textContent = `⏱ ${t.scoreTime}`;
    const labelAnts = document.getElementById('score-label-ants');
    if (labelAnts) labelAnts.textContent = `${animalData.emoji} ${animalData.countLabel}`;
    const labelRecord = document.getElementById('score-label-record');
    if (labelRecord) labelRecord.textContent = `🏆 ${t.scoreHigh}`;

    const restartBtnText = document.getElementById('restart-btn-text');
    if (restartBtnText) restartBtnText.textContent = t.restartBtn;

    // Pause Screen texts
    const pauseTitle = document.getElementById('pause-title');
    if (pauseTitle) pauseTitle.textContent = t.pauseTitle;
    const pauseLabelMode = document.getElementById('pause-label-mode');
    if (pauseLabelMode) pauseLabelMode.textContent = `🎮 ${t.scoreMode}`;
    const pauseLabelTime = document.getElementById('pause-label-time');
    if (pauseLabelTime) pauseLabelTime.textContent = `⏱ ${t.scoreTime}`;
    const pauseLabelAnts = document.getElementById('pause-label-ants');
    if (pauseLabelAnts) pauseLabelAnts.textContent = `${animalData.emoji} ${animalData.countLabel}`;
    const resumeBtnText = document.getElementById('resume-btn-text');
    if (resumeBtnText) resumeBtnText.textContent = t.resumeBtn;
    const pauseRestartText = document.getElementById('pause-restart-text');
    if (pauseRestartText) pauseRestartText.textContent = t.pauseRestart;
    const pauseMenuText = document.getElementById('pause-menu-text');
    if (pauseMenuText) pauseMenuText.textContent = t.mainMenuBtn;

    // Share & Menu buttons in GameOver
    const shareBtnText = document.getElementById('share-btn-text');
    if (shareBtnText) shareBtnText.textContent = t.shareBtn;
    const gameoverMenuText = document.getElementById('gameover-menu-text');
    if (gameoverMenuText) gameoverMenuText.textContent = t.mainMenuBtn;

    // Ad slot
    const adTagText = document.getElementById('ad-tag-text');
    if (adTagText) adTagText.textContent = t.adTag;
    const adSubtitleText = document.getElementById('ad-subtitle-text');
    if (adSubtitleText) adSubtitleText.textContent = t.adSubtitle;
    const adPlaceholderText = document.getElementById('ad-placeholder-text');
    if (adPlaceholderText) adPlaceholderText.textContent = t.adPlaceholder;

    this.updateHUD();
  }

  // --- Flora / Grass & Flower Generation ---
  spawnFlora() {
    this.floraList = [];
    const count = this.state === STATE.MENU ? 18 : 24;
    for (let i = 0; i < count; i++) {
      if (this.state === STATE.MENU || this.enclosure.length < 3) {
        const x = 40 + Math.random() * (this.width - 80);
        const y = 80 + Math.random() * (this.height - 160);
        this.floraList.push(new Flora(x, y, this.getRandomFloraType()));
      } else {
        this.spawnSingleFloraInEnclosure();
      }
    }
  }

  getRandomFloraType() {
    if (this.animal === 'cow') {
      const types = ['grass', 'grass', 'flower_daisy', 'flower_pink'];
      return types[Math.floor(Math.random() * types.length)];
    } else {
      const types = ['sugar', 'grass', 'sugar'];
      return types[Math.floor(Math.random() * types.length)];
    }
  }

  spawnSingleFloraInEnclosure() {
    if (this.enclosure.length < 3) return;
    const xs = this.enclosure.map(p => p.x);
    const ys = this.enclosure.map(p => p.y);
    const minX = Math.min(...xs) + 12;
    const maxX = Math.max(...xs) - 12;
    const minY = Math.min(...ys) + 12;
    const maxY = Math.max(...ys) - 12;

    for (let attempt = 0; attempt < 25; attempt++) {
      const rx = minX + Math.random() * (maxX - minX);
      const ry = minY + Math.random() * (maxY - minY);
      if (isPointInPolygon(rx, ry, this.enclosure)) {
        this.floraList.push(new Flora(rx, ry, this.getRandomFloraType()));
        return;
      }
    }
  }

  // --- Canvas Setup ---
  resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
    this.width = w;
    this.height = h;
  }

  createBgPattern() {
    const pc = document.createElement('canvas');
    pc.width = 24;
    pc.height = 24;
    const pctx = pc.getContext('2d');
    pctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
    pctx.beginPath();
    pctx.arc(12, 12, 1, 0, Math.PI * 2);
    pctx.fill();
    this.bgPattern = this.ctx.createPattern(pc, 'repeat');
  }

  createMenuAnts() {
    this.menuAnts = [];
    for (let i = 0; i < 6; i++) {
      const ant = new Animal(
        100 + Math.random() * (this.width - 200),
        100 + Math.random() * (this.height - 200),
        -1,
        this.animal
      );
      ant.speed = 30 + Math.random() * 20;
      this.menuAnts.push(ant);
    }
  }

  // --- Event Binding ---
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createBgPattern();
      this.spawnFlora();
    });

    // Mouse
    this.canvas.addEventListener('mousedown', (e) => {
      this.onPointerDown(e.clientX, e.clientY);
    });
    this.canvas.addEventListener('mousemove', (e) => {
      this.onPointerMove(e.clientX, e.clientY);
    });
    this.canvas.addEventListener('mouseup', () => {
      this.onPointerUp();
    });

    // Touch
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      this.onPointerDown(t.clientX, t.clientY);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      this.onPointerMove(t.clientX, t.clientY);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.onPointerUp();
    }, { passive: false });

    // Animal Switcher Buttons (Kiến 🐜 / Bò 🐮)
    document.querySelectorAll('.animal-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const animal = btn.dataset.animal;
        this.setAnimal(animal, true);
      });
    });

    // Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        this.sound.playClick();
        this.setLanguage(lang);
      });
    });

    // Mode Switcher Buttons
    document.querySelectorAll('.mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.setGameMode(mode);
      });
    });

    // Buttons & Interactive
    document.getElementById('start-btn').addEventListener('click', () => this.startGame());
    document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
    
    // In-game controls
    const pauseBtn = document.getElementById('pause-btn');
    if (pauseBtn) pauseBtn.addEventListener('click', () => this.pauseGame());
    
    const quickRestartBtn = document.getElementById('quick-restart-btn');
    if (quickRestartBtn) quickRestartBtn.addEventListener('click', () => this.restartGame());

    // Pause Screen Buttons
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.addEventListener('click', () => this.resumeGame());

    const pauseRestartBtn = document.getElementById('pause-restart-btn');
    if (pauseRestartBtn) pauseRestartBtn.addEventListener('click', () => this.restartGame());

    const pauseMenuBtn = document.getElementById('pause-menu-btn');
    if (pauseMenuBtn) pauseMenuBtn.addEventListener('click', () => this.quitToMenu());

    // Game Over Buttons
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) shareBtn.addEventListener('click', () => this.shareAchievement());

    const gameoverMenuBtn = document.getElementById('gameover-menu-btn');
    if (gameoverMenuBtn) gameoverMenuBtn.addEventListener('click', () => this.quitToMenu());

    this.addAntBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.addAnt();
    });

    // Taunt face tap interaction
    const tauntContainer = document.querySelector('.taunt-container');
    const tauntText = document.querySelector('.taunt-text');
    if (tauntContainer) {
      tauntContainer.style.cursor = 'pointer';
      tauntContainer.addEventListener('click', () => {
        const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
        const animalData = t.animals[this.animal] || t.animals.ant;
        const phrases = animalData.tapTaunts || t.interactiveTaunts;
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        if (tauntText) tauntText.textContent = randomPhrase;
        
        tauntContainer.classList.remove('taunt-pop');
        void tauntContainer.offsetWidth;
        tauntContainer.classList.add('taunt-pop');
        
        this.sound.playAnimalTap(this.animal, randomPhrase);
      });
    }

    // Prevent context menu on long press
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  pauseGame() {
    if (this.state !== STATE.PLAYING && this.state !== STATE.DRAWING) return;
    this.sound.playClick();
    this.previousState = this.state;
    this.setState(STATE.PAUSED);

    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
    if (this.pauseModeVal) {
      this.pauseModeVal.textContent = this.mode === 'level' ? `🏆 ${t.modeLevel}` : `🎯 ${t.modeFree}`;
    }
    if (this.pauseTimeVal) {
      this.pauseTimeVal.textContent = this.formatTime(this.score);
    }
    if (this.pauseAntsVal) {
      this.pauseAntsVal.textContent = `${this.ants.filter(a => !a.escaped).length}`;
    }
  }

  resumeGame() {
    this.sound.playClick();
    this.setState(this.previousState || STATE.PLAYING);
  }

  quitToMenu() {
    this.sound.playClick();
    this.enclosure = [];
    this.ants = [];
    this.currentPath = [];
    this.ripples = [];
    this.particles = [];
    this.floatingTexts = [];
    this.score = 0;
    this.maxAnts = 0;
    this.currentLevel = 1;
    this.levelTimer = 0;
    this.antIdCounter = 0;
    this.gameOverFlash = 0;
    this.gameOverDelay = 0;
    this.spawnFlora();
    this.createMenuAnts();
    this.setState(STATE.MENU);
  }

  async shareAchievement() {
    this.sound.playClick();
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
    const animalData = t.animals[this.animal] || t.animals.ant;
    const formattedTime = this.formatTime(this.score);
    const antsCount = this.maxAnts || this.ants.length;
    const text = t.shareText(animalData.title, formattedTime, antsCount, animalData.unit, this.mode, this.currentLevel);

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${animalData.emoji} ${animalData.title} - High Score`,
          text: text,
          url: 'https://chan-kien.pages.dev'
        });
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Share error:', err);
        }
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(text);
      this.showToast(t.shareCopied);
    } catch (err) {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      this.showToast(t.shareCopied);
    }
  }

  showToast(msg) {
    if (!this.toastMsg) return;
    this.toastMsg.textContent = msg;
    this.toastMsg.classList.remove('show');
    void this.toastMsg.offsetWidth;
    this.toastMsg.classList.add('show');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastMsg.classList.remove('show');
    }, 3000);
  }

  setGameMode(mode) {
    this.mode = mode;
    this.sound.playClick();
    document.querySelectorAll('.mode-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.mode === mode);
    });
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
    if (this.modeDescEl) {
      if (mode === 'level') {
        this.modeDescEl.textContent = t.modeDescLevel;
      } else {
        this.modeDescEl.textContent = t.modeDescFree;
      }
    }
  }

  getCanvasPos(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  // --- Input Handlers ---
  onPointerDown(clientX, clientY) {
    const pos = this.getCanvasPos(clientX, clientY);

    if (this.state === STATE.DRAWING) {
      this.isDrawing = true;
      this.currentPath = [pos];
    } else if (this.state === STATE.PLAYING) {
      this.handleTap(pos.x, pos.y);
    }
  }

  onPointerMove(clientX, clientY) {
    if (!this.isDrawing || this.state !== STATE.DRAWING) return;
    const pos = this.getCanvasPos(clientX, clientY);
    const last = this.currentPath[this.currentPath.length - 1];
    if (dist(pos.x, pos.y, last.x, last.y) >= CONFIG.MIN_DRAW_DIST) {
      this.currentPath.push(pos);
    }
  }

  onPointerUp() {
    if (!this.isDrawing || this.state !== STATE.DRAWING) return;
    this.isDrawing = false;

    if (this.currentPath.length >= CONFIG.MIN_PATH_POINTS) {
      this.enclosure = [...this.currentPath];
      this.centroid = polygonCentroid(this.enclosure);

      // Validate: centroid should be inside the polygon
      if (!isPointInPolygon(this.centroid.x, this.centroid.y, this.enclosure)) {
        this.centroid = this.findSafeCenter();
      }

      this.sound.playDrawComplete();
      this.setState(STATE.PLAYING);
      this.spawnFlora(); // Spawn grass & flowers inside the new pen!
      this.addAnt(false);
    } else {
      this.currentPath = [];
    }
  }

  findSafeCenter() {
    const xs = this.enclosure.map(p => p.x);
    const ys = this.enclosure.map(p => p.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    if (isPointInPolygon(cx, cy, this.enclosure)) {
      return { x: cx, y: cy };
    }
    return polygonCentroid(this.enclosure);
  }

  handleTap(x, y) {
    for (const ant of this.ants) {
      if (!ant.escaped && ant.containsPoint(x, y)) {
        ant.redirect();
        this.ripples.push(new Ripple(x, y));
        
        // Random funny / trolling phrase popup
        const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
        const animalData = t.animals[this.animal] || t.animals.ant;
        const taunts = animalData.tapTaunts || ["Á đù! 😵", "Đau nha má! 💢", "Né đẹp chưa! 💃"];
        const phrase = taunts[Math.floor(Math.random() * taunts.length)];
        this.floatingTexts.push(new FloatingText(ant.x, ant.y, phrase));

        this.sound.playTap();
        this.sound.playAnimalTap(this.animal, phrase);
        return;
      }
    }
  }

  addAnt(isLevelUp = false) {
    if (this.state !== STATE.PLAYING) return;
    const ant = new Animal(this.centroid.x, this.centroid.y, this.antIdCounter++, this.animal);
    if (this.mode === 'level' && this.currentLevel > 1) {
      ant.speed += (this.currentLevel - 1) * 3.5;
    }
    this.ants.push(ant);
    this.maxAnts = Math.max(this.maxAnts, this.ants.length);
    this.ripples.push(new Ripple(this.centroid.x, this.centroid.y));
    if (!isLevelUp) {
      this.sound.playAddAnt();
    }
    this.updateHUD();
  }

  levelUp() {
    this.currentLevel++;
    this.levelTimer = 0;
    this.addAnt(true);
    this.sound.playLevelUp(this.currentLevel);

    if (this.levelBadge) {
      this.levelBadge.classList.remove('pulse');
      void this.levelBadge.offsetWidth;
      this.levelBadge.classList.add('pulse');
    }

    this.updateHUD();
  }

  // --- State Management ---
  startGame() {
    this.sound.init();
    this.sound.resume();
    this.sound.playClick();
    this.setState(STATE.DRAWING);
  }

  restartGame() {
    this.sound.playClick();
    this.enclosure = [];
    this.ants = [];
    this.currentPath = [];
    this.ripples = [];
    this.particles = [];
    this.floatingTexts = [];
    this.score = 0;
    this.maxAnts = 0;
    this.currentLevel = 1;
    this.levelTimer = 0;
    this.antIdCounter = 0;
    this.gameOverFlash = 0;
    this.gameOverDelay = 0;
    this.spawnFlora();
    this.createMenuAnts();
    this.setState(STATE.DRAWING);
  }

  setState(newState) {
    const prevState = this.state;
    this.state = newState;
    this.updateUIVisibility();

    if (newState === STATE.PLAYING && prevState !== STATE.PAUSED) {
      this.score = 0;
      this.currentLevel = 1;
      this.levelTimer = 0;
    }

    if (newState === STATE.GAME_OVER) {
      this.gameOverFlash = 0.6;
      this.gameOverDelay = 1.0;

      // Sound effects
      this.sound.playGameOver();
      this.sound.playBuaTaunt(this.animal);

      // Spawn particles at escape point
      const escapedAnt = this.ants.find(a => a.escaped);
      if (escapedAnt) {
        for (let i = 0; i < 20; i++) {
          this.particles.push(new Particle(escapedAnt.x, escapedAnt.y));
        }
      }

      // Check & save high score
      const hs = this.highScores[this.mode] || { time: 0, ants: 0, level: 1 };
      const isNewRecord = this.score > hs.time;
      if (isNewRecord) {
        this.highScores[this.mode] = {
          time: this.score,
          ants: this.maxAnts,
          level: this.currentLevel
        };
        this.saveHighScore();
      }

      const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
      const animalData = t.animals[this.animal] || t.animals.ant;

      // Update game over UI
      if (this.finalModeEl) {
        this.finalModeEl.textContent = this.mode === 'level' ? `🏆 ${t.modeLevel}` : `🎯 ${t.modeFree}`;
      }
      if (this.finalLevelRow) {
        this.finalLevelRow.classList.toggle('hidden', this.mode !== 'level');
      }
      if (this.finalLevelEl) {
        this.finalLevelEl.textContent = `${t.levelBadge} ${this.currentLevel}`;
      }
      this.finalScoreEl.textContent = this.formatTime(this.score);
      this.finalAntsEl.textContent = `${this.maxAnts}`;

      const activeHs = this.highScores[this.mode];
      if (this.mode === 'level') {
        this.highScoreEl.textContent = `${this.formatTime(activeHs.time)} (${t.levelBadge} ${activeHs.level || 1})`;
      } else {
        this.highScoreEl.textContent = `${this.formatTime(activeHs.time)} (${activeHs.ants} ${animalData.unit})`;
      }
    }
  }

  updateUIVisibility() {
    this.startScreen.classList.toggle('visible', this.state === STATE.MENU);
    this.pauseScreen.classList.toggle('visible', this.state === STATE.PAUSED);
    this.gameOverScreen.classList.toggle('visible',
      this.state === STATE.GAME_OVER && this.gameOverDelay <= 0);
    this.hud.classList.toggle('visible', this.state === STATE.PLAYING || this.state === STATE.PAUSED);
    
    // In-game controls (pause & restart)
    if (this.inGameControls) {
      this.inGameControls.classList.toggle('visible', this.state === STATE.PLAYING || this.state === STATE.DRAWING);
    }

    // Add ant FAB only visible in Free Mode
    this.addAntBtn.classList.toggle('visible', this.state === STATE.PLAYING && this.mode === 'free');
    
    // Level Badge in HUD only visible in Level Mode
    if (this.levelBadge) {
      this.levelBadge.classList.toggle('hidden', this.mode !== 'level');
    }
    if (this.levelDivider) {
      this.levelDivider.classList.toggle('hidden', this.mode !== 'level');
    }

    this.drawInstruction.classList.toggle('visible', this.state === STATE.DRAWING);
  }

  updateHUD() {
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
    const animalData = t.animals[this.animal] || t.animals.ant;
    this.scoreDisplay.textContent = `⏱ ${this.formatTime(this.score)}`;
    this.antCountDisplay.textContent = `${animalData.emoji} × ${this.ants.filter(a => !a.escaped).length}`;
    if (this.levelBadge) {
      this.levelBadge.textContent = `🏆 ${t.levelBadge} ${this.currentLevel}`;
    }
  }

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  loadHighScore() {
    try {
      const data = localStorage.getItem('chan-kien-hs-v2');
      if (data) return JSON.parse(data);
    } catch (e) { /* ignore */ }
    return {
      free: { time: 0, ants: 0, level: 1 },
      level: { time: 0, ants: 0, level: 1 }
    };
  }

  saveHighScore() {
    try {
      localStorage.setItem('chan-kien-hs-v2', JSON.stringify(this.highScores));
    } catch (e) { /* ignore */ }
  }

  // --- Collision Detection ---
  checkEscapes() {
    for (const ant of this.ants) {
      if (ant.escaped) continue;
      if (!isPointInPolygon(ant.x, ant.y, this.enclosure)) {
        ant.escaped = true;
        this.setState(STATE.GAME_OVER);
        return;
      }
    }
  }

  // ============================================
  // RENDERING
  // ============================================

  drawBackground() {
    const ctx = this.ctx;
    const grad = ctx.createLinearGradient(0, 0, this.width * 0.3, this.height);
    grad.addColorStop(0, '#080c22');
    grad.addColorStop(0.4, '#0b1030');
    grad.addColorStop(1, '#150a28');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    if (this.bgPattern) {
      ctx.fillStyle = this.bgPattern;
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }

  drawEnclosure(timestamp) {
    const ctx = this.ctx;
    const path = this.state === STATE.DRAWING ? this.currentPath : this.enclosure;
    if (path.length < 2) return;

    const pulse = Math.sin(timestamp * 0.003) * 4;
    const isGameOver = this.state === STATE.GAME_OVER;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Outer glow
    ctx.strokeStyle = isGameOver ? '#ff4d6a' : CONFIG.NEON_COLOR;
    ctx.lineWidth = 3;
    ctx.shadowColor = isGameOver ? '#ff4d6a' : CONFIG.NEON_COLOR;
    ctx.shadowBlur = CONFIG.NEON_GLOW + pulse;

    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }
    if (this.state !== STATE.DRAWING) {
      ctx.closePath();
    }
    ctx.stroke();

    // Inner bright line
    ctx.shadowBlur = 4;
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = isGameOver ? '#ffaabb' : '#bbffdd';
    ctx.stroke();

    // Subtle fill
    if (this.state !== STATE.DRAWING && this.enclosure.length > 0) {
      const fillColor = isGameOver ? 'rgba(255, 77, 106, 0.04)' : 'rgba(0, 255, 136, 0.025)';
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    ctx.restore();
  }

  drawGameOverFlash() {
    if (this.gameOverFlash <= 0) return;
    this.ctx.fillStyle = `rgba(255, 30, 60, ${this.gameOverFlash * 0.25})`;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  // ============================================
  // GAME LOOP
  // ============================================

  gameLoop(timestamp) {
    if (this.lastTime === 0) this.lastTime = timestamp;
    const dt = Math.min((timestamp - this.lastTime) / 1000, 0.1);
    this.lastTime = timestamp;
    this.pulseTime = timestamp;

    this.update(dt, timestamp);
    this.render(timestamp);

    requestAnimationFrame((t) => this.gameLoop(t));
  }

  update(dt, timestamp) {
    // Update flora (grass, flowers, treats)
    for (const fl of this.floraList) fl.update(dt);
    this.floraList = this.floraList.filter(fl => fl.alive);

    // --- Update Flying Birds in the Sky ---
    this.birdTimer -= dt;
    if (this.birdTimer <= 0) {
      this.birds.push(new Bird(this.width, this.height));
      // 35% chance to spawn a pair of birds
      if (Math.random() < 0.35) {
        setTimeout(() => {
          this.birds.push(new Bird(this.width, this.height));
        }, 450);
      }
      this.birdTimer = 5.0 + Math.random() * 7.0;
    }

    for (const b of this.birds) {
      b.update(dt, this.width, this.height);
    }
    this.birds = this.birds.filter(b => b.alive);

    // --- MENU ---
    if (this.state === STATE.MENU) {
      for (const ant of this.menuAnts) {
        ant.update(dt, this);
        // Wrap around screen edges
        if (ant.x < -40) ant.x = this.width + 40;
        if (ant.x > this.width + 40) ant.x = -40;
        if (ant.y < -40) ant.y = this.height + 40;
        if (ant.y > this.height + 40) ant.y = -40;
      }
    }

    // --- PLAYING ---
    if (this.state === STATE.PLAYING) {
      this.score += dt;

      // Level Mode progression
      if (this.mode === 'level') {
        this.levelTimer += dt;
        if (this.levelTimer >= this.levelInterval) {
          this.levelUp();
        }
      }

      this.updateHUD();

      // Continuous natural sprouting of grass & wildflowers
      if (this.enclosure.length > 2) {
        this.floraSproutTimer -= dt;
        if (this.floraSproutTimer <= 0) {
          if (this.floraList.length < 32) {
            this.spawnSingleFloraInEnclosure();
          }
          this.floraSproutTimer = 1.4 + Math.random() * 1.8;
        }
      }

      for (const ant of this.ants) {
        if (!ant.escaped) ant.update(dt, this);
      }

      // Update effects
      for (const r of this.ripples) r.update(dt);
      this.ripples = this.ripples.filter(r => r.alive);

      // Update floating texts
      for (const ft of this.floatingTexts) ft.update(dt);
      this.floatingTexts = this.floatingTexts.filter(ft => ft.alive);

      // Update particles
      for (const p of this.particles) p.update(dt);
      this.particles = this.particles.filter(p => p.alive);

      this.checkEscapes();
    }

    // --- GAME OVER ---
    if (this.state === STATE.GAME_OVER) {
      if (this.gameOverFlash > 0) {
        this.gameOverFlash -= dt * 1.5;
      }

      if (this.gameOverDelay > 0) {
        this.gameOverDelay -= dt;
        if (this.gameOverDelay <= 0) {
          this.updateUIVisibility();
        }
      }

      // Keep escaped ant moving
      for (const ant of this.ants) {
        if (ant.escaped) ant.update(dt, this);
      }

      // Update particles
      for (const p of this.particles) p.update(dt);
      this.particles = this.particles.filter(p => p.alive);

      // Update remaining ripples
      for (const r of this.ripples) r.update(dt);
      this.ripples = this.ripples.filter(r => r.alive);

      // Update floating texts
      for (const ft of this.floatingTexts) ft.update(dt);
      this.floatingTexts = this.floatingTexts.filter(ft => ft.alive);
    }
  }

  render(timestamp) {
    this.drawBackground();

    // --- 1. Draw Grass & Flowers / Flora first on the ground ---
    for (const fl of this.floraList) {
      fl.draw(this.ctx);
    }

    // --- 2. MENU: decorative ants ---
    if (this.state === STATE.MENU) {
      for (const ant of this.menuAnts) {
        ant.draw(this.ctx);
      }
    }

    // --- 3. DRAWING / PLAYING / PAUSED / GAME OVER: enclosure ---
    if (this.state !== STATE.MENU) {
      this.drawEnclosure(timestamp);
    }

    // --- 4. PLAYING / PAUSED / GAME OVER: ants & effects ---
    if (this.state === STATE.PLAYING || this.state === STATE.PAUSED || this.state === STATE.GAME_OVER) {
      for (const ant of this.ants) {
        ant.draw(this.ctx);
      }
      for (const r of this.ripples) {
        r.draw(this.ctx);
      }
      for (const p of this.particles) {
        p.draw(this.ctx);
      }
      for (const ft of this.floatingTexts) {
        ft.draw(this.ctx);
      }
    }

    // --- 5. Flying Birds in Sky (with ground shadows) ---
    for (const b of this.birds) {
      b.draw(this.ctx);
    }

    if (this.state === STATE.GAME_OVER) {
      this.drawGameOverFlash();
    }
  }
}

// ============================================
// INITIALIZE
// ============================================

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
