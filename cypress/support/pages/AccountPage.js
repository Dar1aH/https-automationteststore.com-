import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
      super();
      this.elements.firstNameText = '.menu_text';
     
      
    }  
    getFirstNameText(){
      return cy.get( this.elements.firstNameText, {timeout:2000})
    }
  
  }
  export default new AccountPage();