@home
Feature: Home Page Navigation
  As a user
  I want to navigate through the automation practice scenarios
  So that I can access different practice pages

  Background:
    Given I am on the home page

  Scenario: View all scenario cards on home page
    Then I should see "Automation Practice Hub"
    And I should see "Form Submission"
    And I should see "Button Interactions"
    And I should see "Dropdown & Select"
    And I should see "Checkbox & Radio"
    And I should see "Dynamic Content"
    And I should see "Alerts & Modals"
    And I should see "Table Data"
    And I should see "File Upload"
    And I should see "Hover & Tooltip"
    And I should see "Drag & Drop"
    And I should see "Iframe Handling"
    And I should see "Date Picker"
    And I should see "Link Interactions"
    And I should see "Image Interactions"
    And I should see "Super Assignment"

  Scenario: Navigate to form submission page
    When I click on the "Form Submission" link
    Then I should be on the "form-submission" page

  Scenario: Navigate to button interactions page
    When I click on the "Button Interactions" link
    Then I should be on the "button-interactions" page
