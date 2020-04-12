import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
        {this.props.navigation.state.routeName == this.props.route ?
          <Button onPress={() => this.props.navigation.navigate(this.props.route)} transparent vertical active>
            <Icon active type='Ionicons' name={this.props.icon} />
            <Text>{this.props.route}</Text>
          </Button>
          :
          <Button onPress={() => this.props.navigation.navigate(this.props.route)} transparent vertical light >
            <Icon type='Ionicons' name={this.props.icon} />
            <Text>{this.props.route}</Text>
          </Button>
        }
      </View>
    );
  }
}

export default MenuButton;
