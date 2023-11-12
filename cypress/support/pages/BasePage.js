
export default class BasePage{

    constructor(){
        this.elements = {}; //пустий обʼєкт який ми будемо наповнювати локаторами
        this.elements.headerAccountButton = '#customernav';

    }
    getHeaderAccountButton(){
        return cy.get(this.elements.headerAccountButton);
    }
}
