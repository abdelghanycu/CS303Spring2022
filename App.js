import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet, View, Text, Image, ScrollView,
    TextInput, Button, TouchableOpacity, ActivityIndicator
} from 'react-native';
import Item from "./components/Item"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import axios from 'axios';

import splash from "./assets/splash.png"
import car from "./assets/car.png"
import favicon from "./assets/favicon.png"
import fish from "./assets/fish.png"
import star from "./assets/star.png"
import earth from "./assets/earth.png"
import icon from "./assets/icon.png"

export default function App() {

    let key = "dataKeyName";
    let defaultValue = [
        {text: "picture1", iconScr: splash},
        {text: "picture2", iconScr: car},
        {text: "picture3", iconScr: favicon},
        {text: "picture4", iconScr: fish},
        {text: "picture5", iconScr: star},
        {text: "picture6", iconScr: earth},
        {text: "picture7", iconScr: icon},
    ];

    const [data, setDate] = useState([]);

    function load() {
        AsyncStorage.getItem(key).then(
            (value) => {
                if (value) {
                    setDate(JSON.parse(value));
                } else {
                    setDate(defaultValue);
                    AsyncStorage.setItem(key, JSON.stringify(defaultValue));
                }
            }
        );
    }

    useEffect(() => {
        load();
        getAllFromFireStore();
    }, []);

    let userId = 'userId=1';

    function getUserData() {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/todos?${userId}`,
        }).then((response) => {
            console.log(response);
            console.log(response.data);
        });
    }

    async function getAllFromFireStore() {
        let APIKEY = 'AIzaSyBEcxYNguBIrk9vfPQ9OcVjI8pViG1deUM';
        const loginResponse = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": "amabdelghany@sci.cu.edu.eg",
                    "password": "amabdelghany@sci.cu.edu.eg",
                    "returnSecureToken": true
                })
            });
        const loginResult = await loginResponse.json();

        console.log('Here is the login response ', loginResult);

        const getDataResponse = await fetch(
            `https://cs303-2022-default-rtdb.firebaseio.com/.json?auth=${loginResult.idToken}`);

        const getDataResult = await getDataResponse.json();

        console.log('here is the data ', getDataResult);
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={[styles.containerAct, styles.horizontalAct]}>
                <ActivityIndicator animating={data.length === 0}/>
                <ActivityIndicator size="large" animating={data.length === 0}/>
                <ActivityIndicator size="small" color="#0000ff" animating={data.length === 0}/>
                <ActivityIndicator size="large" color="#00ff00" animating={data.length === 0}/>
            </View>

            <Button title={"Click on Me"} onPress={ButtonClickOnMe}></Button>

            {data.map((e, index) => (<Item text={e.text} iconScr={e.iconScr} key={index}/>))}

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );

    async function ButtonClickOnMe() {
        AsyncStorage.removeItem(key);
        setDate([]);
        console.log("Before sleep");
        await sleep(5000);
        console.log("After sleep");
        load();
    }

    function sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerAct: {
        flex: 1,
        justifyContent: "center"
    },
    horizontalAct: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
