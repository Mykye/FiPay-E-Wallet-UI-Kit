import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NotificationBody from "../helpers/NotificationBody";
import {BottomSheet} from "react-native-btr";


const Notification = ({navigation}) => {
    const [bottomSheet, setBottomSheet] = useState(false);
    const onPressPay = () => {
        toggleBottomSheet();
    }

    const toggleBottomSheet = () => {
        setBottomSheet(!bottomSheet);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                         <MaterialCommunityIcons name="arrow-left" color={'black'} size={30}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 23, lineHeight: 34, fontWeight: '600', marginLeft: 16}}>{'Notification'}</Text>
                </View>
                <MaterialCommunityIcons name={'magnify'} color={'black'} size={30}/>
            </View>
            <ScrollView style={{flex: 1}}>
                <Text style={styles.day}>{'Today'}</Text>
                <NotificationBody />
                <NotificationBody text={'Andrew Munick requested a payment of $300.00'} time={'09.50 AM'} image={require('../../assets/images/notification/Image2.png')} button={true} onPress={onPressPay}/>
                <Text style={styles.day}>{'Yesterday'}</Text>
                <NotificationBody text={'You received a payment of $450.00 from Daniel McKiney'} time={'10.25 AM'} image={require('../../assets/images/notification/Image3.png')}/>
                <Text style={styles.day}>{'This weekend'}</Text>
                <NotificationBody text={'You received a payment of $350.00 from Annete Jean'} time={'11.10 AM'} image={require('../../assets/images/notification/Image4.png')}/>
                <NotificationBody text={'Scott Mjuvick requested a payment of $400.00'} time={'08.50 AM'} image={require('../../assets/images/notification/Image5.png')} button={true} onPress={onPressPay}/>
            </ScrollView>
            <BottomSheet
                visible={bottomSheet}
                //setting the visibility state of the bottom sheet
                onBackButtonPress={toggleBottomSheet}
                //Toggling the visibility state on the click of the back bottom
                onBackdropPress={toggleBottomSheet}
                //Toggling the visibility state on the clicking out side of the sheet
            >
                <View style={{backgroundColor: 'white', height: 300, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
                    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Image source={require('../../assets/images/notification/money.png')} width={48} height={48}/>
                        <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600', marginVertical: 20}}>{'Make a payment to Andrew Munich of $300?'}</Text>
                    </View>
                    <View style={{display: 'flex',flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.buttonCancel}><Text style={[styles.buttonText, {color: '#6D5FFD'}]} onPress={toggleBottomSheet}>{'Cancel'}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {toggleBottomSheet();Alert.alert('Payment sucsesful')}}><Text style={styles.buttonText}>{'Pay'}</Text></TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 30
    },
    day: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 5
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
