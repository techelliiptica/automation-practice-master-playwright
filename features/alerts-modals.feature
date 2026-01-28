@alerts-modals
Feature: Alerts & Modals
  As a user
  I want to handle alerts and modals
  So that I can practice alert and modal automation scenarios

  Background:
    Given I navigate to "alerts-modals"

  Scenario: Handle alert dialog
    When I click on the "Show Alert" button
    Then I should handle the alert dialog

  Scenario: Handle confirm dialog - accept
    When I click on the "Show Confirm" button
    Then I should accept the confirm dialog

  Scenario: Handle confirm dialog - dismiss
    When I click on the "Show Confirm" button
    Then I should dismiss the confirm dialog

  Scenario: Handle prompt dialog
    When I click on the "Show Prompt" button
    And I enter "Test input" in the prompt
    Then I should accept the prompt dialog

  Scenario: Open and close modal
    When I click on the "Open Simple Modal" button
    Then I should see the modal
    When I click on the close button
    Then I should not see the modal
