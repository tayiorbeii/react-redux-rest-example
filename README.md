~~Loosely based~~ Built upon [@davezuko's kit](https://github.com/davezuko/react-redux-starter-kit) in combination with the official Redux docs.
## Mock API
For development purposes, a mock REST API server can be run using json-server.

Install it with `npm install -g json-server`

In a new terminal, run it with `json-server -p 4000 db.json` where `db.json` is the file with mock data.
You can view the json-server page at http://localhost:4000, but it isn't really necessary.



## Getting Started
### `npm start`
Runs the webpack build system with webpack-dev-server (http://localhost:3000)

### `npm run dev:nw`
Same as `npm run start` but opens the debug tools in a new window.

_Note:_ You need to enable popups in Chrome or you will get an error.

### `npm run compile`
Runs the webpack build system with the current NODE_ENV and compiles the application to the `./dist` directory. Production builds will fail on eslint errors (but not on warnings).


## Structure


```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   ├── webpack              # Environment-specific configuration files for Webpack
├── config                   # Project configuration settings
├── src                      # Application source code
   ├── components           # Generic React Components (generally Dumb components)
   ├── containers           # Components that provide context (e.g. Redux Providers)
   ├── layouts              # Components that dictate major page structure
   ├── reducers             # Redux reducers
   ├── routes               # Application route definitions
   ├── stores               # Redux store configuration
   ├── utils                # Generic utilities
   ├── views                # Components that live at a route
   └── index.js             # Application bootstrap and rendering
```
