import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import {Formik} from "formik";
import * as Inputs from "react-native-paper";
import Checkbox from "expo-checkbox";
import State from "../helpers/mobx/store";
import {addUser} from '../helpers/mobx/action'

const CreateAcc = ({navigation}) => {
    const [conditionsAgree, setConditionsAgree] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [submitEnable, setSubmitEnable] = useState(false);
    const [emailValidate, setEmailValidate] = useState(true);
    const [email, setEmail] = useState('');
    const [passwordValidate, setPasswordValidate] = useState(true);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [nameValidate, setNameValidate] = useState(true);

    const emailOnChange = (e) => {
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
    const nameOnChange = (e) => {
        setName(e);
        const validateName = (e) => {
            const namePattern = /.{3,}/;
            return namePattern.test(String(e).toLowerCase());
        }
        setNameValidate(validateName(e));
        if(e === ''){
            setNameValidate(true);
        }
    }

    const onPressCreateAcc = () => {
        if (nameValidate && emailValidate && passwordValidate && name && email && password){
            addUser({name: name, email: email, password: password})
            navigation.navigate('Verification');
        } else {
            Alert.alert(
                "Error",
                "Password or email invalid",
                [
                    {text: "OK"}
                ]
            );
        }
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/LogoFiPay.png')} style={{width: 24, height: 24}}/>

            <Formik
                enableReinitialize={false}
                initialValues={{fullName: '', emailOrPhone:'', password:''}}
                onSubmit={onPressCreateAcc}>
                {(props) => (
                    <View style={{paddingTop: 30}}>
                        <Text style={styles.title}>{'Create a new account'}</Text>
                        <Text style={[styles.text, {marginTop: 40}]}>{'Full name '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                        <Inputs.TextInput
                            type="text"
                            name="name"
                            style={styles.input}
                            onChangeText={nameOnChange}
                            value={name}
                            selectionColor={'black'}
                            outlineColor={'transparent'}
                            activeOutlineColor={'transparent'}
                            mode={'outlined'}
                            right={nameValidate && name?
                                <Inputs.TextInput.Icon icon={({ size, color }) => (
                                    <Image source={require('../../assets/images/check.png')} style={{tintColor: 'blue' }}/>)}/>
                                : null}/>
                        {nameValidate
                            ? <View style={{height:20, marginTop:5}}></View>
                            : <Text style={{color:'red', height:20, marginTop:5}}>{'Too short!!!'}</Text>
                        }

                        <Text style={styles.text}>{'Email or Phone Number '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
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
                        <Inputs.TextInput.Icon icon={({ size, color }) => (
                            <Image source={require('../../assets/images/check.png')} style={{tintColor: 'blue' }}/>)}/>
                        : null}/>
                    {emailValidate
                        ? <View style={{height:20, marginTop:5}}></View>
                        : <Text style={{color:'red', height:20, marginTop:5}}>{'Invalid email'}</Text>
                    }
                        <Text style={styles.text}>{'Password '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                        <Inputs.TextInput
                            type="password"
                            name="password"
                            style={styles.input}
                            onChangeText={passwordOnChange}
                            value={password}
                            secureTextEntry={passwordVisible}
                            selectionColor={'black'}
                            outlineColor={'transparent'}
                            activeOutlineColor={'transparent'}
                            mode={'outlined'}
                            right={<Inputs.TextInput.Icon
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
                                value={conditionsAgree}
                                onValueChange={setConditionsAgree}
                                color={conditionsAgree ? '#4630EB' : undefined}
                            />
                            <TouchableOpacity  onPress={() => {setConditionsAgree(!conditionsAgree)}} >
                                <Text style={[styles.agree, {color: '#2C3A4B', marginLeft: 12}]}>{'By creating an account, you agree to our'}</Text>
                                <Text style={[styles.agree, {color: '#6D5FFD', marginLeft: 12, marginTop: 5}]}>{'Term and Conditions'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={props.handleSubmit} disabled={submitEnable}>
                            <Text style={styles.buttonText}>{'Create Account'}</Text>
                        </TouchableOpacity>
                        <View style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                            <Text style={[styles.text, {textAlign: 'center', color: '#858C94'}]}>{'Already have an account?'}</Text>
                            <TouchableOpacity onPress={() => {navigation.navigate('Sign')}}>
                                <Text style={[styles.link, {marginTop: 5}]}>{' Sign in'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomLine}></View>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default CreateAcc;

const styles = StyleSheet.create({
    container: {
        paddingTop: 38,
        paddingHorizontal: 24,
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        color: '#394452',
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 46,
        width: '100%',
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
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom: 8,
        color: '#2C3A4B'
    },
    checkbox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 10
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
    input:{
        backgroundColor: 'transparent',
        borderWidth: 1,
        height:42,
        borderRadius: 8,
        borderColor: '#A5ABB3',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,

    },
    agree: {
        color: '#858C94',
        fontSize: 14,
        lineHeight: 20,
        marginTop: -5
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
