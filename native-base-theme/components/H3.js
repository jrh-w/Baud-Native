// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const h3Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH1,
    //fontWeight: 'bold',
    fontFamily: 'Montserrat_Bold'
  };

  return h3Theme;
};
