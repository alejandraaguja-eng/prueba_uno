class TextBoxPage {
  constructor(page) {
    this.page = page;
    this.fullName = page.getByPlaceholder('Full Name');
    this.email = page.getByPlaceholder('name@example.com');
    this.currentAddress = page.getByPlaceholder('Current Address');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.output = page.locator('#output');
  }

  async open() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillForm({ name, email, currentAddress, permanentAddress }) {
    await this.fullName.fill(name);
    await this.email.fill(email);
    await this.currentAddress.fill(currentAddress);
    await this.permanentAddress.fill(permanentAddress);
  }

  async submit() {
    await this.submitButton.click();
  }
}

module.exports = { TextBoxPage };
