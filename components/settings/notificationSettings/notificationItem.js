import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from "react-native";

const NotificationItem = ({text=''}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#003a98' }}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
                <View style={styles.line}></View>
        </View>
    );
};

export default NotificationItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 28
    },
    text: {
        color: '#2C3A4B',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    line: {
        backgroundColor: 'grey',
        width: '100%',
        height: 1,
        opacity: 0.5,
        marginTop: 28
    }
})
