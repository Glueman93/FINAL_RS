Feature: Preselection and Notification of Cubicle Availability

  Scenario: User preselects a cubicle and receives notification when available
    Given a user is logged into the system
    And there are cubicles in the system that can be preselected
    When the user chooses to preselect a specific cubicle
    Then the system starts monitoring the availability of the preselected cubicle
    And when the cubicle is available, the system sends a notification to the user
    And the user has the option to reserve the cubicle directly from the notification

  Scenario: User changes preselection before cubicle becomes available
    Given a user has preselected a cubicle
    And the preselected cubicle is not yet available
    When the user decides to change the preselection to another cubicle
    Then the system updates the user's preselection
    And no notification is sent about the first cubicle