class CheckboxPage {
  constructor(page) {
    this.page = page;
    this.expandAllButton = page.locator('button[title="Expand all"]');
    this.homeCheckbox = page.getByRole('checkbox', { name: 'Select Home' });
    this.result = page.locator('#result');
  }

  async open() {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async expandAll() {
    if (await this.expandAllButton.isVisible()) {
      await this.expandAllButton.click();
    }
  }

  async selectHome() {
    await this.homeCheckbox.check();
  }
}

module.exports = { CheckboxPage };
