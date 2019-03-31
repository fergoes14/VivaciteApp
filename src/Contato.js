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




export default class Contato extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: 'Contato',
      
            

    });


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backImg} source={require('./img/torre.png')}>

                    <View style={styles.whatsArea}>
                        <Image style={styles.whats} source={require('./img/whatsicon.png')} />
                        <Text style={styles.texto}>(15) 99170-1491</Text>
                    </View>
                    
                    <View style={styles.socialarea}>
                        <Image style={styles.face} source={require('./img/faceicon.png')} />
                        <Image style={styles.insta} source={require('./img/instaicon.png')} />
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
        justifyContent: 'flex-start',
    },
    backImg: {
        width: '100%',
        height: '100%',
    },
    whats: {
        width: 40,
        height: 40,
        marginRight: 10,

    },
    whatsArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 60,
    },
    texto: {
        color: '#ffffff',
        fontSize: 25,
    },
    socialarea:{
        flex:4,
        flexDirection:'row',
        
        alignItems:'flex-start',
        justifyContent:'center',
        
        

    },
    face:{
        width:80,
        height:80,
        

    },
    insta:{
        width:80,
        height:80,
    }

})



