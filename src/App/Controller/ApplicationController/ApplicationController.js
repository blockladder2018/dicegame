import store from "App/Redux";
import I18n from "App/I18n";
import ApplicationStore from "App/Redux/ApplicationStore";

export default class ApplicationController {

  setLocale(locale) {
    I18n.updateLocale(locale);
    store.dispatch(ApplicationStore.action.setCurrentLocale(locale));
  }

}
