import BasePage from "./BasePage";

class GuestForm extends BasePage{

    constructor(){
        super();
    this.elements.firstNameField = '#guestFrm_firstname';
    this.elements.lastNameFiled = '#guestFrm_lastname';
    this.elements.email = '#guestFrm_email';
    this.elements.address1 = '#guestFrm_address_1';
    this.elements.city = '#guestFrm_city';
    this.elements.countryId = '#guestFrm_country_id';
    this.elements.zoneId = '#guestFrm_zone_id';
    this.elements.postCode = '#guestFrm_postcode';
    this.elements.shippingIndicatorRadioButton = '#guestFrm_shipping_indicator';
    this.elements.guestFormButton = 'button[title="Continue"]';
    this.elements.checkoutButton = '#checkout_btn';   

    }
    getFirstNameField(){
        return cy.get(this.elements.firstNameField)
      }

    getLastNameField(){
        return cy.get(this.elements.lastNameFiled)
      }  

    getEmailField(){
        return cy.get(this.elements.email)
      }  
    
    getAddress1Field(){
        return cy.get(this.elements.address1)
      }

    getCityField(){
        return cy.get(this.elements.city)
      }  
    getCountryField(){
        return cy.get(this.elements.countryId)
    } 
    getZoneIdField(){
        return cy.get(this.elements.zoneId)
    } 
    getPostCodeField(){
        return cy.get(this.elements.postCode)
    }
    getShippingIndicatorRadioButton(){
        return cy.get(this.elements.shippingIndicatorRadioButton)
    } 
    getGuestFormButton(){
        return cy.get(this.elements.guestFormButton)
    }
    getCheckOutButton(){
        return cy.get(this.elements.checkoutButton)
    }

fillGuestFormFields(user){
    cy.log('Fill in guest form mandatory fields');
    this.getFirstNameField().type(user.FirstName);
    this.getLastNameField().type(user.LastName);
    this.getEmailField().type(user.Email);
    this.getAddress1Field().type(user.Address1);
    this.getCityField().type(user.City);
    this.getCountryField().select(user.CountryId);
    this.getZoneIdField().select(user.ZoneId);
    this.getPostCodeField().type(user.ZipCode);
}                         
}

export default new GuestForm();