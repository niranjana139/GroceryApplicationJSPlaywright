import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import AdminUser from "../../page-objects/adminuser-page.js";
import LoginPage from "../../page-objects/login-page.js";
import HomePage from "../../page-objects/home-page.js";
import loginData from "../../test-data/login-data.json";
import ExcelUtility from "../../helpers/excelutility.js";
let page;
let context;
let homePage;
let loginPage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
});
test('verify invalid login', async () => {
 
    const filePath = "C:\\Users\\Netcom\\Desktop\\playwrightGroceryApplication\\GroceryApplicationJSPlaywright\\test-data\\TestData.xlsx";

    const username = await ExcelUtility.getStringData(3, 1, 'LoginPage', filePath);
    const password = await ExcelUtility.getStringData(3, 2, 'LoginPage', filePath);
  await loginPage.launchUrl();
  await loginPage.login(username, password);
  await page.waitForTimeout(5000);
await expect(page).toHaveURL("https://groceryapp.uniqassosiates.com/admin/login")
});