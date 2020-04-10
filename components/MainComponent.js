import { AppLoading } from 'expo';
import { H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image, ScrollView } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('../assets/fonts/Montserrat/Montserrat_Regular.ttf'),
      Montserrat_Bold: require('../assets/fonts/Montserrat/Montserrat_Bold.ttf'),
      SemiBold: require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{ backgroundColor: '#F7F7F7' }}>
          <Card style={{ marginTop: -80, paddingTop: 80 }}>
            <CardItem>
            <Body>
                <Row style={{ height: 115, marginVertical: 40, marginHorizontal: 10}}>
                <Left>
                  <H1>
                    Name Surname
                  </H1>
                  <Text note>
                    1204 points
                  </Text>
                </Left>
                  <Image style={{ width: 115, height: 115, borderRadius: 100 }} source={require('../assets/logo.png')} />
                </Row>
              </Body>
            </CardItem>
          </Card>
          <Content>
            <Grid>
              <Body>
                <Col style={{ width: 300 }}>
                  <Row style={{ marginVertical: 10 }}>
                    <H1>
                    Your certificates
                    </H1>
                  </Row>
                </Col>
              <ScrollView alwaysBounceVertical='false' style={{ paddingLeft: 20 }}>
                  <Row>
                    <Card style={{ width: 150, marginRight: 20 }}>
                      <CardItem style={{ backgroundColor: '#FEDE40' }}>
                        <Body style={{ alignItems: 'center' }}>
                          <Col>
                            <Body>
                              <Row>
                                <Icon type='AntDesign' name='home' />
                                <H1 style={{ fontSize: 12, marginLeft: 10 }}>
                                  JS Basics
                                </H1>
                              </Row>
                              <Row style={{ marginTop: 5 }}>
                                <H1 style={{ fontSize: 15 }}>
                                  COMPLETED
                                </H1>
                              </Row>
                            </Body>
                          </Col>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card style={{ width: 150, marginRight: 20 }}>
                      <CardItem style={{ backgroundColor: '#FEDE40' }}>
                        <Body style={{ alignItems: 'center' }}>
                          <Col>
                            <Body>
                              <Row>
                                <Icon type='AntDesign' name='home' />
                                <H1 style={{ fontSize: 12, marginLeft: 10 }}>
                                  JS Basics
                                </H1>
                              </Row>
                              <Row style={{ marginTop: 5 }}>
                                <H1 style={{ fontSize: 15 }}>
                                  COMPLETED
                                </H1>
                              </Row>
                            </Body>
                          </Col>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card style={{ width: 150 }}>
                      <CardItem style={{ backgroundColor: '#FEDE40' }}>
                        <Body style={{ alignItems: 'center' }}>
                          <Col>
                            <Body>
                              <Row>
                                <Icon type='AntDesign' name='home' />
                                <H1 style={{ fontSize: 12, marginLeft: 10 }}>
                                  JS Basics
                                </H1>
                              </Row>
                              <Row style={{ marginTop: 5 }}>
                                <H1 style={{ fontSize: 15 }}>
                                  COMPLETED
                                </H1>
                              </Row>
                            </Body>
                          </Col>
                        </Body>
                      </CardItem>
                    </Card>
                  </Row>
                </ScrollView>
                <Col style={{ width: 300 }}>
                  <Card>
                    <CardItem>
                      <Col>
                        <Row style={{ marginVertical: 5 }}>
                          <H1>
                            Your goal
                          </H1>
                        </Row>
                        <Row style={{ marginVertical: 5 }}>
                          <Text>
                            tutaj bedzie wykres jak go zrobimy
                          </Text>
                        </Row>
                      </Col>
                    </CardItem>
                  </Card>
                  <Card>
                    <CardItem>
                      <Col>
                        <Row>
                          <H1>
                            0
                          </H1>
                        </Row>
                        <Row>
                          <Text>
                            Created
                          </Text>
                        </Row>
                      </Col>
                    </CardItem>
                  </Card>
                </Col>
              </Body>
            </Grid>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default Main;
