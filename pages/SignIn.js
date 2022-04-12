import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';


export default function SignIn({navigation}) {

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Username</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your username"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Text>Password</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Password"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Sign In"} onPress={() => navigation.navigate('Menu')}/>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Register"} onPress={() => navigation.navigate('SignUp')}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);