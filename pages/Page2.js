import {StatusBar} from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const routeName = 'Page2';

export{routeName};

export default function Page2({route, navigation}) {

    const {type} = route.params;

    const animals = ['Cow',
        'Dog',
        'Dolphin',
        'Donkey',
        'Eagle',
        'Fish',
        'Fox',
        'Frog'];

    const cars = ['Audi',
        'BMW',
        'Chevrolet',
        'Ferrari',
        'Ford',
        'Honda',
        'Mercedes',
        'Nissan'];

    const subjects = ['Mathematics',
        'Science',
        'Algebra',
        'Physical',
        'History'];

    return (
        <ScrollView style={{padding: 30}}>


            {type === 'animals' ? animals.map((e) => (
                <View style={{padding: 10}} key={e}>
                    <Text onPress={() => navigation.navigate('Page3', {type : type, name : e})}>{e}</Text>
                </View>
            )) : type === 'cars' ? cars.map((e) => (
                <View style={{padding: 10}} key={e}>
                    <Text onPress={() => navigation.navigate('Page3', {type : type, name : e})}>{e}</Text>
                </View>
            )) : subjects.map((e) => (
                <View style={{padding: 10}} key={e}>
                    <Text onPress={() => navigation.navigate('Page3', {type : type, name : e})}>{e}</Text>
                </View>
            ))}

            <StatusBar style="auto"></StatusBar>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {}
);