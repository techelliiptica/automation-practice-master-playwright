# Automation Practice - Playwright BDD Framework

A comprehensive **JavaScript-based BDD (Behavior-Driven Development)** Playwright automation framework for testing the Automation Practice web application. This framework uses **Cucumber** with **Gherkin syntax** to write human-readable, executable specifications, combined with Page Object Model pattern for maintainable test code.

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
- **BDD Framework**: Cucumber.js
- **Syntax**: Gherkin (Given/When/Then)
- **Module System**: CommonJS (require/module.exports)
- **Package Manager**: npm
- **Design Pattern**: Page Object Model (POM) + BDD

## ✨ Framework Features

- ✅ **BDD Approach** - Gherkin syntax for human-readable test scenarios
- ✅ **JavaScript-based** - Pure JavaScript, no TypeScript compilation needed
- ✅ **Page Object Model** - Clean, maintainable test structure
- ✅ **Cucumber Integration** - Full Cucumber.js support with step definitions
- ✅ **Multi-browser Support** - Chromium, Firefox, WebKit
- ✅ **Comprehensive Coverage** - 15+ feature files covering all scenarios
- ✅ **Auto Web Server** - Automatically starts local server
- ✅ **Rich Reporting** - HTML reports with screenshots and videos
- ✅ **Debug Tools** - Built-in debugging capabilities
- ✅ **CI/CD Ready** - Configured for continuous integration
- ✅ **Reusable Steps** - Shared step definitions across features

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

After installation, run your first BDD test:
```bash
npm run test:home
```

This runs the home page feature file to verify everything is set up correctly.

### Understanding BDD Structure

- **Feature Files** (`.feature`) - Written in Gherkin syntax, describe what to test
- **Step Definitions** (`.js`) - Implement the steps defined in feature files
- **Page Objects** - Encapsulate page interactions (reused by step definitions)
- **Hooks** - Setup and teardown logic (Before/After)

## 🏃 Running Tests

### Run all BDD tests:
```bash
npm test
```
Runs all feature files (`*.feature`) using Cucumber.js.

### Run tests in headed mode (with browser UI):
```bash
npm run test:headed
```
Opens browser windows so you can see tests executing.

### Run tests in debug mode:
```bash
npm run test:debug
```
Runs tests with progress bar output for debugging.

### Run specific feature:
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
npm run test:home
```

### Run tests on specific browser:
```bash
BROWSER=chromium npm test
BROWSER=firefox npm test
BROWSER=webkit npm test
```

### Run specific scenario by tag:
```bash
npx cucumber-js --tags "@form-submission"
```

### View test report:
```bash
npm run test:report
```
Generates and opens the HTML Cucumber report in your browser.

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
├── features/                     # BDD Feature Files (Gherkin)
│   ├── home.feature
│   ├── form-submission.feature
│   ├── button-interactions.feature
│   ├── super-assignment.feature
│   ├── dropdown-select.feature
│   ├── checkbox-radio.feature
│   ├── link-interactions.feature
│   ├── image-interactions.feature
│   ├── dynamic-content.feature
│   ├── alerts-modals.feature
│   ├── table-data.feature
│   ├── file-upload.feature
│   ├── hover-tooltip.feature
│   ├── drag-drop.feature
│   ├── iframe.feature
│   ├── date-picker.feature
│   └── step-definitions/         # Step Definitions (JavaScript)
│       ├── common-steps.js
│       ├── form-submission-steps.js
│       ├── button-interactions-steps.js
│       ├── super-assignment-steps.js
│       └── ... (other step definitions)
│   └── support/                  # Support files
│       ├── world.js              # Custom World for Cucumber
│       └── hooks.js              # Before/After hooks
│
├── pages/                        # Page Object Models (JavaScript)
│   ├── home-page.js
│   ├── form-submission-page.js
│   ├── button-interactions-page.js
│   ├── super-assignment-page.js
│   └── ... (all page objects)
│
├── utils/                        # Utility functions
│   └── base-page.js             # Base page class
│
├── test-data/                    # Test data files
│   └── sample-resume.pdf        # Sample file for upload tests
│
├── reports/                      # Test reports
│   ├── cucumber-report.html     # HTML report
│   └── cucumber-report.json     # JSON report
│
├── screenshots/                  # Screenshots on failure
│
├── cucumber.config.js            # Cucumber configuration
├── generate-report.js            # Report generator script
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

### Cucumber Configuration

The framework uses `cucumber.config.js` for BDD configuration. Key settings:

- **Step Definitions**: `features/step-definitions/**/*.js`
- **Support Files**: `features/support/**/*.js`
- **Reports**: HTML and JSON reports in `reports/` directory
- **Default Timeout**: 60 seconds per step

### Custom World

The framework uses a custom Cucumber World (`features/support/world.js`) that:
- Initializes Playwright browser instances
- Provides page object access
- Handles screenshots on failure
- Manages browser lifecycle

### Hooks

Global hooks (`features/support/hooks.js`) handle:
- **BeforeAll**: Starts web server automatically
- **Before**: Initializes browser for each scenario
- **After**: Takes screenshots on failure and closes browser
- **AfterAll**: Cleans up web server

### Customizing Configuration

Edit `cucumber.config.js` to modify:
- Step definition paths
- Report formats
- Timeout settings
- Formatter options

## 📝 Writing BDD Tests

### BDD Approach

This framework uses **Behavior-Driven Development (BDD)** with **Gherkin syntax**. Tests are written in plain English using Given/When/Then format, making them readable by both technical and non-technical stakeholders.

### Step 1: Create a Feature File

Create a new feature file in `features/` directory (e.g., `features/my-feature.feature`):

```gherkin
Feature: My Feature
  As a user
  I want to perform some action
  So that I can achieve a goal

  Background:
    Given I navigate to "my-page"

  Scenario: Perform action successfully
    When I click on the "Submit" button
    Then I should see "Success message"

  Scenario: Handle error case
    When I click on the "Submit" button without filling form
    Then I should see "Error message"
```

### Step 2: Create Step Definitions

Create step definitions in `features/step-definitions/` (e.g., `features/step-definitions/my-feature-steps.js`):

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { MyPage } = require('../../../pages/my-page');

let myPage;

Given('I navigate to {string}', async function(pageName) {
  await this.page.goto(`/${pageName}.html`, { waitUntil: 'domcontentloaded' });
  myPage = new MyPage(this.page);
});

When('I click on the {string} button', async function(buttonText) {
  await myPage.submitButton.click();
});

Then('I should see {string}', async function(expectedText) {
  await expect(this.page.locator(`text=${expectedText}`)).toBeVisible();
});
```

### Step 3: Create Page Object (if needed)

Create or use existing page objects in `pages/` directory:

```javascript
const { BasePage } = require('../utils/base-page');

class MyPage extends BasePage {
  constructor(page) {
    super(page);
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success-message');
  }
}

module.exports = { MyPage };
```

### BDD Best Practices

- **Write scenarios in plain English** - Use business language
- **Use Given/When/Then structure** - Given (setup), When (action), Then (verification)
- **Keep scenarios focused** - One scenario tests one behavior
- **Reuse step definitions** - Create reusable steps in `common-steps.js`
- **Use data tables** - For complex data input
- **Use tags** - Organize scenarios with `@tag-name`
- **Keep steps atomic** - Each step should do one thing

## 🐛 Debugging

### Debug Mode
```bash
npm run test:debug
```
Runs tests with progress bar for step-by-step debugging.

### Debugging Tips

1. **Use `page.pause()`** in step definitions to pause execution:
   ```javascript
   await this.page.pause(); // Opens Playwright Inspector
   ```

2. **Check test results**:
   - Screenshots: `screenshots/` directory (auto-captured on failure)
   - HTML Report: `reports/cucumber-report.html`
   - JSON Report: `reports/cucumber-report.json`

3. **View HTML report**:
   ```bash
   npm run test:report
   ```

4. **Run specific feature**:
   ```bash
   npx cucumber-js features/my-feature.feature
   ```

5. **Run specific scenario**:
   ```bash
   npx cucumber-js features/my-feature.feature:10
   ```

6. **Run scenarios by tag**:
   ```bash
   npx cucumber-js --tags "@smoke"
   ```

7. **Console logging**: Use `console.log()` in step definitions for debugging

8. **Dry run** (check step definitions without executing):
   ```bash
   npx cucumber-js --dry-run
   ```

## 📊 Test Reports

### Cucumber HTML Report

After running tests, generate and view the HTML report:
```bash
npm run test:report
```

This generates an interactive HTML report showing:
- **Feature results** - Pass/fail status for each feature
- **Scenario results** - Detailed scenario execution
- **Step results** - Individual step pass/fail status
- **Screenshots** - Automatically attached on failure
- **Execution summary** - Overall test statistics
- **Metadata** - Browser, platform, execution time

### Report Location

Reports are generated in:
- **HTML Report**: `reports/cucumber-report.html`
- **JSON Report**: `reports/cucumber-report.json`
- **Screenshots**: `screenshots/` directory (on failure)

### Report Features

- **Bootstrap theme** - Modern, responsive design
- **Scenario timestamps** - Track execution time
- **Screenshot attachments** - Visual debugging
- **Metadata display** - Environment and browser info

## 🤝 Contributing

When contributing to this BDD framework:

1. **Follow BDD principles** - Write scenarios in Gherkin (Given/When/Then)
2. **Use plain English** - Scenarios should be readable by non-technical stakeholders
3. **Follow Page Object Model** - All page objects extend `BasePage`
4. **Use JavaScript (CommonJS)** - Use `require`/`module.exports` syntax
5. **Reuse step definitions** - Create reusable steps in `common-steps.js`
6. **Keep scenarios focused** - One scenario tests one behavior
7. **Use data tables** - For complex data input in scenarios
8. **Use tags** - Organize scenarios with `@tag-name` for filtering
9. **Use proper waits** - Avoid hard-coded timeouts, use Playwright's built-in waits
10. **Add appropriate assertions** - Use Playwright's `expect` API in step definitions
11. **Keep tests independent** - Each scenario should be isolated
12. **Follow naming conventions** - Use camelCase for variables and methods
13. **Add comments** - Document complex logic in step definitions

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
