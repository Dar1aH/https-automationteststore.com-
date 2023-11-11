import user from '../fixtures/user.json'
import { login } from '../support/helper.js'
import { faker } from '@faker-js/faker'

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

// GO to support --> helper.js file
// Also we have add  import './helper' to e2e.js file 

it.only('Authorization with invalid loginName', ()=>{

 user.LoginName = faker.animal.bear.name();    
 login(user);

})