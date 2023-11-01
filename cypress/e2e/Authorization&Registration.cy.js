import user from '../fixtures/user.json'
/// <reference types="cypress"/>

describe('Successful Registration&Authorization', () => {
  it('Registration', () => {
    cy.visit('/');
    cy.get('#customer_menu_top').click();
    cy.contains('I am a new customer.');
    cy.get('button[type="submit"][title="Continue"]').click();
    cy.contains(' Create Account');
    cy.get('#AccountFrm_firstname').type(user.FirstName);
    cy.get('#AccountFrm_lastname').type(user.LastName);
    cy.get('#AccountFrm_email').type(user.Email);
    cy.get('#AccountFrm_telephone').type(user.Telephone);
    cy.get('#AccountFrm_fax').type(user.Fax);
    cy.get('#AccountFrm_company').type(user.Company);
    cy.get('#AccountFrm_address_1').type(user.Address1);
    cy.get('#AccountFrm_address_2').type(user.Address2);
    cy.get('#AccountFrm_city').type(user.City);
    cy.get('#AccountFrm_postcode').type(user.ZipCode);
    cy.get('#AccountFrm_country_id').select(user.CountryId);
    cy.get('#AccountFrm_zone_id').select(user.ZoneId);
    cy.get('#AccountFrm_loginname').type(user.LoginName);
    cy.get('#AccountFrm_password').type(user.Password);
    cy.get('#AccountFrm_confirm').type(user.Password);
    cy.get('#AccountFrm_newsletter1').check().should('be.checked');
    cy.get('#AccountFrm_newsletter0').should('not.be.checked');
    cy.get('#AccountFrm_agree').check().should('be.checked');
    cy.get('button[title="Continue"]').click();
    cy.contains(' Your Account Has Been Created!');
    cy.get('div.menu_text').should('contain', 'Welcome back New_User_First_Name');
   
  })

  it('Authorization', () => {
  cy.log('Open website login page');
  cy.visit('/index.php?rt=account/login');
  cy.contains('Returning Customer');
  cy.log('Check the user is unauthorized');
  cy.get('#loginFrm_loginname').type(user.LoginName);
  cy.get('#loginFrm_password').type(user.Password);
  cy.get('button[title="Login"]').click();
  cy.get('span.subtext').should('contain', 'New_User_First_Name');
  })
})