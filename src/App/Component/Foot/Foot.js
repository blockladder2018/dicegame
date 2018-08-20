import React from "react";

import "./FootStyles.less";
import I18n, { keys as k } from "App/I18n";

const Foot = (props) => {

  return (
    <div className="foot">
      <a href="">{I18n.t(k.L_Contact_Us)}</a>
    </div>
  );
};

export default Foot;
