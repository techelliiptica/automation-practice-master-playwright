@hover-tooltip
Feature: Hover & Tooltip
  As a user
  I want to interact with hover elements and tooltips
  So that I can practice hover and tooltip automation scenarios

  Background:
    Given I navigate to "hover-tooltip"

  Scenario: Show tooltip on hover
    When I hover over the hover element
    Then I should see the tooltip
    And the tooltip should contain text
