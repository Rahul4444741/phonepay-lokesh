const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other webpack configuration options
    resolve: {
        fallback: {
            "assert": require.resolve("assert/"),
            "path": require.resolve("path-browserify"),
            "stream": false,
            "os": false,
            "buffer": false,
            "http": false,
            "https": false,
            "querystring": false,
            "url": false,
            "vm": false,
            "zlib": false,
            "crypto": false,

            // Option 1: Include a polyfill
            // "assert": false // Option 2: Use an empty module
        }

    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    // Other webpack configuration settings
};