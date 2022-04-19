import {StatusBar} from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import {useEffect, useState} from 'react';

const routeName = 'Page3';

export{routeName};

export default function Page3({route, navigation}) {

    const {type, name} = route.params;

    const [text, setText] = useState('');

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>

                <Text>{type}</Text>

                <Text>{name}</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder='Enter here text' onChangeText={setText} value={text}/>
            </View>

            <View style={{padding: 10}}>
                <Text>your message is: {text}</Text>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);