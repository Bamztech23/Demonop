/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('i open DemoNopCommerce website', function(){
    cy. visit('https://demo.nopcommerce.com/')
})
When ('i click on Register button', function(){
    cy.wait(3000)
    cy.get ('.ico-register').click();
});
Then ('i click on male gender radio button', function(){
    // cy.get('.male').click();
    // cy.get('#gender-male').should('be.visible').check();
    // cy.get("[type='radio'").eq(0).check({force: true})
    cy.get('input[type="radio"]').check("M");
})
When ('i enter valid firstname', function(){
    cy.get ('#FirstName').type('Ayobami')
})

When ('i enter valid lastname', function(){
    cy.get('#LastName').type('Lawal')
})

