import store from "App/Redux";
import I18n from "App/I18n";
import ApplicationRedux from "App/Redux/Application";

export default class ApplicationController {

  setLocale(locale) {
    I18n.updateLocale(locale);
    store.dispatch(ApplicationRedux.action.setCurrentLocale(locale));
  }

}
