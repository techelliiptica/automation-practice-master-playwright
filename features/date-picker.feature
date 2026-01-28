@date-picker
Feature: Date Picker
  As a user
  I want to select dates using date picker
  So that I can practice date picker automation scenarios

  Background:
    Given I navigate to "date-picker"

  Scenario: Select date using input
    When I select date "2024-06-15"
    Then the date input should contain "2024-06-15"

  Scenario: Open date picker calendar
    When I click on the date input
    Then the date input should be visible

  Scenario: Select today date
    When I select today's date
    Then the date input should contain today's date
