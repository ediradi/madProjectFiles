import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import React from "react";
import ApothekenItem from './ApothekenItem';



export default function ApothekenDetailPage({route, navigation}) {
 
  const item = route.params.apotheke
  return (
    <View>
       <Text>{item.properties.BEZEICHNUNG}</Text>   
    </View>
  );
}