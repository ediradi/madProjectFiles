import React from 'react';
import { Text, View } from 'react-native';

export default function MyFirstComponent(prop){

    return (
        <View>
            <Text>Hallo {prop.name} </Text>
            {prop.age > 30 && <Text>Older then 30</Text>}
        </View>      
    )
}