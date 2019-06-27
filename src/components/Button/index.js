
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default ({ onClick, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
