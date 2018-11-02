import { async } from '@angular/core/testing';
import { BasePage, IdentificationType } from './base-page';
import { browser } from 'protractor';

const Locators = {
  heading: {
    type: IdentificationType[IdentificationType.Id],
    value: 'heading'
  },
  welcomeGreeting: {
    type: IdentificationType[IdentificationType.Id],
    value: 'welcome-greeting'
  },
  welcomeNameTextbox: {
    type: IdentificationType[IdentificationType.Id],
    value: 'welcome-name-textbox'
  },
  nameSubmitButton: {
    type: IdentificationType[IdentificationType.Id],
    value: 'name-submit-btn'
  }
};

export class HomePage extends BasePage {
  public async get() {
    await browser.get('');
  }

  public async getWelcomeGreeting() {
    const welcomeGreeting = await this.ElementLocator(Locators.welcomeGreeting).getText();
    return welcomeGreeting;
  }

  public async enterName(userName: string) {
    await this.ElementLocator(Locators.welcomeNameTextbox).sendKeys(userName);
  }

  public async clickSubmitButton() {
    await this.ElementLocator(Locators.nameSubmitButton).click();
  }
}
