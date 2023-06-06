const fs = require('fs');
const inquirer = require('inquirer');

function generateLogo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal number):',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal number):',
            },
        ])
        .then((answers) => {
            const { text, textColor, shape, shapeColor } = answers;

            let shapeSVG;
            switch (shape) {
                case 'circle':
                    shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
                    break;
                case 'triangle':
                    shapeSVG = `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
                    break;
                case 'square':
                    shapeSVG = `<rect width="200" height="100" x="50" y="50" fill="${shapeColor}" />`;
                    break;
                default:
                    console.error('Invalid shape.');
                    return;
            }

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                ${shapeSVG}
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" font-family="Arial" font-weight="bold" fill="${textColor}">
                    <tspan x="50%" dy="0.35em">${text}</tspan>
                </text>
            </svg>`;

            fs.writeFile('logo.svg', svg, 'utf8', (err) => {
                if (err) {
                    console.error('Error creating logo:', err);
                } else {
                    console.log('Generated logo.svg');
                }
            });
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

generateLogo();
module.exports = { generateLogo };
