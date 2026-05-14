import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import AdminUser from "../../page-objects/adminuser-page.js";
import LoginPage from "../../page-objects/login-page.js";
import HomePage from "../../page-objects/home-page.js";
import loginData from "../../test-data/login-data.json";
import userDetails from "../../test-data/user-details.json";
import { getRandomLetters } from "../../helpers/helper.js";
import NewsPage from "../../page-objects/news-page.js";
let page;
let context;
let homePage;
let loginPage;
let adminUserPage;
let newsPage;

test.beforeEach(async ({ browser }) => {
  await console.log("This is Before All........");
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  newsPage = new NewsPage(page);
  homePage = new HomePage(page);
  adminUserPage = new AdminUser(page);
});

test('Add New News', async () => {
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
  await newsPage.clickNewsLink();
  await newsPage.addNews("Testing");
 
});
test('Search News', async () => {
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
await newsPage.clickNewsLink();
await newsPage.searchNews("Testing");
});

test('Reset News',async () => {

    await loginPage.launchUrl();
    await loginPage.login(loginData.username, loginData.password);
    await newsPage.clickNewsLink();
    await newsPage.resetNews();
});