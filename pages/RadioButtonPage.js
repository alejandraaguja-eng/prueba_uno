class RadioButtonPage {
  constructor(page) {
    this.page = page;
    this.yesOption = page.getByText('Yes');
    this.impressiveOption = page.getByText('Impressive');
    this.result = page.locator('.text-success');
  }

  async open() {
    await this.page.goto('https://demoqa.com/radio-button');
  }

  async selectYes() {
    await this.yesOption.click();
  }

  async selectImpressive() {
    await this.impressiveOption.click();
  }
}

module.exports = { RadioButtonPage };
