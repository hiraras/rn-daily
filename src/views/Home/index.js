
import React, { Component } from 'react';
import { 
  View, Text, Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback,
} from 'react-native';
import { Mask, Wrapper, Header, Button } from '../../components';
import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMask: true
    }
  }

  closeMask = () => {
    this.setState({
      showMask: false
    });
  }

  longPressHandler = () =>{
    Alert.alert("long~~~~~press");
  }

  componentDidMount() {
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Wrapper>
        <Header showLeftItem={true} title='Home' goBack={this.goBack} />
        <View style={styles.container}>
          <TouchableOpacity style={styles.opacityBtn}>
            <Text style={styles.opacityText}>opacity</Text>
          </TouchableOpacity>
          <Button title="click" />
          <TouchableHighlight style={styles.highLightBtn} color="red">
            <Text style={styles.highLightText}>high-light</Text>
          </TouchableHighlight>
          <Mask show={this.state.showMask} onClose={this.closeMask} />
        </View>
      </Wrapper>
    )
  }
}

export default Home;
