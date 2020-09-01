import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

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
      points: 0
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
        <Card style={{ marginTop: -80, paddingTop: 80, marginBottom: 0, paddingBottom: 15 }}>
          <CardItem style={{ paddingLeft: 0, paddingRight: 0}}>
            <Body>
              <Row style={{ height: 35, marginHorizontal: 10, marginLeft: 30}}>
                <Left>
                  <H1 style={{ fontFamily: "Montserrat_Bold" }}>
                    Your Courses
                  </H1>
                </Left>
              </Row>
              <Row style={{ height: 180 }}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                  <Card style={{ marginHorizontal: 10, width: Dimensions.get('window').width * .8 }}>
                    <CardItem style={{ backgroundColor: '#619648', borderColor: '#619648' }}>
                      <Grid>
                        <Col style={{flex: 1, alignSelf: 'center'}}>
                          <Icon type='Entypo' name='database' style={{ color: '#fff', fontSize: 60, width:66}}/>
                        </Col>
                        <Col style={{flex:3}}>
                          <H1 style={{ color: '#fff', marginVertical: 10 }}>
                          MongoDB
                          </H1>
                          <Text style={{ color: '#fff', fontSize: 10, marginBottom: 10 }}>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Text>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                  <Card style={{ marginHorizontal: 10, width: Dimensions.get('window').width * .8 }}>
                    <CardItem style={{ backgroundColor: '#619648', borderColor: '#619648' }}>
                      <Grid>
                        <Col style={{flex: 1, alignSelf: 'center'}}>
                          <Icon type='Entypo' name='database' style={{ color: '#fff', fontSize: 60, width:66}}/>
                        </Col>
                        <Col style={{flex:3}}>
                          <H1 style={{ color: '#fff', marginVertical: 10 }}>
                          MongoDB
                          </H1>
                          <Text style={{ color: '#fff', fontSize: 10, marginBottom: 10 }}>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </Text>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                </ScrollView>
              </Row>
            </Body>
          </CardItem>
        </Card>
    );
  }
}

export default connect(mapStateToProps)(LearnHeader);
