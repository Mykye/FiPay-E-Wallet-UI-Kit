import React, {useState} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    TextInput,
    BackHandler
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Bill from "../helpers/bill";
import { BottomSheet } from 'react-native-btr';
import DatePicker from 'react-native-modern-datepicker';
import CurrentBalance from "../helpers/currentBalance";

const StatisticPage = ({navigation}) => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [datePickerVisible, setDatePickerVisible] = useState(false)
    const [from, setFrom] = useState('');
    const [fromDate, setFromDate] = useState(false);
    const [toDate, setToDate] = useState(false);
    const [to, setTo] = useState('');
    const [currentBalance, setCurrentBalance] = useState(false)

    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setFilterVisible(!filterVisible);
        setDatePickerVisible(false);
        setTo('');
        setFrom('');
    };

    const onPressTo = () => {
        setDatePickerVisible(!datePickerVisible);
        setToDate(true);
        setFromDate(false);
    }

    const onPressFrom = () => {
        setDatePickerVisible(!datePickerVisible);
        setFromDate(true);
        setToDate(false);
    }

    const onPressApply = () => {
        toggleBottomNavigationView();
        setCurrentBalance(true);
    }

    const backAction = () => {
        setCurrentBalance(false);
        return true;
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return (
                    <View style={styles.page}>
                        {currentBalance ? <CurrentBalance />: null}
                    <View style={styles.top}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>{'Statistics'}</Text>
                            <TouchableOpacity style={styles.filterDate} onPress={toggleBottomNavigationView}>
                                <Text style={{color: 'white'}}>{'This week'}</Text>
                                <MaterialCommunityIcons name="menu-down" color={'white'} size={20}/>
                            </TouchableOpacity>
                        </View>
                        <Image source={require('../../assets/images/statistic/Chart.png')}
                               style={{width: 380, height: 300, position: 'absolute', top: 100, left: -10}}/>
                    </View>
                    <View style={styles.bottom}>
                    <View style={styles.titleHeader}>
                    <Text style={styles.titleText}>{'Upcomming bill'}</Text>
                    <TouchableOpacity>
                    <Text style={styles.seeAll}>{'See All'}</Text>
                    </TouchableOpacity>
                    </View>
                    <ScrollView>
                    <Bill billName={'Buy a shoes'} icon={require('../../assets/images/statistic/Icon.png')}
                    date={'December 28,2022'} forStatistic={false}/>
                    <Bill billName={'Design salary'} icon={require('../../assets/images/statistic/Icon2.png')}
                    date={'December 27,2022'} forStatistic={false} money={'150.00'}/>
                    <Bill billName={'Design salary'} icon={require('../../assets/images/statistic/Icon2.png')}
                    date={'December 26,2022'} forStatistic={false} money={'200.00'}/>
                    <Bill billName={'Christmas gifts'} icon={require('../../assets/images/statistic/Icon2.png')}
                    date={'December 25,2022'} forStatistic={false} money={'120.00'}/>
                    </ScrollView>
                    </View>
                    <BottomSheet
                    visible={filterVisible}
                    //setting the visibility state of the bottom sheet
                    onBackButtonPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the click of the back bottom
                    onBackdropPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the clicking out side of the sheet
                    >
                    <View style={styles.bottomNavigationView}>
                {
                    datePickerVisible ?
                    <DatePicker
                    onSelectedChange={date => {
                    if (fromDate) {
                    setFrom(date);
                }
                    if (toDate) {
                    setTo(date);
                }

                    setDatePickerVisible(false);
                }}
                    mode={'calendar'}
                    />
                    :
                    <View>
                    <View style={styles.line}></View>
                    <Text style={{
                    fontSize: 20,
                    lineHeight: 30,
                    fontWeight: '600',
                    alignSelf: 'center'
                }}>{'Filter'}</Text>
                    <Text style={[styles.text, {marginTop: 40}]}>{'From '}<Text
                    style={{color: 'red'}}>{'*'}</Text></Text>
                    <TouchableOpacity onPress={onPressFrom} style={styles.to}>
                    <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>{from}</Text>
                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={24}/>
                    </TouchableOpacity>
                    <Text style={[styles.text, {marginTop: 16}]}>{'To '}<Text
                    style={{color: 'red'}}>{'*'}</Text></Text>
                    <TouchableOpacity onPress={onPressTo} style={styles.to}>
                    <Text style={{fontSize: 16, lineHeight: 24, fontWeight: '600'}}>{to}</Text>
                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onPressApply}>
                    <Text style={styles.buttonText}>{'Apply'}</Text>
                    </TouchableOpacity>
                    </View>
                }
                    </View>
                        </BottomSheet>
                    </View>
    )
};

export default StatisticPage;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    top: {
        backgroundColor: '#6D5FFD',
        height: 280,
        padding: 20,
        position: 'relative'
    },
    bottom: {
        padding: 20,
        marginTop: 100,
        flex: 1
    },
    header: {
        display: 'flex',
        justifyContent: "space-between",
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    headerTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 34
    },
    filterDate: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        display: 'flex',
        flexDirection: "row"
    },
    titleHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30
    },
    seeAll: {
        color: '#6D5FFD',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24
    },
    bottomNavigationView: {
        backgroundColor: 'white',
        width: '100%',
        height:  400,
        justifyContent: 'space-between',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingHorizontal: 25
    },
    line: {
        backgroundColor: '#DADEE3',
        width: 38,
        height: 3,
        borderRadius: 100,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 20
    },
    to: {
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderColor: 'grey',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 24
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom: 8,
        color: '#2C3A4B'
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
})
