class Shape {
    constructor() {
        this.color = "";

    }
    setColor (colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="40%" fill="${this.color}" />`;
  }
}

module.exports = { Square, Triangle, Circle };