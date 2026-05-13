import { test, expect } from "@playwright/test";
import AdminUser from "../page-objects/adminuser-page.js";
import LoginPage from "../page-objects/login-page.js";
import HomePage from "../page-objects/home-page.js";
import loginData from "../test-data/login-data.json";

let page;
let context;
let homePage;
let loginPage, adminUserPage;
let webContext;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
  await context.storageState({ path: "state.json" });
  await context.close();
});

test.beforeEach(async ({ browser }) => {
  context = await browser.newContext({ storageState: "state.json" });
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  adminUserPage = new AdminUser(page);
});

test.afterEach(async () => {
  await context.close();
});

test("Verify login only", async () => {
  await loginPage.launchUrl();
});

test("second test login and click admin", async () => {
  await loginPage.launchUrl();
  await adminUserPage.clickAdminUser();
});
