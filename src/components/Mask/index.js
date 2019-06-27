
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

class Mask extends Component {

  close = () => {
    const { onClose } = this.props;
    onClose && onClose();
  }

  render() {
    const { children = null, show = false } = this.props;
    return (
      show && <TouchableOpacity style={styles.container} onPress={this.close}>
        {children}
      </TouchableOpacity>
    )
  }
}

export default Mask;
