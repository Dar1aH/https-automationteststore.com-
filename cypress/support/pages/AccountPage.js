import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
      super();
      this.elements.firstNameText = '.menu_text';
      this.elements.continueButton = 'a[title="Continue"]';
      this.elements.myAccountText = '.heading1';

     
      
    }  
    getFirstNameText(){
      return cy.get( this.elements.firstNameText, {timeout:2000})
    }
    getContinueButton(){
      return cy.get(this.elements.continueButton)
    }
    getMyAccountText(){
      return cy.get(this.elements.myAccountText)
    }
  }
  export default new AccountPage();