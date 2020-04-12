import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

class Goals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card>
        <CardItem>
          <Col>
            <Row style={{ marginVertical: 5 }}>
              <H1>
                Your goal
              </H1>
            </Row>
            <Row style={{ marginVertical: 5 }}>
              <Text>
                tutaj bedzie wykres jak go zrobimy
              </Text>
            </Row>
          </Col>
        </CardItem>
      </Card>
    );
  }
}

export default Goals;
