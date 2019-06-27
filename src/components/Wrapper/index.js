import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './style';

class Wrapper extends Component {
  
  render() {
    const { children } = this.props;
    return (
      <SafeAreaView style={styles.safeContainer}>
        { children }
      </SafeAreaView>
    )
  }
}

export default Wrapper;
