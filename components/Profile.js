//import { AppLoading } from 'expo';
import { Right, H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';
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

import { Dimensions, BackHandler } from 'react-native';

const mapStateToProps = state => {
  return {
    userID: state.userID,
    userStats: state.userStats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStatsData: (data) => dispatch(addStatsData(data))
  };
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      userStats: {}
    };

    this.getDateLabels = this.getDateLabels.bind(this);
    this.getCertificates = this.getCertificates.bind(this);
    this.getChartData = this.getChartData.bind(this);
    this.prepareUserStatsData = this.prepareUserStatsData.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  getDateLabels() {
    let labels = [];

    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentDay = new Date().getDay();

    for(let days = 6; days >= 0; days--) {
      labels[days] = daysOfWeek[currentDay];
      currentDay--;
      if(currentDay < 0) currentDay += 7
    }

    return labels;

  }

  getCertificates(certificates) {

    return new Promise((resolve, reject) => {
      axios.get('https://evening-oasis-01489.herokuapp.com/certificates')
        .then((response) => {
          let CERT_DATABASE = {};
          for(let certificate of response.data){
            CERT_DATABASE[certificate.name] = {
              icon: certificate.icon,
              color: certificate.color,
              bgColor: certificate.bgColor,
              route: certificate.route
            }
          }

          certificates = certificates.split(';');
          let certificatesGroup = [];

          for(let certificate of certificates) {
            if(certificate === '') continue;
            certificate = certificate.split('-');

            certificatesGroup.push(Object.assign(CERT_DATABASE[certificate[0]], {
              name: certificate[0],
              progress: certificate[1]
            }));
          }

          resolve(certificatesGroup);

        }).catch((error) => {
          console.log(error);
        })
    });

  }

  // lastDays -> change stats data length extracted from DB // TO BE IMPLEMENTED

  getChartData(data, lastDays = 7) {
    let lastWeekPoints = new Array(lastDays).fill(0);

    let points = data.points.split(";").slice(Math.abs(lastDays) * -1);
    let date = data.date.split(";").slice(Math.abs(lastDays) * -1);

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

    return [
      {
        data: lastWeekPoints,
        strokeWidth: 2,
      }
    ];
  }

  async prepareUserStatsData(data, lastDays = 7) { // Preparing data from the last week // NEEDS TESTING
    let certificates = await this.getCertificates(data.certificates);

    return new Promise((resolve, reject) => {
      let datasets = this.getChartData(data, lastDays);
      let labels = this.getDateLabels();

      resolve({
        userStats: {
          labels: labels,
          datasets: datasets,
          createdLessons: data.createdLessons,
          userRank: data.userRank,
          userWins: data.userWins
        },
        certificates: certificates
      });
    });

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

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

    axios.get('https://evening-oasis-01489.herokuapp.com/stats', { params: { userID: this.state.userID } })
      .then(async (response) => {
        let preparedStatsData = await this.prepareUserStatsData(response.data);
        this.props.onStatsData(preparedStatsData);
      }).catch((error) => {
        console.log(error);
      })

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Learn');
    return true;
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

    let screenWidth = Dimensions.get('window').width;

    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <ProfileHeader/>
          <Content showsVerticalScrollIndicator={false}>
            <Grid>
              <Body>
                <Col style={{ width: screenWidth * .9 }}>
                  <Row style={{ marginVertical: 10 }}>
                    <H1>
                    Your certificates
                    </H1>
                  </Row>
                </Col>
                <Certificates navigation={this.props.navigation}/>
                <Col style={{ width: screenWidth * .9 }}>
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
