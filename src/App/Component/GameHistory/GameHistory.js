import React, { Component } from "react";
import axios from "axios";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import "./GameHistoryStyles.less";
import I18n, { keys as k } from "App/I18n";
import { ApplicationController } from "App/Controller";

class GameHistory extends Component {

  state = {
    loading: false,
    hasMore: true,
  }

  componentDidMount() {
    ApplicationController.fetchHistoryData().then(() => {
      console.log("Successfully fetched history data");
    }).catch(() => {
      console.log("Error in fetching history data");
    });
  }

  renderDetails(item) {
    return (
      <div class="tiny-text">
        <p>Address: {item.address_from}</p>
        <p>Bet: {item.amount}</p>
      </div>
    );
  }

  renderItem(item) {
    return (
      <button className="button-row" onClick={() => console("clicked")}>
        <List.Item className="history-row ">
          <div>
            <p>{item.address_from.substring(0, 8)}</p>
          </div>
          <div>
            <p>{(item.amount / 3000000000000000000).toFixed(2)}</p>
          </div>
          <div>
            <img src={item.bet_mask === "1" ? "./src/App/Images/coin-head.png" : "./src/App/Images/coin-tail.png"} width="15" height="15" />
          </div>
          <div>
            <img src={item.dice_payment === "0" && item.bet_mask === "1" ? "./src/App/Images/coin-tail.png" : "./src/App/Images/coin-head.png"} width="15" height="15" />
          </div>
          <div>
            <p>{(item.dice_payment / 3000000000000000000).toFixed(2)}</p>
          </div>
        </List.Item>
        {this.renderDetails(item)}
      </button>
    );
  }

  handleInfiniteOnLoad = (games) => {
    let data = games;
    this.setState({
      loading: true,
    });
    if (data.length > 20) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    data = data.concat(games);
    this.setState({
      data,
      loading: false,
    });
  }

  renderHeader() {
    return (
      <div className="caption-section">
        <p>{I18n.t(k.L_Player)}</p>
        <p>{I18n.t(k.L_Bet)}</p>
        <p>{I18n.t(k.L_Result)}</p>
      </div>
    );
  }

  renderHistoryList(games) {
    return (
      <div className="infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={() => {this.handleInfiniteOnLoad(games)}}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            size="small"
            dataSource={games}
            header={this.renderHeader()}
            renderItem={item => this.renderItem(item)}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }

  render() {
    if (!this.props.historyData) {
      return null;
    }

    return (
      <div className="game-history">
        <p className="title">{I18n.t(k.L_Game_history)}</p>
        {this.renderHistoryList(this.props.historyData.games)}
      </div>
    );
  }
};

const mapStateToProps = ({ application }) => {
  return {
    historyData: application.historyData,
  }
};

export default connect(mapStateToProps)(GameHistory);
