import BasePage from "./BasePage";

class LoginPage extends BasePage{

  constructor(){
    super();
    this.elements.getRegisterAccountButton = 'button[title="Continue"]'
  }  
  getRegisterAccountButton(){
    return cy.get(this.elements.getRegisterAccountButton)
  }

}
export default new LoginPage();