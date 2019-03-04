/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to bing.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
    '@disabled': false,
  
    'demo test bing' : function (client) {
      client
        .url('http://bing.com')
        .waitForElementPresent('body', 1000);
    },
  
    'part two' : function(client) {
      client
        .setValue('input[name=q]', ['nightwatchsdfsdfsdfsdfsdfsdf', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('#b_results', 'Night Watch')
        .end();
    }
};