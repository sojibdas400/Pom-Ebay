/// <reference types="Cypress" />
import HomeLinks from "../page-objects/HomeLinks";
const page = new HomeLinks();

describe("TC_003 Home page", () => {
  beforeEach(() => {
    page.open();
  });

  it("TC_3.1 Daily deals", () => {
    page.dailyDeals().click();
  });

  it("TC_3.4 Help and Contact", () => {
    page.helpNcontact().click();
  });

  it("TC_3.6 Sell", () => {
    page.sell().click();
  });

  it("TC_3.8 Electronics", () => {
    page.electronics().click();
  });

  it("TC_3.9 Fashion", () => {
    page.fashion().click();
  });

  it("TC_3.10 Health and Beauty", () => {
    page.healthNBeauty().click();
  });

  it("TC_3.11 Home and Garden", () => {
    page.homeNgarden().click();
  });

  it("TC_3.12 Sports", () => {
    page.sports().click();
  });

  it("TC_3.13 Collectiles and Art", () => {
    page.collectilesNart().click();
  });

  it("TC_3.14 Industrial Equipment", () => {
    page.industrialEquipment().click();
  });

  it("TC_3.15 Motors", () => {
    page.motors().click({ force: true });
  });
});
