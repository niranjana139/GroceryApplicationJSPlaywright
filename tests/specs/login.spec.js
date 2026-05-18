import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import AdminUser from "../../page-objects/adminuser-page.js";
import LoginPage from "../../page-objects/login-page.js";
import HomePage from "../../page-objects/home-page.js";
import loginData from "../../test-data/login-data.json";

let page;
let context;
let homePage;
let loginPage;

let encoded = btoa(loginData);
//decoding let data=atob(data)
//json.prse(decoded)

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
});

test('verify Login', async () => {
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
 
    await page.waitForTimeout(5000);
});