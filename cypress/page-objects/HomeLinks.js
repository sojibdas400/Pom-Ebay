export default class HomeLinks {
  open() {
    return cy.visit("https://www.ebay.com/");
  }

  dailyDeals() {
    return cy.get("#gh-p-1 > a");
  }

  helpNcontact() {
    return cy.get("#gh-p-3 > a");
  }

  sell() {
    return cy.get("#gh-p-2 > a");
  }

  electronics() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(3) > a");
  }

  fashion() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > a");
  }

  healthNBeauty() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(5) > a");
  }

  homeNgarden() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(6) > a");
  }

  sports() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(7) > a");
  }

  collectilesNart() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(8) > a");
  }

  industrialEquipment() {
    return cy.get("#mainContent > div.hl-cat-nav > ul > li:nth-child(9) > a");
  }

  motors() {
    return cy.get(
      "#mainContent > div.hl-cat-nav > ul > li.hl-cat-nav__more.hl-cat-nav__js-tab.hl-cat-nav__js-more-show > div.hl-cat-nav__flyout > a:nth-child(8)"
    );
  }

  // shipTo() {
  //   return cy.get("");
  // }

  // watchList() {
  //   return cy.get("");
  // }
}
