

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


import { StackNavigator} from 'react-navigation';

//import Contato from './Contato';







class BtnInicio extends Component {

    

    constructor(props){
        super(props);
        this.state={

        }
    
    this.irContato=this.irContato.bind(this);
    }

    irContato(){
        this.props.navigation.navigate('ContatoTela')
    }

    
    render() {
        return (
            <View style={styles.container}>


                <TouchableHighlight style={styles.areaTreino} title='Treino Diario' onPress={this.irTreino} underlayColor="black">

                    <ImageBackground resizeMode="cover" style={styles.btnTreino} source={require('./img/peso.png')}>
                        <Text style={styles.treinoTexto}> Treino Diário</Text>
                    </ImageBackground>


                </TouchableHighlight >

                <View style={styles.contatoArea}>
                    <TouchableOpacity style={styles.contatoBtn} onPress={this.irContato}>
                        <Text style={styles.contatoTexto}>Contato</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contatoBtn}>
                        <Text style={styles.contatoTexto}>Sobre nós</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#011E3C',
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
        color:'#FFFFFF',
        fontWeight:'bold'
    }




});




