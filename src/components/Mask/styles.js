import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: -1000,
    left: -1000,
    bottom: -1000,
    right: -1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
