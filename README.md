# Flight Check-in App

This repo contains an application to perform online flight check-ins.

## Live version

The app is available at https://checkin-app.netlify.app/

## 🧐 What’s inside?

A quick look at the top-level files and directories.
.
├── node_modules
├── src
├── .babelrc
├── .gitignore
├── .prettierrc
├── package.lock.json
├── package.json
└── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`package-lock.json`** This is an automatically generated for any operations where npm modifies either the node_modules tree, or package.json. **(You won’t change this file directly).**

6.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7.  **`README.md`**: A text file containing useful reference information about your project.

## Installation

You can clone this repository or download it as a .zip file. To install the project dependencies, use the command `npm install`. To run the project locally, use the command `npm run dev`. The app will be available at `localhost:1234`.

## Environment

In order for the project to run correctly, the API Token provided by [`fakeJSON`](https://fakejson.com/) needs to be added to your `.env` file: `FAKEJSONTOKEN`

## Dependencies

The project has the following dependencies:

### Packages

- [`axios`](https://www.axios.com/): promise based HTTP client for the browser and node.js
- [`eslint`](https://eslint.org/): JavaScript linter
- [`formik`](https://formik.org/): library from handling forms
- [`jest`](https://jestjs.io/): JavaScript testing framework
- [`material-ui`](https://material-ui.com/): React components that implement Google's Material Design.
- [`parcel`](https://parceljs.org/): web application bundler with zero configuration
- [`prettier`](https://prettier.io/): code formatter
- [`reach-router`](https://reach.tech/router/): simple router for React
- [`react`](https://reactjs.org/): JavaScript library for building user interfaces
- [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/): library to test React components
- [`yup`](https://github.com/jquense/yup): JavaScript schema builder for testing and validation

### API

The project uses [`fakeJSON`](https://fakejson.com/) to mock a backend API and simulate a form submission.

## Netlify

[Netlify](https://www.netlify.com/) is used for continious deployment and hosting. Netlify builds the site when new changes are pushed to the `master` branch.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
