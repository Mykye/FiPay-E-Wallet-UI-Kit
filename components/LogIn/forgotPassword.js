import React, {useState} from 'react';
import {Alert, BackHandler, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as Inputs from "react-native-paper";
import State from "../helpers/mobx/store";
import {setEmailForNewPassword} from "../helpers/mobx/action";

const ForgotPassword = ({navigation}) => {
    const [emailValidate, setEmailValidate] = useState(false);
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState(false)
    const emailOnChange = (e) => {
        setEmail(e);
        const validateEmail = (e) => {
            const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailPattern.test(String(e).toLowerCase());
        }
        setEmailValidate(validateEmail(e));
        if(e === ''){
            setEmailValidate(false);
        }
    }

    if(confirm){
        setTimeout(() => {
            setEmailForNewPassword(email);
            navigation.navigate('NewPassword');
        },1500);
    }

    const onPressConform = () => {
        const checkEmail = State.find(obj => {
            return obj.email === email;
        });
        if (checkEmail && emailValidate) {
            setConfirm(true);
        } else {
            Alert.alert('User not found', 'Invalid email');
        }

    }

    const backAction = () => {
        navigation.navigate('Sign');
    }

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return (
        <View style={styles.container}>
            {confirm
                ?
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Image source={require('../../assets/images/confirm.png')} style={{width: 120, height: 120}}/>
                    <Text style={[styles.title, {color: '#6D5FFD', marginVertical: 32}]}>{'Successful!'}</Text>
                    <Text style={[styles.text, {fontWeight: '400'}]}>{'Please check your email to confirm'}</Text>
                </View>
                :
                <View>
                    <Text style={styles.title}>{'Forgot Password'}</Text>
                    <Text style={[styles.text, {fontWeight: '400'}]}>{'Please enter your email, we will confirm the password change via email'}</Text>
                    <View style={{marginTop: 12}}>
                    <Text style={styles.text}>{'Email '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                    <Inputs.TextInput
                        type="email"
                        name="email"
                        style={styles.input}
                        onChangeText={emailOnChange}
                        value={email}
                        selectionColor={'black'}
                        outlineColor={'transparent'}
                        activeOutlineColor={'transparent'}
                        mode={'outlined'}
                        right={emailValidate && email?
                    <Inputs.TextInput.Icon icon={({size, color}) => (
                    <Image
                        source={require('../../assets/images/check.png')}
                        style={{tintColor: 'blue'}}/>
                    )} />
                    : null}
                    />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onPressConform}>
                        <Text style={styles.buttonText}>{'Confirm'}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
};


export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30,
        height: '100%',
        paddingHorizontal: 24,
        display: 'flex',
        justifyContent: "center",
    },
    title: {
        color: '#394452',
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 46,
        marginBottom: 40
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        height:50,
        borderRadius: 8,
        borderColor: '#A5ABB3',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        width: '100%',
        paddingHorizontal: 8
    },
    button: {
        width: '100%',
        height: 55,
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 14,
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#6D5FFD',
        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
})
