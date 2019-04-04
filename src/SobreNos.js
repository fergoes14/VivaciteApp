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


export default class SobreNos extends Component {

    static navigationOptions = ({ navigation }) => ({
       title: 'Sobre nós',



    });
    render() {
        return (
            <View>
                <ImageBackground style={styles.backImg} source={require('./img/torre.png')}>
                    <View style={styles.card}>
                        <Text style={styles.titulo}>Nossa visão</Text>
                        <View style={styles.cardLista}>

                            <Text style={styles.lista}>Harmonia;</Text>
                            <Text style={styles.lista}>Organização;</Text>
                            <Text style={styles.lista}>Elegância;</Text>
                            <Text style={styles.lista}>Melhoria continua;</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.titulo}>Nossos valores </Text>
                        <View style={styles.cardLista}>

                            <Text style={styles.lista}>Educação e respeito sempre;</Text>
                            <Text style={styles.lista}>Imaginar-se no lugar do cliente;</Text>
                            <Text style={styles.lista}>Superar expectativas;</Text>
                            <Text style={styles.lista}>Inovação;</Text>
                        </View>
                    </View>




                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    backImg: {
        width: '100%',
        height: '100%',
    },
    card: {
        shadowColor: 'red',
        backgroundColor: '#DDDDDD',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 1,
        margin: 30,
        shadowRadius: 10,
        borderRadius: 5,
        elevation: 10,
        textAlign: 'justify'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#11151C',
        textAlign: 'center',


        backgroundColor: '#BF3B51'

    },
    texto: {
        fontSize: 19,
        color: '#11151C',
        margin: 20


    },
    lista: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000000',
        margin: 5


    },
    cardLista: {
        margin: 20
    }

});