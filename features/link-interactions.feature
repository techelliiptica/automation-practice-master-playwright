@link-interactions
Feature: Link Interactions
  As a user
  I want to interact with links
  So that I can practice link automation scenarios

  Background:
    Given I navigate to "link-interactions"

  Scenario: Click basic link
    When I click on the "Link to Home Page" link
    Then I should be on the "index" page

  Scenario: Open link in new tab
    When I click on the link that opens in a new tab
    Then a new tab should be opened
    And I should close the new tab

  Scenario: Add dynamic link
    When I click on the "Add Dynamic Link" button
    Then I should see a dynamic link

  Scenario: Identify broken links
    When I click on "Link 3"
    Then I should see a broken link message
    When I click on "Link 5"
    Then I should see a broken link message
    When I click on "Link 6"
    Then I should see a broken link message
