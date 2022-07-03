import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CurrencyItem = ({icon, amount, name}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={icon} />
                <View style={{marginLeft: 10}}>
                    <Text style={styles.amount}>{amount}</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{'Exchange'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CurrencyItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6D5FFD',
        paddingHorizontal: 12,
        paddingVertical: 8,
        textAlign: 'center'
    },
    buttonText: {
        color: '#6D5FFD',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    amount: {
        color: '#2C3A4B',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30
    },
    name: {
        color: '#6D7580',
        fontSize: 14,
        lineHeight: 21,
        maxWidth: 105
    }
})
