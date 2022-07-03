import React, {useState} from 'react';
import {Image, StyleSheet, Switch, Text, View} from "react-native";

const SecurityItem = ({icon, name, text}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <View style={styles.content}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image  source={icon}/>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: '#003a98' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    );
};

export default SecurityItem;

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
        marginTop: 28
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24
    },
    text: {
        marginTop: 15,
        color: '#858C94',
        fontSize: 14,
        lineHeight: 21
    },
    name: {
        color: '#2C3A4B',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        marginLeft: 16
    }
})
