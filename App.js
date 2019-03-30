

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator} from 'react-navigation';


import BtnInicio from './src/BtnInicio';



console.disableYellowBox=true;

class TelaPrincipal extends Component {

  static navigationOptions = {
    title: 'Home',
    header:null
  }

 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.imgHeader} source={require('./src/img/vivacitelogo.png')} />
        </View>

        <BtnInicio />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#011E3C',
  },
  imgHeader: {
    width: 300,
    height: 80,
    justifyContent: 'center',


  },
  header: {
    height: 70,
    backgroundColor: '#011E3C',
    justifyContent: 'center',
    alignItems: 'center'
  },



});

const Navegador = StackNavigator({
  Home: { screen: TelaPrincipal}
});

export default Navegador

