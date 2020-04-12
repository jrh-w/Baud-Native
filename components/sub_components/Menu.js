import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Body, Footer, FooterTab } from 'native-base';
import { connect } from 'react-redux';

import MenuButton from './MenuButton';

const mapStateToProps = state => {
  return {
    icons: state.icons
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.icons !== state.icons) {
      return {
        icons: props.icons
      };
    }

    return null;
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <MenuButton key={key} icon={item.icon} route={item.route} navigation={this.props.navigation}/>
    );

    return(
        <Footer>
          <FooterTab>
            {this.buttons}
          </FooterTab>
        </Footer>
    );
  }
}

export default connect(mapStateToProps)(Menu);
