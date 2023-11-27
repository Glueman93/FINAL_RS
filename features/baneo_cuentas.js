const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let adminLoggedIn = false;
let accountRepeatedlyViolatedRules = false;
let accountBanned = false;
let adminReceivedNotification = false;

Given('an admin is logged into the system', function () {
  adminLoggedIn = true;
});

Given('there is an account that has repeatedly violated the rules', function () {
  accountRepeatedlyViolatedRules = true;
});

Given('there is an account that has not repeatedly violated the rules', function () {
    accountRepeatedlyViolatedRules = false;
  });

When('the admin selects the account to apply the ban', function () {
  if (adminLoggedIn && accountRepeatedlyViolatedRules) {
    accountBanned = true;
    adminReceivedNotification = true;
  }
});

Then('the account is banned', function () {
  assert.strictEqual(accountBanned, true);
});

Then('the user is notified about the ban', function () {
  assert.strictEqual(adminReceivedNotification, true);
});

When('the admin tries to select the account to apply the ban', function () {
  if (adminLoggedIn && !accountRepeatedlyViolatedRules) {
    accountBanned = false;
  }
});

Then('the account is not banned', function () {
  assert.strictEqual(accountBanned, false);
});

Then('the admin receives a message indicating that the account has not violated the rules repeatedly', function () {
  assert.strictEqual(adminReceivedNotification, false);
});
Then('when the cubicle is available, the system sends a notification to the user', () => {
  // Write code here that turns the phrase above into concrete actions
})
