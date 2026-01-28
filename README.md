# Automation Practice - Playwright Framework

A comprehensive Playwright automation framework for testing the Automation Practice web application.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🏃 Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in headed mode (with browser UI):
```bash
npm run test:headed
```

### Run tests with UI mode:
```bash
npm run test:ui
```

### Run specific test suite:
```bash
npm run test:form-submission
npm run test:button-interactions
npm run test:super-assignment
# ... etc
```

### Run tests in debug mode:
```bash
npm run test:debug
```

### View test report:
```bash
npm run test:report
```

## 📁 Project Structure

```
.
├── app/                    # HTML application files
├── pages/                  # Page Object Models
│   ├── home-page.ts
│   ├── form-submission-page.ts
│   ├── button-interactions-page.ts
│   ├── super-assignment-page.ts
│   └── ... (other page objects)
├── tests/                  # Test files
│   ├── home.spec.ts
│   ├── form-submission.spec.ts
│   ├── button-interactions.spec.ts
│   ├── super-assignment.spec.ts
│   └── ... (other test files)
├── utils/                  # Utility functions
│   └── base-page.ts
├── test-data/              # Test data files
│   └── sample-resume.pdf
├── playwright.config.ts    # Playwright configuration
└── package.json
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

The framework uses `playwright.config.ts` for configuration. Key settings:

- **Base URL**: `http://localhost:3000`
- **Browsers**: Chromium, Firefox, WebKit
- **Retries**: 2 retries on CI, 0 locally
- **Screenshots**: On failure only
- **Videos**: Retained on failure
- **Web Server**: Automatically starts HTTP server for the app

## 📝 Writing New Tests

1. Create a Page Object Model in `pages/` directory:
```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class MyPage extends BasePage {
  readonly myElement: Locator;

  constructor(page: Page) {
    super(page);
    this.myElement = page.locator('#myElement');
  }

  async doSomething() {
    await this.myElement.click();
  }
}
```

2. Create test file in `tests/` directory:
```typescript
import { test, expect } from '@playwright/test';
import { MyPage } from '../pages/my-page';

test.describe('My Feature', () => {
  test('should do something', async ({ page }) => {
    const myPage = new MyPage(page);
    await myPage.navigateTo('/my-page.html');
    await myPage.doSomething();
    await expect(myPage.myElement).toBeVisible();
  });
});
```

## 🐛 Debugging

- Use `npm run test:debug` to run tests in debug mode
- Use `npm run test:ui` for interactive UI mode
- Check `test-results/` for screenshots and videos
- View HTML report with `npm run test:report`

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npm run test:report
```

This opens an interactive HTML report showing:
- Test results
- Screenshots on failure
- Videos on failure
- Execution timeline

## 🤝 Contributing

1. Follow the existing Page Object Model pattern
2. Write descriptive test names
3. Use proper waits instead of hard-coded timeouts
4. Add appropriate assertions
5. Keep tests independent and isolated

## 📄 License

ISC
