import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet, View, Text, Image, ScrollView,
    TextInput, Button, TouchableOpacity, ActivityIndicator
} from 'react-native';
import Item from "./components/Item"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import axios from 'axios';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

import Home from "./pages/Home";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function Menu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Info" component={Info}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Setting" component={Setting}/>
        </Tab.Navigator>
    );
}


export default function App() {
    return (

        <NavigationContainer>

            {/*<Tab.Navigator>*/}
            {/*    <Tab.Screen name="Home" component={Home}/>*/}
            {/*    <Tab.Screen name="Info" component={Info}/>*/}
            {/*    <Tab.Screen name="Profile" component={Profile}/>*/}
            {/*    <Tab.Screen name="Setting" component={Setting}/>*/}
            {/*</Tab.Navigator>*/}


            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>


            {/*<Stack.Navigator initialRouteName="SignIn">*/}
            {/*    /!*<Stack.Screen name="Home" component={Home} options={{ title: 'my home page' }}/>*!/*/}
            {/*    /!*<Stack.Screen name="Info" component={Info}/>*!/*/}
            {/*    /!*<Stack.Screen name="Profile" component={Profile}/>*!/*/}
            {/*    /!*<Stack.Screen name="Setting" component={Setting}/>*!/*/}
            {/*    <Stack.Screen name="SignIn" component={SignIn}/>*/}
            {/*    <Stack.Screen name="SignUp" component={SignUp}/>*/}
            {/*</Stack.Navigator>*/}
        </NavigationContainer>

        // <ScrollView style={{padding: 30}}>
        //
        //     <View style={{padding: 10}}>
        //         <Home/>
        //     </View>
        //
        //     <View style={{padding: 10}}>
        //         <Info/>
        //     </View>
        //
        //     <View style={{padding: 10}}>
        //         <Profile/>
        //     </View>
        //
        //     <View style={{padding: 10}}>
        //         <Setting/>
        //     </View>
        //
        //     <View style={{padding: 10}}>
        //         <SignIn/>
        //     </View>
        //
        //     <View style={{padding: 10}}>
        //         <SignUp/>
        //     </View>
        //
        // </ScrollView>
    );
}

const styles = StyleSheet.create({});
