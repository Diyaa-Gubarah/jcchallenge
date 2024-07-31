# JC Challenge

This project converts the provided Figma design into a React application and deploys it to GitHub Pages.

## Table of Contents
- [JC Challenge](#jc-challenge)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
    - [`npm run deploy`](#npm-run-deploy)
  - [Deployment](#deployment)

## Project Overview
This project takes the Figma design available at [Proj Sample](https://www.figma.com/file/x9NiJ2c0NZqRnSzcpmWFzA/Proj-Sample?type=design&node-id=1-71&mode=design) and converts it into a fully functional React application. The application is then deployed to GitHub Pages, accessible at [jcchallenge](https://diyaa-gubarah.github.io/jcchallenge/).

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Redux Thunk**: Middleware for Redux to handle asynchronous actions.
- **Styled Components**: A library for styling React components using tagged template literals.
- **Axios**: A promise-based HTTP client for making requests.
- **React Router DOM**: A library for handling routing in React applications.
- **React Icons**: A collection of popular icons for React applications.
- **Testing Library**: A family of libraries for testing user interactions.
- **GH Pages**: A static site hosting service by GitHub, used for deploying the application.

## Setup and Installation
1. **Clone the repository**:
    ```sh
    git clone https://github.com/Diyaa-Gubarah/jcchallenge.git
    cd jcchallenge
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application in action.

## Available Scripts
In the project directory, you can run the following commands:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `npm run deploy`
Builds the app for production and deploys it to GitHub Pages.

## Deployment
This project uses `gh-pages` to deploy the build to GitHub Pages.

1. **Deploy the application**:
    ```sh
    npm run deploy
    ```
