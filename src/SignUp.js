import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from 'react';
import {register, getUserUId} from "../firebase/Auth";
import {addUser} from "../firebase/User";

const routeName = 'SignUp';

export {routeName};

export default function SignUp({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser() {
        if (email === '' || password === '') {
            alert("email or password is empty!");
        } else {
            register(email, password).then((user) => {
                // console.log(getUserUId())
                addUser({id: getUserUId(), email, password});
                navigation.navigate('SignIn');
            }).catch((e) => {
                console.log(e.message)
            });
        }
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Email</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your email"} onChangeText={setEmail} value={email}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Password</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Password"} secureTextEntry={true} onChangeText={setPassword}
                           value={password}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Confirm Password</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Password again"}/>
            </View>

            <View style={{padding: 10}}>
                <Text>First Name</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your First Name"}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Last Name</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Last Name"}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Email</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Email"}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Phone</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Phone"}/>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Create Account"} onPress={registerUser}/>
            </View>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);