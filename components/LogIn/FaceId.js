import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import Animated ,{Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import {Camera, CameraType} from 'expo-camera';
import * as LocalAuthentication from 'expo-local-authentication';

const FaceId = ({navigation}) => {
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState('');
    const [facialRecognitionAvailable, setFacialRecognitionAvailable] = React.useState(false);
    const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false);
    const [irisAvailable, setIrisAvailable] = React.useState(false);

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraVisible, setCameraVisible] = useState(false);
    const firstOpacity = useSharedValue(0);
    const secondOpacity = useSharedValue(0);
    const thirdOpacity = useSharedValue(0);

    const checkSupportedAuthentication = async () => {
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        if (types && types.length) {
            setFacialRecognitionAvailable(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));
            setFingerprintAvailable(types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT));
            setIrisAvailable(types.includes(LocalAuthentication.AuthenticationType.IRIS));
        }
    };

    React.useEffect( () => {
         checkSupportedAuthentication();
    }, []);

    const authenticate = async () => {
        if (loading) {
            return;
        }
        const { status } = await Camera.requestCameraPermissionsAsync();
        await Camera.requestMicrophonePermissionsAsync();
        setHasPermission(status === 'granted');
        setCameraVisible(!cameraVisible);
        setLoading(true);

        try {
            const results = await LocalAuthentication.authenticateAsync();

            if (results.success) {
                setResult('SUCCESS');
            } else if (results.error === 'unknown') {
                setResult('DISABLED');
            } else if (
                results.error === 'user_cancel' ||
                results.error === 'system_cancel' ||
                results.error === 'app_cancel'
            ) {
                setResult('CANCELLED');
            }
        } catch (error) {
            setResult('ERROR');
        }

        setLoading(false);
    };

    let resultMessage;
    switch (result) {
        case 'CANCELLED':
            resultMessage = 'Authentication process has been cancelled';
            break;
        case 'DISABLED':
            resultMessage = 'Biometric authentication has been disabled';
            break;
        case 'ERROR':
            resultMessage = 'There was an error in authentication';
            break;
        case 'SUCCESS':
            resultMessage = 'Successfully authenticated';
            break;
        default:
            resultMessage = '';
            break;
    }

    firstOpacity.value = withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.ease }),
        -1,
        true
    );
    secondOpacity.value = withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.ease }),
        -1,
        true
    );
    thirdOpacity.value = withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.ease }),
        -1,
        true
    );

    if(cameraVisible && resultMessage !== 'Successfully authenticated') {
        firstOpacity.value = withRepeat(
            withTiming(1, { duration: 1000, easing: Easing.ease }),
            -1,
            true
        );
        secondOpacity.value = withRepeat(
            withTiming(1, { duration: 1000, easing: Easing.ease }),
            -1,
            true
        );
        thirdOpacity.value = withRepeat(
            withTiming(1, { duration: 1000, easing: Easing.ease }),
            -1,
            true
        );
    }

    const sStyle = useAnimatedStyle(() => ({ opacity: firstOpacity.value }), []);
    const fStyle = useAnimatedStyle(() => ({ opacity: secondOpacity.value }), []);
    const tStyle = useAnimatedStyle(() => ({ opacity: thirdOpacity.value }), []);

    if (resultMessage==='Successfully authenticated'){
        setTimeout(() => {
            navigation.navigate('Tabs');
            setCameraVisible(false);
        }, 3000)
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {cameraVisible
                ?
                <View style={styles.camera}>
                    {resultMessage ? <Text style={[styles.text, {color: 'white', width: '100%'}]}>{resultMessage}</Text> : null}
                    {resultMessage==='Successfully authenticated' ? <ActivityIndicator size="large" color="white" style={{marginTop: 15}}/> : null}
                    {resultMessage==='Authentication process has been cancelled' ? setCameraVisible(false) : null}
                </View>
                :
                <View style={styles.top}>
                    <TouchableOpacity onPress={authenticate}>
                        <Animated.View style={[styles.thirdCircle, tStyle]}></Animated.View>
                        <Animated.View style={[styles.secondCircle, sStyle]}></Animated.View>
                        <Animated.View style={[styles.firstCircle, fStyle]}></Animated.View>
                        <Image source={require('../../assets/images/camera.png')} style={styles.cameraIcon}/>
                    </TouchableOpacity>
                </View>
            }
            <View style={styles.bottom}>
                <View style={styles.topLine}></View>
                <View style={styles.faceAuth}>
                    <View>
                        <Image source={require('../../assets/images/FaceScanIcon.png')} style={{width: 75, height: 75}}/>
                    </View>
                    <Text style={styles.title}>{'Face Authentication'}</Text>
                    <Text style={styles.text}>{'Please point your face on the screen'}</Text>
                </View>
                <View style={styles.bottomLine}></View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6D5FFD',
        display: "flex",
        justifyContent: "space-between",

    },
    bottom: {
        backgroundColor: 'white',
        width: '100%',
        height: 280,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column"
    },
    topLine: {
        backgroundColor: '#EBEEF2',
        height: 3,
        width: 38,
        marginTop: 8,
        borderRadius: 100
    },
    bottomLine: {
        backgroundColor: '#DADEE3',
        width: 134,
        height: 5,
        marginBottom: 10,
        borderRadius: 100
    },
    title: {
        color: '#2C3A4B',
        fontSize: 23,
        lineHeight: 34,
        textAlign: "center",
        fontWeight: '600',
        marginTop: 34
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
        color: '#2C3A4B',
        marginTop: 8
    },
    faceAuth: {
        display: "flex",
        alignItems: "center"
    },
    top: {
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative"
    },
    firstCircle: {
        height: 85,
        width: 85,
        backgroundColor: '#FFB8004D',
        borderRadius: 50,
        position: 'absolute',
        left: 135,
        top: 180,
    },
    secondCircle: {
        height: 143,
        width: 143,
        backgroundColor: '#FFB8004D',
        borderRadius: 100,
        position: 'absolute',
        left: 107,
        top: 155
    },
    thirdCircle: {
        height: 200,
        width: 200,
        backgroundColor: '#FFB8004D',
        borderRadius: 100,
        position: 'absolute',
        left: 78,
        top: 125,
    },
    cameraIcon: {
        width: 35,
        height: 35,
        opacity: 1,
        position: 'absolute',
        left: 160,
        top: 203
    },
    camera: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 90
    },
    authButton: {
        width: 80,
        backgroundColor: 'teal',
        borderRadius: 8,
        paddingHorizontal:14,
        paddingVertical: 8
    }
})
export default FaceId;
