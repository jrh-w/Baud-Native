import React, { Component } from 'react';

import { Card, CardItem, Body, H1, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, ScrollView, Text } from 'react-native';

import axios from 'axios';
import { connect } from 'react-redux';

import QuestionLink from './QuestionLink';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          topic: 'I have this problem...',
          rating: 132,
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer mpor incididunt ut labore et dolor',
          route: '',
          tags: 'coding;c#;something;example'
        },
        {
          topic: 'I have other problem...',
          rating: 1442,
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  or incididunt ut labore et dolore magna aliqua. Bibe nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  ndum est ultricies integer mpor incididunt ut labore et dolor',
          route: '',
          tags: ''
        },
        {
          topic: 'I have another problem...',
          rating: 2,
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscetur adipiscing eli ididultricies integer mpor incididunt ut labore et dolor',
          route: '',
          tags: ''
        },
        {
          topic: 'I have another problem...',
          rating: 2,
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscetur adipiscing eli ididultricies integer mpor incididunt ut labore et dolor',
          route: '',
          tags: ''
        }
      ]
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   if(props.certificates !== state.certificates) {
  //     return {
  //        certificates: props.certificates
  //     };
  //   }
  //   return null;
  // }

  render() {

    this.questionLinks = this.state.questions.map((item, key) =>
      <QuestionLink
        key={key}
        topic={item.topic}
        rating={item.rating}
        summary={item.summary}
        tags={item.tags}
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

export default Questions;
