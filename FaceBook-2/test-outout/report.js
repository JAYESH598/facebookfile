$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/user/eclipse-workspace/FaceBook-2/src/main/java/Features/login2.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login  Action Feature",
  "description": "",
  "id": "facebook-login--action-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Facebook login Test Scenario",
  "description": "",
  "id": "facebook-login--action-feature;facebook-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user should enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should enter \"  \u003cemail\u003e  \" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user should click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "facebook-login--action-feature;facebook-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 10,
      "id": "facebook-login--action-feature;facebook-login-test-scenario;;1"
    },
    {
      "cells": [
        "jayeshkani25@gmail.com",
        "$XSM7#@25"
      ],
      "line": 11,
      "id": "facebook-login--action-feature;facebook-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Facebook login Test Scenario",
  "description": "",
  "id": "facebook-login--action-feature;facebook-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user should enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should enter \"  jayeshkani25@gmail.com  \" and \"$XSM7#@25\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user should click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition2.user_should_enter_the_url()"
});
formatter.result({
  "duration": 12694721000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition2.title_of_the_page_is_facebook()"
});
formatter.result({
  "duration": 2010378600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  jayeshkani25@gmail.com  ",
      "offset": 19
    },
    {
      "val": "$XSM7#@25",
      "offset": 52
    }
  ],
  "location": "loginStepDefinition2.user_should_enter_and(String,String)"
});
formatter.result({
  "duration": 587242300,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition2.user_should_click_on_login_button()"
});
formatter.result({
  "duration": 2276200900,
  "status": "passed"
});
});