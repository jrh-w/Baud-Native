import React, { Component } from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';

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
      <MenuButton icon={item.icon} route={item.route} name={item.name} active={item.active}/>
    );

    return(
      <View>
        {this.buttons}
      </View>
    );
  }
}

export default Menu;
