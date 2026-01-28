@button-interactions
Feature: Button Interactions
  As a user
  I want to interact with different types of buttons
  So that I can practice button automation scenarios

  Background:
    Given I navigate to "button-interactions"

  Scenario: Click primary button
    When I click on the "Primary Button" button
    Then I should see "Primary button clicked" in the message

  Scenario: Increment click counter
    Given the click count is "0"
    When I click on the "Click Me!" button
    Then the click count should be "1"

  Scenario: Handle disabled button
    Then the "Disabled Button" button should be disabled
    When I click on the "Enable/Disable Button" button
    Then the "Disabled Button" button should be enabled

  Scenario: Add and remove dynamic buttons
    When I click on the "Add New Button" button
    Then I should see "Dynamic Button 1"
    When I click on the "Remove Last Button" button
    Then I should not see "Dynamic Button 1"

  Scenario: Handle double click
    When I double click on the "Double Click Me!" button
    Then I should see "Double click" in the message

  Scenario: Handle right click and context menu
    When I right click on the "Right Click Me!" button
    Then I should see the context menu
    When I select "Edit" from the context menu
    Then I should see "edit" in the message

  Scenario: Handle delayed button response
    When I click on the "Click Me (3s delay)" button
    And I wait for "3" seconds
    Then I should see "complete" in the delay message
