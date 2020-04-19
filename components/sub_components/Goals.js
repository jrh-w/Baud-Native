import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

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
            <Row style={{ marginVertical: 5, flex: 1, justifyContent: 'center' }}>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }]
              }}
              width={Dimensions.get('window').width * .8} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#1DA8F0',
                backgroundGradientFrom: '#1DA8F0',
                backgroundGradientTo: '#7DE0FF',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
                marginHorizontal: 'auto'
              }}
            />
            </Row>
          </Col>
        </CardItem>
      </Card>
    );
  }
}

export default Goals;
