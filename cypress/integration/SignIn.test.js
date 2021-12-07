/// <reference types="Cypress"/>
import SignInLinks from "../page-objects/SignInLinks";

describe("Sign In page", () => {
  const signin = new SignInLinks();
  it("TC_2.1 login with Email", () => {
    cy.visit(signin.url);

    cy.get(signin.emailOrusernameFeild)
      // .should("exist")
      .type("signin.emailOrusername", {
        force: true,
      });

    cy.get(signin.emailContinue).click();
    cy.get(signin.passwordFeild)
      .should("exist")
      .type(signin.password, { force: true });

    cy.get(signin.submitFeild).should("exist").click({ force: true });
  });
});
