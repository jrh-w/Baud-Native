import React, { Component } from 'react';
import {
  Text, StyleProvider, Container, Content, Header, H1, Body, Item, Input, Button, Icon, Card, CardItem, Left
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import CommunityHeader from './sub_components/CommunityHeader';
import Questions from './sub_components/Questions';

import { Dimensions, ScrollView } from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    lastUpdateOfQuestions: state.lastUpdateOfQuestions,
    lastQuestionDate: state.lastQuestionDate
  }
}

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      questions: [],
      lastQuestionDate: '',
      lastUpdateOfQuestions: ''
    };

    this.loadQuestions = this.loadQuestions.bind(this);
    this.scrolledToBottom = this.scrolledToBottom.bind(this);
  }

  loadQuestions(numberOfQuestions, lastDate = this.state.lastUpdateOfQuestions) {
    let input = {
      lastDate: lastDate,
      quantity: numberOfQuestions
    };

    axios.post('https://evening-oasis-01489.herokuapp.com/questions', input)
    .then((response) => {
      console.log(response.data);
    });
  }

  scrolledToBottom(nativeEvent) {
    let currentPosition = parseInt(nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height);
    let scrollBorder = parseInt(nativeEvent.contentSize.height);

    if(currentPosition >= scrollBorder) {
      console.log('end of scroll');
      // LOAD MORE QUESTIONS
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.questions !== state.questions) {
      return {
         questions: props.questions,
         lastUpdateOfQuestions: props.lastUpdateOfQuestions,
         lastQuestionDate: props.lastQuestionDate
      };
    }
    return null;
  }

  componentDidMount() {
    // ARE THERE ANY QUESTIONS ?
    if(this.state.questions.length === 0) {
      this.loadQuestions(2);
    } else {
      let lastDate = this.state.questions[this.state.questions.length - 1].timestamp;
      // FUNCTION TO CHECK FOR NEW QUESTIONS
    }
  }

  render() {

    let screenWidth = Dimensions.get('window').width;

    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <CommunityHeader/>
          <Content
          onMomentumScrollEnd={({ nativeEvent }) => { this.scrolledToBottom(nativeEvent) } }>
              <Body>
                <Col style={{ width: screenWidth * .8 }}>
                  <Row style={{ marginBottom: 10, marginTop: 20 }}>
                    <H1>Top questions</H1>
                  </Row>
                </Col>
                <Grid>
                  <Col style={{ marginHorizontal: screenWidth * .05 }}>
                    <Item rounded>
                      <Input style={{ paddingLeft: 15 }} placeholder='Search' value={this.state.searchValue}
                      onChangeText={searchValue => this.setState({ searchValue: searchValue })}/>
                    </Item>
                  </Col>
                </Grid>
                <Col style={{ width: screenWidth * .8 }}>
                  <Questions navigation={this.props.navigation}/>
                </Col>
              </Body>
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps)(Community);
