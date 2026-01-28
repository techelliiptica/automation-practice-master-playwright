import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { execSync, spawn, ChildProcess } from 'child_process';
import { CustomWorld } from './world';

let serverProcess: ChildProcess | null = null;

BeforeAll(async function() {
  // Start web server if not already running
  try {
    execSync('curl -f http://localhost:3000 > /dev/null 2>&1', { stdio: 'ignore' });
    console.log('Web server already running');
  } catch (error) {
    console.log('Starting web server...');
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

Before(async function(this: CustomWorld) {
  // Initialize browser before each scenario
  const browserName = process.env.BROWSER || 'chromium';
  await this.initBrowser(browserName);
});

After(async function(this: CustomWorld, scenario: any) {
  // Take screenshot on failure
  if (scenario.result && scenario.result.status === 'FAILED') {
    const screenshotName = scenario.pickle.name.replace(/\s+/g, '-').toLowerCase();
    await this.takeScreenshot(`failed-${screenshotName}`);
  }

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
