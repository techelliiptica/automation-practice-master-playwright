@checkbox-radio
Feature: Checkbox & Radio
  As a user
  I want to interact with checkboxes and radio buttons
  So that I can practice checkbox and radio automation scenarios

  Background:
    Given I navigate to "checkbox-radio"

  Scenario: Check and uncheck checkboxes
    When I check the "Option 1" checkbox
    Then the "Option 1" checkbox should be checked
    When I uncheck the "Option 1" checkbox
    Then the "Option 1" checkbox should be unchecked

  Scenario: Select radio option
    When I select the "Choice 1" radio button
    Then the "Choice 1" radio button should be selected
    When I select the "Choice 2" radio button
    Then the "Choice 1" radio button should not be selected
    And the "Choice 2" radio button should be selected
