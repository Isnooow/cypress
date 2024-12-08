before(()=> {
  cy.config("defaultCommandTimeout", 20000);
});

describe('Order Scenario', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get("input[id='user-name']").type("standard_user");
        cy.get("input[id='password']").type("secret_sauce");
        cy.get("input[id='login-button']").click();
        cy.get("span[class='title']");
    });
    
    it('Test Order', () => {
      cy.get("button[name='add-to-cart-sauce-labs-backpack']").click();
      cy.get("span[class='shopping_cart_badge']").should('be.visible');
      cy.get("span[class='shopping_cart_badge']").should('be.visible').click();
      cy.get("span[class='title']").should('be.visible');
      cy.get(".cart_item[data-test='inventory-item']").should('be.visible');
      cy.get("button[id='checkout']").click();
      cy.get("span[class='title']").should('be.visible');
      cy.get("input[id='first-name']").type("Dono");
      cy.get("input[id='last-name']").type("Toni");
      cy.get("input[id='postal-code']").type("2211");
      cy.get("input[id='continue']").click();
      cy.get("span[class='title']").should('be.visible');
      cy.get(".summary_info").should('be.visible');
      cy.get("button[id='finish']").click();
      cy.get("span[class='title']").should('be.visible');
      cy.get("img[alt='Pony Express']").should('be.visible');
      cy.get("button[id='back-to-products']").click();


    })
    
    // it('Check Out Product in Cart', () => {
    //   cy.get("span[class='shopping_cart_badge']").should('be.visible').click();
    //   cy.get("span[class='title']").should('be.visible');
    //   .summary_info
    //   cy.get("button[id='checkout']").click();
    // })

    // it('Add Check Out Info', () => {
    //     cy.get("input[id='user-name']").type("locked_out_user");
    //     cy.get("input[id='password']").type("secret_sauce");
    //     cy.get("input[id='login-button']").click();
    //     cy.get("button[class='error-button']").should('be.visible');
    //   })

    //   it('Check Out Overview', () => {
    //     cy.get("input[id='user-name']").type("locked_out_user");
    //     cy.get("input[id='password']").type("secret_sauce");
    //     cy.get("input[id='login-button']").click();
    //     cy.get("button[class='error-button']").should('be.visible');
    //   })

    //   it('Complete Check Out', () => {
    //     cy.get("input[id='user-name']").type("locked_out_user");
    //     cy.get("input[id='password']").type("secret_sauce");
    //     cy.get("input[id='login-button']").click();
    //     cy.get("button[class='error-button']").should('be.visible');
    //   })



    })