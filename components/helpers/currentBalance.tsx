interface Props  {
    navigation: {}
}
import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const CurrentBalance = (props: Props) => {
    const {navigation} = props;
    return (
        <View style={styles.page}>
            <View style={styles.top}>
                <Text style={{fontWeight: '600', fontSize: 24, lineHeight: 34, color: 'white', marginBottom: 20}}>{'Current balance'}</Text>
                <View style={styles.total}>
                    <View style={styles.income}>
                        <Image source={require('../../assets/images/statistic/Icon.png')} style={{marginRight: 10}}/>
                        <View>
                            <Text style={styles.text}>{'Income'}</Text>
                            <Text style={[styles.money, {color: '#6D5FFD'}]}>{'$14.700'}</Text>
                        </View>
                    </View>
                    <View style={styles.expense}>
                        <Image source={require('../../assets/images/statistic/Icon2.png')} style={{marginRight: 10}}/>
                        <View>
                            <Text style={styles.text}>{'Expense'}</Text>
                            <Text style={styles.money}>{'$11.300'}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <Image source={require('../../assets/images/statistic/CurrentBalance.png')} style={{ position: 'absolute', top: -350, left: 40}}/>
            </View>
        </View>
    );
};

export default CurrentBalance;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginBottom: 800
    },
    top: {
        backgroundColor: '#6D5FFD',
        height: 500,
        padding: 20,
        position: 'relative',
        paddingTop: 60
    },
    bottom: {
        padding: 20,
        marginTop: 100,
        flex: 1,
        position: "relative",
    },
    total: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 16
    },
    text: {
        fontSize: 11,
        lineHeight: 16,
        color: '#858C94',
        marginBottom: 5
    },
    money: {
        fontSize: 20,
        lineHeight: 30,
        fontWeight: '600',
        color: '#FF1843'
    },
    income: {
        display: "flex",
        flexDirection: "row"
    },
    expense: {
        display: "flex",
        flexDirection: "row"
    }
})
