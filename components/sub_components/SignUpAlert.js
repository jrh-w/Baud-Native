import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import { Card, CardItem, Body, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class SignUpAlert extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <View>
      {this.props.errorText.length > 0 ?
      <Card style={{ backgroundColor: '#33333300', marginTop: 5, marginBottom: 5}}>
        <CardItem style={{ borderWidth: 1, borderColor: '#FF595E', height: Dimensions.get('window').height*0.08 }}>
          <Text style={{ color: '#FF595E', textAlign: 'center', fontSize: 14, marginHorizontal: 10, marginVertical: 5 }}>
            {this.props.errorText}
          </Text>
        </CardItem>
      </Card>
      :
      null
      }
      </View>
    );
  }
}

export default SignUpAlert;
