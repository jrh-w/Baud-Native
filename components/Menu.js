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
      <MenuButton id={key.id} icon={item.icon} route={item.route} name={item.name} active={item.active} navigation={this.props.navigation}/>
    );

    return(
      <View>
        {this.buttons}
      </View>
    );
  }
}

export default Menu;
