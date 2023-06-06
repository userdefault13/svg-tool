
# Logo Generator
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Description
Logo Generator is a command-line application that allows users to generate simple logos for their projects without the need for a graphic designer. The application collects user input regarding the logo's text, text color, shape, and shape color, and then generates an SVG file representing the logo.

## Features
• User-friendly command-line interface for input collection
• Support for up to three characters in the logo text
• Customizable text color using color keywords or hexadecimal values
• Choice of shapes: circle, triangle, and square
• Customizable shape color using color keywords or hexadecimal values
• Automatic generation of an SVG file with the specified logo
• Confirmation message displaying the generated file name

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: cd logo-generator
3. Install the dependencies: npm install

## Usage
To run the application, use the following command:

`node index.js`

The application will prompt you for the logo details, including text, text color, shape, and shape color. Follow the on-screen instructions to enter the required information. Once you have provided input for all the prompts, the application will generate an SVG file named `logo.svg` in the current directory. You can then open the `logo.svg` file in a browser to view the generated logo.

## Examples
The examples directory contains sample SVG files that were created using the Logo Generator application. Feel free to check them out for reference.

## License
This project is licensed under the MIT license.

MIT

## Contributing
Contributions to the Logo Generator application are welcome! If you find any bugs, have suggestions for improvements, or would like to add new features, please feel free to open an issue or submit a pull request.

## Tests
The application uses Jest for unit testing. To run the tests, use the following command:

`npm test`

The test files are located in the lib directory and are suffixed with .test.js. The tests cover the shape classes' functionality and ensure that the SVG code generation is accurate.

## Acknowldgements
• This application utilizes the Inquirer library for collecting user input.
• Unit testing is done using Jest.

## Questions
For any questions or feedback regarding this application, please feel free to reach out to me at user.defaults@gmail.com or on [GitHub](https://github.com/userdefault13).
werd
