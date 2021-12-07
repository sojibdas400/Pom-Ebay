import HomePage from "../page-objects/HomePageLinks";

describe("Home page", () => {
  const page = new HomePage();
  it("visit home page", () => {
    page.open();
  });
});
