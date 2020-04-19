import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

import { LineChart } from "react-native-chart-kit";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

import { Dimensions } from 'react-native';

class Goals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
<<<<<<< HEAD
      <Card>
        <CardItem>
          <Col>
            <Row style={{ marginVertical: 5 }}>
              <H1>
                Your goal
              </H1>
            </Row>
            <Row style={{ marginVertical: 5 }}>
            <LineChart
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                  data: [
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
              yAxisLabel={'$'}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
            </Row>
          </Col>
        </CardItem>
      </Card>
=======
      <View>
      <LineChart
data={{
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      strokeWidth: 2,
    },
  ],
}}
width={Dimensions.get('window').width - 16}
height={220}
chartConfig={{
  backgroundColor: '#1cc910',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
}}
style={{
  marginVertical: 8,
  borderRadius: 16,
}}
/>
      </View>
>>>>>>> 89b3c90fbd9b1ba22c037df7428642c56fb45563
    );
  }
}

export default Goals;
