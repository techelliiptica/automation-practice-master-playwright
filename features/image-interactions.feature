@image-interactions
Feature: Image Interactions
  As a user
  I want to verify image attributes and handle broken images
  So that I can practice image automation scenarios

  Background:
    Given I navigate to "image-interactions"

  Scenario: Verify image alt text
    When I check the alt text of "Image 1"
    Then the alt text should contain "TechElliptica"

  Scenario: Verify image source
    When I check the source of "Image 1"
    Then the image source should contain "techelliptica.com"

  Scenario: Identify broken images
    When I check if "Image 3" is broken
    Then "Image 3" should be a broken image
    When I check if "Image 5" is broken
    Then "Image 5" should be a broken image
    When I check if "Image 6" is broken
    Then "Image 6" should be a broken image

  Scenario: Extract image information
    When I click on the "Get Image 1 Info" button
    Then I should see image information displayed

  Scenario: Add dynamic image
    When I click on the "Add Dynamic Image" button
    Then I should see "Dynamic Image 1"
