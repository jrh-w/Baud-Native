import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  {this.props.value}
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  {this.props.name}
                </Text>
              </Row>
            </Col>
    );
  }
}

export default Stats;
