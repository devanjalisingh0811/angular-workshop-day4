import { browser, by, element, Key } from 'protractor';

export class ParentPage {
  navigateTo() {
    return browser.get("/#/components") as Promise<any>;
  }

  getAllTitleText() {
    return element.all(by.css('h2'));
  }

  getSubTitleText() {
    return element(by.css('h3'));
  }

  getLabelElement() {
    return element(by.tagName('label'));
  }

  getAllButton(){
    return element.all(by.css('button'));
  }

  getTextFieldElement() {
    return element(by.css('.container .textData'));
  }
  
}
