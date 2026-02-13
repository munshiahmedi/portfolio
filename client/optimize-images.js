import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync, renameSync, unlinkSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = 'public';
const outputDir = 'public/optimized';

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Process images
async function optimizeImages() {
  const files = readdirSync(inputDir).filter(file => 
    /\.(jpe?g|png|webp|avif|tiff)$/i.test(file)
  );

  for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file.replace(/\.(jpe?g|png|tiff|bmp|gif)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Optimized: ${file} -> ${basename(outputPath)}`);
      
      // Replace original with optimized version
      renameSync(outputPath, inputPath.replace(/\.(jpe?g|png|tiff|bmp|gif)$/i, '.webp'));
      
      // Remove original if it's not a webp
      if (!file.toLowerCase().endsWith('.webp')) {
        unlinkSync(inputPath);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

optimizeImages().catch(console.error);
