import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const NotificationBody = ({
                              image=require('../../assets/images/notification/Image.png'),
                              text='You received a payment of $450.00 from Grace Anastasia',
                              time='10.10 AM',
                              button=false,
                              onPress
}) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={image} />
                <View style={{maxWidth: 220, paddingHorizontal: 10}}>
                    <Text style={{color: '#2C3A4B'}}>{text}</Text>
                    <Text style={{fontSize: 11,lineHeight: 16, color: '#6D7580', marginTop: 4}}>{time}</Text>
                </View>
                {button
                    ?
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.buttonText}>{'Pay'}</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

export default NotificationBody;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingVertical: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: '#6D5FFD',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        opacity: 0.4
    }
})
