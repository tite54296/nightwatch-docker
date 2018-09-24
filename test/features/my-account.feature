@myaccount

Feature: My account landing page
  As a Telus wireline user that has a registered account
  I want to be able to access My Account page
  To check my account status and billing information

  Background: Registering account
    Given I have accessed the environment
    And I have registered my account

  Scenario: Accessing change password page
    Given I access My account page
    When I click on "Change password"
    Then I should be taken to "Change password" page

  Scenario Outline: Showing typed password
    Given I am on "Change password" page
    And I have entered a valid <field>
    When I click on "show <field>"
    Then <field> should not show encoded
    Scenarios:
      |field           |
      |current password|
      |new password    |

  Scenario Outline: Hidden typed password
    Given I am on "Change password" page
    And I have entered a valid <field>
    And my <field> is being shown
    When I click on "hide <field>"
    Then <field> should be shown as dots
    Scenarios:
      |field           |
      |current password|
      |new password    |
