# React & Redux Boilerplate ![Dependencies](https://david-dm.org/fknussel/react-redux-boilerplate/dev-status.svg)

![React & Redux Boilerplate](http://i.imgur.com/Agl5kuk.png)

This is a simple starter project I've put together after setting up a bunch of React apps at work. It's **fairly opinionated**, with tools and decisions that make sense to me and my team. However, all of the libraries and tools I'm using here are pretty standard and widespread in the React community nowadays.

I've started this project probably before or at the same time [**create-react-app**](https://github.com/facebookincubator/create-react-app) became popular. Even though that generator is awesome and makes getting started with React really simple, I reckon it also makes it easy to ignore what's going on under the hood. For me, **knowing your tools** is really important (particularly in JavaScriptland where everything changes so fast, and understanding a concept/library might help you get the grips of the next big thing). That's why I'm still maintaining this project, as a way to help newcomers understand how the whole React ecosystems works together.

Here's a list of what I've included:

* UI Library: [**React**](https://facebook.github.io/react/)
* Routing Library: [**React Router**](https://github.com/reactjs/react-router)
* State Management: [**Redux**](http://redux.js.org/)
* Styling: [**CSS Modules**](https://github.com/css-modules/css-modules) and [**PostCSS**](http://postcss.org/)
* Immutable Data Structures: [**Immutable.js**](https://facebook.github.io/immutable-js/)
* Dependency Management: [**Yarn**](https://yarnpkg.com/)
* Module Bundler: [**Webpack**](https://webpack.github.io/)
* ES6/7 & JSX -> ES5: [**Babel**](https://babeljs.io/)
* Static Type Checking: [**Flow**](https://flowtype.org/)
* Linting: [**eslint**](http://eslint.org/) and [**stylelint**](http://stylelint.io/)
* Test Libraries: [**Jest**](https://facebook.github.io/jest/) and [**Enzyme**](https://github.com/airbnb/enzyme)
* UI Component Development Environment: [**Storybook**](https://getstorybook.io/)

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

## Getting Started

Just clone this project and make Git start fresh:

```
rm -rf .git
git init
git remote add origin https://github.com/your-username/your-project.git
```

Then run `yarn install` to fetch all of the dependencies and `npm start` to fire up the development server ✨

## Deploying your application

Once you are ready to deploy your app, just run the appropriate variant of the `npm run build` command (there are a bunch of predefined build scripts targetting different environments). You will get a new directory called `build` with a `bundle.js` file inside.

Now you just need to copy the `index.html` and `build/bundle.js` files to your server 🎉

## CI/CD

There are a bunch of scripts on the `.buildkite` directory you can use to configure your CI/CD tool. These scripts are not [Buildkite](https://buildkite.com/) specific, rather generic Bash scripts you can use anywhere.

These scripts handle: setting up the environment by installing necessary dependencies, running your tests and deploying to [Amazon S3](https://aws.amazon.com/s3/). You can use them as a template and customise them to suit your needs.

## Contributing

Please submit an issue or create a PR if you find a better way to do things or know of a nicer configuration 🙂

## License

MIT
