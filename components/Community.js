import React, { Component } from 'react';
import {
  Text, StyleProvider, Container, Content, Header, H1, Body, Item, Input, Button, Icon, Card, CardItem, Left
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import CommunityHeader from './sub_components/CommunityHeader';

import { Dimensions } from 'react-native';

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  render() {
    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <CommunityHeader/>
          <Content>
              <Body>
                <Col style={{ width: Dimensions.get('window').width * .8 }}>
                  <Row style={{ marginBottom: 10, marginTop: 20 }}>
                    <H1>All questions</H1>
                  </Row>
                </Col>
                <Grid>
                  <Col style={{ marginHorizontal: Dimensions.get('window').width * .05 }}>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Search' value={this.state.searchValue}
                      onChangeText={searchValue => this.setState({ searchValue: searchValue })}/>
                    </Item>
                  </Col>
                  <Col style={{ width: 50 }}>
                    <Button style={{ width: 35 }} transparent rouded large>
                      <Icon type='Entypo' name='chevron-right' />
                    </Button>
                  </Col>
                </Grid>
                <Col style={{ width: Dimensions.get('window').width * .8 }}>
                  <Card>
                    <CardItem>
                      <Grid>
                        <Col>
                          <Row>
                            <H1 style={{ fontSize: 15 }}>I have this problem...</H1>
                          </Row>
                          <Row>
                            <Text style={{ fontSize: 12 }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                            </Text>
                          </Row>
                        </Col>
                        <Col style={{ width: 35 }}>
                          <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
                            <Button transparent>
                              <Icon type='Entypo' name='chevron-up' style={{ textAlign: 'center' }} />
                            </Button>
                          </Row>
                          <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text note style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>437</Text>
                          </Row>
                          <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
                            <Button transparent>
                              <Icon type='Entypo' name='chevron-down' style={{ textAlign: 'center' }} />
                            </Button>
                          </Row>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                </Col>
              </Body>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default Community;
