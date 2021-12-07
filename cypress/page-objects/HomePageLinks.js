export default class HomePage {
  open() {
    return cy.visit("https://www.ebay.com/");
  }
}
