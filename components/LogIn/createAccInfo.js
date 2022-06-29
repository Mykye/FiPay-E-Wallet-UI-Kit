import React, {useState} from 'react';
import {TextInput, Text, TouchableOpacity, View, StyleSheet, Image, Alert} from "react-native";
import {Formik} from "formik";
import { Dropdown } from 'react-native-element-dropdown';


const CreateAccInfo = ({navigation}) => {
    const [submitEnable, setSubmitEnable] = useState(false);
    const [valueCountry, setValueCountry] = useState(null);
    const [valueState, setValueState] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Ukraine', value: 'Ukraine' },
        { label: 'USA', value: 'USA' },
        { label: 'Poland', value: 'Poland' },
        { label: 'Germany', value: 'Germany' },
        { label: 'France', value: 'France' },
        { label: 'Great Britain', value: 'Great Britain' },
        { label: 'Italy', value: 'Italy' },
        { label: 'Japan', value: 'Japan' },
    ];
    const dataState = [
        { label: 'Cherkassy', value: 'Cherkassy' },
        { label: 'Kiev', value: 'Kiev' },
        { label: 'Odessa', value: 'Odessa' },
        { label: 'Dnipro', value: 'Dnipro' },
        { label: 'Kharkiv', value: 'Kharkiv' },
        { label: 'Mikolaiv', value: 'Mikolaiv' },
    ];

    const onPressCreate = () => {
        Alert.alert("Info", 'Account Created',[
            {
                text: "OK",
                onPress: () => navigation.navigate("Sign"),
                style: "cancel"
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/LogoFiPay.png')} style={{width: 24, height: 24}}/>
            <Formik
                enableReinitialize={false}
                initialValues={{country: '', state:'', city:'', street: ''}}
                onSubmit={(values)   => {
                    console.log(values)
                }}>
                {(props) => (
                    <View >
                        <Text style={styles.title}>{'Create a new account'}</Text>
                        <Text style={styles.text}>{'Country/Region '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                        <View >
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                data={data}
                                search
                                placeholder={''}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="Search..."
                                value={valueCountry}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    props.values.country=item.value
                                    setValueCountry(item.value);
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: 20}}>
                                <View style={{flex: 1, paddingRight: 10}}>
                                    <Text style={styles.text}>{'State '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                        data={dataState}
                                        search
                                        maxHeight={300}
                                        placeholder={''}
                                        labelField="label"
                                        valueField="value"
                                        searchPlaceholder="Search..."
                                        value={valueState}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            props.values.state=item.value
                                            setValueState(item.value);
                                            setIsFocus(false);
                                        }}
                                    />
                                    </View>

                                <View style={{flex: 1, paddingLeft: 10}}>
                                    <Text style={styles.text}>{'City '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(e) => {
                                            props.values.city=e
                                        }}
                                    />
                                </View>
                        </View>
                        <View style={{marginTop: 12}}>
                            <Text style={styles.text}>{'Street '}<Text style={{color: 'red'}}>{'*'}</Text></Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => {
                                    props.values.street=e
                                }}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={onPressCreate} disabled={submitEnable}>
                            <Text style={styles.buttonText}>{'Create Account'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <View style={styles.bottomLine}></View>
        </View>
    );
};

export default CreateAccInfo;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30,
        height: '100%',
        paddingHorizontal: 24,
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: "column"
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
    title: {
        color: '#394452',
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 46,
        width: '100%',
        marginBottom: 40
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom: 8,
        color: '#2C3A4B'
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
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
