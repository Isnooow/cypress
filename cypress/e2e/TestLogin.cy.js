// before(()=> {
//   cy.config("defaultCommandTimeout", 20000);
// });

 describe('Login Scenario', () => {
//   beforeEach(() => {
//     cy.visit('https://www.saucedemo.com');
//     cy.clearCookies();
//     cy.reload(); // Tetap kunjungi situs target
// });

it('Login Passed and Login Fail', () => {
  cy.visit('https://www.saucedemo.com');
  cy.get("input[id='user-name']").type("standard_user");
  cy.get("input[id='password']").type("secret_sauce");
  cy.get("input[id='login-button']").click();
  cy.get("span[class='title']");
  cy.clearCookies();
  cy.go('back');
  cy.get("input[id='user-name']").type("locked_out_user");
  cy.get("input[id='password']").type("secret_sauce");
  cy.get("input[id='login-button']").click();
  cy.get("button[class='error-button']").should('be.visible');

})

})