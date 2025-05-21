import LoginPage from "../support/LoginPage";

describe("Login Test with POM - OrangeHRM", () => {
  const loginPage = new LoginPage();

  it("should login successfully and land on dashboard", () => {
    loginPage.visit();
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();

    // Assertion - pastikan user sampai di dashboard
    loginPage.getDashboard().should("be.visible");
  });
});
