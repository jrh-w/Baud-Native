import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Menu from './Menu';

class Learn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Menu navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default Learn;
