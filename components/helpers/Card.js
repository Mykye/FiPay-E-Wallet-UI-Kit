import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const Card = () => {
    const balance = 1299.15
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/images/card/Clipped.png')} />
                <Text style={styles.balanceTitle}>{'Balance'}</Text>
                <Text style={styles.balance}>{`$${balance}`}</Text>
                <Text style={styles.accountNumberTitle}>{'Account number'}</Text>
                <Text style={styles.accountNumber}>{'• • •  • • •  • • •  8399'}</Text>
                <Image source={require('../../assets/images/card/Shape.png')} style={styles.shape}/>
                <View style={styles.circle}/>
                <View style={styles.backCircle}/>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 220,
        paddingVertical: 24
    },
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        position: "relative",
        overflow: "hidden",
    },
    rightVector: {
        position: "absolute",
        right: 0,
        top: 0
    },
    balanceTitle: {
        position: "absolute",
        top: 20,
        left: 20,
        color: 'white',
        fontSize: 16,
        lineHeight: 24
    },
    balance: {
        position: "absolute",
        top: 40,
        left: 20,
        fontWeight: '600',
        color: 'white',
        fontSize: 33,
        lineHeight: 50
    },
    accountNumberTitle: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        position: "absolute",
        bottom: 40,
        left: 20,
    },
    accountNumber: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        position: "absolute",
        bottom: 20,
        left: 20,
    },
    shape: {
        position: "absolute",
        right: 20,
        top: 20
    },
    circle: {
        position: "absolute",
        bottom: 20,
        right: 35,
        backgroundColor: 'white',
        borderRadius: 50,
        width: 30,
        height: 30
    },
    backCircle: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        opacity: 0.4,
        width: 30,
        height: 30
    }
})
