import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import ServicesSettingsItem from "./servicesSettingsItem";

const ServicesSettings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'Services'}</Text>
            </View>
            <ServicesSettingsItem text={'Add or Manage\n' + 'Authorized Users'} color={'#6D5FFD'} icon={require('../../../assets/images/settings/servicesSettings/Icon.png')} style={{top: 18}}/>
            <ServicesSettingsItem text={'Manage Cards & Devices'} color={'#FFB800'} icon={require('../../../assets/images/settings/servicesSettings/Icon2.png')}/>
            <ServicesSettingsItem text={'Balance Transfer'} color={'#1867FF'} icon={require('../../../assets/images/settings/servicesSettings/Icon3.png')}/>
            <ServicesSettingsItem text={'Create or Change Cash Pin'} color={'#FF1843'} icon={require('../../../assets/images/settings/servicesSettings/Icon4.png')}/>
            <ServicesSettingsItem text={'Credit Line Increase'} color={'#6D5FFD'} icon={require('../../../assets/images/settings/servicesSettings/Icon5.png')}/>
        </View>
    );
};

export default ServicesSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 56
    },
})
