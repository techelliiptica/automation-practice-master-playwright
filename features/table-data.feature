@table-data
Feature: Table Data
  As a user
  I want to extract and manipulate table data
  So that I can practice table automation scenarios

  Background:
    Given I navigate to "table-data"

  Scenario: Extract table data
    Then I should see table rows
    And I should be able to read cell data

  Scenario: Sort table
    When I click on the sort button
    Then the table should be sorted

  Scenario: Filter table
    When I enter "test" in the filter input
    Then the table should be filtered
