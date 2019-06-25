
import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import NavigatorItem from './components/NavigatorItem';
import styles from './styles';

class Index extends Component {
  static navigationOptions = {
    title: '路由',
  }
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: 'Home', },
      ]
    }
  }

  navigatorClickHandle = (pageName) => {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <NavigatorItem {...item} onClick={this.navigatorClickHandle} />}
          keyExtractor={(_, index) => String(index)}
        />
      </View>
    )
  }
}

export default Index;
