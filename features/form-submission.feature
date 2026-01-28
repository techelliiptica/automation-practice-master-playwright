@form-submission
Feature: Form Submission
  As a user
  I want to fill and submit forms
  So that I can practice form automation scenarios

  Background:
    Given I navigate to "form-submission"

  Scenario: Fill and submit form successfully
    When I fill in "Full Name" with "John Doe"
    And I fill in "Email Address" with "john@example.com"
    And I fill in "Password" with "password123"
    And I fill in "Bio / About Me" with "Test message"
    And I click on the "Submit Form" button
    Then I should see "John Doe" in the form result
    And I should see "john@example.com" in the form result

  Scenario: Validate required fields
    When I click on the "Submit Form" button
    Then the "Full Name" field should be required
    And the "Email Address" field should be required
    And the "Password" field should be required
