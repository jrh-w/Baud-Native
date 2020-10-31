import React, { Component } from 'react';

import { Right, H2, H3, Left, Footer, StyleProvider, Container, Text, Header, Content, Card, CardItem, Body, Thumbnail, H1, Item, Input, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, ScrollView, Dimensions, View } from 'react-native';
import { connect } from 'react-redux';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';


const mapStateToProps = state => {
  return {
    name: state.name,
    points: state.points
  };
};

class LearnHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      points: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
         name: props.name,
         points: props.points
      };
    }
    return null;
  }

  render() {
    return(
        <Card style={{ marginTop: -60, paddingTop: 80, marginBottom: 0, paddingBottom: 15 }}>
          <CardItem style={{ paddingLeft: 0, paddingRight: 0}}>
            <Body>
              <Row style={{ height: 35, marginHorizontal: 10, marginLeft: 30}}>
                <Left>
                  <H1 style={{ fontFamily: "Montserrat_Bold" }}>
                    Your Courses
                  </H1>
                </Left>
              </Row>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row', width: '100%' }}>
                  <Row>
                      <Card style={{ marginHorizontal: 10, backgroundColor: '#619648' }}>
                        <CardItem style={{ width: 300, height: 188, marginHorizontal: 10, backgroundColor: '#619648' }}>
                          <Grid>
                            <Col style={{ width: 75, justifyContent: 'center'}}>
                                <Icon type='Ionicons' name='cloud' style={{ fontSize: 60, width: 75, color: '#fff' }}/>
                            </Col>
                            <Col>
                              <Row style={{ height: 50}}>
                                <H1 style={{color: '#fff'}}>MongoDB</H1>
                              </Row>
                              <Row style={{ height: 100}}>
                                <Text sm style={{color: '#fff'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</Text>
                              </Row>
                            </Col>
                          </Grid>
                        </CardItem>
                      </Card>
                      <Card style={{ marginHorizontal: 10}}>
                        <CardItem style={{ width: 300, height: 188, marginHorizontal: 10 }}>
                          <Grid>
                            <Col style={{ width: 75, justifyContent: 'center'}}>
                                <Icon type='Ionicons' name='cloud' style={{ fontSize: 50, width: 75 }}/>
                            </Col>
                            <Col>
                              <Row style={{ height: 50 }}>
                                <H1>MongoDB</H1>
                              </Row>
                              <Row style={{ height: 100 }}>
                                <Text sm>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</Text>
                              </Row>
                            </Col>
                          </Grid>
                        </CardItem>
                      </Card>
                      <Card style={{ marginHorizontal: 10 }}>
                        <CardItem style={{ width: 300, height: 188, marginHorizontal: 10 }}>
                          <Grid>
                            <Col style={{ width: 75, justifyContent: 'center'}}>
                                <Icon type='Ionicons' name='cloud' style={{ fontSize: 50, width: 75 }}/>
                            </Col>
                            <Col>
                              <Row style={{ height: 50 }}>
                                <H1>MongoDB</H1>
                              </Row>
                              <Row style={{ height: 100 }}>
                                <Text sm>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</Text>
                              </Row>
                            </Col>
                          </Grid>
                        </CardItem>
                      </Card>
                  </Row>
                </ScrollView>
              </Body>
            </CardItem>
          </Card>
    );
  }
}

export default connect(mapStateToProps)(LearnHeader);
