import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      {this.props.active ? (
        <Button onPress={() => this.props.navigation.navigate({this.props.navigation})} style={{ width: 50 }} bordered large rounded>
          <Icon style={{ textColor: '#38A7F1' }} type='Ionicons' name={this.props.icon} />
        </Button>
        <Text style={{ textColor: '#38A7F1' }} note>{this.props.name}</Text>
      ) : (
        <Button onPress={() => this.props.navigation.navigate({this.props.navigation})} style={{ width: 50 }} bordered large rounded>
          <Icon style={{ textColor: '#C3C3C3' }} type='Ionicons' name={this.props.icon} />
        </Button>
        <Text style={{ textColor: '#C3C3C3' }} note>{this.props.name}</Text>
      )}
    );
  }
}

export default MenuButton;
