import React, {useState} from 'react';
import { StyleSheet, ScrollView, Button, Text, View, TextInput, Switch } from 'react-native';

export default function MyFirstStateComponent(props){

    const [counter, setCounter] = useState(0);
    const [name, setName]=useState("");

    const txtInfo = counter > 10 ? "Groesser 10" : "Kleiner 10";

    return (
        <View>
            <Button title={'Count UP'} onPress={()=>{
                setCounter(counter +1);
                }
            }/>
            <Button title={'Count Down'} onPress={()=>{
                setCounter(counter - 1);
                }
            }/>
            <Text>CountVal:{counter}</Text>  
            <Text>{txtInfo}</Text>

            <TextInput value={name} placeholder="Give me a Name" onChangeText={text =>{
                setName(text);
            }}/>
            <Text>{name}</Text>
        </View>            
    )
}