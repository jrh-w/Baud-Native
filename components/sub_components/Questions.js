import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, ScrollView, Text } from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';

import QuestionLink from './QuestionLink';

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.questions !== state.questions) {
      return {
         questions: props.questions
      };
    }
    return null;
  }

  render() {

    let data = this.state.questions;

    if(this.props.searchValue != '') {
      data = this.state.questions.filter((item, key) => {
        return item.title.toLowerCase().match(this.props.searchValue.toLowerCase());
      });
    }

    this.questionLinks = data.map((item, key) =>
      <QuestionLink
        key={key}
        topic={item.title}
        rating={item.rating}
        content={item.content}
        tags={item.tags}
        timestamp={item.timestamp}
        route={item.route}
        navigation={this.props.navigation}
      />
    );

    if(this.state.questions.length) {
      return(
        <View>
            {this.questionLinks}
        </View>
      );
      } else {
        return(null);
    }
  }
}

export default connect(mapStateToProps)(Questions);
