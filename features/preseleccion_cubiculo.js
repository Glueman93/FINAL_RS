const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let userLoggedIn = false;
let cubiclesInSystem = false;
let userPreselectedCubicle = false;
let preselectedCubicleAvailable = false;
let systemMonitorsCubicleAvailability = false;
let notificationSentToUser = false;
let userChangedPreselection = false;

Given('a user is logged into the system', function () {
  userLoggedIn = true;
});

Given('there are cubicles in the system that can be preselected', function () {
  cubiclesInSystem = true;
});

When('the user chooses to preselect a specific cubicle', function () {
  if (userLoggedIn && cubiclesInSystem) {
    userPreselectedCubicle = true;
    systemMonitorsCubicleAvailability = true;
  }
});

Then('the system starts monitoring the availability of the preselected cubicle', function () {
  assert.strictEqual(systemMonitorsCubicleAvailability, true);
});

Given('a user has preselected a cubicle', function () {
  if (userLoggedIn && cubiclesInSystem) {
    userPreselectedCubicle = true;
  }
});

Given('the preselected cubicle is not yet available', function () {
  preselectedCubicleAvailable = false;
});

When('the user decides to change the preselection to another cubicle', function () {
  userChangedPreselection = true;
});

Then('the system updates the user\'s preselection', function () {
  assert.strictEqual(userChangedPreselection, true);
});

Then('no notification is sent about the first cubicle', function () {
  assert.strictEqual(notificationSentToUser, false);
});

When('the cubicle is available, the system sends a notification to the user', function () {
  if (preselectedCubicleAvailable && systemMonitorsCubicleAvailability) {
    notificationSentToUser = true;
  }
});

Then('the user has the option to reserve the cubicle directly from the notification', function () {
  assert.strictEqual(notificationSentToUser, true);
});