import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';


export default function SignUp({navigation}) {

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
                <Text>Confirm Password</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Password again"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Text>First Name</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your First Name"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Text>Last Name</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Last Name"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Text>Email</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Email"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Text>Phone</Text>
            </View>

            <View style={{padding: 10}}>
                <TextInput placeholder={"Enter your Phone"}></TextInput>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Create Account"} onPress={() => navigation.goBack()}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);