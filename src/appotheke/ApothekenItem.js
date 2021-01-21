import React from "react";
import { Linking } from "react-native";
import {  Button, Card  } from 'react-native-paper';


export default function ApothekenItem({item, onPress}) {

    const {properties, geometry}=item;
    const { BEZEICHNUNG, BEZIRK, TELEFON, EMAIL, ADRESSE, WEBLINK1} = properties;

    return(
        <Card onPress={onPress}>
            <Card.Title title={BEZEICHNUNG} subtitle={ADRESSE}/>
            <Card.Actions>
                <Button onPress={()=>Linking.openURL('mailto:' + EMAIL)}>M@il</Button>
                <Button onPress={()=>Linking.openURL('tel:' + TELEFON)}>Phone</Button>
                <Button onPress={()=>Linking.openURL(WEBLINK1,'_blank')}>Web</Button>
            </Card.Actions>
        </Card>
    );
}