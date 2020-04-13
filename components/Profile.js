import { AppLoading } from 'expo';
import { Right, H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image, ScrollView } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import ProfileHeader from './sub_components/ProfileHeader';
import Certificates from './sub_components/Certificates';
import Goals from './sub_components/Goals';
import Stats from './sub_components/Stats';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isReady: false
    };
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
          <ProfileHeader />
          <Content showsVerticalScrollIndicator={false}>
            <Grid>
              <Body>
                <Col style={{ width: 300 }}>
                  <Row style={{ marginVertical: 10 }}>
                    <H1>
                    Your certificates
                    </H1>
                  </Row>
                </Col>
                <Certificates navigation={this.props.navigation}/>
                <Col style={{ width: 300 }}>
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
export default Profile;
