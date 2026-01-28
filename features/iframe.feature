@iframe
Feature: Iframe Handling
  As a user
  I want to interact with iframes
  So that I can practice iframe automation scenarios

  Background:
    Given I navigate to "iframe"

  Scenario: Interact with iframe content
    Then I should see the iframe content
    When I click on a button inside the iframe
    Then the action should be completed

  Scenario: Handle nested iframe
    When I wait for the parent iframe to load
    Then I should be able to access nested iframe content
