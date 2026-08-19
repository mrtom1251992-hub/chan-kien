const sharp = require('sharp');
const path = require('path');

async function generateFeatureGraphic() {
  const iconsDir = path.join(__dirname, 'icons');

  const bannerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="500" viewBox="0 0 1024 500">
    <defs>
      <radialGradient id="bannerBg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#161f48"/>
        <stop offset="100%" stop-color="#070a1a"/>
      </radialGradient>
      <linearGradient id="neonText" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00f3ff"/>
        <stop offset="50%" stop-color="#00ff88"/>
        <stop offset="100%" stop-color="#ffd700"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1024" height="500" fill="url(#bannerBg)"/>

    <!-- Decorative Rings -->
    <circle cx="200" cy="250" r="140" fill="none" stroke="#00f3ff" stroke-width="4" stroke-dasharray="12 8" opacity="0.4"/>
    <circle cx="850" cy="180" r="100" fill="none" stroke="#ff007f" stroke-width="3" stroke-dasharray="8 6" opacity="0.3"/>

    <!-- Left Graphic (Ant Icon) -->
    <circle cx="200" cy="250" r="70" fill="#2d0b16" stroke="#ff3838" stroke-width="6"/>
    <text x="200" y="275" font-size="70" text-anchor="middle">🐜</text>

    <!-- Right/Center Text -->
    <text x="580" y="210" fill="url(#neonText)" font-family="sans-serif" font-size="64" font-weight="900" text-anchor="middle">CHĂN KIẾN</text>
    <text x="580" y="270" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="600" text-anchor="middle">Ant Herding Game</text>
    <text x="580" y="325" fill="#a0aec0" font-family="sans-serif" font-size="20" text-anchor="middle">Vẽ vòng tròn · Chăn đàn kiến · Vượt cấp đỉnh cao</text>

    <!-- Tagline Badge -->
    <rect x="430" y="365" width="300" height="42" rx="21" fill="rgba(0, 255, 136, 0.15)" stroke="rgba(0, 255, 136, 0.4)"/>
    <text x="580" y="392" fill="#00ff88" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">★ Trò chơi giải trí gây nghiện ★</text>
  </svg>`;

  await sharp(Buffer.from(bannerSvg))
    .png()
    .toFile(path.join(iconsDir, 'feature-graphic.png'));
  console.log('Generated feature-graphic.png (1024x500)');
}

generateFeatureGraphic().catch(console.error);
