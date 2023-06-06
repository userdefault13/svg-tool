const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('getSVG() returns the correct SVG code for a circle', () => {
        const circle = new Circle('red', 80);
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
        expect(circle.getSVG()).toBe(expectedSVG);
    });
});

describe('Triangle', () => {
    test('getSVG() returns the correct SVG code for a triangle', () => {
        const triangle = new Triangle('blue', '150,20 230,180 70,180');
        const expectedSVG = '<polygon points="150,20 230,180 70,180" fill="blue" />';
        expect(triangle.getSVG()).toBe(expectedSVG);
    });
});

describe('Square', () => {
    test('getSVG() returns the correct SVG code for a square', () => {
        const square = new Square('green', 200, 100, 50, 50);
        const expectedSVG = '<rect width="200" height="100" x="50" y="50" fill="green" />';
        expect(square.getSVG()).toBe(expectedSVG);
    });
});
