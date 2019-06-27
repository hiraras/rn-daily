
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import NavigatorItem from './components/NavigatorItem';
import { Wrapper, Header } from '../../components';
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

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Wrapper>
        <Header showLeftItem={true} title='路由' goBack={this.goBack} />
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <NavigatorItem {...item} onClick={this.navigatorClickHandle} />}
            keyExtractor={(_, index) => String(index)}
          />
        </View>
      </Wrapper>
    )
  }
}

export default Index;
