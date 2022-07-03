import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ServicesSettingsItem = ({icon, text, color, style}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                    <Image source={icon} style={{backgroundColor: color, opacity: 0.4, borderTopLeftRadius: 8, borderBottomLeftRadius: 8}}/>
                <View style={[styles.content, {backgroundColor: color}]}>

                </View>
                <Text style={[styles.text, style]}>{text}</Text>
                <Image source={require('../../../assets/images/statistic/right.png')} style={{tintColor: color, position: 'absolute', right: 28, top: 28}} width={22} height={22}/>
            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    );
};

export default ServicesSettingsItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 28
    },
    line: {
        backgroundColor: 'grey',
        width: '100%',
        height: 1,
        opacity: 0.5,
        marginTop: 28
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        flex: 1,
        opacity: 0.1,
        position: "relative",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    text: {
        color: '#2C3A4B',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 24,
        position: 'absolute',
        left: 96,
        top: 28,
        maxWidth: 150,
        alignSelf: 'center'

    }
})
