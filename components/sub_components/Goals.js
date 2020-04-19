import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { LineChart } from "react-native-chart-kit";

const mapStateToProps = state => {
  return {
    userStats: state.userStats,
  };
};

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStats: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        userStats: props.userStats,
      };
    }

    return null;
  }

  render() {

    const data = {
      labels: this.state.userStats.labels,
      datasets: this.state.userStats.datasets
    };

    return(
      <View>
      <LineChart
data={data}
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

export default connect(mapStateToProps)(Goals);
