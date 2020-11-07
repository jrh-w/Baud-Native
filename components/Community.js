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

import { Dimensions, ScrollView, BackHandler, RefreshControl, View } from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';
import { addQuestionsData, removeQuestionsData } from '../redux/reduxActions';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    lastUpdateOfQuestions: state.lastUpdateOfQuestions,
    lastQuestionDate: state.lastQuestionDate,
    preventLoadingQuestions: state.preventLoadingQuestions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQuestionsData: (data) => dispatch(addQuestionsData(data)),
    onRemoveQuestionsData: () => dispatch(removeQuestionsData())
  };
}

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      questions: [],
      lastQuestionDate: '',
      lastUpdateOfQuestions: '',
      preventLoadingQuestions: false,
      refreshing: false,
      loading: true,
      questionQuantity: 10
    };

    this.loadQuestions = this.loadQuestions.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.scrolledToBottom = this.scrolledToBottom.bind(this);
  }

  async loadQuestions(numberOfQuestions, questionsEmpty = false) {

    if(this.state.preventLoadingQuestions) return;
    else this.setState({ preventLoadingQuestions: true });

    let input = {
      quantity: numberOfQuestions,
      questionsAmount: 0
    };

    if(!questionsEmpty) {
      let questionsLength = this.state.questions.length - 1;

      Object.assign(input, {
        lastDate: this.state.questions[questionsLength].timestamp,
        id: this.state.questions[questionsLength].id,
        questionsAmount: this.state.questions.length
      });
    }

    await axios.post('https://evening-oasis-01489.herokuapp.com/questions', input)
    .then((response) => {
      console.log(response.data[0], "+");
      if(response.data[0].length == 0) {
        this.setState({ preventLoadingQuestions: true });
      } else {
        this.props.onQuestionsData(response.data[0]);
        this.setState({ preventLoadingQuestions: false });
      }
      // Check values when new questions are added to DB !!!
      console.log(this.state.questions.length, response.data[1]);
    });

  }

  onRefresh() {
    if(this.state.refreshing) return;
    else this.setState({ refreshing: true });

    console.log("refresh");

    this.props.onRemoveQuestionsData();

    this.setState({ preventLoadingQuestions: false });
    this.loadQuestions(this.state.questionQuantity, true);

    this.setState({ refreshing: false });
  }

  async scrolledToBottom(nativeEvent) {
    //console.log(nativeEvent);

    if(this.state.loading) return;
    else this.setState({ loading: true });

    let currentPosition = parseInt(nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height);
    let scrollBorder = parseInt(nativeEvent.contentSize.height);

    if(currentPosition >= scrollBorder) {
      console.log('end of scroll');
      await this.loadQuestions(this.state.questionQuantity); // LOAD MORE QUESTIONS
    }

    this.setState({ loading: false });
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

  async componentDidMount() {
    // ARE THERE ANY QUESTIONS ?
    if(this.state.questions.length === 0) {
      await this.loadQuestions(this.state.questionQuantity, true);
    } else {
      let lastDate = this.state.questions[this.state.questions.length - 1].timestamp;
      // FUNCTION TO CHECK FOR NEW QUESTIONS
    }
    this.setState({ loading: false });
  }

  render() {

    let screenWidth = Dimensions.get('window').width;

    return(
      <StyleProvider style={getTheme(material)}>
        <Container>
          <CommunityHeader/>
          <Content
          onMomentumScrollEnd={({ nativeEvent }) => { this.scrolledToBottom(nativeEvent) } }
          refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} /> }>
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
                  <Questions navigation={this.props.navigation} searchValue={this.state.searchValue}/>
                </Col>
                {(this.state.preventLoadingQuestions && !this.state.loading) ?
                  <Text>There are no more questions to load</Text>
                  : null}
              </Body>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Community);
