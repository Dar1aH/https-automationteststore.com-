import user from '../fixtures/user.json'

describe('Searching for an item', ()=> {



    it('Place an order', ()=>{
        cy.visit('/');
        cy.get('img[src="//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-250x250.jpg"]').click();
        cy.get('.cart').click();
        cy.get('#estimate_country').select(user.CountryId);
        cy.get('#estimate_country_zones').select(user.ZoneId);
        cy.get('#estimate_postcode').type(user.ZipCode);
        cy.get('#cart_checkout2').click();
        cy.get('#accountFrm_accountguest').check().should('be.checked');
        cy.get('button[type="submit"][title="Continue"]').click();
        cy.get('#guestFrm_firstname').type(user.FirstName);
        cy.get('#guestFrm_lastname').type(user.LastName);
        cy.get('#guestFrm_email').type(user.Email);
        cy.get('#guestFrm_address_1').type(user.Address1);
        cy.get('#guestFrm_city').type(user.City);
        cy.get('#guestFrm_country_id').select(user.CountryId);
        cy.get('#guestFrm_zone_id').select(user.ZoneId);
        cy.get('#guestFrm_postcode').type(user.ZipCode);
        cy.get('#guestFrm_shipping_indicator').should('not.be.checked');
        cy.get('button[title="Continue"]').click();
        cy.get('#checkout_btn').click();
        cy.contains(' Your Order Has Been Processed!'); 


    })
})