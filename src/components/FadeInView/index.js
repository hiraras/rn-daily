
import React, { Component } from 'react';
import { Animated } from 'react-native';
import styles from './styles';

const AView = Animated.View;

class FadeInView extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  render() {
    const { children, style } = this.props;
    const { opacity } = this.state;
    return (
      <AView style={[styles.container, { ...style, opacity }]}>
        { children }
      </AView>
    )
  }
}

export default FadeInView;
