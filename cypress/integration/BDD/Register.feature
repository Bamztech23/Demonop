Feature: Demoblaze Ecommerce Test validation
Application regression​
@regression @smoke
Scenario: Validate I Register With Valid Credentials
    Given i open DemoNopCommerce website
    When i click on Register button
    Then i click on male gender radio button
    When i enter valid firstname 
    When i enter valid lastname
    