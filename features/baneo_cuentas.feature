Feature: Banning accounts for repeated rule violations

  Scenario: Admin bans an account for repeated rule violations
    Given an admin is logged into the system
    And there is an account that has repeatedly violated the rules
    When the admin selects the account to apply the ban
    Then the account is banned
    And the user is notified about the ban

  Scenario: Admin tries to ban an account with no repeated violations
    Given an admin is logged into the system
    And there is an account that has not repeatedly violated the rules
    When the admin tries to select the account to apply the ban
    Then the account is not banned
    And the admin receives a message indicating that the account has not violated the rules repeatedly
