class Shape {
    constructor(color) {
        this.color = color;
    }

    getSVG() {
        throw new Error('Method not implemented.');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getSVG() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
} 

class Triangle extends Shape {
    constructor(color, points) {
        super(color);
        this.points = points;
    }

    getSVG() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, width, height, x, y) {
        super(color);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    getSVG() {
        return `<rect width="${this.width}" height="${this.height}" x="${this.x}" y="${this.y}" fill="${this.color}" />`;
    }
}
    
module.exports = { Shape, Circle, Triangle, Square };
