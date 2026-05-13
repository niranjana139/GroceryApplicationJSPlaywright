class HomePage {
  constructor(page) {
    this.page = page;
    this.$profileName = (name) =>
      page.locator(`//a[contains(text(),"${name}")]`);

    this.$dashboardIcon=page.locator('(//p[contains(text(),"Dashboard")])[1]');
    this.$subSection=page.locator('(//p[contains(text(),"NewTestMenu")])[1]')
    this.$subSectionLandingPage=page.locator('//section//div[contains(@class,"container-fluid")]');
    this.$logoutLink=page.getByRole('link', { name: ' Logout' });
    this.$logoutIcon=page.getByRole('link', { name: 'User Image Admin' })
  }


  async performLogout() {
    await this.$logoutIcon.click();
    await this.$logoutLink.click();
  }

}

module.exports = HomePage;
