// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    distDir: 'build',
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
