import React from 'react';
import {GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const SettingsItem = ({icon=require('../../assets/images/settings/Icon.png'), text= '', onPress = (event: GestureResponderEvent) => {} }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={icon} />
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Image source={require('../../assets/images/statistic/right.png')} />
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    );
};

export default SettingsItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    text: {
        color: '#2C3A4B',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 16
    },
    line: {
        height: 1,
        backgroundColor: 'grey',
        width: '100%',
        marginTop: 24,
        opacity: 0.5
    }
})
