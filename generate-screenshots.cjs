const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateScreenshots() {
  const iconsDir = path.join(__dirname, 'icons');

  // SVG representation of game screen 1
  const screen1Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="540" height="960" viewBox="0 0 540 960">
    <rect width="540" height="960" fill="#0a0e27"/>
    <!-- Grid/Stars -->
    <circle cx="100" cy="150" r="1.5" fill="#ffffff" opacity="0.3"/>
    <circle cx="450" cy="200" r="1.5" fill="#ffffff" opacity="0.4"/>
    <circle cx="200" cy="800" r="2" fill="#ffffff" opacity="0.3"/>
    <circle cx="480" cy="750" r="1.5" fill="#ffffff" opacity="0.2"/>

    <!-- HUD -->
    <rect x="70" y="40" width="400" height="50" rx="25" fill="#161f48" fill-opacity="0.8" stroke="rgba(255,255,255,0.15)"/>
    <text x="140" y="72" fill="#ffd700" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">🏆 Cấp 3</text>
    <text x="270" y="72" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">⏱ 00:45</text>
    <text x="390" y="72" fill="#00ff88" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">🐜 × 4</text>

    <!-- Drawn Circle Fence -->
    <ellipse cx="270" cy="480" rx="200" ry="240" fill="none" stroke="#00f3ff" stroke-width="8" stroke-dasharray="12 8"/>

    <!-- Ants inside -->
    <circle cx="240" cy="450" r="18" fill="#ff3838"/>
    <circle cx="300" cy="520" r="18" fill="#ff3838"/>
    <circle cx="220" cy="550" r="18" fill="#ff3838"/>
    <circle cx="310" cy="400" r="18" fill="#ff3838"/>

    <text x="270" y="850" fill="#00f3ff" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Chạm kiến để đổi hướng!</text>
  </svg>`;

  await sharp(Buffer.from(screen1Svg))
    .png()
    .toFile(path.join(iconsDir, 'screenshot-1.png'));
  console.log('Generated screenshot-1.png');

  // SVG representation of start screen 2
  const screen2Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="540" height="960" viewBox="0 0 540 960">
    <rect width="540" height="960" fill="#0a0e27"/>
    <text x="270" y="240" fill="#ffffff" font-family="sans-serif" font-size="60" font-weight="bold" text-anchor="middle">🐜 Chăn Kiến</text>
    <text x="270" y="290" fill="#a0aec0" font-family="sans-serif" font-size="18" text-anchor="middle">Vẽ vòng tròn · Chăn kiến · Lập kỷ lục</text>

    <!-- Start Button -->
    <rect x="120" y="480" width="300" height="60" rx="30" fill="#00ff88"/>
    <text x="270" y="518" fill="#0a0e27" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Bắt Đầu →</text>

    <!-- PWA Button -->
    <rect x="120" y="560" width="300" height="50" rx="25" fill="#161f48" stroke="#00f3ff" stroke-width="2"/>
    <text x="270" y="592" fill="#00f3ff" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">📱 Cài Đặt Vào Điện Thoại</text>
  </svg>`;

  await sharp(Buffer.from(screen2Svg))
    .png()
    .toFile(path.join(iconsDir, 'screenshot-2.png'));
  console.log('Generated screenshot-2.png');
}

generateScreenshots().catch(console.error);
