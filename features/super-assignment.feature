@super-assignment
Feature: Super Assignment - Job Registration Form
  As a job applicant
  I want to fill out a comprehensive job registration form
  So that I can practice complex form automation scenarios

  Background:
    Given I navigate to "super-assignment"

  Scenario: Fill complete job registration form and submit
    When I fill in personal information:
      | Field       | Value                |
      | First Name  | John                 |
      | Last Name   | Doe                  |
      | Email       | john.doe@example.com |
      | Phone       | +1-234-567-8900      |
    And I select "Software Engineer" as position
    And I select "Mid Level (3-5 years)" as experience level
    And I select "Remote" as location
    And I select "United States" as country
    And I select "2024-06-01" as available start date
    And I select "Full Time" as employment type
    And I select "Remote" as work preference
    And I select the following skills:
      | Java        |
      | Python      |
      | JavaScript  |
    And I select the following languages:
      | English     |
      | Spanish     |
    And I fill in cover letter with "I am interested in this position..."
    And I upload a resume file
    And I accept the terms and conditions
    Then the progress bar should show "100%"
    When I submit the form
    Then I should see the loader
    And I should see my submission in the table

  Scenario: Update progress bar as form is filled
    When I fill in personal information:
      | Field       | Value                |
      | First Name  | Jane                 |
      | Last Name   | Smith                |
      | Email       | jane@example.com     |
      | Phone       | +1-234-567-8901      |
    Then the progress bar should be greater than "0%"

  Scenario: Validate required fields
    When I click on the submit button
    Then I should see validation errors for required fields

  Scenario: Download uploaded file
    When I upload a resume file
    Then I should see the download button
    When I click on the download button
    Then the file should be downloaded

  Scenario: Display loader during submission
    When I fill all required fields
    And I submit the form
    Then I should see the loader overlay
