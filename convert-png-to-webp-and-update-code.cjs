// Script para converter PNG para WebP e atualizar referências no código
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const codeDirs = ['src', 'public']; // Adicione outros diretórios se necessário

// 1. Converter PNG para WebP
function convertAllPngToWebp(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertAllPngToWebp(fullPath);
    } else if (/\.png$/i.test(file)) {
      const output = fullPath.replace(/\.png$/i, '.webp');
      sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(output)
        .then(() => console.log(`Convertido: ${file} -> ${path.basename(output)}`))
        .catch(err => console.error(`Erro ao converter ${file}:`, err));
    }
  });
}

// 2. Atualizar referências no código
function updateReferencesInCode(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateReferencesInCode(fullPath);
    } else if (/\.(js|jsx|ts|tsx|json|html|css)$/i.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content.replace(/\.png/gi, '.webp');
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Referências atualizadas em: ${fullPath}`);
      }
    }
  });
}

// Execução
console.log('Convertendo PNG para WebP...');
convertAllPngToWebp(publicDir);

// Aguarda um pouco para garantir que as conversões terminem antes de atualizar o código
setTimeout(() => {
  console.log('Atualizando referências no código...');
  codeDirs.forEach(dir => updateReferencesInCode(path.join(__dirname, dir)));
  console.log('Processo concluído!');
}, 5000); 