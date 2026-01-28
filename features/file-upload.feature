@file-upload
Feature: File Upload
  As a user
  I want to upload files
  So that I can practice file upload automation scenarios

  Background:
    Given I navigate to "file-upload"

  Scenario: Upload single file
    When I select a file to upload
    And I click on the "Upload File" button
    Then I should see upload success message

  Scenario: Upload multiple files
    When I select multiple files to upload
    And I click on the "Upload All Files" button
    Then I should see upload success message
