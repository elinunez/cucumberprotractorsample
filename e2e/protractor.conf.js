let reporter = require('cucumber-html-reporter');
let options = {
  theme: 'bootstrap',
  jsonFile: './e2e/src/results/report.json',
  output: './e2e/src/results/report.html',
  reportSuiteAsScenarios: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome  54.0.2840.98',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Remote'
  }
};


exports.config = {
  allScriptsTimeout: 20000,
  specs: [
    './src/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/features/steps/*.ts', './src/hooks/*.ts'],
    tags: [],
    strict: true,
    format: ['json:./e2e/src/results/report.json'],
    compiler: [ 'ts:ts-node']
  },
  useAllAngular2AppRoots: true,
  onPrepare: function() {
    // browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  },
  onComplete: () => {
    reporter.generate(options);
  }
};