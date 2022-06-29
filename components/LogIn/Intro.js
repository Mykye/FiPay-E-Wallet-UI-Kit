import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button, Dimensions, StatusBar} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

function Intro ({navigation}) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/images.png')} resizeMode="cover" style={styles.image}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(10,16,110,0.27)', 'rgba(34,102,246,0.34)', 'rgba(5,29,93,0.83)']}
                    style={styles.gradient}
                >
                <View style={styles.welcome}>
                    <View style={styles.welcomeTitle}>
                        <Text style={styles.title}>{'Welcome'}</Text>
                        <Text style={styles.text}>{'FiPay: The best multifunctional digital E-Wallet of this century.'}</Text>
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign')
                        }>
                            <Text style={styles.buttonText}>{'Sign in'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button,
                             {
                                 backgroundColor: 'transparent',
                                 borderColor: 'white',
                                 borderWidth: 2,
                                 marginBottom: 30
                             }]}
                            onPress={() => navigation.navigate('CreateAcc')
                        }>
                            <Text style={styles.buttonText}>{'Create an account'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
            </ImageBackground>
            <StatusBar barStyle={'default'} showHideTransition={'slide'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(12,64,232,0.4)',
        backfaceVisibility: "visible",
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
        width: 320,
        marginVertical: 8
    },
    welcome: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginHorizontal: 2,
    },
    title: {
        fontWeight: '600',
        fontSize: 33,
        lineHeight: 49.5,
        color: '#fff'
    },
    button: {
        width: 340,
        marginVertical: 8,
        height: 55,
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 14,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#6D5FFD',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
    welcomeTitle: {
        marginHorizontal: 10
    },
    gradient: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "flex-end",
    }
});

export default Intro;
