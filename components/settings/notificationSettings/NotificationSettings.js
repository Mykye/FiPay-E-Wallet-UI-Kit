import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import NotificationItem from "./notificationItem";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const NotificationSettings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30} />
                </TouchableOpacity>
                <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'black', marginLeft: 16}}>{'Notification'}</Text>
            </View>
            <Text style={{color: '#545D69', fontWeight: '600', marginTop: 36}}>{'Notifiy me when'}</Text>
            <View style={styles.line}></View>
            <ScrollView>
                <NotificationItem  text={'Buy something'}/>
                <NotificationItem  text={'Receive money'}/>
                <NotificationItem  text={'Send payments'}/>
                <NotificationItem  text={'Receive a money request'}/>
                <NotificationItem  text={'New promo availables'}/>
                <NotificationItem  text={'New service availables'}/>
            </ScrollView>
        </View>
    );
};

export default NotificationSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 56
    },
    line: {
        backgroundColor: 'grey',
        width: '100%',
        height: 1,
        opacity: 0.5,
        marginTop: 24
    }
})
