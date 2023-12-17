# vjs-boilerplate

This is a boilerplate project for building a web application using Vanilla JavaScript (vjs). The project aims to provide a starting point for developers to quickly set up a web application using modern JavaScript tools and technologies.

## Technologies Used

- Babel: Used for transpiling modern JavaScript code to ensure compatibility with older browsers.
- Webpack: Used as a module bundler to bundle all the JavaScript, CSS, and other assets required for the web application.
- Jest: Used as the testing framework for writing and running unit tests.
- Sass: Used as the CSS preprocessor to write modular and maintainable stylesheets.

## Project Structure

- The `public` directory contains the public assets of the web application, including an `index.html` file.
- The `src` directory contains the source code of the web application.
  - The `index.html` file in the `src` directory is the entry point of the web application.
  - The `index.js` file in the `src` directory is the main JavaScript file that initializes the web application.
  - The `styles.scss` file in the `src` directory contains the stylesheets for the web application.
- The `webpack.config.js` file in the root directory contains the configuration for the Webpack bundler.

## Getting Started

1. Clone the repository
2. Install dependencies using `pnpm install`
3. Start the development server using `pnpm start`
4. Build the project for production using `pnpm build`

## Testing

Run the tests using `pnpm test`
