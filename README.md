# cards-against-flora
 This is a solution for Colvin's test.

Project status
============================

- [] Features
    - [x] Add immutability to the State
    - [x] Router
    - [x] App:
        - [x] Reducer
        - [x] Actions
        - [x] Types
        - [x] Sagas
        - [x] Selectors
    - [] Decks:
        - [x] Reducer
        - [x] Actions
        - [x] Types
        - [] Sagas: Fetch & CRUD
        - [] Selectors
    - [] Cards:
        - [x] Reducer
        - [x] Actions
        - [x] Types
        - [] Sagas: Fetch & CRUD
        - [] Selectors

- [] Initialization
    - [x] Home page. Loading GIF while loading initial data.
    - [x] Loading fake inital data
    - [] Loading inital data from API.

- [] Router
    - [x] Home
    - [] Navigation Menu
    - [] Decks: details, CRUD, Export
    - [] Cards: details, CRUD, Export

- [] Components
    - [] Decks: Details, List, Form
    - [] Cards: Details, List, Form

- [] Tests

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

### App Description

The main idea is to create an app that allows us to create several Cards Agains Flora Game Decks. Like in Cards Agains Humanity game decks, each card in a Cards Agains Flora's deck can contain both Rotten Cards (as Black Cards in CAH) and Fresh Cards (as White Cards in CAH). The user can create cards, and assign those cards to its previous created decks. Then, it can download or export its decks to print & play!

### 3rd party libraries

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



### License information

MIT License

Copyright (c) 2019 Alejandro Camps Guerrero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
