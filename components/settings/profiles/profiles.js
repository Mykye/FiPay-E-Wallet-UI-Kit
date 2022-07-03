import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Profiles = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center', marginBottom: 30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'Profiles'}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{'Email Address'}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Primary'}</Text>
                    <Text style={styles.text}>{'jo*****@gmail.com'}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Secondary'}</Text>
                    <Text style={styles.text}>{'do*****@gmail.com'}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{'Phone Numbers'}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Primary'}</Text>
                    <Text style={styles.text}>{'**** **** 5645'}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Secondary'}</Text>
                    <Text style={styles.text}>{'**** **** 4736'}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{'Address'}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Address 1'}</Text>
                    <Text style={styles.text}>{'Bung Tomo St. 067'}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
                    <Text style={styles.description}>{'Address 2'}</Text>
                    <Text style={styles.text}>{'Simanjuntak St. 110'}</Text>
                </View>
            </View>
        </View>
    );
};

export default Profiles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 56
    },
    content: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 24,
        marginBottom: 24,
        borderColor: '#6D5FFD'
    },
    title: {
        color: '#2C3A4B',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    description: {
        color: 'grey',
        fontSize: 14,
        lineHeight: 24,
    },
    text: {
       color: '#2C3A4B',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600'
    }
})
