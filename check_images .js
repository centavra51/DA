const fs = require('fs');
const probe = require('probe-image-size');

const images = [
    'images/barber.webp',
    'images/renovation.webp',
    'images/beauty.webp',
    'images/deteil.webp',
    'images/AiSalesAgent.webp'
];

const output = [];
async function getDimensions() {
    for (const imagePath of images) {
        try {
            const input = fs.createReadStream(imagePath);
            const result = await probe(input);
            output.push(`${imagePath}: ${result.width}x${result.height} (${(result.width / result.height).toFixed(2)})`);
            input.destroy();
        } catch (e) {
            output.push(`Error processing ${imagePath}: ${e.message}`);
        }
    }
    fs.writeFileSync('dimensions.txt', output.join('\n'));
}

getDimensions();
