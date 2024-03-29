//import React, { Component } from 'react';
import * as React from 'react';
import { Dimensions, ScrollView, BackHandler, RefreshControl, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Text, StyleProvider, Container, Content, Header, H1, Body, Item, Input,
  Button, Icon, Card, CardItem, Left, Toast, Fab } from 'native-base';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import Menu from './sub_components/Menu';
import CommunityHeader from './sub_components/CommunityHeader';
import Questions from './sub_components/Questions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuestionsData, removeQuestionsData, getQuestions } from '../redux/reduxActions';

import { useScrollToTop } from '@react-navigation/native';

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    loadingQuestions: state.loadingQuestions,
    refreshingQuestions: state.refreshingQuestions,
    noMoreQuestions: state.noMoreQuestions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQuestionsData: (data) => dispatch(addQuestionsData(data)),
    removeQuestionsData: (refresh) => dispatch(removeQuestionsData(refresh)),
    getQuestions: bindActionCreators(getQuestions, dispatch)
  };
}

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      questions: [],
      noMoreQuestions: false,
      loadingQuestions: false,
      refreshingQuestions: false,
      questionQuantity: 10,
      showReturnButton: false
    };

    this.loadQuestions = this.loadQuestions.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.scrolledToBottom = this.scrolledToBottom.bind(this);
    this.returnToTop = this.returnToTop.bind(this);
  }

  loadQuestions(numberOfQuestions, questionsEmpty = false) {

    if(this.state.loadingQuestions) return;

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

    this.props.getQuestions(input);
  }

  onRefresh() {
    if(this.state.loadingQuestions) return;

    console.log("refresh");

    this.props.removeQuestionsData(true);
    this.loadQuestions(this.state.questionQuantity, true);
  }

  scrolledToBottom(nativeEvent) {
    if(this.state.loadingQuestions || this.state.noMoreQuestions) return;

    let currentPosition = parseInt(nativeEvent.contentOffset.y + nativeEvent.layoutMeasurement.height);
    let scrollBorder = parseInt(nativeEvent.contentSize.height);

    if(currentPosition >= scrollBorder) {
      console.log('end of scroll');
      this.loadQuestions(this.state.questionQuantity); // LOAD MORE QUESTIONS
    }

    if(currentPosition >= 1000) this.setState({ showReturnButton: true });
    else this.setState({ showReturnButton: false });
  }

  returnToTop(nativeEvent) {
    //this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true});
    this.props.scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    this.setState({ showReturnButton: false });
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state) {
      return {
        questions: props.questions,
        loadingQuestions: props.loadingQuestions,
        refreshingQuestions: props.refreshingQuestions,
        noMoreQuestions: props.noMoreQuestions
      };
    }
    return null;
  }

  componentDidMount() {
    // ARE THERE ANY QUESTIONS ?
    if(this.state.questions.length === 0) {
      this.loadQuestions(this.state.questionQuantity, true);
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
          <ScrollView ref={this.props.scrollRef}
          onMomentumScrollEnd={ ({nativeEvent}) => { this.scrolledToBottom(nativeEvent); } }
          refreshControl={ <RefreshControl refreshing={this.state.refreshingQuestions} onRefresh={this.onRefresh} /> }>
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
                {this.state.noMoreQuestions ?
                  <Text>There are no more questions to load</Text>
                  : null}
              </Body>
          </ScrollView>
          {this.state.showReturnButton ?
            <Fab
              containerStyle={{ marginRight: '30%' }}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={ this.returnToTop }>
                <Icon name="arrow-up" />
            </Fab> : null
          }
        </Container>
      </StyleProvider>
    );
  }
}

function NewCommunity(props) {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return <Community {...props} scrollRef={ref} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCommunity);
