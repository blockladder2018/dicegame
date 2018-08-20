import _ from "lodash";

import store from "App/Redux";
import LocaleObjects from "App/I18n/locales";

export default class LocaleController {
  static DEFAULT_LOCALE_OBJECT = _.find(LocaleObjects, (localeObject) => localeObject.locale === "zh");
  static DEFAULT_LOCALE_FORMAT = "lll";

  static getDefaultLocaleObject() {
    return LocaleController.DEFAULT_LOCALE_OBJECT;
  }

  static getLocaleObject(locale) {
    const localeData = _.find(LocaleObjects, (localeObject) => localeObject.locale === locale);
    if (!localeData) {
      throw Error("Cannot find locale data for locale: " + locale);
    }
    return localeData;
  }
}
