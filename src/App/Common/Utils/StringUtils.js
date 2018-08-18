import _ from "lodash";

const preconditions = require("preconditions").errr();

class StringUtils {
  static formatNlsString(formattedString, parameters) {
    preconditions.shouldBeString(formattedString, "NLS [" + formattedString + "] is not a string").test();

    let result = formattedString;
    if (parameters) {
      parameters.forEach((parameter, index) => {
        result = result.replace("{" + index + "}", parameter);
      });
    }
    return result;
  }
}

export default StringUtils;
