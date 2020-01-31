import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function jf(){
  const [stan, zmienStan] = useState('aktywny');
  return(
    <View>
      <Text>{ stan }</Text>
    </View>
  );
}

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

  }
}
