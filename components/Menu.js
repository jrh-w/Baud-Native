import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuButton from './MenuButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Body, Footer, FooterTab } from 'native-base';

import { Button, Icon } from 'native-base';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          icon: 'md-create',
          route: 'Login',
        },
        {
          icon: 'ios-school',
          route: 'Learn',
        },
        {
          icon: 'ios-people',
          route: 'Community',
        },
        {
          icon: 'ios-person',
          route: 'Profile',
        },
        {
          icon: 'md-settings',
          route: 'Settings',
        },
      ]
    };
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <MenuButton id={key.id} icon={item.icon} route={item.route} name={item.route} navigation={this.props.navigation}/>
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

export default Menu;
