# React & Redux Boilerplate

![React & Redux Boilerplate](http://i.imgur.com/kHbBovB.png)

* UI Library: [React](https://facebook.github.io/react/)
* Routing Library: [React Router](https://github.com/reactjs/react-router)
* State Management: [Redux](http://redux.js.org/)
* Dependency Management: [Yarn](https://yarnpkg.com/)
* Styling: [CSS Modules](https://github.com/css-modules/css-modules) and [PostCSS](http://postcss.org/)
* Module Bundler: [Webpack](https://webpack.github.io/)
* ES6/7 & JSX -> ES5: [Babel](https://babeljs.io/)
* Static Typing: [Flow](https://flowtype.org/)
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
| `npm run clean` | Remove `build` and `node_modules` directories |
| `npm run build:dev` | Build `bundle.js` using the `development` environment |
| `npm run build:staging` | Build `bundle.js` using the `staging` environment |
| `npm run build:prod` | Build `bundle.js` using the `production` environment |
| `npm test` | Run test suite |

## Continuous Integration

Merging a branch to `develop` will automatically trigger a new build which involves:

1. Running test suite
2. Running `npm run build:dev`
3. Deploying to http://dev.argendev.com (provided tests passed)

Merging a branch to `master` will automatically trigger a new build which involves:

1. Running test suite
2. Running `npm run build:staging`
3. Deploying to http://staging.argendev.com (provided tests passed)

## Release Versions

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata [are available](https://docs.npmjs.com/cli/version) as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
