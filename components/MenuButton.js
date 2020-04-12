import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, H1 } from 'native-base';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button onPress={() => this.props.navigation.navigate({this.props.navigation})} style={{ width: 50 }} bordered large rounded>
        <Icon type='Ionicons' name={this.props.icon} />
      </Button>
      <H1>{this.props.name}</H1>
    );
  }
}

export default MenuButton;
