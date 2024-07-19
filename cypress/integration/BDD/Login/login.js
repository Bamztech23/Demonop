/// <reference types="Cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('i open DemoNopCommerce website',function(){
    cy. visit('https://demo.nopcommerce.com/')
});
When ('i click the login button',function(){
    cy.get('.ico-login').click();
});
Then ('i enter a valid username',function(){
    cy.get('#Email').click().type('bamztech23@gmai.com');
})
When ('i enter a valid password',function(){
    cy.get('#Password').click().type('asdfgh');
})
Then ('i click login',function(){
    cy.get('.button-1.login-button').click();
})
When ('i validate successful login to my account',function(){
    cy.get('')
})