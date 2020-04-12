import React, { Component } from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Body, Footer, FooterTab } from 'native-base';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          icon: 'md-create',
          route: 'Login',
          name: 'Create',
          active : true,
        },
        {
          icon: 'ios-school',
          route: 'Learn',
          name: 'Learn',
          active : false,
        },
        {
          icon: 'ios-people',
          route: 'Community',
          name: 'Community',
          active : false,
        },
        {
          icon: 'ios-person',
          route: 'Profile',
          name: 'Profile',
          active : false,
        },
        {
          icon: 'md-settings',
          route: 'Settings',
          name: 'Settings',
          active : false,
        },
      ]
    };
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <Col>
          <MenuButton navigation={this.props.navigation} icon={item.icon} route={item.route} name={item.name} active={item.active}/>
      </Col>
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
