import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('src');
const ASSETS_DIR = path.join(SRC_DIR, 'assets');

const categories = {
  logos: [
    'adobe-logo.png', 'alliance-virtual-offices-logo-t.png', 'Canva-Logo.webp',
    'google-cloud.svg', 'google-partner.svg', 'Google_Maps_icon_(2020).svg.png',
    'logo-1024x255.png', 'Logo-NordVPN.png', 'logo.svg', 'MaxCash_logo.webp',
    'meta-partner.svg', 'shopify.svg', 'Surfshark_logo.svg.png', 'tiktok.svg',
    'toolshero-logo-big-2020-e1608653392912.png', 'tradingviewlogo-freelogovectors.net_.png', 'Wix.com_Logo.png'
  ],
  services: [
    'cc1.webp', 'cc2.webp', 'cc3.webp', 'contentcreation.webp',
    'permarket.webp', 'pm1.webp', 'pm2.webp', 'pm3.webp',
    'pr1.webp', 'pr2.webp', 'pr3.webp', 'prandlinkbuid.webp',
    'searchengine.webp', 'seo1.webp', 'seo2.webp', 'seo3.webp',
    'sm1.webp', 'sm2.webp', 'sm3.webp', 'socialmedia.webp',
    'wd1.webp', 'wd2.webp', 'wd3.webp', 'webdev.webp'
  ],
  icons: [
    '1.svg', '2.svg', '3.svg', 'caridad.svg', 'cc_icon.webp',
    'F7.svg', 'jolie.svg', 'Performance_icon.webp', 'petmania.svg',
    'pr_icon.webp', 'react.svg', 'Scuola.svg', 'sm_icon.webp',
    'social-logo.webp', 'Stats.svg', 'Stats2.svg', 'tecnologia.svg'
  ],
  home: [
    'crop.png', 'Getty.webp', 'Getty1.webp', 'google2.webp',
    'Homme.webp', 'ikea.webp', 'image.webp', 'images.png',
    'Invoice DOM OCT 19-1-1_page.png', 'Laprima.jpeg', 'Market1.webp',
    'Market21.webp', 'Market22.webp', 'NobleHorizon.webp', 'Paid1.webp',
    'Paid2.webp', 'people.webp', 'people2.webp', 'Stats3.webp', 'zudio.webp'
  ]
};

// Map original filename to new relative path from assets directory
const fileMap = {};
for (const [folder, files] of Object.entries(categories)) {
  for (const file of files) {
    fileMap[file] = `${folder}/${file}`;
  }
}

async function run() {
  // 1. Create directories
  for (const folder of Object.keys(categories)) {
    const dirPath = path.join(ASSETS_DIR, folder);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  }

  // 2. Move files
  const existingFiles = fs.readdirSync(ASSETS_DIR);
  for (const file of existingFiles) {
    const fullPath = path.join(ASSETS_DIR, file);
    if (fs.statSync(fullPath).isFile() && fileMap[file]) {
      const newPath = path.join(ASSETS_DIR, fileMap[file]);
      fs.renameSync(fullPath, newPath);
      console.log(`Moved ${file} -> ${fileMap[file]}`);
    }
  }

  // 3. Scan and update .jsx, .js, .css files
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath);
      } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // For each file in our map, look for its reference and replace
        for (const [original, newRelPath] of Object.entries(fileMap)) {
          // Replace exactly /assets/original or /assets/original" or /assets/original'
          // We use regex to be safe
          const regexStr = `([/\\\\]assets[/\\\\])(${original.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})([^A-Za-z0-9_.-])`;
          const regex = new RegExp(regexStr, 'g');
          
          if (regex.test(content)) {
            content = content.replace(regex, `$1${newRelPath.replace('\\', '/')}$3`);
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(fullPath, content);
          console.log(`Updated imports in ${fullPath}`);
        }
      }
    }
  }

  scanDir(SRC_DIR);
  console.log('Migration complete!');
}

run().catch(console.error);
