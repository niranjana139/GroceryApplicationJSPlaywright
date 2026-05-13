import { test, expect } from "@playwright/test";
import LoginPage from "../../page-objects/login-page.js";
import HomePage from "../../page-objects/home-page.js";
import loginData from "../../test-data/login-data.json";
import AdminUser from "../../page-objects/adminuser-page.js";
import userDetails from "../../test-data/user-details.json";
import { getRandomLetters } from "../../helpers/helper.js";
let page;
let context;
let homePage;
let loginPage;
let adminUserPage;


test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  adminUserPage = new AdminUser(page);
});
let userCreationData = userDetails.creationData;
for (const user of userCreationData) {
test(`Verify whether able to create "${user.userType}" user: "${user.userName}`, async () => {
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
   await page.waitForTimeout(4000);
   await adminUserPage.clickAdminUser();
   await page.waitForTimeout(3000);
   await adminUserPage.clickNewUser();
      await page.waitForTimeout(3000);
       await adminUserPage.fillDetails(
         `${user.userName} ${getRandomLetters(3)}`,
         user.password,
         user.userType,
       );
       await adminUserPage.clickHomeLink();
  //await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(3000); 
     await homePage.performLogout();
});
}