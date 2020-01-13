import React, { Component } from 'react';
import { View } from 'react-native';
import { Image, Examples } from '@shoutem/ui';

class Login extends Component {
  render() {
    return(
      <View>
        <View style={{ flex: 1, width: '100%', height: '300pt'}} styleName="horizontal h-center">
            <Image
              styleName="medium-square"
              source={require('../assets/logo.png')}
            />
        </View>
      </View>
    );
  }
}

export default Login;
