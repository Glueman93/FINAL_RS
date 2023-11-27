Feature: Notifications for discounts and combos

  Scenario: User receives a notification for new discounts and combos
    Given a user is logged into the system
    And there are new discounts and combos available in the system
    When the system identifies the user as eligible to receive notifications
    Then personalized notifications are generated for the user
    And the notifications are sent to the user through the preferred channel
    And the notifications are recorded in the user's history

  Scenario: User opts out of notifications
    Given a user is logged into the system
    And there are new discounts and combos available in the system
    And the user has configured their account to not receive notifications
    When the system identifies the user as eligible to receive notifications
    Then no notifications are generated for the user
    And the user's history is not updated with the notifications