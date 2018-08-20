import axios from "axios";

import store from "App/Redux";
import I18n from "App/I18n";
import ApplicationStore from "App/Redux/ApplicationStore";

export default class ApplicationController {

  clearApplication() {
    return store.dispatch(ApplicationStore.action.clearApplication());
  }

  setLocale(locale) {
    I18n.updateLocale(locale);
    store.dispatch(ApplicationStore.action.setCurrentLocale(locale));
  }

  fetchHistoryData() {
    return new Promise((resolve, reject) => {
      return axios.get("https://dice2.win/api/v1/games/history?gameId=0&network_id=1")
        .then(response => {
          console.log(response);
          const historyData = response.data;
          store.dispatch(ApplicationStore.action.setHistoryData(historyData));
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject();
        });
    });
  }

}
