import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import Footer from "./tabs";
import Card from "../helpers/Card";
import Bill from "../helpers/bill";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.title}>{'Good morning, John!'}</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/reload.png')} />
                </TouchableOpacity>
            </View>
            <Card />
            <View>
                <View style={styles.billsHeader}>
                    <Text style={styles.billsTitle}>{'Upcomming bill'}</Text>
                    <TouchableOpacity>
                        <Text style={styles.billsReload}>{'See All'}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView scrollEnabled={true} >
                    <Bill billName={'Market Bills'} date={'May 30,2022'} icon={require('../../assets/images/billIcons/Icon.png')}/>
                    <Bill billName={'Supermarket bills'} icon={require('../../assets/images/billIcons/Icon2.png')}/>
                    <Bill billName={'Store bills'} icon={require('../../assets/images/billIcons/Icon3.png')}/>
                    <Bill billName={'Wifi bills'} icon={require('../../assets/images/billIcons/Icon4.png')}/>
                    <Bill billName={'Home Bills'}/>
                    <Bill billName={'Sme Bills'}/>
                    <Bill billName={'Market Bills'}/>
                    <Bill billName={'Market Bills'}/>
                </ScrollView>
            </View>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
        marginBottom: 260
    },
    title: {
        fontWeight: '600',
        fontSize: 28,
        lineHeight: 42
    },
    billsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    billsTitle: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30
    },
    billsReload: {
        color: '#6D5FFD',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    }
})
