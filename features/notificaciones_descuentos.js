const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let userLoggedIn = false;
let newDiscountsAndCombosAvailable = false;
let userEligibleForNotifications = false;
let notificationsGeneratedForUser = false;
let notificationsSentToUser = false;
let notificationsRecordedInUserHistory = false;
let userOptedOutOfNotifications = false;

Given('a user is logged into the system', function () {
  userLoggedIn = true;
});

Given('there are new discounts and combos available in the system', function () {
  newDiscountsAndCombosAvailable = true;
});

When('the system identifies the user as eligible to receive notifications', function () {
  if (userLoggedIn && newDiscountsAndCombosAvailable && !userOptedOutOfNotifications) {
    userEligibleForNotifications = true;
  }
});

Then('personalized notifications are generated for the user', function () {
  if (userEligibleForNotifications) {
    notificationsGeneratedForUser = true;
  }
});

Then('the notifications are sent to the user through the preferred channel', function () {
  if (userEligibleForNotifications) {
    notificationsSentToUser = true;
  }
});

Then("the notifications are recorded in the user's history", function () {
  if (userEligibleForNotifications) {
    notificationsRecordedInUserHistory = true;
  }
});

Given('the user has configured their account to not receive notifications', function () {
  userOptedOutOfNotifications = true;
});

Then('no notifications are generated for the user', function () {
  assert.strictEqual(notificationsGeneratedForUser, false);
});

Then("the user's history is not updated with the notifications", function () {
  assert.strictEqual(notificationsRecordedInUserHistory, false);
});