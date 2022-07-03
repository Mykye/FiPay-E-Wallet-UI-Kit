import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const MyCards = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center', marginBottom: 30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'My Cards'}</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-between',flex: 1, alignItems: 'center'}}>
                <View>
                    <Image source={require('../../../assets/images/settings/myCards/Card.png')}  style={{width: 320, height: 179, marginBottom: 20, borderRadius: 8}}/>
                    <Image source={require('../../../assets/images/settings/myCards/Card2.png')} style={{width: 320, height: 179, borderRadius: 8}}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{'Add New Card'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 56
    },
    button : {
        paddingVertical: 14,
        paddingHorizontal: 18,
        backgroundColor: '#6D5FFD',
        borderRadius: 8,
        width: '100%'
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 27,
        textAlign: 'center',
    }
})
