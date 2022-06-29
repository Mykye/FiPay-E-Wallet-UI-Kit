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
                    <Stack.Screen name="Sittings" component={Settings}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default LogInNavigation;
