import { browser, logging } from 'protractor';
import { ParentPage } from './parent.po';

describe('workspace-project Parent', () => {
  let page: ParentPage;

  beforeEach(() => {
    page = new ParentPage();
  });

  it('should display title message', () => {
    page.navigateTo();
    expect(page.getAllTitleText().count()).toBe(2);
    expect(page.getAllTitleText().get(0).getText()).toEqual('Hello! I am Child');
    expect(page.getAllTitleText().get(1).getText()).toEqual('Hello! I am Parent');
  });

  it('should play with button', () => {
    page.navigateTo();
    expect(page.getAllButton().get(0).getText()).toEqual('Request Money');

    // Raise request for money by clicking on button
    page.getAllButton().get(0).click();
    var popupAlert = browser.switchTo().alert();
    expect(popupAlert.getText()).toMatch('Okay! I Received Request for Money');
    popupAlert.dismiss();

    //Money request has been sent now, so parent components button for will be displayed
    // as we have added *ngIf="isMoneyRequested"
    expect(page.getAllButton().count()).toBe(3);
    expect(page.getAllButton().get(1).getText()).toEqual('Send Pocket Money');
    expect(page.getAllButton().get(2).getText()).toEqual('Deduct Pocket Money');

    // Deduct pocket money by clicking on button
    page.getAllButton().get(2).click();

    // We have deducted pocket money to 20 rs
    expect(page.getSubTitleText().getText()).toMatch("I got : 20");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
