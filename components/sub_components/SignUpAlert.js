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
      {this.props.invalidData ?
      <Card style={{ backgroundColor: '#33333300', marginTop: 5, marginBottom: 5}}>
        <CardItem style={{ borderWidth: 1, borderColor: '#FF595E', backgroundColor: '#33333300', height: Dimensions.get('window').height*0.08 }}>
          <Body>
            <Col>
              <Row>
                <Text style={{ color: '#FF595E', textAlign: 'center', fontSize: 14, marginHorizontal: 10, marginVertical: 5 }}>
                  {this.props.errorText}
                </Text>
              </Row>
            </Col>
          </Body>
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
