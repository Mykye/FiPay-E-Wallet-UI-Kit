import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Animated ,{Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";

const ProfilePage = ({navigation}) => {

    return (
        <View >
            <View style={styles.top}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                                <MaterialCommunityIcons name="arrow-left" color={'white'} size={30}/>
                            </TouchableOpacity>
                            <Text style={{fontWeight: '600', fontSize: 23, lineHeight: 34, color: 'white', marginLeft: 16}}>{'Account'}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
                            <MaterialCommunityIcons name="menu" color={'white'} size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileImage}>
                        <View>
                            <View style={styles.fCircle}></View>
                            <View style={styles.sCircle}></View>
                            <View style={styles.tCircle}></View>
                            <Image source={require('../../assets/images/profile/Image.png')} />
                        </View>
                    </View>
                    <View style={styles.profileInfo}>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Name'}</Text>
                            <Text style={styles.text}>{'John Doe'}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Email'}</Text>
                            <Text style={styles.text}>{'jo*****@gmail.com'}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Phone number'}</Text>
                            <Text style={styles.text}>{'**** **** 5645'}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Account number'}</Text>
                            <Text style={styles.text}>{'**** **** 4782'}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Users ID'}</Text>
                            <Text style={styles.text}>{'3501 3492 4736'}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                            <Text style={[styles.text,{fontWeight: '400'}]}>{'Address'}</Text>
                            <Text style={styles.text}>{'Bung Tomo St. 067'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
        position: "relative",
    },
    top: {
        height: 500,
        backgroundColor: '#6D5FFD'
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    profileImage: {
        position: "absolute",
        top: 120,
        left: 100,
    },
    fCircle: {
        backgroundColor: '#8f85e3',
        width: 180,
        height: 180,
        borderRadius: 90,
        position: "absolute",
        top: -12,
        left: -12,
    },
    sCircle: {
        backgroundColor: '#8f85e3',
        width: 190,
        height: 190,
        opacity: 0.6,
        borderRadius: 95,
        position: "absolute",
        top: -17,
        left: -17,
    },
    tCircle: {
        backgroundColor: '#8f85e3',
        width: 200,
        height: 200,
        opacity: 0.4,
        borderRadius: 100,
        position: "absolute",
        top: -22,
        left: -22,
    },
    profileInfo: {
        width: 320,
        height: 300,
        borderRadius: 8,
        backgroundColor: 'white',
        borderColor: '#6D5FFD',
        borderWidth: 1,
        position: "absolute",
        top: 320,
        left: 20,
        padding: 24
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#2C3A4B'
    }
})
