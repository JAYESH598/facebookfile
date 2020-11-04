Feature: Facebook login  Action Feature
Scenario Outline: Facebook login Test Scenario
Given user should enter the url
When title of the page is facebook
Then user should enter "  <email>  " and "<password>"
Then user should click on login button

Examples:

| email | password |
|jayeshkani25@gmail.com |$XSM7#@25|
