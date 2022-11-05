# Repro

When run `yarn dev`、 you'll get an error below.

```
Module parse failed: Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> @tailwind base;
| @tailwind components;
| @tailwind utilities;
TypeError: Cannot read properties of undefined (reading 'default')
    at resolveModuleMetaData (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:195:82)
    at serializeModuleReference (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1298:50)
    at resolveModelToJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1660:40)
    at Array.toJSON (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1081:40)
    at stringify (<anonymous>)
    at processModelChunk (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:163:36)
    at retryTask (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1823:50)
    at performWork (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1856:33)
    at AsyncLocalStorage.run (node:async_hooks:320:14)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js:1934:55)
```
