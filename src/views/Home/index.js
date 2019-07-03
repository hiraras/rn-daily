
import React, { Component } from 'react';
import { 
  View, Text, TouchableOpacity, TouchableHighlight, Platform, Image
} from 'react-native';
import { Mask, Wrapper, Header, Button, FadeInView } from '../../components';
import styles from './styles';

const imgURL = require('../../assets/images/01.jpg');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMask: false
    }
  }

  closeMask = () => {
    this.setState({
      showMask: false
    });
  }

  showMask = () =>{
    this.setState({
      showMask: true
    });
  }

  componentDidMount() {
    console.log(Platform); // android/ios
  }

  request = () => {
    fetch('https://i.baidu.com/Top/getTopList')
      .then((res) => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
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
          <Button title="click" onPress={this.showMask} />
          <Button title="request" onPress={this.request} />
          <Button />
          <TouchableHighlight style={styles.highLightBtn} color="red">
            <Text style={styles.highLightText}>high-light</Text>
          </TouchableHighlight>
          <Mask show={this.state.showMask} onClose={this.closeMask} />
          <FadeInView>
            <Text>this is FadeInView Text</Text>
          </FadeInView>
        </View>
      </Wrapper>
    )
  }
}

export default Home;
