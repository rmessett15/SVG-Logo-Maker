# SVG-Logo-Maker
Week-10 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Credits](#credits)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Contribution-Guidelines](#contribution-guidelines)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

This application was built as a way to allow freelance web developers to create simple logos for their clients and projects so that they can forego paying a graphic designer. It utilizes inquirer to prompt the user within the command line for how they would like their logo to look (ie. what text they would like their logo to display (up to 3 characters in length), the color of that text, the shape of their logo (triangle, square, or circle) and the color of that shape.) Once the user answers all prompts, then an SVG file is written using their selections to generate a logo. This application also is my first implementation of unit testing within my applications. It utilizes one test suite, with three tests, all which are simply testing that the code base is delivering back correct shapes and colors. Building this application served as yet another look at what back-end developers can do without the use of a UI (user interface). I learned the value of unit testing and how this simple example used within my application can be expanded upon for much larger code bases and it's necessity when many developers are all contributing to the same project. Lastly, I have noticed myself starting to think more and more like a developer, adding some minor error handling with the first user prompt: not allowing for a logo to be generated when more than three characters are entered by the user. Future development on this application could start with adding on more error handling (SVG colors), additional unit testing, and adding more polygons and font styles for users to choose from.   

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1LLAhUArgzn2YfI_or0DXp4N9ZcsTPUdZ/view

## Screenshots

Logo Generation

![Screenshot1-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142589-86370721-ab54-4ff4-af4d-46a40fbb5d5f.png)

![Screenshot2-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142612-728f43cb-174a-4370-9847-e3ebb10ee23b.png)

![Screenshot3-week-10-challenge](https://user-images.githubusercontent.com/120127903/232144018-62741d39-3e09-492c-be82-125e38f91521.png)

Examples of Generated Logos

<img width="226" alt="Screenshot4-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142654-9a5a9937-e831-4838-86a1-4323c7b9cc39.png">

<img width="245" alt="Screenshot5-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142705-29cd92d9-1c12-46ce-a81a-64893ac15a00.png">

<img width="214" alt="Screenshot6-week-10-challenge" src="https://user-images.githubusercontent.com/120127903/232142727-5c9ce441-1ca7-443a-bb5f-391b3f0003cf.png">

## Technologies Used

This project is powered by Node.js v16, utilizes inquirer v8.2.4 (node package manager), and file system module (node package manager). It also employs jest v29.5.0 (node package manager) for the unit testing conducted in this application. 

## Installation

1. Clone the repo:
   git clone https://github.com/rmessett15/SVG-Logo-Maker.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install inquirer and jest directly from the command line, to do so the command for inquirer will be npm i inquirer@8.2.4 to install v8.2.4 of the inquirer, and npm i jest to install the latest version of jest).

6. To run the application, within the terminal, type the command node index.js.

## Credits

Worked with tutor Martin Goldberg to help get me started on this assignment. We pseudo-coded the general outline together and he helped me put together the unit testing portion of this assignment. 

## Features

Features of this application include the users ability to generate logos quickly and easily through the use of SVG files, entirely from the command line. No UI (user interface) needed, and no front end tools needed.  

## Usage Information

To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node index.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

For unit testing instructions, navigate to the Test Instructions section.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions

To run unit testing, open the terminal, and use the command npm run test.

As of now there is one test suite with three tests. The test suite is checking for a render() method to return a string for the corresponding SVG file with the given shape color.

![Screenshot7-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142736-a2ed7de2-b924-4536-9f51-e9c6cd5fb1db.png)

![Screenshot8-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142745-dfe8aab8-4da0-4e8f-89b6-d153f2024825.png)

![Screenshot9-week-10-challenge](https://user-images.githubusercontent.com/120127903/232142780-b9158992-dced-4da8-be89-e828b81f6023.png)

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/rmessett15)

<a href="mailto:rmessett15@gmail.com">rmessett15@gmail.com</a>
