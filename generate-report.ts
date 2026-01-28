import * as reporter from 'cucumber-html-reporter';
import * as path from 'path';

const options = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, 'reports/cucumber-report.json'),
  output: path.join(__dirname, 'reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'Local',
    'Browser': 'Chromium, Firefox, WebKit',
    'Platform': 'macOS/Windows/Linux',
    'Executed': new Date().toISOString()
  }
};

reporter.generate(options);
