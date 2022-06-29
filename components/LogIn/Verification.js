import React, {useEffect, useRef, useState} from 'react';
import {Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const Verification = ({ navigation}) => {
    const [seconds, setSeconds]= useState(60);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const timer = () => {
        let sec = seconds;
        const id = setInterval(() => {
            setSeconds(sec-=1);
            // if (!sec){
            //     sec=60;
            //     schedulePushNotification();
            //     clearInterval(id);
            // }
        },1000);

    }

    useEffect( () => {
        timer();
        registerForPushNotificationsAsync().then((token) =>
            setExpoPushToken(token)
        );

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) => {
                console.log(response);
            });
        schedulePushNotification();
        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current
            );
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../assets/images/Round.png')} style={{width: 18, height: 18, padding: 20}}/>
            </TouchableOpacity>
            <Text style={styles.title}>{'Verification Code'}</Text>
            <View style={styles.smsVerification}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}

                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('CreateAccInfo')}}>
                    <Text style={styles.buttonText}>{'Next'}</Text>
                </TouchableOpacity>
                <Text style={styles.seconds}>{`Resend code in ${seconds} s` }</Text>
            </View>
            <View style={styles.bottomLine}></View>
        </View>
    );
};

export default Verification;


async function schedulePushNotification() {
    const verificationCode = Math.floor(Math.random()*10000);

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Verification! 📬",
            body: `Your verification code: ${verificationCode}`,
            data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
        channelId: 'new-emails',
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.HIGH,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}




const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 30,
        paddingHorizontal: 24,
        display: 'flex',
        justifyContent: "space-between"
    },
    title: {
        color: '#394452',
        fontWeight: '600',
        fontSize: 33,
        lineHeight: 46,
    },
    button: {
        backgroundColor: '#6D5FFD',
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        textAlign: "center"
    },
    seconds: {
        color: '#858C94',
        fontSize: 16,
        lineHeight: 20,
        alignSelf: "center",
        marginTop: 40
    },
    bottomLine: {
        backgroundColor: '#DADEE3',
        width: 134,
        height: 5,
        borderRadius: 100,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 20
    },
    input: {
        height: 55,
        width: 60,
        marginLeft: 12,
        padding: 10,
        backgroundColor: 'rgba(84,84,84,0.1)',
        borderRadius: 8,
        color: 'black',
        fontWeight: '600',
        fontSize: 23,
        lineHeight: 35,
        textAlign: "center"
    },
    smsVerification: {
        display: "flex",
        flexDirection: "row",

    }
})
