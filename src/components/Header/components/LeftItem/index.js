
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class LeftItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={this.props.onClick}>
          <Text style={styles.text}>{'<'}</Text>
          <Text style={styles.text}>返回</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LeftItem;
