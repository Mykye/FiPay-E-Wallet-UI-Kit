import * as React from 'react';
import {Button, View, Text, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from "./Intro";
import SignIn from "./SignIn";
import FaceId from "./FaceId";
import HomePage from "../app/HomePage";
import CreateAcc from './createAcc';
import Verification from "./Verification";
import CreateAccInfo from "./createAccInfo";
import ForgotPassword from "./forgotPassword";
import NewPassword from "./NewPassword";
import Tabs from "../app/tabs";
import Settings from '../settings/settings'
import NotificationSettings from "../settings/notificationSettings/NotificationSettings";
import Security from "../settings/securitySettings/Security";
import ServicesSettings from "../settings/servicesSettings/servicesSettings";
import Currency from "../settings/currencySettings/currency";
import MyCards from "../settings/myCardsSettings/myCards";
import Profiles from "../settings/profiles/profiles";

const Stack = createNativeStackNavigator();

function LogInNavigation() {
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Intro"
                                 screenOptions={{
                                     headerShown: false
                                 }}>
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="Sign" component={SignIn} />
                    <Stack.Screen name="Faceid" component={FaceId} />
                    <Stack.Screen name="Greeting" component={HomePage} />
                    <Stack.Screen name="CreateAcc" component={CreateAcc} />
                    <Stack.Screen name="Verification" component={Verification} />
                    <Stack.Screen name="CreateAccInfo" component={CreateAccInfo} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="NewPassword" component={NewPassword} />
                    <Stack.Screen name="Tabs" component={Tabs} />
                    <Stack.Screen name="Settings" component={Settings}/>
                    <Stack.Screen name="NotSettings" component={NotificationSettings}/>
                    <Stack.Screen name="Security" component={Security}/>
                    <Stack.Screen name="Services" component={ServicesSettings}/>
                    <Stack.Screen name="Currency" component={Currency}/>
                    <Stack.Screen name="MyCards" component={MyCards}/>
                    <Stack.Screen name="Profiles" component={Profiles}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default LogInNavigation;
