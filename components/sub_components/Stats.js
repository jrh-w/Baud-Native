import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Text, Left } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    userStats: state.userStats, // Nie biorąc całego zestawu, nie otrzymujemy danych
    //createdLessons: state.userStats.createdLessons,
    //userRank: state.userStats.userRank,
    //userWins: state.userStats.userWins
  };
};

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdLessons: 0,
      userRank: 0,
      userWins: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        createdLessons: props.userStats.createdLessons,
        userRank: props.userStats.userRank,
        userWins: props.userStats.userWins
      };
    }

    return null;
  }

  render() {

    return(
      <Card>
        <CardItem>
          <Grid>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  { this.state.createdLessons }
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Created
                </Text>
              </Row>
            </Col>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  { this.state.userRank }
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Rank
                </Text>
              </Row>
            </Col>
            <Col>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <H1>
                  { this.state.userWins }
                </H1>
              </Row>
              <Row style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text>
                  Wins
                </Text>
              </Row>
            </Col>
          </Grid>
        </CardItem>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(Stats);
