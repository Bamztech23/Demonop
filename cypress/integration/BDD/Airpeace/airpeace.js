/// <reference types="cypress" />​
/// <reference types="cypress-iframe" />​
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('i open flyairpeace website', function(){
    cy.visit('https://www.flyairpeace.com/');
      
}) 