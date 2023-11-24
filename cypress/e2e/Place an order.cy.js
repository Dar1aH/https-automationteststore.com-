import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import GuestForm from '../support/pages/GuestForm';
import OrderProduct from '../support/pages/OrderProduct';
import { login, findProduct } from '../support/helper'
import { faker } from '@faker-js/faker'
import orderData from '../fixtures/order.json'

describe('Searching for a product', ()=> {



    it('Order a product', ()=>{
        homePage.visit();
        cy.log('Placing an order as a guest');

        OrderProduct.getShoppingItemIcon().click();
        OrderProduct.getAddToCartButton().click();

        cy.contains(' Shopping Cart')
        cy.contains('Estimate Shipping & Taxes');

        OrderProduct.fillEstimateShippingTaxesFields(user);

        OrderProduct.getShipmentsRateField().should('contain', 'Flat Shipping Rate - $2.00');

        OrderProduct.getCheckoutButton().click();

        OrderProduct.getCheckOutOptionsText().should('contain', 'Checkout Options:');
        OrderProduct.getGuestCheckoutRadioButton().check().should('be.checked');
        OrderProduct.getContinueButton().click();
        
        GuestForm.fillGuestFormFields(user);

        GuestForm.getShippingIndicatorRadioButton().should('not.be.checked');
        GuestForm.getGuestFormButton().click();
        GuestForm.getCheckOutButton().click();

        cy.contains(' Your Order Has Been Processed!'); 


    })

it('Order', () => {

    login(user);

    OrderProduct.getSearchKeywordsField().type('i')
        .closest("form")
        .submit();

    findProduct(orderData.productName) //Gucci Guilty 

    OrderProduct.getProductPageCart().click()
    OrderProduct.getCartCheckoutButton().click()
    OrderProduct.getCheckoutButton1().click()
    OrderProduct.getContentPanel().should('contain', "Thank you for shopping with us!")

})
}) 