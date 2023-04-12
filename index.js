// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = "";
  svgString ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>"
  
  svgString += `${answers.shape}`;
  
  //   svgString += `${answers.shapeBackgroundColor}`
  let shapeChoice;
    if (answers.shape === 'Triangle') {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === 'Square') {
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
   
//   svgString += shapeChoice;
//   svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
  svgString += "</g>";
  svgString += "</svg>";

  // Import fs
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

inquirer
  .prompt([
    {
      type: "input",
      message:
        "What text would you like you logo to display? (Enter up to three characters)",
      name: "text",
    },
    {
      type: "input",
      message: "What color would you like the text to render?",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like the logo to render?",
      choices: ["Triangle", "Square", "Circle"],
      name: "shape",
    },
    {
      type: "input",
      message: "What color would you like the shape background to render?",
      name: "shapeBackgroundColor",
    },
  ])
  .then((answers) => {
    writeToFile("logo.svg", answers);
  });

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




// Need error handling -> how many characters user can enter into prompt 1