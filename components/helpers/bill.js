import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Bill = ({billName, date='December 28, 2021', icon=require('../../assets/images/billIcons/Icon.png'), forStatistic= true, money='100.00'} ) => {
    return (
        <View style={{marginTop: 20}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={icon} />
                    <View style={{display: 'flex', justifyContent: 'center',marginLeft: 16}}>
                        <Text style={styles.billName}>{billName}</Text>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>
                {forStatistic
                    ?
                <TouchableOpacity>
                    <Text style={styles.payText}>{'Pay'}</Text>
                </TouchableOpacity>
                    :
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontWeight: '600', fontSize: 16, marginRight: 15}}>{`$${money}`}</Text>
                        <Image source={require('../../assets/images/statistic/right.png')} />
                    </View>
                }
            </View>
            <View style={styles.line}></View>
        </View>
    );
};

export default Bill;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 220,
        paddingVertical: 24
    },
    payText: {
        color: '#6D5FFD',
        fontWeight: '600',
        lineHeight: 21,
        borderWidth: 2,
        borderColor: '#6D5FFD',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 89,
        textAlign: 'center'
    },
    date: {
        color: '#858C94',
        fontSize: 11,
        lineHeight: 16
    },
    billName: {
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
        marginTop: 20
    }
})
