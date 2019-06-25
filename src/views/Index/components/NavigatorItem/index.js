import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default ({ name, onClick }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => onClick(name)}>{name}</Text>
    </View>
  )
};
