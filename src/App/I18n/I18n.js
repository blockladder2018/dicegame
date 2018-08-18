import _ from "lodash";

import StringUtils from "App/Common/Utils/StringUtils";
import LocaleController from "App/Controller/LocaleController";

export default class I18n {
  constructor() {
    this._localeData = LocaleController.getDefaultLocaleObject().localeData;
  }

  updateLocale(locale) {
    this._localeData = LocaleController.getLocaleObject(locale).localeData;
  }

  t(nlsKey, nlsParams) {
    if (!this._localeData[nlsKey]) {
      return nlsKey;
    }
    const translation = StringUtils.formatNlsString(this._localeData[nlsKey], nlsParams);
    if (!translation) {
      return nlsKey;
    }
    return translation;
  }

  get keys() {
    return _.mapValues(this._localeData, (v, k) => k);
  }
}
