import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import React from "react";
import ApothekenItem from './ApothekenItem';



export default function AphotekenList({items, onPress}) {
 
  return (
    <ScrollView>
        {items.map((item)=>
            <ApothekenItem key={item.id} item = {item} onPress={()=> onPress(item)}/>)
        }      
    </ScrollView>
  );
}