
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import DefaultLeftItem from './components/LeftItem';

class Header extends Component {

  back = () => {
    if (this.props.goBack) {
      this.props.goBack();
    }
  }

  render() {
    const { LeftItem = DefaultLeftItem, title = "", RightItem = null, onLeftItemClick = this.back, showLeftItem = true, showRightItem = true } = this.props;
    return (
      <View style={styles.container}>
        <View>
          {showLeftItem && <LeftItem onClick={onLeftItemClick} />}
        </View>
        <View style={styles.titleCtn}>
          {typeof title === 'string' ? <Text style={styles.title}>{ title }</Text> : <title />}
        </View>
        <View>
          {showRightItem && RightItem && <RightItem />}
        </View>
      </View>
    )
  }
}

export default Header;
