<div align="center">
  <h1>Alaciry Law</h1>

  Simple bookstore app developed as interview tech test for [Alacrity Law](http://alacritylaw.com)

  <br>
</div>

<h2>Table of content</h2>

- [Tools I used](#tools-i-used)
  - [Styling](#styling)
  - [GraphQL](#graphql)
  - [State management](#state-management)
  - [Forms](#forms)
  - [Coding style](#coding-style)
- [Installation](#installation)
- [Run it locally](#run-it-locally)
- [Available commands](#available-commands)
- [Testing](#testing)

## Tools I used

In following I will give a brief overview of tools, libraries and framework I used in this app.

### Styling
For styling app I decide to use [Grommet](https://grommet.io), which is very simple React UI framwork, as well as [Styled-components](http://styled-components.com). Styled-componets are used by Grommet internally so I decide to use them in this project for writting few very simple custom styles.

Beside of that I used normalize.css to reset browser's default css.

### GraphQL
For client-side implementation of GraphQL, I used Apollo Client as simplest and easiest way to work with GraphQL in client-side apps.

To make things even easier I used [apollo-boost](https://www.npmjs.com/package/apollo-boost) for setting up Apollo Client and [react-apollo](https://www.npmjs.com/package/react-apollo) for running queries and mutations from React components.

### State management
When it comes to managing state in aplication I decide to not use solutions such as Redux or Mobx. Instead, I used Apollo Client built in state management solution. That allowed me to make GraphQL single source of data in my app and manage state with simply writing local queries and mutations.

### Forms

To handle forms in this app I used [Formik](https://github.com/jaredpalmer/formik) which is very useful when it comes to handling form state, dealing with errors and handling form submission... I combined it with [Yup](https://www.npmjs.com/package/yup) for handling form validation.

### Coding style
To make code looks nice and consistent I used [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) with [StandardJS](https://standardjs.com) coding style.

## Installation

Before you try to run this project locally make sure you have installed NodeJS on your machine by running following command in your terminal:

```sh
node -v
```

If you get an error try to download and install NodeJS. More about it on official website [https://nodejs.org/en/](https://nodejs.org/en/)

To start, simple clone this repository by running next command in your terminal:

```sh
git clone https://github.com/besirovic/alacrity-bookstore.git
```

After that navigate to just cloned repo and install dependencies by running
```sh
npm install

or 

yarn install
```


## Run it locally

> Before you attempt to run the app make sure to run your local server which is required for app to work properly.
> More details about how to do it are available on next link [https://github.com/alacrity-law/apollo-test-app](https://github.com/alacrity-law/apollo-test-app).

>Once you get your local server running, make sure to provide it's url to client app by creating `.env` file in root of project. As reference for it you can use `.env.example` file.
> If you don't provide your own url to app it will use `http://localhost:4567/graphql` as default url for GraphQL server.

Running app locally is very easy thing. To do it, open your terminal, navigate to repo and run start command by typing

```sh
yarn start

or 

npm start
```

Very quickly app should appear in your default browser.

## Available commands

| Command | Description                       |
| ------- | --------------------------------- |
| start   | Start app locally                 |
| build   | Build app for production          |
| test    | Run unit tests                    |
| eject   | Eject app from react-scripts      |
| cypress | Open Cypress runner and run tests |

## Testing

Since this is very simple app, I decide to not write any unit tests.

Instead, I used to write a couple Cypress test, such as testing process of creating new and editing existing book, testing header component or home page.

To run this tests, in you terminal run `cypress` command from list of available commands, by typing:

```sh
yarn cypress

or 

npm run cypress
```