
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './styles';

class Index extends Component {
  static navigationOptions = {
    title: '路由',
  }
  render() {
    return (
      <View>
        <Text>this is Index</Text>
      </View>
    )
  }
}

export default Index;
