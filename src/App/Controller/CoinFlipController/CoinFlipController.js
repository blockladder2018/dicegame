import store from "App/Redux";
import I18n from "App/I18n";
import CoinFlipStore from "App/Redux/CoinFlipStore";

export default class CoinFlipController {

  setCoinSideChosen(coinSideChosen) {
    store.dispatch(CoinFlipStore.action.setCoinSideChosen(coinSideChosen));
  }

  setBetRate(betRate) {
    store.dispatch(CoinFlipStore.action.setBetRate(betRate));
  }
}
