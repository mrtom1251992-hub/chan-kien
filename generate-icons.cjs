const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const svgPath = path.join(__dirname, 'icons', 'icon.svg');
  const iconsDir = path.join(__dirname, 'icons');

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // 192x192 icon
  await sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, 'icon-192.png'));
  console.log('Generated icon-192.png');

  // 512x512 icon
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, 'icon-512.png'));
  console.log('Generated icon-512.png');

  // Maskable 512x512 icon (with extra padding)
  await sharp(svgPath)
    .resize(410, 410)
    .extend({
      top: 51,
      bottom: 51,
      left: 51,
      right: 51,
      background: { r: 10, g: 14, b: 39, alpha: 1 }
    })
    .png()
    .toFile(path.join(iconsDir, 'icon-maskable.png'));
  console.log('Generated icon-maskable.png');

  // Favicon 64x64
  await sharp(svgPath)
    .resize(64, 64)
    .png()
    .toFile(path.join(__dirname, 'favicon.png'));
  console.log('Generated favicon.png');

  console.log('All icons generated successfully!');
}

generate().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
