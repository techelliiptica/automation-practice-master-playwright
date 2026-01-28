@dropdown-select
Feature: Dropdown & Select
  As a user
  I want to select options from dropdowns
  So that I can practice dropdown automation scenarios

  Background:
    Given I navigate to "dropdown-select"

  Scenario: Select option from single select dropdown
    When I select "United States" from the country dropdown
    Then the selected country should be "usa"

  Scenario: Select multiple options from multi-select dropdown
    When I select "JavaScript" and "Python" from the languages dropdown
    Then I should see the selected languages displayed
