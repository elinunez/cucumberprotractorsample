// e2e/step-definitions/steps.ts
import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { HomePage } from '../../pages/home-page';

const homePage = new HomePage();

Given('I am on the Home page', async () => {
  await homePage.get();
});

When('I enter in my name {string}', async (userName) => {
  await homePage.enterName(userName);
});

When('I click the submit button', async () => {
   await homePage.clickSubmitButton();
});

Then('I should see a welcome greeting', async () => {
  const greeting = await homePage.getWelcomeGreeting();
  expect(greeting).to.not.be.undefined;
});

Then('The welcome greeting will show my name {string}', async (userName) => {
  const greeting = await homePage.getWelcomeGreeting();
  expect(greeting).to.contain(userName);
});
