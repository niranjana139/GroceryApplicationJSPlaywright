import customtest from "../../utils/test-base.js";

customtest("Test fixture", async ({ page, testData }) => {
  await page.goto("https://amazon.in");
  await console.log(">>>>>> --->> " + testData.place);
  await page.waitForTimeout(5000);
});
