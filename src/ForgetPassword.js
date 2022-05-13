import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {sendRequestOfChangingPassword} from "../firebase/Auth";
import * as React from "react";

const routeName = 'ForgetPassword';

export {routeName};

export default function ForgetPassword({navigation}) {

    const [email, setEmail] = useState('');

    function changePassword() {
        sendRequestOfChangingPassword(email).then().catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
        goToSignIn();
    }

    function goToSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Email</Text>
            </View>

            <View style={{padding: 30}}>
                <TextInput placeholder='Enter here your email' onChangeText={setEmail} value={email}/>
            </View>

            <View style={{padding: 30}}>
                <Button title='Send Request' onPress={() => changePassword()}/>
            </View>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
