// ============================================
// CHĂN KIẾN - ANT HERDING GAME
// Full Game Engine
// ============================================

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
    this.tauntPhrases = [
      "Lêu lêu! Lêu lêu! Đồ con gà!",
      "A hi hi, lêu lêu! Bắt hụt rồi!",
      "Lêu lêu! Non và xanh lắm!",
      "Lêu lêu lêu lêu lêu lêu!",
      "Chăn kiến mà để kiến chạy mất! Lêu lêu!",
      "Gà thế này thì chăn ai! Lêu lêu!",
      "Đố bắt được tao đấy! Lêu lêu!",
      "Lêu lêu! Có mỗi con kiến cũng không giữ nổi!"
    ];
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

  // Short pop when tapping ant
  playTap() {
    const s = this._createOsc('sine', 0, 0.1, 0.3);
    if (!s) return;
    s.osc.frequency.setValueAtTime(900, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(350, s.t + 0.08);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.1);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.1);
  }

  // Ascending blip when adding ant
  playAddAnt() {
    const s = this._createOsc('sine', 0, 0.15, 0.2);
    if (!s) return;
    s.osc.frequency.setValueAtTime(350, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(900, s.t + 0.12);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.15);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.15);
  }

  // Two-note chime when drawing complete
  playDrawComplete() {
    if (!this.ctx) return;
    const s1 = this._createOsc('sine', 0, 0.15, 0.2);
    s1.osc.frequency.setValueAtTime(523, s1.t); // C5
    s1.gain.gain.exponentialRampToValueAtTime(0.001, s1.t + 0.15);
    s1.osc.start(s1.t);
    s1.osc.stop(s1.t + 0.15);

    const s2 = this._createOsc('sine', 0, 0.2, 0.2);
    s2.osc.frequency.setValueAtTime(659, s2.t + 0.12); // E5
    s2.gain.gain.setValueAtTime(0.001, s2.t);
    s2.gain.gain.linearRampToValueAtTime(0.2, s2.t + 0.12);
    s2.gain.gain.exponentialRampToValueAtTime(0.001, s2.t + 0.3);
    s2.osc.start(s2.t + 0.1);
    s2.osc.stop(s2.t + 0.3);
  }

  // Descending sad tone on game over
  playGameOver() {
    if (!this.ctx) return;
    const s = this._createOsc('sawtooth', 0, 0.5, 0.18);
    s.osc.frequency.setValueAtTime(450, s.t);
    s.osc.frequency.exponentialRampToValueAtTime(70, s.t + 0.5);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.5);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.55);
  }

  // Cartoon raspberry / tongue blow "Phè phè phè phè bbrrrrttt" sound
  playRaspberry(delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;

    // Fluttering noise + low saw to simulate tongue vibration blowing air
    const bufferSize = this.ctx.sampleRate * 0.45;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Modulated noise with 26Hz flutter
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

    // Also add a buzzy low oscillator for wet vibrating lips
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

  // Cartoon slide whistle taunt
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

  // Classic teasing melody "Na na na na boo boo"
  playMockingMelody(delay = 0) {
    if (!this.ctx) return;
    // G4, E4, A4, G4, E4 - the universal playground teasing rhythm
    const notes = [
      { f: 587, dur: 0.16, pause: 0.04 }, // D5
      { f: 494, dur: 0.16, pause: 0.04 }, // B4
      { f: 659, dur: 0.2, pause: 0.05 },  // E5
      { f: 587, dur: 0.18, pause: 0.05 }, // D5
      { f: 494, dur: 0.35, pause: 0.05 }  // B4 (long)
    ];

    let curT = this.ctx.currentTime + delay;
    notes.forEach((n) => {
      const s = this._createOsc('triangle', n.f, n.dur, 0.25);
      if (s) {
        s.osc.frequency.setValueAtTime(n.f, curT);
        s.gain.gain.setValueAtTime(0.001, curT);
        s.gain.gain.linearRampToValueAtTime(0.25, curT + 0.02);
        s.gain.gain.exponentialRampToValueAtTime(0.001, curT + n.dur);
        s.osc.start(curT);
        s.osc.stop(curT + n.dur);
      }
      curT += n.dur + n.pause;
    });
  }

  // Vietnamese TTS funny voice taunt
  playVoiceTaunt(customPhrase = null) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const phrase = customPhrase || this.tauntPhrases[Math.floor(Math.random() * this.tauntPhrases.length)];
      const utter = new SpeechSynthesisUtterance(phrase);
      utter.lang = 'vi-VN';
      utter.pitch = 1.75; // Squeaky high pitched cartoon ant voice
      utter.rate = 1.35;  // Fast teasing speed
      utter.volume = 1.0;
      
      // Delay speech slightly to let the raspberry sound play first
      setTimeout(() => {
        window.speechSynthesis.speak(utter);
      }, 350);
    } catch (e) {
      console.warn('Speech synthesis error', e);
    }
  }

  // Full bựa taunt package: Raspberry + Mocking melody + Voice
  playBuaTaunt() {
    this.playSlideWhistle(0);
    this.playRaspberry(0.25);
    this.playRaspberry(0.75); // double raspberry
    this.playMockingMelody(0.5);
    this.playVoiceTaunt();
  }

  // Subtle click for UI buttons
  playClick() {
    const s = this._createOsc('sine', 0, 0.05, 0.15);
    if (!s) return;
    s.osc.frequency.setValueAtTime(1200, s.t);
    s.gain.gain.exponentialRampToValueAtTime(0.001, s.t + 0.05);
    s.osc.start(s.t);
    s.osc.stop(s.t + 0.05);
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
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.hud = document.getElementById('hud');
    this.addAntBtn = document.getElementById('add-ant-btn');
    this.drawInstruction = document.getElementById('draw-instruction');
    this.scoreDisplay = document.getElementById('score');
    this.antCountDisplay = document.getElementById('ant-count');
    this.finalScoreEl = document.getElementById('final-score');
    this.finalAntsEl = document.getElementById('final-ants');
    this.highScoreEl = document.getElementById('high-score');

    // Sound
    this.sound = new SoundManager();

    // Game state
    this.state = STATE.MENU;
    this.enclosure = [];
    this.ants = [];
    this.ripples = [];
    this.particles = [];
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

    // High score
    this.highScore = this.loadHighScore();

    // Setup
    this.resizeCanvas();
    this.createBgPattern();
    this.createMenuAnts();
    this.bindEvents();
    this.updateUIVisibility();

    // Start loop
    requestAnimationFrame((t) => this.gameLoop(t));
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

    // Buttons & Interactive
    document.getElementById('start-btn').addEventListener('click', () => this.startGame());
    document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
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
        const phrases = [
          "Bắt hộ cái! 😜",
          "Còn non lắm! 🤣",
          "Lêu lêu đồ con gà! 🤪",
          "Ahihi đồ ngốc! 😝",
          "Chạy thoát rồi nè! 🏃‍♂️🐜",
          "Lêu lêu! Lêu lêu! 😛"
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        if (tauntText) tauntText.textContent = randomPhrase;
        
        // Add wiggle pop animation class
        tauntContainer.classList.remove('taunt-pop');
        void tauntContainer.offsetWidth; // trigger reflow
        tauntContainer.classList.add('taunt-pop');
        
        this.sound.playRaspberry();
        this.sound.playVoiceTaunt(randomPhrase.replace(/[^a-zA-Z0-9à-ỹÀ-Ỹ\s!]/g, ''));
      });
    }

    // Prevent context menu on long press
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
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
        // Fallback: use the average of a few inner points
        this.centroid = this.findSafeCenter();
      }

      this.sound.playDrawComplete();
      this.setState(STATE.PLAYING);
      this.addAnt();
    } else {
      this.currentPath = [];
    }
  }

  findSafeCenter() {
    // Try the centroid first, then try center of bounding box
    const xs = this.enclosure.map(p => p.x);
    const ys = this.enclosure.map(p => p.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    if (isPointInPolygon(cx, cy, this.enclosure)) {
      return { x: cx, y: cy };
    }
    // Fallback: use the centroid anyway
    return polygonCentroid(this.enclosure);
  }

  handleTap(x, y) {
    for (const ant of this.ants) {
      if (!ant.escaped && ant.containsPoint(x, y)) {
        ant.redirect();
        this.ripples.push(new Ripple(x, y));
        this.sound.playTap();
        return;
      }
    }
  }

  addAnt() {
    if (this.state !== STATE.PLAYING) return;
    const ant = new Ant(this.centroid.x, this.centroid.y, this.antIdCounter++);
    this.ants.push(ant);
    this.maxAnts = Math.max(this.maxAnts, this.ants.length);
    this.ripples.push(new Ripple(this.centroid.x, this.centroid.y));
    this.sound.playAddAnt();
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
    this.score = 0;
    this.maxAnts = 0;
    this.antIdCounter = 0;
    this.gameOverFlash = 0;
    this.gameOverDelay = 0;
    this.createMenuAnts();
    this.setState(STATE.MENU);
  }

  setState(newState) {
    this.state = newState;
    this.updateUIVisibility();

    if (newState === STATE.PLAYING) {
      this.score = 0;
    }

    if (newState === STATE.GAME_OVER) {
      this.gameOverFlash = 0.6;
      this.gameOverDelay = 1.0; // seconds before showing modal

      // Sound effects: Buzzy tone + Raspberry + Mocking melody + Funny voice "Lêu lêu"
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
      const isNewRecord = this.score > this.highScore.time;
      if (isNewRecord) {
        this.highScore = { time: this.score, ants: this.maxAnts };
        this.saveHighScore();
      }

      // Update game over UI
      this.finalScoreEl.textContent = this.formatTime(this.score);
      this.finalAntsEl.textContent = `${this.maxAnts}`;
      this.highScoreEl.textContent = `${this.formatTime(this.highScore.time)} (${this.highScore.ants} kiến)`;
    }
  }

  updateUIVisibility() {
    this.startScreen.classList.toggle('visible', this.state === STATE.MENU);
    this.gameOverScreen.classList.toggle('visible',
      this.state === STATE.GAME_OVER && this.gameOverDelay <= 0);
    this.hud.classList.toggle('visible', this.state === STATE.PLAYING);
    this.addAntBtn.classList.toggle('visible', this.state === STATE.PLAYING);
    this.drawInstruction.classList.toggle('visible', this.state === STATE.DRAWING);
  }

  updateHUD() {
    this.scoreDisplay.textContent = `⏱ ${this.formatTime(this.score)}`;
    this.antCountDisplay.textContent = `🐜 × ${this.ants.filter(a => !a.escaped).length}`;
  }

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  loadHighScore() {
    try {
      const data = localStorage.getItem('chan-kien-hs');
      if (data) return JSON.parse(data);
    } catch (e) { /* ignore */ }
    return { time: 0, ants: 0 };
  }

  saveHighScore() {
    try {
      localStorage.setItem('chan-kien-hs', JSON.stringify(this.highScore));
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
      this.updateHUD();

      for (const ant of this.ants) {
        if (!ant.escaped) ant.update(dt);
      }

      // Update effects
      for (const r of this.ripples) r.update(dt);
      this.ripples = this.ripples.filter(r => r.alive);

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

    // --- DRAWING / PLAYING / GAME OVER: enclosure ---
    if (this.state !== STATE.MENU) {
      this.drawEnclosure(timestamp);
    }

    // --- PLAYING / GAME OVER: ants & effects ---
    if (this.state === STATE.PLAYING || this.state === STATE.GAME_OVER) {
      for (const ant of this.ants) {
        ant.draw(this.ctx);
      }
      for (const r of this.ripples) {
        r.draw(this.ctx);
      }
      for (const p of this.particles) {
        p.draw(this.ctx);
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
