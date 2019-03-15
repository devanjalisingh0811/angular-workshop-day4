import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h4')).getText() as Promise<string>;
  }

  getUpdateAButton(){
    return element(by.cssContainingText('button', 'Update A'));
  }

  getUpdateBButton(){
    return element(by.cssContainingText('button', 'Update B'));
  }

  getTextBInput(){
    return element(by.css('textB'));
  }

  getAllLinkElements() {
    return element.all(by.css('a'));
  }

  selectNextKey() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }

  selectPrevKey() {
    browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }

  selectEscapeKey() {
    browser.actions().sendKeys(Key.ESCAPE).perform();
  }
}
