import { AppLoading } from 'expo';
import { Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { StatusBar, Image } from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isReady: false
    };
  }

  /*async componentDidMount() {
    await Font.loadAsync({
      Montserrat_Regular: require('../node_modules/native-base/Fonts/Foundation.ttf'),
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
      <Container style={{ backgroundColor: '#F7F7F7' }}>
      <Card style={{ marginTop: -80, paddingTop: 80 }}>
        <CardItem>
          <Body style={{ alignItems: 'center' }}>
            <Row style={{ height: 225 }}>
              <Image style={{ width: 200, height: 200 }} source={require('../assets/logo.png')} />
            </Row>
            <Row style={{ height: 50 }}>
              <H1 style={{ fontFamily: "Montserrat_Bold" }}>
                Baud
              </H1>
            </Row>
          </Body>
        </CardItem>
      </Card>
        <Content>
            <Grid>
              <Body>
                <Col style={{ width: 300 }}>
                  <Body>
                    <Row style={{ marginVertical: 20 }}>
                      <H1>
                      Log in
                      </H1>
                    </Row>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Username or email'/>
                    </Item>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} secureTextEntry={true} placeholder='Password'/>
                    </Item>
                    <Button transparent>
                      <Text>Forgot your password?</Text>
                    </Button>
                    <Row style={{ marginVertical: 20 }}>
                      <Button onPress={() => this.props.navigation.navigate('Menu')}style={{ width: 50 }} bordered large rounded>
                        <Icon type='Entypo' name='chevron-right' />
                      </Button>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                      <Button onPress={() => this.props.navigation.navigate('Sign_Up')} style={{ width: 150 }} bordered large rounded>
                        <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>Sign Up</Text>
                      </Button>
                    </Row>
                  </Body>
                </Col>
              </Body>
            </Grid>
          </Content>
      </Container>
    </StyleProvider>
    );
  }
}

export default Login;
