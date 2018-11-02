Feature: Home Page
As a user of the Home page
I should see a greeting message

  @SmokeTest
  Scenario: View greeting on home page
    Given I am on the Home page
    Then I should see a welcome greeting

  @SmokeTest
    Scenario: Enter in name on home page
    Given I am on the Home page
    When I enter in my name "Elias"
    And I click the submit button
    Then The welcome greeting will show my name "Elias"