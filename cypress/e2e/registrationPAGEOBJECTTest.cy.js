import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage'
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';
import AccountPage from '../support/pages/AccountPage';
import AuthorizationPage from '../support/pages/AuthorizationPage';


//faker.js - a library that generates fake data
// copy paste this in terminal: npm install --save-dev @faker-js/faker
// and press enter 

user.Email = faker.internet.email({ provider: 'fakeMail.com'});
user.LoginName = faker.internet.userName();
user.FirstName = faker.person.firstName();
user.LastName = faker.person.lastName();
user.Fax = faker.phone.number();
user.Telephone = faker.phone.number();
user.Company = faker.company.name();
user.ZipCode = faker.location.zipCode('####');

describe('Successful registration', ()=>{

    it('Registration', ()=>{
        homePage.visit();

        cy.log('Opening registration page...');

        homePage.getHeaderAccountButton().click();
        LoginPage.getRegisterAccountButton().click();

        cy.log('Fill in registration fields...');
        RegistrationPage.fillRegistrationFields(user);


        cy.log('Submit registration form...')

        RegistrationPage.getNewsLetterCheckbox().check();
        RegistrationPage.getPrivacyPolicyCheckbox().check();
        RegistrationPage.getSubmitRegistrationFormButton().click();

        cy.log('Verify first name displayed on account page...')

        AccountPage.getFirstNameText().should('contain', user.FirstName);
        AccountPage.getContinueButton().click();


    })
    it('Authorization', ()=>{
        homePage.visit();

        cy.log('Opening authorization page...');

        homePage.getHeaderAccountButton().click();
        
        cy.log('Check user is unathorized');
        cy.getCookie('customer').should('be.null');
    
        cy.log('Authorize user');
        AuthorizationPage.fillAuthorizationFields(user);
        AuthorizationPage.getSubmitAuthorizationFormButton().contains('Login').click();

        
        AccountPage.getMyAccountText().should('contain', user.FirstName);
    })
})


// const testData = []

// it('Registration', () => {
//     cy.visit('/');

//     cy.get('.topnavbar [data-id="menu_account"]').click();

//     cy.get('#accountFrm button').click();

//     testData.elemets.textFields.forEach(({selector, data}) => {
//         cy.get(selector).type(data);
//     })

//     testData.elemets.selectFields.forEach(({selector, data}) => {
//         cy.get(selector).select(optionNumber);
//     })
    
//     cy.get('#AccountFrm_newsletter1').check();
//     cy.get('#AccountFrm_agree').check();
//     cy.get('button[title="Continue"]').click();

//     cy.get('.heading1', {timeout: 2000}).should('contain', 'First_Name_test');
// })




// To check if an item is available 
// inside of if there has to be a jQuery element

/*
if(){
    cy.get('locator').click(); // click on the shopping item
}
else{
    cy.get('next page').click(); // click on the element that will switch to the next page
}
*/