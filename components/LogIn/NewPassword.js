import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Inputs from "react-native-paper";
import * as PasswordInput from "react-native-paper";
import Checkbox from "expo-checkbox";
import State from "../helpers/mobx/store";
import {changePassword} from "../helpers/mobx/action";

const NewPassword = ({navigation}) => {
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);


    const passwordOnChange = (e) => {
        setPassword(e);
        const validatePhone = (e) => {
            const phonePattern = /.{8,}/;
            return phonePattern.test(String(e).toLowerCase());
        }
        setPasswordValidate(validatePhone(e));
        if(e === ''){
            setPasswordValidate(true);
        }
    }
    const confirmPasswordOnChange = (e) => {
        setConfirmPassword(e);
        const validatePhone = (e) => {
            const phonePattern = /.{8,}/;
            return phonePattern.test(String(e).toLowerCase());
        }
        setPasswordValidate(validatePhone(e));
        if(e === ''){
            setPasswordValidate(true);
        }
    }
    const onPressSignIn = () => {
        changePassword(password);
        if (password && passwordValidate) {
            Alert.alert(
                "Confirm",
                "Password changed",
                [
                    {text: "OK", onPress: () => navigation.navigate('Sign')}
                ]
            );
        } else {
            Alert.alert(
                "Confirm",
                "Password invalid",
                [
                    {text: "OK"}
                ]
            );
        }
    }

    return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/LogoFiPay.png')} style={{width: 24, height: 24}}/>
                <View>
                <Text style={styles.titleText}>{'New Password'}</Text>
                <View style={{marginTop: 40}}>
                    <Text style={[styles.text, {marginLeft: 16}]}>{'New password '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                    <PasswordInput.TextInput
                        type="password"
                        name="password"
                        style={styles.passwordInput}
                        onChangeText={passwordOnChange}
                        value={password}
                        secureTextEntry={passwordVisible}
                        selectionColor={'black'}
                        outlineColor={'transparent'}
                        activeOutlineColor={'transparent'}
                        mode={'outlined'}
                        right={<PasswordInput.TextInput.Icon
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            name={passwordVisible ? "eye" : "eye-off"}
                        />}/>
                </View>
                <View style={{marginTop: 12}}>
                    <Text style={[styles.text, {marginLeft: 16}]}>{'Confirm password '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                    <PasswordInput.TextInput
                        type="password"
                        name="password"
                        style={styles.passwordInput}
                        onChangeText={confirmPasswordOnChange}
                        value={confirmPassword}
                        secureTextEntry={confirmPasswordVisible}
                        selectionColor={'black'}
                        outlineColor={'transparent'}
                        activeOutlineColor={'transparent'}
                        mode={'outlined'}
                        right={<PasswordInput.TextInput.Icon
                            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            name={confirmPasswordVisible ? "eye" : "eye-off"}
                        />}/>
                </View>
                <View style={styles.checkbox}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={() => {setChecked(!isChecked)}}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <TouchableOpacity  onPress={() => {setChecked(!isChecked)}} >
                        <Text style={[styles.text, {color: '#2C3A4B',marginTop: 0, marginLeft: 12,marginBottom: 0}]}>{'Remember me'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
                    <Text style={styles.buttonText}>{'Sign In'}</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.bottomLine}></View>
            </View>
    );
};

export default NewPassword;

const styles = StyleSheet.create({
    container: {
        paddingTop: 38,
        paddingHorizontal: 24,
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: 'space-between'
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
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
        marginBottom: 8,
    },
    passwordInput:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        height:42,
        borderRadius: 8,
        borderColor: '#A5ABB3',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
    },
    titleText: {
        fontWeight: '600',
        fontSize: 33,
        lineHeight: 40,
    },
    checkbox: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
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
})
