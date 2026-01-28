@drag-drop
Feature: Drag & Drop
  As a user
  I want to drag and drop elements
  So that I can practice drag and drop automation scenarios

  Background:
    Given I navigate to "drag-drop"

  Scenario: Drag element to drop zone
    When I drag "Item 1" to the target container
    Then "Item 1" should be in the target container

  Scenario: Drag between containers
    When I drag "Item 2" to the target container
    Then "Item 2" should be in the target container
