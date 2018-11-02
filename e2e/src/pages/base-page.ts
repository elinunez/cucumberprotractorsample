import { by, element } from 'protractor';

export class BasePage {
  ElementLocator(obj) {
    switch (obj.type) {
      case IdentificationType[IdentificationType.Id]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.Css]:
        return element(by.css(obj.value));
      case IdentificationType[IdentificationType.Xpath]:
        return element(by.xpath(obj.value));
      case IdentificationType[IdentificationType.Name]:
        return element(by.Name(obj.value));
      case IdentificationType[IdentificationType.LinkText]:
        return element(by.linkText(obj.value));
      case IdentificationType[IdentificationType.Js]:
        return element(by.js(obj.value));
      case IdentificationType[IdentificationType.PartialLinkText]:
        return element(by.partialLinkText);
      case IdentificationType[IdentificationType.ClassName]:
        return element(by.className(obj.value));
      case IdentificationType[IdentificationType.TagName]:
        return element(by.tagName(obj.value));
      default:
        break;
    }
  }
}

export enum IdentificationType {
  Id,
  Name,
  Css,
  Xpath,
  LinkText,
  Js,
  PartialLinkText,
  ClassName,
  TagName
}
