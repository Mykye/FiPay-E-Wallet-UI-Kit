import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CurrencyItem from "./currensyItem";

const Currency = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'Currency'}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{'$1299.60'}</Text>
                <Text style={styles.text}>{'US Dollar balance'}</Text>
            </View>

            <Text style={{fontWeight: '600',fontSize: 20, lineHeight: 30, color: '#2C3A4B', marginBottom: 24}}>{'Other currencies'}</Text>
            <ScrollView>
                <CurrencyItem name={'British pound'} amount={'429.38'} icon={require('../../../assets/images/settings/currencySettings/Icon.png')}/>
                <CurrencyItem name={'Canadian dollar'} amount={'462.83'} icon={require('../../../assets/images/settings/currencySettings/Icon2.png')}/>
                <CurrencyItem name={'Chinese yuan'} amount={'8278.27'} icon={require('../../../assets/images/settings/currencySettings/Icon3.png')}/>
                <CurrencyItem name={'French franc'} amount={'4472.38'} icon={require('../../../assets/images/settings/currencySettings/Icon4.png')}/>
                <CurrencyItem name={'Euro'} amount={'1098.78'} icon={require('../../../assets/images/settings/currencySettings/Icon5.png')}/>
                <CurrencyItem name={'Singapore dollar'} amount={'1394.67'} icon={require('../../../assets/images/settings/currencySettings/Icon6.png')}/>
            </ScrollView>
        </View>
    );
};

export default Currency;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 56
    },
    content: {
        width: '100%',
        height: 156,
        backgroundColor: '#6D5FFD1A',
        marginTop: 30,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#6D5FFD',
        fontWeight: '600',
        fontSize: 40,
        lineHeight: 60,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2C3A4B'
    }
})
