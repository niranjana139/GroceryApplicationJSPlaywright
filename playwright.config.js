// @ts-check

const config = {
  testDir: "./tests/specs",

  timeout: 40000,
  reporter: [["html"], ["allure-playwright"]],
  expect: {
    timeout: 4000,
  },
  use: {
    browserName: "chromium",
    headless: false,
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },
    screenshot: "on",
    trace: "on",
  },
};
module.exports = config;
