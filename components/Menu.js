import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuButton from './MenuButton';

import { Button, Icon } from 'native-base';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          icon: 'md-create',
          route: 'Create',
          name: 'Create',
          active : 1,
        },
        {
          icon: 'ios-school',
          route: 'Learn',
          name: 'Learn',
          active : 0,
        },
        {
          icon: 'ios-people',
          route: 'Community',
          name: 'Community',
          active : 0,
        },
        {
          icon: 'ios-person',
          route: 'Profile',
          name: 'Profile',
          active : 0,
        },
        {
          icon: 'md-settings',
          route: 'Settings',
          name: 'Settings',
          active : 0,
        },
      ]
    };
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <MenuButton icon={item.icon} route={item.route} name={item.name} active={item.active} navigation={this.props.navigation}/>
    );

    return(
      <View>
        {this.buttons}
      </View>
    );
  }
}

export default Menu;
