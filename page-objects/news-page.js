class NewsPage {
    constructor(page) {
        this.page = page;
        this.$newsLink=page.locator('//a[@href="https://groceryapp.uniqassosiates.com/admin/list-news" and @class="small-box-footer"]')
        this.$newButton=page.locator('//a[@class="btn btn-rounded btn-primary"]')
        this.$titleInput=page.getByPlaceholder('Title')
        this.$saveButton=page.locator('//button[@class="btn btn-danger btn-fix"]')
        this.searchButton=page.locator('//a[@class="btn btn-rounded btn-primary"]')
        this.resetButton=page.locator('//a[@class="btn btn-rounded btn-warning"]')
    }
    async clickNewsLink(){
        await this.$newsLink.click();
    }
    async addNews(title){
        await this.$newButton.click();
        await this.$titleInput.fill(title);
        await this.$saveButton.click();
    }
    async searchNews(title){
        await this.searchButton.click();
        await this.$titleInput.fill(title);
        await this.$saveButton.click();
    }
    async resetNews(){
    
        await this.resetButton.click();
    }

}
module.exports = NewsPage;