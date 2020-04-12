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
      <Card>
        <CardItem>
          <Grid>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  3
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Created
                </Text>
              </Row>
            </Col>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  27
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Rank
                </Text>
              </Row>
            </Col>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  102
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Wins
                </Text>
              </Row>
            </Col>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}

export default Stats;
