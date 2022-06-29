import React, { useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert, BackHandler} from 'react-native';
import {Formik} from 'formik';
import Checkbox from 'expo-checkbox';
import * as PasswordInput from 'react-native-paper';
import State from "../helpers/mobx/store";


function SignIn ({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [submitEnable, setSubmitEnable] = useState(false);
    const [emailValidate, setEmailValidate] = useState(true);
    const [email, setEmail] = useState('');
    const [passwordValidate, setPasswordValidate] = useState(true);
    const [password, setPassword] = useState('');


    const emailOnSubmit = (e) => {
            setEmail(e);
            const validateEmail = (e) => {
                const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailPattern.test(String(e).toLowerCase());
            }
            setEmailValidate(validateEmail(e));
            if(e === ''){
                setEmailValidate(true);
            }
        }
    const passwordOnSubmit = (e) => {
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

    const accCheck = () => {
        const checkEmail = State.find(obj => {
            return obj.email === email;
        });
        const checkPassword = State.find(obj => {
            return obj.password === password;
        });

        if (checkEmail && checkPassword && email && password) {
            navigation.navigate('Faceid');
        } else {
            Alert.alert('User not found', 'Invalid email or password');
        }
    }

    return (
        <View style={styles.container}>
                <Image source={require('../../assets/images/LogoFiPay.png')} style={{width: 24, height: 24}}/>
            <View style={styles.signIn}>
                <Formik
                    enableReinitialize={false}
                    initialValues={{emailOrPhone:'', password:''}}
                    onSubmit={
                        accCheck
                    }>
                    {(props) => (
                        <View>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>{'Sign in to '}</Text>
                                <Text style={styles.titleLink}>{'FiPay'}</Text>
                            </View>
                            <Text style={styles.text}>{'Email *'}</Text>
                            <PasswordInput.TextInput
                                type="email"
                                name="email"
                                style={styles.passwordInput}
                                onChangeText={emailOnSubmit}
                                value={email}
                                selectionColor={'black'}
                                outlineColor={'transparent'}
                                activeOutlineColor={'transparent'}
                                mode={'outlined'}
                                right={emailValidate && email?
                                    <PasswordInput.TextInput.Icon icon={({ size, color }) => (
                                        <Image
                                            source={require('../../assets/images/check.png')}
                                            style={{tintColor: 'blue' }}
                                        />
                                    )} />
                                    : null}
                            />
                            {emailValidate
                                ? <View style={{height:20, marginTop:5}}></View>
                                : <Text style={{color:'red', height:20, marginTop:5}}>{'Invalid email'}</Text>
                            }
                            <Text style={styles.text}>{'Password *'}</Text>
                            <PasswordInput.TextInput
                                    type="password"
                                    name="password"
                                    style={styles.passwordInput}
                                    onChangeText={passwordOnSubmit}
                                    value={password}
                                    secureTextEntry={passwordVisible}
                                    selectionColor={'black'}
                                    outlineColor={'transparent'}
                                    activeOutlineColor={'transparent'}
                                    mode={'outlined'}
                                    right={<PasswordInput.TextInput.Icon
                                        onPress={() => setPasswordVisible(!passwordVisible)}
                                        // icon={passwordValidate ? require('../../assets/images/error-password.png')
                                        //     : {}
                                        // }
                                        name={passwordVisible ? "eye" : "eye-off"}
                                    />}/>
                            {passwordValidate
                                ? <View style={{height:20, marginTop:5}}></View>
                                : <Text style={{color:'red', height:20, marginTop:5}}>{'Invalid password'}</Text>
                            }
                            <View style={styles.checkbox}>
                                <Checkbox
                                    value={isChecked}
                                    onValueChange={setChecked}
                                    color={isChecked ? '#4630EB' : undefined}
                                />
                                <TouchableOpacity  onPress={() => {setChecked(true)}} >
                                    <Text style={[styles.text, {color: '#2C3A4B',marginTop: 0, marginLeft: 12,marginBottom: 0}]}>{'Remember me'}</Text>
                                </TouchableOpacity>
                            </View>
                                <TouchableOpacity style={styles.button} onPress={props.handleSubmit} disabled={submitEnable}>
                                    <Text style={styles.buttonText}>{'Sign in'}</Text>
                                </TouchableOpacity>
                        </View>
                        )}
                </Formik>
                <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassword')}}>
                    <Text style={[styles.link, {marginVertical: 20}]}>{'Forgot the password?'}</Text>
                </TouchableOpacity>
                <View style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    <Text style={[styles.text, {textAlign: 'center', color: '#858C94'}]}>{'Don’t have an account?'}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('CreateAcc')}}>
                        <Text style={[styles.link, {marginTop: 20}]}>{' Sign up'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 38,
        paddingHorizontal: 24,
        paddingBottom: 300,
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "space-between",
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
    signIn: {
        marginTop:80
    },
    link: {
        fontWeight: '600',
        fontSize: 16,
        color: '#6D5FFD',
        lineHeight: 24,
        textAlign: "center"
    },
    input: {
        height: 48,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderColor: '#A5ABB3',
        backgroundColor: 'transparent',
        width: '100%',
        fontWeight: '600',
        fontSize: 16,
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20,
        marginBottom: 8,
    },
    checkbox: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
    },
    title: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20
    },
    titleText: {
        fontWeight: '600',
        fontSize: 33,
        lineHeight: 40,
    },
    titleLink: {
        fontWeight: '600',
        fontSize: 33,
        lineHeight: 40,
        color: '#6D5FFD',
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

    }
});
export default SignIn;
