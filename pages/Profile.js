import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';


export default function Profile({navigation}) {

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Info</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Info"} onPress={() => navigation.navigate('Info', {x : 5, y : 7})}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Setting</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Setting"} onPress={() => navigation.navigate('Setting')}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);