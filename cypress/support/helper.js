
export function login(user){
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');
    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.LoginName);
    cy.get('#loginFrm_password').type(user.Password);
    cy.get('button[type="submit"]').contains('Login').click();

    cy.get('.heading1', {timeout: 2000}).should('contain', user.FirstName);
}


export function findProduct(productName){ // curls to straight Shampoo
    cy.get('body').then(body =>{
    console.log
     if(body.find(`[title="${productName}]`).length > 0){

        cy.get(`[title="${productName}]`).click();
     }
     else{
        cy.contains('.pagination a', '>').click();
        findProduct(productName);
     }
    })
}
