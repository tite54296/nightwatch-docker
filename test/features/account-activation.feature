@account-activation
Feature: Account activation

  Background: Accessing Environment
    Given I have accessed the environment

  @test
  Scenario Outline: Getting token from query string
    Given account activation page is accessed with a "<token>"
    Then the "global error" message should be shown
    Scenarios:
    |token        |
    |invalid token|
    |expired token|

  @test1
  Scenario: Activating account with a valid account number
    Given account activation page is accessed with a "valid token"
    When I enter a valid account number
    And I click on "submit"
    Then I am taken to "STEP 2" page

  @test
  Scenario Outline: Creating profile with invalid password
    Given I have confirmed my account number
    When I enter a password that does not fulfill "<requirement>"
    Then I should see an X error icon before description "<requirement>"
    Scenarios:
    |requirement                                                                                                      |
    |Is at least 8 characters with no spaces                                                                          |
    |Has at least 1 number and 1 uppercase letter                                                                     |
    |Is not common or obvious                                                                                         |
    |Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter                           |
    |Is at least 8 characters with no spaces & Is not common or obvious                                               |
    |Has at least 1 number and 1 uppercase letter & Is not common or obvious                                          |
    |Is at least 8 characters with no spaces & Has at least 1 number and 1 uppercase letter & Is not common or obvious|

  Scenario: Showing typed password
    Given I have confirmed my account number
    And I have entered a valid password
    When I click on "Show"
    Then password should not show encoded

  Scenario: Hidden typed password
    Given I have confirmed my account number
    And I have entered a valid password
    And my password is being shown
    When I click on "Hide"
    Then password should be shown as dots

  Scenario: Creating profile with a invalid security answer
    Given I have confirmed my account number
    And I have entered a valid password
    And I have selected a security question
    When I type an invalid answer
    Then An error for "invalid answer" should be shown to the user

  Scenario: Opening Telus Privacy Terms & Conditions
    Given I have confirmed my account number
    When I click on "TELUS Privacy Terms & Conditions"
    Then I am taken to "About TELUS" page

  @test
  Scenario: Creating profile with a valid password
    Given I have confirmed my account number
    When I enter a valid password
    And I select a security question
    And I type a valid answer
    And I click on "Register my account"
    Then I am taken to "STEP 3" page 

  @test3
  Scenario: Accessing My Account
    Given  I am on "STEP 3" page
    When I click on "Take me to My Account"
    Then I am taken to "My Account" page