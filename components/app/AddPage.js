import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';

const AddPage = ({navigation}) => {
    const [text, setText] = useState(199);
    const [input, setInput] = useState('199');
    const [selectedTo, setSelectedTo] = useState(1);
    const [selectedToLabel, setSelectedToLabel] = useState();
    const [selectedFrom, setSelectedFrom] = useState(1);
    const [selectedFromLabel, setSelectedFromLabel] = useState();

    const onPressExchange = () => {
        Alert.alert('money exchanged')
    }

    const onChange = (e) => {
        setText(parseInt(e)*selectedTo*selectedFrom);
        if(e === ''){
            setText(0);
        }
        setInput(e);
    }

    const onValueToChange = (itemValue, itemIndex) => {
            setSelectedTo(parseFloat(itemValue));
            console.log(typeof itemValue);
            setSelectedToLabel(itemValue);
    }

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <MaterialCommunityIcons name="arrow-left" color={'black'} size={30}/>
                </TouchableOpacity>
                <Text style={{fontSize: 23, lineHeight: 34, fontWeight: '600', marginLeft: 16}}>{'Exchange Money'}</Text>
            </View>
            <View style={styles.exchange}>
                <View >
                    <Text>{'From'}</Text>
                    <View style={styles.from}>
                        <Picker
                            selectedValue={selectedFromLabel}
                            style={{width: 100, backgroundColor: 'transparent', marginRight: 75}}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedFrom(parseInt(itemValue))
                                setSelectedFromLabel(itemValue);
                            }
                            }>
                            <Picker.Item label="USD" value="1" />
                            <Picker.Item label="EUR" value="1.3" />
                            <Picker.Item label='GBP' value= '1.7' />
                            <Picker.Item label='UAH' value= '37' />
                        </Picker>
                        <TextInput
                            style={styles.money}
                            onChangeText={onChange}
                            value={input}
                            placeholder={'$199 '}
                            keyboardType={"numeric"}
                        />
                    </View>
                </View>
                <Image source={require('../../assets/images/converter/arrow.png')} height={50} width={50} style={{alignSelf: 'center', marginTop: 50}}/>
                <View style={{marginTop: 50}}>
                    <Text>{'To'}</Text>
                    <View style={styles.to}>
                        <Picker
                            selectedValue={selectedToLabel}
                            style={{width: 100, backgroundColor: 'transparent', marginRight: 75}}
                            mode={'dropdown'}
                            onValueChange={onValueToChange}>
                            <Picker.Item label="USD" value="1" />
                            <Picker.Item label="EUR" value="1.3" />
                            <Picker.Item label='GBP' value= '1.7' />
                            <Picker.Item label='UAH' value= '37' />
                        </Picker>
                        <Text style={styles.money} >{`$${text}`}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPressExchange}><Text style={styles.buttonText}>{'Exchange'}</Text></TouchableOpacity>
        </View>
    );
};

export default AddPage;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
    },
    exchange: {
        padding: 36,
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 8
    },
    from: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 50,
        marginTop: 20
    },
    money: {
        fontSize: 28,
        lineHeight: 42,
        fontWeight: '600',
        color: '#6D5FFD',
        maxWidth: 100,
        overflow: 'hidden'
    },
    to: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 50,
    },
    button: {
        backgroundColor: '#6D5FFD',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 8,
        width: 320,
        marginTop: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        textAlign: "center",

    }
})
