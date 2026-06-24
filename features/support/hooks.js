const { Before, After, BeforeAll, AfterAll, AfterStep } = require('@cucumber/cucumber');
const { execSync } = require('child_process');
const { AutomationTool, MervPlaywright, loadMervConfig, captureCucumberStepScreenshot } = require('merv-client');

let serverProcess;
let screenshotEnabled = false;

BeforeAll(async function() {
  screenshotEnabled = loadMervConfig(process.cwd()).screenshot;
  // Start web server if not already running
  try {
    execSync('curl -f http://localhost:3000 > /dev/null 2>&1', { stdio: 'ignore' });
    console.log('Web server already running');
  } catch (error) {
    console.log('Starting web server...');
    const { spawn } = require('child_process');
    serverProcess = spawn('npx', ['http-server', 'app', '-p', '3000'], {
      stdio: 'inherit',
      shell: true,
      detached: false
    });
    
    // Wait for server to be ready
    let attempts = 0;
    const maxAttempts = 30;
    while (attempts < maxAttempts) {
      try {
        execSync('curl -f http://localhost:3000 > /dev/null 2>&1', { stdio: 'ignore' });
        console.log('Web server is ready');
        break;
      } catch (e) {
        attempts++;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
});

Before(async function() {
  // Initialize browser before each scenario
  const browserName = process.env.BROWSER || 'chromium';
  await this.initBrowser(browserName);
  this.resetStepHandlers();
  if (this.page) {
    MervPlaywright.setAutomationToolObject(AutomationTool.PLAYWRIGHT, this.page);
  }
});

AfterStep(async function({ testStepId, result }) {
  await captureCucumberStepScreenshot(this.page, { testStepId, result }, { screenshotEnabled });
});

After(async function(scenario) {
  // Take screenshot on failure
  if (scenario.result && scenario.result.status === 'FAILED') {
    const screenshotName = scenario.pickle.name.replace(/\s+/g, '-').toLowerCase();
    await this.takeScreenshot(`failed-${screenshotName}`);
  }

  MervPlaywright.clear();

  // Close browser after each scenario
  await this.closeBrowser();
});

AfterAll(async function() {
  // Cleanup if we started the server
  if (serverProcess) {
    try {
      serverProcess.kill();
    } catch (e) {
      // Ignore errors
    }
  }
});
