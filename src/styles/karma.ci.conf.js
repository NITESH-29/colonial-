// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: ['app/insurance/mocks/google-api.js'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: true // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    // logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['ChromeDocker'],
    singleRun: true,
    browserDisconnectTolerance: 2,
    customLaunchers: {
      ChromeDocker: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    junitReporter: {
      outputDir: require('path').join(__dirname, '../test-reports'),  // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    }
  });
};
