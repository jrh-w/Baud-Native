//import { Component } from 'react';
import * as React from 'react';
import { BackHandler, Dimensions, ScrollView } from 'react-native';
import { Appearance } from 'react-native-appearance';

import { Text, StyleProvider, Container, Content, Header, Input, Item, Card, CardItem, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { useScrollToTop } from '@react-navigation/native';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';

import LearnHeader from './sub_components/LearnHeader';

class Learn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let screenWidth = Dimensions.get('window').width;

    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <LearnHeader/>
          <ScrollView showsVerticalScrollIndicator={false} ref={this.props.scrollRef}>
            <Col style={{ marginHorizontal: screenWidth * .05, marginVertical: 10 }}>
                <Item rounded>
                  <Input style={{ paddingLeft: 15 }} placeholder='Search'/>
                </Item>
            </Col>
          <Grid style={{ marginHorizontal: screenWidth * .05, marginBottom: 10 }}>
            <Col>
              <Text cent b>
                Trending
              </Text>
            </Col>
            <Col>
              <Text cent b>
                Recommended
              </Text>
            </Col>
            <Col>
              <Text cent b>
                Categories
              </Text>
            </Col>
          </Grid>
            <Row>
              <Card style={{ width: screenWidth/2 - 20, marginHorizontal: 10 }}>
                <CardItem style={{ alignSelf: 'center' }}>
                  <Col>
                    <Row style={{ height: 120, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Icon type='Ionicons' name='code' style={{ fontSize: 120, width: 115, color: '#D3D3D3', textAlign: 'center' }}/>
                    </Row>
                    <Grid>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat_Bold' }}>
                          Coding
                        </Text>
                      </Row>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Montserrat_Bold', textAlign: 'right', width: '100%' }}>
                          19 courses
                        </Text>
                      </Row>
                    </Grid>
                  </Col>
                </CardItem>
              </Card>
              <Card style={{ width: screenWidth/2 - 20, marginHorizontal: 10 }}>
                <CardItem style={{ alignSelf: 'center'}}>
                  <Col>
                    <Row style={{ height: 120, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Icon type='Ionicons' name='code' style={{ fontSize: 120, width: 115, color: '#D3D3D3', textAlign: 'center' }}/>
                    </Row>
                    <Grid>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat_Bold' }}>
                          Coding
                        </Text>
                      </Row>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Montserrat_Bold', textAlign: 'right', width: '100%' }}>
                          19 courses
                        </Text>
                      </Row>
                    </Grid>
                  </Col>
                </CardItem>
              </Card>
              </Row>
              <Row>
              <Card style={{ width: screenWidth/2 - 20,marginHorizontal: 10 }}>
                <CardItem style={{ alignSelf: 'center'}}>
                  <Col>
                    <Row style={{ height: 120, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Icon type='Ionicons' name='code' style={{ fontSize: 120, width: 115, color: '#D3D3D3', textAlign: 'center' }}/>
                    </Row>
                    <Grid>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat_Bold' }}>
                          Coding
                        </Text>
                      </Row>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Montserrat_Bold', textAlign: 'right', width: '100%' }}>
                          19 courses
                        </Text>
                      </Row>
                    </Grid>
                  </Col>
                </CardItem>
              </Card>
              <Card style={{ width: screenWidth/2 - 20,marginHorizontal: 10 }}>
                <CardItem style={{ alignSelf: 'center'}}>
                  <Col>
                    <Row style={{ height: 120, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                      <Icon type='Ionicons' name='code' style={{ fontSize: 120, width: 115, color: '#D3D3D3', textAlign: 'center' }}/>
                    </Row>
                    <Grid>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Montserrat_Bold' }}>
                          Coding
                        </Text>
                      </Row>
                      <Row style={{ alignItems: 'center', height: 25 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Montserrat_Bold', textAlign: 'right', width: '100%' }}>
                          19 courses
                        </Text>
                      </Row>
                    </Grid>
                  </Col>
                </CardItem>
              </Card>
            </Row>
          </ScrollView>
        </Container>
      </StyleProvider>
    );
  }
}

export default function(props) {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Learn {...props} scrollRef={ref} />;
}

//export default Learn;
