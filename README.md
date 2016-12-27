# React & Redux Boilerplate

![React & Redux Boilerplate](http://i.imgur.com/Agl5kuk.png)

* UI Library: [React](https://facebook.github.io/react/)
* Routing Library: [React Router](https://github.com/reactjs/react-router)
* State Management: [Redux](http://redux.js.org/)
* Dependency Management: [Yarn](https://yarnpkg.com/)
* Styling: [CSS Modules](https://github.com/css-modules/css-modules) and [PostCSS](http://postcss.org/)
* Module Bundler: [Webpack](https://webpack.github.io/)
* ES6/7 & JSX -> ES5: [Babel](https://babeljs.io/)
* Immutable Data Structures on Reducers: [Immutable.js](https://facebook.github.io/immutable-js/)
* Static Type Checking: [Flow](https://flowtype.org/)
* Linting: [eslint](http://eslint.org/) and [stylelint](http://stylelint.io/)
* Test Libraries: [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), [Sinon](http://sinonjs.org/) and [Enzyme](https://github.com/airbnb/enzyme)

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `npm start` | Fire up Webpack Dev Server, app will go live on `http://localhost:6789` |
| `npm run storybook` | Fire up Storybook on `http://localhost:6006` |
| `npm run clean` | Remove `build` and `node_modules` directories |
| `npm run build:dev` | Build `bundle.js` using the `development` environment |
| `npm run build:staging` | Build `bundle.js` using the `staging` environment |
| `npm run build:prod` | Build `bundle.js` using the `production` environment |
| `npm test` | Run test suite |
