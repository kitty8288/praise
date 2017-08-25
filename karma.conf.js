// Karma configuration
// Generated on Thu Aug 24 2017 15:32:36 GMT+0800 (CST)

module.exports = function(config) {
    config.set({

        basePath: './test/',
        frameworks: ['jasmine'],
        files: ['*.js'],
        exclude: ['karma.conf.js'],
        // preprocessors: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        // concurrency: Infinity
    })
}