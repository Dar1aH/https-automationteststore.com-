import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';



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
        cy.visit('/');
        cy.get('#customernav').click();
        cy.get('button[title="Continue"]').click();
        cy.get('#AccountFrm_firstname').type(user.FirstName);
        cy.get('#AccountFrm_lastname').type(user.LastName);
        cy.get('#AccountFrm_email').type(user.Email);
        cy.get('#AccountFrm_telephone').type(user.Telephone);
        cy.get('#AccountFrm_fax').type(user.Fax);
        cy.get('#AccountFrm_company').type(user.Company);
        cy.get('#AccountFrm_address_1').type(user.Address1);
        cy.get('#AccountFrm_address_2').type(user.Address2);
        cy.get('#AccountFrm_city').type(user.City);
        cy.get('#AccountFrm_country_id').select(user.CountryId);
        cy.get('#AccountFrm_zone_id').select(user.ZoneId);
        cy.get('#AccountFrm_postcode').type(user.ZipCode);
        cy.get('#AccountFrm_loginname').type(user.LoginName);
        cy.get('#AccountFrm_password').type(user.Password);
        cy.get('#AccountFrm_confirm').type(user.Password);
        cy.get('#AccountFrm_newsletter1').check();
        cy.get('#AccountFrm_agree').check();
        cy.get('button[title="Continue"]').click();
        cy.get('.menu_text', {timeout:2000}).should('contain', user.FirstName);


    })
    it('Authorization', ()=>{
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');
        
        cy.log('Check user is unathorized');
        cy.getCookie('customer').should('be.null');
    
        cy.log('Authorize user');
        cy.get('#loginFrm_loginname').type(user.LoginName);
        cy.get('#loginFrm_password').type(user.Password);
        cy.get('button[type="submit"]').contains('Login').click();
    
        cy.get('.heading1', {timeout: 2000}).should('contain', user.FirstName);
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