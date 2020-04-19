import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

import { LineChart } from "react-native-chart-kit";

class Goals extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
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
    );
  }
}

export default Goals;
