import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{

  constructor(){
    super();
    this.elements.loginNameField = '#loginFrm_loginname';
    this.elements.passwordField = '#loginFrm_password';
    this.elements.submitAuthorizationFormButton = 'button[type="submit"]';
    
  }  
 
  getLoginNameField(){
    return cy.get(this.elements.loginNameField)
  }  

  getPasswordField(){
    return cy.get(this.elements.passwordField)
  }  
  getSubmitAuthorizationFormButton(){
    return cy.get(this.elements.submitAuthorizationFormButton)
  }  

  fillAuthorizationFields(user){
    cy.log('Fill in registration fields...');

    this.getLoginNameField().type(user.LoginName);
    this.getPasswordField().type(user.Password);
  }  
}
export default new AuthorizationPage();