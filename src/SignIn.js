import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {login, getUserToken} from "../firebase/Auth";
import {AuthContext} from "./Utils";
import * as React from "react";

const routeName = 'SignIn';

export {routeName};

export default function SignIn({navigation}) {

    const {signIn} = React.useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signInUser() {
        login(email, password).then(() => {
            signIn({email, password, token : getUserToken()});
            goToHome();
        }).catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
    }

    function goToHome() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Email</Text>
            </View>

            <View style={{padding: 30}}>
                <TextInput placeholder='Enter here your email' onChangeText={setEmail} value={email}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Password</Text>
            </View>

            <View style={{padding: 30}}>
                <TextInput placeholder='Enter here your password' secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>

            <View style={{padding: 30}}>
                <Button title='Sign In' onPress={signInUser}/>
            </View>

            <View style={{padding: 30}}>
                <Button title='Create new account' onPress={() => navigation.navigate('SignUp')}/>
            </View>

            <View style={{padding: 30}}>
                <Button title='Forget Password' onPress={() => navigation.navigate('ForgetPassword')}/>
            </View>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
