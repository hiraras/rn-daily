
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default ({ onPress = () => {}, title = 'click' }) => {
  const titleNode = typeof title === 'string' ? <Text style={styles.title}>{title}</Text> : title;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {titleNode}
    </TouchableOpacity>
  )
}
