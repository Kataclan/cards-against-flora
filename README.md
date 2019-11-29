# cards-against-flora

App Description
============================

The main idea is to create an app that allows us to create several Cards Agains Flora Game Decks. Like in Cards Agains Humanity game decks, each card in a Cards Agains Flora's deck can contain both Rotten Cards (as Black Cards in CAH) and Fresh Cards (as White Cards in CAH). The user can create cards, and assign those cards to its previous created decks. Then, it can download or export its decks to print & play!

The app has 2 main views, Cards and Decks (this last is disabled until Cards is finished). On Cards view, you will be able to view all your cards, create a new one and select an existing and edit, delete or it. You can achieve this actions tapping in the floating action buttons that will appear on the bottom of the page.

Demo
============================
https://kataclan.github.io/


Available features:
 - React Router for navigation.
 - Load initial data.
 - Add card.
 - Delete card.
 - Edit card.


Folder Structure Explanation
============================

    .
    ├── public                  # Compiled files
    ├── server                  # Little local server to fetch fake data
    ├── src                     # Source files
    ├    ├── api                      # Api calls handler
    ├    ├── assets                   # Local assets
    ├    ├── components               # App shared components
    ├    ├── features                 # App features
    ├    ├     ├── featName                 
    ├    ├     ├     ├── components         # Feature components
    ├    ├     ├     ├── feat-actions.ts    # Feature redux actions
    ├    ├     ├     ├── feat-reducer.ts    # Feature reducer
    ├    ├     ├     ├── feat-sagas.ts      # Feature sagas
    ├    ├     ├     ├── feat-selectors.ts  # Feature state selectors
    ├    ├     ├     ├── feat-types.ts      # Feature types
    ├ 
    ├    ├── layouts                 # App layouts (in this case we only have a Main Layout)
    ├    ├── pages                   # Components that will be passed to router Routes
    ├    ├── router                   # Components that will be passed to router Routes
    ├    ├     ├── index.ts                 # MainComponent. Initializes history, store, and ConnectedRouter
    ├    ├     ├── router-paths.ts          # Path names declaration handler

    ├    ├── store                   # Store folder
    ├    ├     ├── index.ts                 # Contains store configuration function
    ├    ├     ├── root-action              # Gather all app actions into a more friendly object 
    ├    ├     ├── root-reducer             # Combine all reducers, including react-router reducer
    ├    ├     ├── root-saga                # Declare all sagas
    ├    ├     ├── types                    # Store and State types
    ├    ├     ├── utils                    # Some store util methods
    ├    ├── typings                   # Global typings
    ├    ├── index.tsx                 # ReactDom rendering and serviceWorker initialization
    ├    ├── typings                   # Global typings
             
    ├── test                    # Automated tests (alternatively `spec` or `tests`) ---> PENDING
    ├── LICENSE
    └── README.md


### Scripts

To initialize the project, run `npm i` and `npm run start`. It will run both server and client apps. Server is an api listening on http://localhost:3001 , while app is served in http://localhost:3000

Other scripts:
- `npm run server` --> Runs only the API server
- `npm run client` ---> Runs only client app
- `npm run test` --> Runs jest tests
- `npm run test:tsc` ---> Runs jest TS tests
- `npm run lint` --> Runs linter


### Libraries

This project is coded in TypeScript, and it comes from a `create-react-app`. I've been asked for using the following libraries:
  - react
  - react-redux
  - redux-saga
  - react-router
  - styled-components

In addition, I've added immutability to the state using:
  - immutable.js
  - connected-react-router
  - redux-immutable

I've also used this libraries:
  - typesafe-actions (for typing actions)
  - redux-logger (console logger for redux actions)

In CardModal component under cards feature folder, I used new React Hooks API to handle the state of the form.

For linting and 'prettify' the code, I added esling with typescript pluggin and Prettier, and also a git hook on pre-commit 
to run this linter before commiting files.

For styling, I used styled-components mixed with React Material UI, with provides me a simple way to do the UI for this project.

### Project status

When you run the app, a loading gif appears until a promise is resolved. That promise mocks fetching cards from database. When this cards are loaded, then you are redirected to /cards to see the Cards List.

### License information

MIT License

Copyright (c) 2019 Alejandro Camps Guerrero
