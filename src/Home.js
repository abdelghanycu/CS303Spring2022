import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {isSignedIn, logout} from "../firebase/Auth";
import * as React from "react";
import {AuthContext} from "./Utils";

const routeName = 'Home';

export {routeName};

export default function Home({navigation}) {

    const {signOut} = React.useContext(AuthContext);

    function signOutUser(){
        signOut();
        logout();
        // no need explicitly to redirect for the sign-in screen
        // navigation.navigate('SignIn');
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 30}}>
                <Button title='Go to your Profile' onPress={() => navigation.navigate('Profile')}/>
            </View>

            <View style={{padding: 30}}>
                <Button title='Sign out' onPress={signOutUser}/>
            </View>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
