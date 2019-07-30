// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    /* config options here */
});
module.exports = {
    webpackDevMiddleware(config) {
        config.watchOptions = {
            ignored: [
                /\.git\//,
                /\.next\//,
                /node_modules/
            ]
        }
        return config;
    }
}
