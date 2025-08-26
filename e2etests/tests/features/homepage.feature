Feature: to test homepage functionality

  Scenario: to test homepage
    Given User is on homepage
    When User enters login details
    Then Login should be successful
    And Homepage should be displayed
