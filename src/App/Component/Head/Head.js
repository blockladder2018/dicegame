import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, message } from "antd";

import "./HeadStyles.less";
import { ApplicationController } from "App/Controller";
import I18n, { keys as k } from "App/I18n";

const renderFlag = (locale) => {
  let imgPath
  switch (locale) {
  case "zh":
    imgPath = "src/App/Images/flag-china.png";
    break;
  case "en":
    imgPath = "src/App/Images/flag-usa.png";
    break;
  default:
    imgPath = "src/App/Images/flag-china.png";
  }
  return <img src={imgPath} alt={imgPath} width="30px" />;
}

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
  ApplicationController.setLocale(key);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="zh">
      {renderFlag("zh")}
      {I18n.t(k.L_Chinese)}
    </Menu.Item>
    <Menu.Item key="en">
      {renderFlag("en")}
      {I18n.t(k.L_English)}
    </Menu.Item>
  </Menu>
);

class Head extends Component {

  render() {
    return (
      <div className="head">
        <a href="">
          <img src="src/App/Images/diamond.png" alt="diamond.png" width="50px" />
        </a>

        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            {renderFlag(this.props.currentLocale)}
          </a>
        </Dropdown>
      </div>
    );
  }
}

const mapStateToProps = ({ application }) => {
  return {
    currentLocale: application.currentLocale,
  }
}

export default connect(mapStateToProps)(Head);
