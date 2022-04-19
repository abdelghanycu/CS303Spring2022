import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

const routeName = 'Page1';

export{routeName};

export default function Page1({route, navigation}) {

    return (
        <ScrollView style={{padding: 30}}>

            <View style={{padding: 10}}>
                <Text>Animals</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Animals"} onPress={() => navigation.navigate('Page2', {type : 'animals'})}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Cars</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Cars"} onPress={() => navigation.navigate('Page2', {type : 'cars'})}/>
            </View>

            <View style={{padding: 10}}>
                <Text>Subjects</Text>
            </View>

            <View style={{padding: 10}}>
                <Button title={"Subjects"} onPress={() => navigation.navigate('Page2', {type : 'subjects'})}/>
            </View>

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);