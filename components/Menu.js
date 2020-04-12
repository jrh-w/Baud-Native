import React, { Component } from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
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
