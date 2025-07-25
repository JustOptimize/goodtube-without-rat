const fs = require('fs');
const path = require('path');

// Paths
const templatePath = path.resolve(__dirname, 'src', 'template.user.js');
const codePath = path.resolve(__dirname, 'src', 'goodtube.js');
const outDir = path.resolve(__dirname, 'dist');
const outFile = path.join(outDir, 'goodtube.user.js');

// Read files
try {
    const template = fs.readFileSync(templatePath, 'utf8');
    const code = fs.readFileSync(codePath, 'utf8');

    // Replace placeholder
    const output = template.replace('{{INSERT_CODE_HERE}}', code);

    // Ensure dist directory exists
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    // Write output file
    fs.writeFileSync(outFile, output, 'utf8');
    console.log(`Built userscript to ${outFile}`);
} catch (err) {
    console.error('Error building userscript:', err);
    process.exit(1);
}
