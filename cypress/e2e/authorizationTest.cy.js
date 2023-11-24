import user from '../fixtures/user.json'
import { login } from '../support/helper.js'
import { faker } from '@faker-js/faker'
import homePage from '../support/pages/HomePage'
import AccountPage from '../support/pages/AccountPage';
import AuthorizationPage from '../support/pages/AuthorizationPage';

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

    window.localStorage.setItem('hello', 'world')
})

// GO to support --> helper.js file
// Also we have add  import './helper' to e2e.js file 

it.skip('Authorization with invalid loginName', ()=>{

 user.LoginName = faker.animal.bear.name();    
 login(user);

})