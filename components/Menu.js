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
          navigation: 'Create',
          name: 'Create',
          active : true,
        },
        {
          icon: 'ios-school',
          navigation: 'Learn',
          name: 'Learn',
          active : false,
        },
        {
          icon: 'ios-people',
          navigation: 'Community',
          name: 'Community',
          active : false,
        },
        {
          icon: 'ios-person',
          navigation: 'Profile',
          name: 'Profile',
          active : false,
        },
        {
          icon: 'md-settings',
          navigation: 'Settings',
          name: 'Settings',
          active : false,
        },
      ]
    };
  }

  render() {

    this.buttons = this.state.icons.map((item, key) =>
      <MenuButton icon={item.icon} navigation={item.navigation} name={item.name} active={item.active}/>
    );

    return(
      <View>
        {this.buttons}
      </View>
    );
  }
}

export default Menu;
