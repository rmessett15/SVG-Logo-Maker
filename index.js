// Inquirer code to prompt questions (text, text color, shape, shape bck color)
// .then(answers)
// let shapeChoice
    // if(answers.shape === triangle) {
    // shapeChoice = new Triangle()
    // } else if (answers.shape === square) {
    //     shapeChoice = new Square()
    // } else {
    //     shapeChoice === new Circle ()
    // }

// Set color 
// shapeChoice.setColor(answers.shapeColor)
let svgString = "";
svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
svgString += shapeChoice.render()
svgString += `<text x="80" y="130" fill="${answers.textColor}">${answers.text}</text>`;
svgString += '</svg>';

// Import fs
fs.writeFile("logo.svg", svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
}) ;