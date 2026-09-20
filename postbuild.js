import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const bioDir = path.join(distDir, 'bio');

// Ensure dist/bio directory exists
if (!fs.existsSync(bioDir)) {
  fs.mkdirSync(bioDir, { recursive: true });
}

// Copy dist/index.html to dist/bio/index.html so GitHub Pages serves /skyphoria/bio natively with HTTP 200
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(bioDir, 'index.html'));

// Copy dist/index.html to dist/404.html for all other SPA fallback routes on GitHub Pages
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

console.log('✓ Successfully created dist/bio/index.html and dist/404.html for 100% GitHub Pages native routing!');
