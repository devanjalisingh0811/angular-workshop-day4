import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
   it('should display title message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Displaying Data');
  });


  it('should play with Update A Button', () => {
    page.navigateTo();
    page.getUpdateAButton().click();
    // Test alert is what you expect
    var popupAlert = browser.switchTo().alert();
    expect(popupAlert.getText()).toMatch('Update Text A value');
    popupAlert.dismiss();
  });

  it('should play with Update B Button', () => {
    page.navigateTo();
    page.getUpdateBButton().click();
    // Test alert is what you expect
    var popupAlert = browser.switchTo().alert();
    expect(popupAlert.getText()).toMatch('Update Text B value');
    popupAlert.dismiss();

  });


  it('should navigate to reactive-forms', () => {
    page.navigateTo();
    expect(page.getAllLinkElements().count()).toBe(5);
    page.getAllLinkElements().get(1).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/#/reactive-forms');
  });

  
  it('should navigate to template-driven-form', () => {
    page.navigateTo();
    expect(page.getAllLinkElements().count()).toBe(5);
    page.getAllLinkElements().get(2).click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/#/template-driven-form');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
