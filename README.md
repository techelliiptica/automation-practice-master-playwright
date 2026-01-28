# Automation Practice - Playwright Framework

A comprehensive **JavaScript-based** Playwright automation framework for testing the Automation Practice web application. This framework provides a complete test automation solution with Page Object Model pattern, covering all major web automation scenarios.

## 👨‍💻 Developed By

**TechElliptica**

This project is developed and maintained by [TechElliptica](https://www.techelliptica.com).

---

## ⚖️ Terms and Conditions

### Intellectual Property

This project, including all source code, documentation, test cases, and related materials, is the **exclusive property of TechElliptica**. All rights are reserved.

### Usage Restrictions

1. **Educational and Learning Purposes**: This project may be used for educational and learning purposes only.

2. **Commercial Use Prohibited**: 
   - **NO ONE** may copy, modify, distribute, or use this project for any **monetary or commercial purposes** without explicit written permission from TechElliptica.
   - This includes but is not limited to:
     - Selling or licensing the project
     - Using it in commercial training programs
     - Incorporating it into paid services or products
     - Using it to generate revenue in any form

3. **Permission Required**: 
   - Any commercial use, distribution, or modification requires prior written consent from TechElliptica.
   - To request permission, please contact TechElliptica through [www.techelliptica.com](https://www.techelliptica.com/about)

4. **Attribution**: 
   - When using this project for educational purposes, proper attribution to TechElliptica must be maintained.

### Violations

Unauthorized commercial use or distribution of this project may result in legal action. TechElliptica reserves the right to pursue all available legal remedies.

---

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **JavaScript** knowledge (ES6+)

## 🛠️ Technology Stack

- **Language**: JavaScript (ES6+)
- **Testing Framework**: Playwright
- **Module System**: CommonJS (require/module.exports)
- **Package Manager**: npm
- **Design Pattern**: Page Object Model (POM)

## ✨ Framework Features

- ✅ **JavaScript-based** - Pure JavaScript, no TypeScript compilation needed
- ✅ **Page Object Model** - Clean, maintainable test structure
- ✅ **Multi-browser Support** - Chromium, Firefox, WebKit
- ✅ **Comprehensive Coverage** - 15+ test scenarios
- ✅ **Auto Web Server** - Automatically starts local server
- ✅ **Rich Reporting** - HTML reports with screenshots and videos
- ✅ **Debug Tools** - Built-in debugging and UI mode
- ✅ **CI/CD Ready** - Configured for continuous integration

## 🚀 Setup

### Installation Steps

1. **Clone or download the project**

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```
   This installs Playwright and other required packages.

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```
   Downloads Chromium, Firefox, and WebKit browsers.

4. **Verify installation:**
   ```bash
   npx playwright --version
   ```

### Quick Start

After installation, run your first test:
```bash
npm run test:home
```

This runs the home page tests to verify everything is set up correctly.

## 🏃 Running Tests

### Run all tests:
```bash
npm test
```
Runs all test files (`*.spec.js`) in the `tests/` directory across all browsers.

### Run tests in headed mode (with browser UI):
```bash
npm run test:headed
```
Opens browser windows so you can see tests executing.

### Run tests with UI mode:
```bash
npm run test:ui
```
Interactive UI mode with watch mode - great for development.

### Run specific test suite:
```bash
npm run test:form-submission
npm run test:button-interactions
npm run test:dropdown-select
npm run test:checkbox-radio
npm run test:dynamic-content
npm run test:alerts-modals
npm run test:table-data
npm run test:file-upload
npm run test:hover-tooltip
npm run test:drag-drop
npm run test:iframe
npm run test:date-picker
npm run test:link-interactions
npm run test:image-interactions
npm run test:super-assignment
```

### Run tests in debug mode:
```bash
npm run test:debug
```
Opens Playwright Inspector for step-by-step debugging.

### Run tests on specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View test report:
```bash
npm run test:report
```
Opens the HTML test report in your browser.

## 📁 Project Structure

```
automation-practice/
├── app/                          # HTML application files
│   ├── index.html               # Main landing page
│   ├── form-submission.html     # Form scenarios
│   ├── button-interactions.html # Button scenarios
│   ├── super-assignment.html    # Comprehensive form
│   └── ... (15+ HTML pages)
│
├── pages/                        # Page Object Models (JavaScript)
│   ├── home-page.js
│   ├── form-submission-page.js
│   ├── button-interactions-page.js
│   ├── super-assignment-page.js
│   ├── dropdown-select-page.js
│   ├── checkbox-radio-page.js
│   ├── link-interactions-page.js
│   ├── image-interactions-page.js
│   ├── dynamic-content-page.js
│   ├── alerts-modals-page.js
│   ├── table-data-page.js
│   ├── file-upload-page.js
│   ├── hover-tooltip-page.js
│   ├── drag-drop-page.js
│   ├── iframe-page.js
│   ├── date-picker-page.js
│   └── index.js                 # Page exports
│
├── tests/                        # Test files (JavaScript)
│   ├── home.spec.js
│   ├── form-submission.spec.js
│   ├── button-interactions.spec.js
│   ├── super-assignment.spec.js
│   └── ... (15+ test files)
│
├── utils/                        # Utility functions
│   └── base-page.js             # Base page class
│
├── test-data/                    # Test data files
│   └── sample-resume.pdf        # Sample file for upload tests
│
├── playwright.config.js          # Playwright configuration (JavaScript)
├── package.json                  # Node.js dependencies and scripts
└── README.md                     # This file
```

## 🧪 Test Scenarios Covered

### ✅ Form Submission
- Fill and submit forms
- Validate required fields
- Handle various input types

### ✅ Button Interactions
- Click different button types
- Handle disabled buttons
- Dynamic button creation/removal
- Double click handling
- Right-click context menus
- Delayed button responses

### ✅ Dropdown & Select
- Single select dropdowns
- Multi-select dropdowns

### ✅ Checkbox & Radio
- Check/uncheck checkboxes
- Select radio options
- Verify checkbox/radio states

### ✅ Dynamic Content
- Wait for dynamically loaded content
- Add/remove dynamic elements
- Handle delayed content

### ✅ Alerts & Modals
- Handle JavaScript alerts
- Handle confirm dialogs
- Handle prompt dialogs
- Open/close custom modals

### ✅ Table Data
- Extract table data
- Sort tables
- Filter table rows
- Pagination

### ✅ File Upload
- Single file upload
- Multiple file upload
- Verify upload success

### ✅ Hover & Tooltip
- Hover over elements
- Verify tooltip appearance
- Extract tooltip text

### ✅ Drag & Drop
- Drag elements to drop zones
- Drag between containers

### ✅ Iframe Handling
- Switch to iframes
- Interact with iframe content
- Handle nested iframes

### ✅ Date Picker
- Select dates using input
- Open calendar picker
- Select today's date

### ✅ Link Interactions
- Click basic links
- Handle links opening in new tabs
- Add dynamic links
- Identify broken links

### ✅ Image Interactions
- Verify image alt text
- Check image sources
- Identify broken images
- Extract image information
- Add dynamic images

### ✅ Super Assignment
- Complete job registration form
- Fill all form components
- Upload resume with download feature
- Verify progress bar
- Handle form submission with loader
- Verify data in submissions table

## 🔧 Configuration

The framework uses `playwright.config.js` (JavaScript) for configuration. Key settings:

- **Base URL**: `http://localhost:3000`
- **Browsers**: Chromium, Firefox, WebKit
- **Retries**: 2 retries on CI, 0 locally
- **Screenshots**: On failure only
- **Videos**: Retained on failure
- **Web Server**: Automatically starts HTTP server for the app
- **Test Directory**: `./tests` (all `.spec.js` files)
- **Module System**: CommonJS

### Customizing Configuration

Edit `playwright.config.js` to modify:
- Browser configurations
- Test timeouts
- Reporter settings
- Environment variables
- Parallel execution settings

## 📝 Writing New Tests

### Step 1: Create a Page Object Model

Create a new file in `pages/` directory (e.g., `pages/my-page.js`):

```javascript
const { BasePage } = require('../utils/base-page');

class MyPage extends BasePage {
  constructor(page) {
    super(page);
    // Define locators as instance properties
    this.myElement = page.locator('#myElement');
    this.submitButton = page.locator('button[type="submit"]');
  }

  // Add page-specific methods
  async doSomething() {
    await this.myElement.click();
  }

  async fillForm(data) {
    await this.myElement.fill(data);
  }
}

module.exports = { MyPage };
```

### Step 2: Create Test File

Create a new test file in `tests/` directory (e.g., `tests/my-feature.spec.js`):

```javascript
const { test, expect } = require('@playwright/test');
const { MyPage } = require('../pages/my-page');

test.describe('My Feature', () => {
  test.beforeEach(async ({ page }) => {
    const myPage = new MyPage(page);
    await myPage.navigateTo('/my-page.html');
  });

  test('should do something', async ({ page }) => {
    const myPage = new MyPage(page);
    await myPage.doSomething();
    await expect(myPage.myElement).toBeVisible();
  });

  test('should handle form submission', async ({ page }) => {
    const myPage = new MyPage(page);
    await myPage.fillForm('Test Data');
    await myPage.submitButton.click();
    // Add assertions
  });
});
```

### Best Practices

- **Use async/await** for all asynchronous operations
- **Extend BasePage** for common functionality
- **Use descriptive method names** that explain what they do
- **Keep page objects focused** - one page object per page/component
- **Use locators** instead of direct selectors when possible

## 🐛 Debugging

### Debug Mode
```bash
npm run test:debug
```
Opens Playwright Inspector to step through tests line by line.

### UI Mode
```bash
npm run test:ui
```
Interactive UI mode with watch mode - tests run automatically on file changes.

### Debugging Tips

1. **Use `page.pause()`** in your test code to pause execution:
   ```javascript
   await page.pause(); // Opens Playwright Inspector
   ```

2. **Check test results**:
   - Screenshots: `test-results/` directory
   - Videos: `test-results/` directory (on failure)
   - Traces: Available when trace is enabled

3. **View HTML report**:
   ```bash
   npm run test:report
   ```

4. **Run specific test**:
   ```bash
   npx playwright test tests/my-test.spec.js --debug
   ```

5. **Console logging**: Use `console.log()` in your JavaScript code for debugging

## 📊 Test Reports

### HTML Report

After running tests, view the HTML report:
```bash
npm run test:report
```

This opens an interactive HTML report showing:
- **Test results** - Pass/fail status for each test
- **Screenshots** - Captured on test failure
- **Videos** - Recorded for failed tests
- **Execution timeline** - Step-by-step test execution
- **Trace viewer** - Detailed trace of test execution (if enabled)

### Report Location

Reports are generated in:
- **HTML Report**: `playwright-report/` directory
- **Test Results**: `test-results/` directory
- **Screenshots**: `test-results/*/test-failed-*.png`
- **Videos**: `test-results/*/video.webm`

## 🤝 Contributing

When contributing to this framework:

1. **Follow the existing Page Object Model pattern** - All page objects extend `BasePage`
2. **Use JavaScript (CommonJS)** - Use `require`/`module.exports` syntax
3. **Write descriptive test names** - Use clear, action-oriented test descriptions
4. **Use proper waits** - Avoid hard-coded timeouts, use Playwright's built-in waits
5. **Add appropriate assertions** - Use Playwright's `expect` API
6. **Keep tests independent** - Each test should be isolated and not depend on others
7. **Follow naming conventions** - Use camelCase for variables and methods
8. **Add comments** - Document complex logic or non-obvious behavior

## 📄 License & Copyright

**Copyright © 2026 TechElliptica. All Rights Reserved.**

This project is proprietary software owned by TechElliptica. Unauthorized copying, modification, distribution, or commercial use is strictly prohibited without explicit written permission from TechElliptica.

For licensing inquiries, please contact TechElliptica at [www.techelliptica.com](https://www.techelliptica.com)

---

## 📞 Contact

For questions, support, or licensing inquiries:

- **Website**: [www.techelliptica.com](https://www.techelliptica.com)
- **Email**: Contact through [www.techelliptica.com](https://www.techelliptica.com)

---

<div align="center">

**Powered by**

<a href="https://www.techelliptica.com" target="_blank">
  <img src="https://techelliptica.com/images/logo.png" alt="TechElliptica Logo" height="40">
</a>

</div>
