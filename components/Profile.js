import { AppLoading } from 'expo';
import { Right, H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { addStatsData } from '../redux/reduxActions';

import { StatusBar, Image, ScrollView, View } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import ProfileHeader from './sub_components/ProfileHeader';
import LearnHeader from './sub_components/LearnHeader';
import Certificates from './sub_components/Certificates';
import Goals from './sub_components/Goals';
import Stats from './sub_components/Stats';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

import { Dimensions } from 'react-native';

  return {
    userID: state.userID,
    userStats: state.userStats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStatsData: data => dispatch(addStatsData(data))
  };
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isReady: false
      userID: 0,
      userStats: {}
    };

    this.prepareChartData = this.prepareChartData.bind(this);
    this.getDateLabels = this.getDateLabels.bind(this);
  }

  getDateLabels() {
    let labels = [];

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = new Date().getDay();

    for(let days = 6; days >= 0; days--) {
      labels[days] = daysOfWeek[currentDay];
      currentDay--;
      if(currentDay < 0) currentDay += 7
    }

    return labels;

  }

  prepareChartData(data) { // Preparing data from the last week // NEEDS TESTING
    let lastWeekPoints = [];

    let points = data.points.split(";").slice(-7);
    let date = data.date.split(";").slice(-7);

    let currentDate = Date.now() / 1000; // Current time in seconds
    let offset = new Date().getTimezoneOffset();

    let calculatedLocalMidnight = (parseInt(currentDate / 86400)*86400) + (offset*60)

    for(let d = 0; d < date.length; d++) {
      if(date[d] < calculatedLocalMidnight-(86400*6)) continue;

      for(let day = 6; day >= 0; day--) {

        if(date[d] >= calculatedLocalMidnight-(86400*day)
        && date[d] < calculatedLocalMidnight-(86400*(day-1))) {
          lastWeekPoints[6-day] = points[d];
        }

      }
    }

    let labels = this.getDateLabels();

    let datasets = [
      {
        data: points,
        strokeWidth: 2,
      }
    ];

    return {
      labels: labels,
      datasets: datasets
    }

  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        userID: props.userID,
        userStats: props.userStats
      };
    }

    return null;
  }

  componentDidMount() {

    /*axios.get('https://evening-oasis-01489.herokuapp.com/stats', { params: { userID: this.state.userID } })
      .then((response) => {
        //let stats = response.data;
        this.props.onStatsData(response.data);
        //console.log(this.state.userStats.points);
        console.log(this.prepareChartData(response.data));
      }).catch((error) => {
        console.log(error);
      })*/

  }

/*  async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('../assets/fonts/Montserrat/Montserrat_Regular.ttf'),
      Montserrat_Bold: require('../assets/fonts/Montserrat/Montserrat_Bold.ttf'),
      SemiBold: require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }*/

  render() {

  /*  if (!this.state.isReady) {
      return <AppLoading />;
    }*/

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <ProfileHeader/>
          <Content showsVerticalScrollIndicator={false}>
            <Grid>
              <Body>
                <Col style={{ width: Dimensions.get('window').width * .9 }}>
                  <Row style={{ marginVertical: 10 }}>
                    <H1>
                    Your certificates
                    </H1>
                  </Row>
                </Col>
                <Certificates navigation={this.props.navigation}/>
                <Col style={{ width: Dimensions.get('window').width * .9 }}>
                  <Goals />
                  <Stats />
                </Col>
              </Body>
            </Grid>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
