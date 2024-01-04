import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
const loginPage = require('../../pages/loginPage')

Given('user visits the stello login page', () => {
    cy.viewport('macbook-13')
    loginPage.elements.appLauncher()
})

When('user enters username and password as {string} and {string}', (usern, passw) => {
    loginPage.enterUsername(usern)
    loginPage.enterPassword(passw)
})

When('user enters username as {string}', (usern) => {
    loginPage.enterUsername(usern)
})

When('user clicks login', () => {
    loginPage.clickLogin()
})

Then('user is successfully logged in and is navigated to the dashboard', () => {
    loginPage.elements.sideBar().should('be.visible')
})

Then('user sees error message from the system', () => {
    loginPage.seeError1()
})

Then('user sees an error message from the system', () => {
    loginPage.seeError2()
})