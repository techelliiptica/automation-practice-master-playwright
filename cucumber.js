module.exports = {
  default: {
    require: [
      'features/support/**/*.js',
      'features/step-definitions/**/*.js'
    ],
    format: [
      'progress-bar',
      'merv-client/cucumber-formatter',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await',
      merv: {}
    }
  }
};
