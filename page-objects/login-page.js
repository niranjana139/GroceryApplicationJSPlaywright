class LoginPage {
  constructor(page) {
    this.page = page;
    this.$userNameField = page.locator('//input[@name="username"]');
    this.$paswordField = page.locator('//input[@name="password"]');
    this.$signInButton = page.locator('//button[contains(text(),"Sign In")]');
  }

  async login(userName, password) {
    await this.$userNameField.fill(userName);
    await this.$paswordField.fill(password);
    await this.$signInButton.click();
  }

  async launchUrl() {
    await this.page.goto("https://groceryapp.uniqassosiates.com/admin/");
  }
}

module.exports = LoginPage;
