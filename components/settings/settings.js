import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, BackHandler } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import SettingsItem from "../helpers/settingsItem";
import {BottomSheet} from "react-native-btr";

const Settings = ({navigation}) => {
    const [bottomSheet, setBottomSheet] = useState(false);

    const toggleBottomSheet = () => {
        setBottomSheet(!bottomSheet);
    }

    const onPressLogOut = () => {
        setBottomSheet(true)
    }

    const logOut = () => {
        navigation.navigate('Intro');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
                        <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                    </TouchableOpacity>
                    <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'Account'}</Text>
                </View>
            </View>
            <ScrollView style={{flex: 1}}>
                <SettingsItem icon={require('../../assets/images/settings/Icon.png')} text={'Account'} />
                <SettingsItem icon={require('../../assets/images/settings/Icon2.png')} text={'Notification'}/>
                <SettingsItem icon={require('../../assets/images/settings/Icon3.png')} text={'My Card'}/>
                <SettingsItem icon={require('../../assets/images/settings/Icon4.png')} text={'Security'}/>
                <SettingsItem icon={require('../../assets/images/settings/Icon5.png')} text={'Currency'}/>
                <SettingsItem icon={require('../../assets/images/settings/Icon6.png')} text={'Services'}/>
                <SettingsItem icon={require('../../assets/images/settings/Icon7.png')} text={'Logout'} onPress={onPressLogOut}/>
            </ScrollView>
            <BottomSheet
                visible={bottomSheet}
                onBackButtonPress={toggleBottomSheet}
                onBackdropPress={toggleBottomSheet}
            >
                <View style={{backgroundColor: 'white', height: 300, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/settings/exit.png')} width={48} height={48}/>
                        <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600', marginVertical: 20}}>{'Are you sure you want to log out?'}</Text>
                    </View>
                    <View style={{display: 'flex',flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.buttonCancel} onPress={toggleBottomSheet}><Text style={[styles.buttonText, {color: '#6D5FFD'}]}>{'Cancel'}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={logOut}><Text style={styles.buttonText}>{'Logout'}</Text></TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 70,
        flex: 1,
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6D5FFD',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 8,
        marginLeft: 5,
        width: 170
    },
    buttonCancel: {
        backgroundColor: 'white',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#6D5FFD',
        marginRight: 5,
        width: 170
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        textAlign: "center"
    }
})
