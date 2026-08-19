// ============================================
// CHĂN KIẾN - ANT HERDING GAME
// Full Game Engine (English & Vietnamese)
// ============================================

// --- Multi-language Translations ---
const TRANSLATIONS = {
  vi: {
    gameTitle: "Chăn Kiến",
    gameSubtitle: "Vẽ vòng tròn · Đặt kiến vào · Chạm kiến đổi hướng",
    modeFree: "Tự Do",
    modeLevel: "Cấp Độ",
    modeDescFree: "Chế độ Tự Do: Tự nhấn ➕ để thêm kiến tùy thích",
    modeDescLevel: "Chế độ Cấp Độ: Cứ mỗi 10 giây tăng 1 cấp và thêm 1 con kiến!",
    rule1: "Vẽ một vòng khép kín",
    rule2: "Chạm vào kiến để đổi hướng",
    rule3: "Đừng để kiến thoát ra!",
    startBtn: "Bắt Đầu",
    installBtn: "Cài Đặt App Vào Điện Thoại",
    shopeeBtn: "Click Shopee để ủng hộ",
    floatingShopee: "Ủng hộ Shopee",
    addAnt: "Thêm kiến",
    drawInstruction: "Vẽ một vòng khép kín trên màn hình!",
    levelBadge: "Cấp",
    gameOverTitle: "Kiến Thoát Rồi!",
    scoreMode: "Chế độ",
    scoreLevel: "Cấp đạt được",
    scoreTime: "Thời gian",
    scoreAnts: "Số kiến",
    scoreHigh: "Kỷ lục",
    restartBtn: "Chơi Lại",
    adTag: "Quảng Cáo / Ủng Hộ",
    adSubtitle: "Ủng hộ duy trì máy chủ",
    adPlaceholder: "Cảm ơn bạn đã chơi! Bấm ủng hộ giúp tác giả duy trì máy chủ & cập nhật tính năng mới nhé.",
    pauseTitle: "⏸ Đang Tạm Dừng",
    resumeBtn: "Tiếp Tục Chơi",
    pauseRestart: "Chơi Lại",
    mainMenuBtn: "Menu",
    shareBtn: "Chia Sẻ",
    shareCopied: "Đã sao chép thành tựu! Hãy dán để khoe bạn bè 🎉",
    shareText: (score, ants, mode, level) => 
      `🐜 Tôi vừa giữ được ${ants} con kiến sống sót trong ${score} ${mode === 'level' ? `(Cấp ${level})` : ''} ở game Chăn Kiến!\n👉 Thử thách xem bạn có bắt kịp tôi không: https://chan-kien.pages.dev`,
    tauntInitial: "Lêu lêu! 😝",
    tauntVoiceLang: "vi-VN",
    taunts: [
      "Lêu lêu! Lêu lêu! Đồ con gà!",
      "A hi hi, lêu lêu! Bắt hụt rồi!",
      "Lêu lêu! Non và xanh lắm!",
      "Lêu lêu lêu lêu lêu lêu!",
      "Chăn kiến mà để kiến chạy mất! Lêu lêu!",
      "Gà thế này thì chăn ai! Lêu lêu!",
      "Đố bắt được tao đấy! Lêu lêu!",
      "Lêu lêu! Có mỗi con kiến cũng không giữ nổi!"
    ],
    interactiveTaunts: [
      "Bắt hộ cái! 😜",
      "Còn non lắm! 🤣",
      "Lêu lêu đồ con gà! 🤪",
      "Ahihi đồ ngốc! 😝",
      "Chạy thoát rồi nè! 🏃‍♂️🐜",
      "Lêu lêu! Lêu lêu! 😛"
    ],
    tapTaunts: [
      "Á đù! 😵",
      "Đau nha má! 💢",
      "Né đẹp chưa! 💃",
      "Quay xe! 🚗💨",
      "Bắt hộ cái! 😜",
      "Gà mờ! 🐔",
      "Đừng sờ tui! 😤",
      "Ahihi hụt rồi! 😝",
      "Chóng mặt quá! 🌀",
      "Ui da! 💥",
      "Còn non lắm! 🍼",
      "Ủa alo? 📱",
      "Lêu lêu! 😛",
      "Chạy đâu cho thoát! 🏃"
    ],
    levelUpVoice: (lvl) => `Cấp ${lvl}! Cố lên!`
  },
  en: {
    gameTitle: "Ant Herder",
    gameSubtitle: "Draw a circle · Trap the ants · Tap to redirect",
    modeFree: "Free Mode",
    modeLevel: "Level Mode",
    modeDescFree: "Free Mode: Tap ➕ anytime to add ants and test your reflexes!",
    modeDescLevel: "Level Mode: Level up and spawn a new ant every 10 seconds!",
    rule1: "Draw a closed loop fence",
    rule2: "Tap ants to bounce & redirect",
    rule3: "Don't let any ant escape!",
    startBtn: "Start Game",
    installBtn: "Install App on Phone",
    shopeeBtn: "Support Creator",
    floatingShopee: "Support Us",
    addAnt: "Add Ant",
    drawInstruction: "Draw a closed loop on the screen!",
    levelBadge: "Level",
    gameOverTitle: "Ants Escaped!",
    scoreMode: "Mode",
    scoreLevel: "Level Reached",
    scoreTime: "Time Survived",
    scoreAnts: "Ants Count",
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
    shareText: (score, ants, mode, level) => 
      `🐜 I survived ${score} with ${ants} ants ${mode === 'level' ? `(Level ${level})` : ''} in Ant Herder!\n👉 Can you beat my high score? Play now: https://chan-kien.pages.dev`,
    tauntInitial: "Na-na-na boo-boo! 😝",
    tauntVoiceLang: "en-US",
    taunts: [
      "Na-na-na boo-boo! Too slow!",
      "You let the ants escape! Haha!",
      "Too slow! Try harder!",
      "Can't even catch a little ant!",
      "Haha! Better luck next time!",
      "Loser! The ants are too fast for you!",
      "Catch me if you can! Na-na-na boo-boo!",
      "Oops! Did you drop your guard?"
    ],
    interactiveTaunts: [
      "Catch me if you can! 😜",
      "Way too slow! 🤣",
      "Na-na-na boo-boo! 🤪",
      "Haha missed me! 😝",
      "I'm free! Run! 🏃‍♂️🐜",
      "Na-na-na-na boo-boo! 😛"
    ],
    tapTaunts: [
      "Ouch! 😵",
      "Missed me! 😜",
      "U-Turn! ↩️",
      "Too slow! 💨",
      "Hey watch it! 😤",
      "Dodge! 💃",
      "Haha noob! 🐔",
      "Spinning! 🌀",
      "Can't touch this! 🕺",
      "Whoops! 😝",
      "Boing! 💥",
      "Na-na boo-boo! 🤪"
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

  playBuaTaunt() {
    this.playSlideWhistle(0);
    this.playRaspberry(0.25);
    this.playRaspberry(0.75);
    this.playMockingMelody(0.5);
    this.playVoiceTaunt();
  }

  playClick() {
    const s = this._createOsc('sine', 0, 0.05, 0.15);
    if (!s) return;
    s.osc.frequency.setValueAtTime(1200, s.t);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.05);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.05);
  }

  playAntSqueak(phrase = null) {
    if (!this.ctx) return;
    // Funny high pitch cartoon boing
    const s = this._createOsc('sine', 400, 0.15, 0.25);
    if (s) {
      s.osc.frequency.setValueAtTime(450, s.t);
      s.osc.frequency.exponentialRampToValueAtTime(1600, s.t + 0.1);
      s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.15);
      s.osc.start(s.t);
      s.osc.stop(s.t + 0.15);
    }

    // High pitch cartoon speech (35% chance to speak funny word)
    if (phrase && Math.random() < 0.35 && 'speechSynthesis' in window) {
      try {
        const cleanPhrase = phrase.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ\s!?']/g, '').trim();
        if (cleanPhrase) {
          const currentTrans = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
          const utter = new SpeechSynthesisUtterance(cleanPhrase);
          utter.lang = currentTrans.tauntVoiceLang;
          utter.pitch = 2.0; // Max high cartoon squeak pitch
          utter.rate = 1.6;  // Fast cartoon speed
          utter.volume = 0.9;
          window.speechSynthesis.speak(utter);
        }
      } catch (e) {}
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
// ANT CLASS
// ============================================

class Ant {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = CONFIG.ANT_SPEED + (Math.random() - 0.5) * 10;
    this.wanderStrength = CONFIG.WANDER_STRENGTH;
    this.legPhase = Math.random() * Math.PI * 2;
    this.startled = false;
    this.startledTimer = 0;
    this.escaped = false;
    this.wanderTimer = 0;
    this.wanderTarget = this.angle;
  }

  update(dt) {
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
      this.startledTimer -= dt;
      if (this.startledTimer <= 0) this.startled = false;
    }

    // Move
    this.x += Math.cos(this.angle) * currentSpeed * dt;
    this.y += Math.sin(this.angle) * currentSpeed * dt;

    // Animate legs
    this.legPhase += currentSpeed * dt * 0.18;
  }

  redirect() {
    this.angle += Math.PI + (Math.random() - 0.5) * CONFIG.REDIRECT_SPREAD;
    this.wanderTarget = this.angle;
    this.startled = true;
    this.startledTimer = 0.4;
  }

  containsPoint(px, py) {
    return dist(this.x, this.y, px, py) < CONFIG.ANT_HIT_RADIUS;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

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
      const swing = Math.sin(phase);

      // Upper leg joint
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

    // --- Abdomen (back, largest segment) ---
    ctx.fillStyle = CONFIG.ANT_BODY_COLOR;
    ctx.beginPath();
    ctx.ellipse(-11, 0, 8, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    // Stripe detail
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(-13, 0, 3, 4.5, 0, 0, Math.PI * 2);
    ctx.stroke();

    // --- Petiole (thin waist) ---
    ctx.fillStyle = CONFIG.ANT_BODY_MID;
    ctx.beginPath();
    ctx.ellipse(-3, 0, 2.5, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Thorax (middle segment) ---
    ctx.fillStyle = CONFIG.ANT_BODY_MID;
    ctx.beginPath();
    ctx.ellipse(2, 0, 4.5, 3.8, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Head ---
    ctx.fillStyle = CONFIG.ANT_BODY_COLOR;
    ctx.beginPath();
    ctx.ellipse(9, 0, 4.5, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- Mandibles ---
    ctx.strokeStyle = CONFIG.ANT_LEG_COLOR;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(12.5, -2);
    ctx.quadraticCurveTo(15, -2.5, 16, -4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(12.5, 2);
    ctx.quadraticCurveTo(15, 2.5, 16, 4);
    ctx.stroke();

    // --- Antennae ---
    ctx.strokeStyle = CONFIG.ANT_LEG_COLOR;
    ctx.lineWidth = 1;
    const antennaWave = Math.sin(this.legPhase * 0.7) * 2;
    ctx.beginPath();
    ctx.moveTo(11, -3);
    ctx.quadraticCurveTo(16, -7 + antennaWave, 20, -9 + antennaWave);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(11, 3);
    ctx.quadraticCurveTo(16, 7 - antennaWave, 20, 9 - antennaWave);
    ctx.stroke();

    // --- Antenna tips (small dots) ---
    ctx.fillStyle = CONFIG.ANT_LEG_COLOR;
    ctx.beginPath();
    ctx.arc(20, -9 + antennaWave, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(20, 9 - antennaWave, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // --- Eyes ---
    ctx.fillStyle = this.startled ? '#ff6b6b' : '#eee';
    ctx.beginPath();
    ctx.arc(10.5, -2.2, 1.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(10.5, 2.2, 1.4, 0, Math.PI * 2);
    ctx.fill();

    // Eye pupils
    ctx.fillStyle = this.startled ? '#cc0000' : '#222';
    ctx.beginPath();
    ctx.arc(11, -2.2, 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(11, 2.2, 0.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

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
    this.createMenuAnts();
    this.bindEvents();
    this.setLanguage(this.lang);
    this.updateUIVisibility();

    // Start loop
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('chan-kien-lang', lang);
    this.sound.setLanguage(lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const t = TRANSLATIONS[lang] || TRANSLATIONS.vi;
    
    document.title = `🐜 ${t.gameTitle} - Ant Herding Game`;
    const titleText = document.getElementById('title-text');
    if (titleText) titleText.textContent = t.gameTitle;
    const gameSubtitle = document.getElementById('game-subtitle');
    if (gameSubtitle) gameSubtitle.textContent = t.gameSubtitle;
    const modeFreeText = document.getElementById('mode-free-text');
    if (modeFreeText) modeFreeText.textContent = t.modeFree;
    const modeLevelText = document.getElementById('mode-level-text');
    if (modeLevelText) modeLevelText.textContent = t.modeLevel;
    
    if (this.modeDescEl) {
      this.modeDescEl.textContent = this.mode === 'level' ? t.modeDescLevel : t.modeDescFree;
    }

    const rule1 = document.getElementById('rule-1-text');
    if (rule1) rule1.textContent = t.rule1;
    const rule2 = document.getElementById('rule-2-text');
    if (rule2) rule2.textContent = t.rule2;
    const rule3 = document.getElementById('rule-3-text');
    if (rule3) rule3.textContent = t.rule3;

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
    if (addAntLabel) addAntLabel.textContent = t.addAnt;
    const instructionText = document.getElementById('instruction-text');
    if (instructionText) instructionText.textContent = t.drawInstruction;

    const tauntBubble = document.getElementById('taunt-bubble');
    if (tauntBubble) tauntBubble.textContent = t.tauntInitial;

    const gameoverTitle = document.getElementById('gameover-title');
    if (gameoverTitle) gameoverTitle.textContent = t.gameOverTitle;

    const labelMode = document.getElementById('score-label-mode');
    if (labelMode) labelMode.textContent = `🎮 ${t.scoreMode}`;
    const labelLevel = document.getElementById('score-label-level');
    if (labelLevel) labelLevel.textContent = `⭐ ${t.scoreLevel}`;
    const labelTime = document.getElementById('score-label-time');
    if (labelTime) labelTime.textContent = `⏱ ${t.scoreTime}`;
    const labelAnts = document.getElementById('score-label-ants');
    if (labelAnts) labelAnts.textContent = `🐜 ${t.scoreAnts}`;
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
    if (pauseLabelAnts) pauseLabelAnts.textContent = `🐜 ${t.scoreAnts}`;
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
      const ant = new Ant(
        100 + Math.random() * (this.width - 200),
        100 + Math.random() * (this.height - 200),
        -1
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
        const phrases = t.interactiveTaunts;
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        if (tauntText) tauntText.textContent = randomPhrase;
        
        tauntContainer.classList.remove('taunt-pop');
        void tauntContainer.offsetWidth;
        tauntContainer.classList.add('taunt-pop');
        
        this.sound.playRaspberry();
        this.sound.playVoiceTaunt(randomPhrase.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ\s!?,']/g, ''));
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
    this.createMenuAnts();
    this.setState(STATE.MENU);
  }

  async shareAchievement() {
    this.sound.playClick();
    const t = TRANSLATIONS[this.lang] || TRANSLATIONS.vi;
    const formattedTime = this.formatTime(this.score);
    const antsCount = this.maxAnts || this.ants.length;
    const text = t.shareText(formattedTime, antsCount, this.mode, this.currentLevel);

    if (navigator.share) {
      try {
        await navigator.share({
          title: `🐜 ${t.gameTitle} - High Score`,
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
        const taunts = t.tapTaunts || ["Á đù! 😵", "Đau nha má! 💢", "Né đẹp chưa! 💃"];
        const phrase = taunts[Math.floor(Math.random() * taunts.length)];
        this.floatingTexts.push(new FloatingText(ant.x, ant.y, phrase));

        this.sound.playTap();
        this.sound.playAntSqueak(phrase);
        return;
      }
    }
  }

  addAnt(isLevelUp = false) {
    if (this.state !== STATE.PLAYING) return;
    const ant = new Ant(this.centroid.x, this.centroid.y, this.antIdCounter++);
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
      this.sound.playBuaTaunt();

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
      const antUnit = this.lang === 'vi' ? 'kiến' : 'ants';
      if (this.mode === 'level') {
        this.highScoreEl.textContent = `${this.formatTime(activeHs.time)} (${t.levelBadge} ${activeHs.level || 1})`;
      } else {
        this.highScoreEl.textContent = `${this.formatTime(activeHs.time)} (${activeHs.ants} ${antUnit})`;
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
    this.scoreDisplay.textContent = `⏱ ${this.formatTime(this.score)}`;
    this.antCountDisplay.textContent = `🐜 × ${this.ants.filter(a => !a.escaped).length}`;
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
    // --- MENU ---
    if (this.state === STATE.MENU) {
      for (const ant of this.menuAnts) {
        ant.update(dt);
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

      for (const ant of this.ants) {
        if (!ant.escaped) ant.update(dt);
      }

      // Update effects
      for (const r of this.ripples) r.update(dt);
      this.ripples = this.ripples.filter(r => r.alive);

      // Update floating texts
      for (const ft of this.floatingTexts) ft.update(dt);
      this.floatingTexts = this.floatingTexts.filter(ft => ft.alive);

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
        if (ant.escaped) ant.update(dt);
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

    // --- MENU: decorative ants ---
    if (this.state === STATE.MENU) {
      for (const ant of this.menuAnts) {
        ant.draw(this.ctx);
      }
    }

    // --- DRAWING / PLAYING / PAUSED / GAME OVER: enclosure ---
    if (this.state !== STATE.MENU) {
      this.drawEnclosure(timestamp);
    }

    // --- PLAYING / PAUSED / GAME OVER: ants & effects ---
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

    // --- GAME OVER: red flash ---
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
