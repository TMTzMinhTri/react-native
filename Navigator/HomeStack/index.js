import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from "../../Screens";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () =>
    <HomeStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="LoginScreen" component={Screens.HomeScreen} />
    </HomeStack.Navigator>