class AdminUser {
  constructor(page) {
    this.page = page;
    this.$adminUser = page.locator(
      '//p[contains(text(),"Admin Users")]//parent::div//following-sibling::a'
    );
    this.$newButton = page.locator('//a[contains(text(),"New")]');
    this.$userName = page.locator('//input[@id="username"]');
    this.$password = page.locator('//input[@id="password"]');
    this.$saveButton = page.locator('//button[contains(text(),"Save")]');
    this.$dropDown = page.locator('//select[@id="user_type"]');
    this.$alert=page.locator('//div[contains(@class,"alert alert-success")]');
    this.$homeLink=page.getByRole('link', { name: 'Home' });
  }

  async clickHomeLink() {
    await this.$homeLink.click();
  }
  async clickAdminUser() {
    await this.$adminUser.click();
  }

  async clickNewUser() {
    await this.$newButton.click();
  }

  async fillDetails(userName, password, type) {
    await this.$userName.fill(userName);
    await this.$password.fill(password);
    await this.$dropDown.selectOption({ label: type });
  }
  async clickSaveButton() {
    await this.$saveButton.click();
  }
}
module.exports = AdminUser;
