Feature: DemoNopCommerce Ecommerce Test validation
Application regression​
@regression @smoke
Scenario: Validate Login With Valid Credentials 
    Given i open DemoNopCommerce website
    When i click the login button
    Then i enter a valid username
    When i enter a valid password
    Then i click login  
   