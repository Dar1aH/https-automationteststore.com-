import BasePage from "./BasePage";

class OrderProduct extends BasePage{
    constructor(){
        super();
    this.elements.ShoppingItemIcon = 'img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-250x250.jpg"]';
    this.elements.AddToCartButton = '.cart';
    this.elements.CountryDropDown = '#estimate_country';
    this.elements.StateDropDown = '#estimate_country_zones';
    this.elements.PostCodeField = '#estimate_postcode';
    this.elements.ShipmentsRateField =  '#shippings';
    this.elements.CheckoutButton = '#cart_checkout2';
    this.elements.CheckOutOptionsText = '.heading4';
    this.elements.GuestCheckoutRadioButton = '#accountFrm_accountguest';
    this.elements.ContinueButton = 'button[type="submit"][title="Continue"]';

    this.elements.SearchKeywordsField = '#filter_keyword';
    this.elements.ProductPageCart = '.productpagecart';
    this.elements.CartCheckoutButton = '#cart_checkout1';
    this.elements.CheckoutButton1 = '#checkout_btn';
    this.elements.ContentPanel = '.contentpanel';
    }
getShoppingItemIcon(){
    return cy.get(this.elements.ShoppingItemIcon)
}

getAddToCartButton(){
    return cy.get(this.elements.AddToCartButton)
}

getCountryDropDown(){
    return cy.get(this.elements.CountryDropDown)
}

getStateDropDown(){
    return cy.get(this.elements.StateDropDown)
}

getPostCodeField(){
    return cy.get(this.elements.PostCodeField)
}
getShipmentsRateField(){
    return cy.get(this.elements.ShipmentsRateField)
}
getCheckoutButton(){
    return cy.get(this.elements.CheckoutButton)
}
getCheckOutOptionsText(){
    return cy.get(this.elements.CheckOutOptionsText)
}
getGuestCheckoutRadioButton(){
    return cy.get(this.elements.GuestCheckoutRadioButton)
}
getContinueButton(){
    return cy.get(this.elements.ContinueButton)
}

getSearchKeywordsField(){
    return cy.get(this.elements.SearchKeywordsField)
}

getProductPageCart(){
    return cy.get(this.elements.ProductPageCart)
}

getCartCheckoutButton(){
    return cy.get(this.elements.CartCheckoutButton)
}
getCheckoutButton1(){
    return cy.get(this.elements.CheckoutButton1)
}
getContentPanel(){
    return cy.get(this.elements.ContentPanel)
}

fillEstimateShippingTaxesFields(user){
   this.getCountryDropDown().select(user.CountryId);
   this.getStateDropDown().select(user.ZoneId);
   this.getPostCodeField().type(user.ZipCode);
}
}
export default new OrderProduct();