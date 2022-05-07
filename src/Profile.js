import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, View, Text, TextInput} from 'react-native';
import {getUsers} from "../firebase/User";
import {getUserUId} from "../firebase/Auth";
import {getUserById} from "../firebase/User";
import {useState} from "react";
import * as React from "react";

const routeName = 'Profile';

export {routeName};

export default function Profile({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    React.useEffect(() => {
        getUserUId().then((id) => {
            console.log(id);
            getUserById(id).then((user)=>{
                setEmail(user[0].email);
                setPassword(user[0].password);
                setId(user[0].id);
            })
        });
    }, []);

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>email</Text>
                <Text>{email}</Text>
            </View>

            <View style={{padding: 10}}>
                <Text>password</Text>
                <Text>{password}</Text>
            </View>

            <View style={{padding: 10}}>
                <Text>id</Text>
                <Text>{id}</Text>
            </View>


            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({});
