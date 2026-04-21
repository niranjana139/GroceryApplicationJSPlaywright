import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import AdminUser from "../page-objects/adminuser-page.js";
import LoginPage from "../page-objects/login-page.js";
import HomePage from "../page-objects/home-page.js";
import loginData from "../test-data/login-data.json";
import userDetails from "../test-data/user-details.json";
import { getRandomLetters } from "../helpers/helper.js";

let page;
let context;
let homePage;
let loginPage;
let adminUserPage;

let userCreationData=userDetails.creationData

test.beforeEach(async ({ browser }) => {
  await console.log("This is Before All........");
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  adminUserPage = new AdminUser(page);
});

test.afterEach(async () => {
  console.log("Closing browser after test...");
  await context.close();  // This closes page + context
});


for (const user of userCreationData) {
  test(`Verify whether able to create ${user.userType} user: ${user.userName}`, async () => {
    await loginPage.launchUrl();
    await loginPage.login(loginData.username, loginData.password);
    await adminUserPage.clickAdminUser();
    await adminUserPage.clickNewUser();
    await adminUserPage.fillDetails(
      `${user.userName} ${getRandomLetters(3)}`,
      user.password,
      user.userType,
    );
    await adminUserPage.clickSaveButton();
  });
}
