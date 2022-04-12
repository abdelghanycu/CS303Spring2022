import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import Item from "../components/Item"

import splash from "../assets/splash.png"
import car from "../assets/car.png"
import favicon from "../assets/favicon.png"
import fish from "../assets/fish.png"
import star from "../assets/star.png"
import earth from "../assets/earth.png"
import icon from "../assets/icon.png"
import Profile from "./Profile";


export default function Home({navigation}) {

    const data = [
        {text: "picture1", iconScr: splash},
        {text: "picture2", iconScr: car},
        {text: "picture3", iconScr: favicon},
        {text: "picture4", iconScr: fish},
        {text: "picture5", iconScr: star},
        {text: "picture6", iconScr: earth},
        {text: "picture7", iconScr: icon},
    ];

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Profile</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Profile"} onPress={() => navigation.navigate('Profile')}/>
            </View>

            <View style={{padding: 10}}>
                {data.map((e, index) => (<Item text={e.text} iconScr={e.iconScr} key={index}/>))}
            </View>

            <View style={{padding: 10}}>
                <Text>Log Out</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Log Out"} onPress={() => navigation.navigate('SignIn')}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);