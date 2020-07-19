import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

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

    const test = {
      date: Date.now()
    }

<<<<<<< HEAD
    axios.get('http://baud.epizy.com/getStats.php')
      .then(function(response) {
        console.log(response);
      })
=======
    /*axios.get('http://baud.epizy.com/getStats.php')
      .then(function(response) {
        console.log(response);
      })*/
>>>>>>> 068e7c53a6ce0f65c626a6a71d7e19307d101640

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
              data={data}
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

export default connect(mapStateToProps)(Goals);
