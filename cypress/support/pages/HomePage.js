import BasePage from "./BasePage";

class homePage extends BasePage{

   constructor(){
    super(); // ми підтягуємо всі властивості з батьківського класу BasePage методом super у child homePage
   }

   visit(){
    cy.log('Opening home page...')
    cy.visit('/');
   } 

}

export default new homePage();