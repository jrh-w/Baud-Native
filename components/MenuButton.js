import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('Login')}style={{ width: 50 }} bordered large rounded>
          <Icon style={{ textColor: '#38A7F1' }} type='Ionicons' name={this.props.icon} />
        </Button>
      </View>
        /*<Button onPress={() => this.props.navigation.navigate({this.props.route})} style={{ width: 50 }} bordered large rounded>
          <Icon style={{ textColor: '#38A7F1' }} type='Ionicons' name={this.props.icon} />
        </Button>*/
        //<Text style={{ textColor: '#38A7F1' }} note>{this.props.name}</Text>
    );
  }
}

export default MenuButton;
