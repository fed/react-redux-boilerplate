# React Boilerplate

**Core Technologies:**
* ES6
* [React](https://facebook.github.io/react/)
* [React Router](https://github.com/reactjs/react-router)
* [Redux](http://redux.js.org/)

**Styling:**
* CSS Modules
* [PostCSS](http://postcss.org/)

**Tools:**
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.github.io/)

**Linting:**
* [eslint](http://eslint.org/)
* [stylelint](http://stylelint.io/)

**Unit & Functional Testing:**
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Enzyme](https://github.com/airbnb/enzyme)

**Continuous Integration:**
* Building and deploying to AWS using [Buildkite](http://buildkite.com/)

**TODO:**
* ES7
* [Immutable.js](https://facebook.github.io/immutable-js/)
* [Flow](https://flowtype.org/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `npm install` | Fetch dependencies and build binaries for any of the modules |
| `npm start` | Fire up Webpack Dev Server, app will go live on `http://localhost:6789` |
| `npm run clean` | Remove `build` directory |
| `npm run build:dev` | Build `bundle.js` using the `development` environment |
| `npm run build:stage` | Build `bundle.js` using the `staging` environment |
| `npm run build:prod` | Build `bundle.js` using the `production` environment |
| `npm test` | Run test suite |

## Buildkite CI

**Buildkite project:** https://buildkite.com/organisation/project

^ You can manually start a new build for a given branch and commit from this URL.

Merging a branch to `develop` will automatically trigger a new build which involves:

1. Running test suite
2. Running `npm run build:dev`
3. Deploying to http://dev.argendev.com (provided tests passed)

Merging a branch to `master` will automatically trigger a new build which involves:

1. Running test suite
2. Running `npm run build:stage`
3. Deploying to http://stage.argendev.com (provided tests passed)

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
