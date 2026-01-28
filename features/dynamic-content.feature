@dynamic-content
Feature: Dynamic Content
  As a user
  I want to interact with dynamically loaded content
  So that I can practice dynamic content automation scenarios

  Background:
    Given I navigate to "dynamic-content"

  Scenario: Add dynamic element
    When I click on the "Add Item" button
    Then I should see a new list item

  Scenario: Remove dynamic element
    When I click on the "Add Item" button
    And I wait for "1" second
    When I click on the "Clear All" button
    Then I should not see any list items

  Scenario: Wait for delayed content
    When I click on the "Load Content (3 second delay)" button
    And I wait for "4" seconds
    Then I should see content loaded after delay
