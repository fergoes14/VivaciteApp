

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import BtnInicio from './src/BtnInicio';
import Contato from './src/Contato';
import SobreNos from './src/SobreNos';


console.disableYellowBox = true;

class TelaPrincipal extends Component {

  static navigationOptions = {
    title: 'Home',
    headerTitle: (
      <Image style={{width:'100%', height:'100%'}} source={require('./src/img/vivacitelogo.png')}/>
  ),
  
  };
  

  constructor(props) {
    super(props);
    this.state = {

    }

    this.irContato = this.irContato.bind(this);
    this.irSobre = this.irSobre.bind(this);
  }

  irContato() {
    this.props.navigation.navigate('ContatoTela')
  }

  irSobre(){
    this.props.navigation.navigate('SobreTela')
  }


  render() {
    return (
      <View style={styles.container}>
       

        <ImageBackground style={styles.backImg} source={require('./src/img/torre.png')}>
        
        <TouchableHighlight style={styles.areaTreino} title='Treino Diario' onPress={this.irTreino} underlayColor="black">

          <ImageBackground resizeMode="cover" style={styles.btnTreino} source={require('./src/img/peso.png')}>
            <Text style={styles.treinoTexto}> Treino Diário</Text>
          </ImageBackground>


        </TouchableHighlight >

        <View style={styles.contatoArea}>
          <TouchableOpacity style={styles.contatoBtn} onPress={this.irContato}>
            <Text style={styles.contatoTexto}>Contato</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contatoBtn} onPress={this.irSobre}>
            <Text style={styles.contatoTexto}>Sobre nós</Text>
          </TouchableOpacity>

        </View>

        </ImageBackground>
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
  btnTreino: {
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: "#BF3B51",
    justifyContent: 'center',
    alignItems: 'center',
  },
  treinoTexto: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',


  },
  areaTreino: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  contatoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -40,
    justifyContent: 'center',


  },
  contatoBtn: {
    width: 150,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#11151C',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',


  },
  contatoTexto: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  backImg:{
    width:'100%',
    height:'100%',
  }



});

const Navegador = StackNavigator({
  Home: { screen: TelaPrincipal },
  ContatoTela: { screen: Contato },
  SobreTela:{screen: SobreNos },
});

export default Navegador

