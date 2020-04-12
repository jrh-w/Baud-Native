import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card style={{ marginTop: -80, paddingTop: 80 }}>
        <CardItem>
          <Body style={{ alignItems: 'center' }}>
            <Row style={{ height: 225 }}>
              <Image style={{ width: 200, height: 200 }} source={require('../../assets/logo.png')} />
            </Row>
            <Row style={{ height: 50 }}>
              <H1>
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
