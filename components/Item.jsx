import {TouchableOpacity, Image, Text, View} from 'react-native';

export default function Item({iconScr, text}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => alert("Hello "+ text)}>
                <Image source={iconScr} style={{width: 200, height: 200, alignItems: 'stretch'}}/>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}