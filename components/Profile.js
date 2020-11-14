//import { AppLoading } from 'expo';

import React, { Component } from 'react';
import { StatusBar, Image, ScrollView, View, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { connect } from 'react-redux';
import { addStatsData } from '../redux/reduxActions';

import axios from 'axios';

import { Right, H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content,
  Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import * as Font from 'expo-font';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

import ProfileHeader from './sub_components/ProfileHeader';
import Certificates from './sub_components/Certificates';
import Goals from './sub_components/Goals';
import Stats from './sub_components/Stats';

import { prepareUserStatsData } from './sub_components/ProfileFunctions';

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

    axios.get('https://evening-oasis-01489.herokuapp.com/stats', { params: { userID: this.state.userID } })
      .then(async (response) => {
        let preparedStatsData = await prepareUserStatsData(response.data);
        this.props.onStatsData(preparedStatsData);
      }).catch((error) => {
        console.log(error);
      })

  }

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
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
