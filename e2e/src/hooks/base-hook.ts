import { After, setDefaultTimeout, Status } from 'cucumber';
import { browser } from 'protractor';

setDefaultTimeout(60000);

After(async function(scenario) {
  // Generate a screenshot at the end of each scenario
  if (scenario.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
