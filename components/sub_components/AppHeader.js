import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, Dimensions } from 'react-native';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <Card style={{ marginTop: 0, paddingTop: 60 }}>
          <CardItem>
            <Body style={{ alignItems: 'center' }}>
              <Row>
                <Image style={{ width: Dimensions.get('window').height*0.2, height: Dimensions.get('window').height*0.2 }} source={require('../../assets/logo.png')} />
              </Row>
              <Row>
                <H1 style={{ marginTop: 20, marginBottom: 10}}>
                  Baud
                </H1>
              </Row>
            </Body>
          </CardItem>
        </Card>
    );
  }
}

export default AppHeader;
