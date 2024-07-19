Feature: Demoblaze Ecommerce Test validation
Application regression​
@regression @smoke
Scenario: Validate I Register With Valid Credentials
    Given i open DemoNopCommerce website
    When i click on Register button
    Then i click on male gender radio button
    When i enter valid firstname 
    When i enter valid lastname
    Then i select day for my date of birth
    Then i select month for my date of birth
    Then i select year for my date of birth
    When i enter valid email
    When i enter company name
    Then i check the Newsletter button
    When i enter a valid password
    Then i confirmed my valid password
    Then i click on Register
    When i validate successful login to my account
