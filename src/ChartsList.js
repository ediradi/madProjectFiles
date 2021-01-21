import { View, ScrollView, Linking, StyleSheet } from "react-native";
import { Card, Button, Searchbar } from "react-native-paper";
import React, { useState } from "react";



const charts = require("../json/egg.json")

function filterItemsBySearchterm(items, searchTerm) {

  if (!searchTerm || searchTerm.length === 0) {
    return items;
  } else {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return items.filter(item => 
      item.artistName.toLowerCase().includes(lowerCaseSearchTerm) || 
      item.trackName.toLowerCase().includes(lowerCaseSearchTerm))
  }

}

export default function ChartsList() {

  const [search, setSearch] = useState('')

  const filteredItems = filterItemsBySearchterm(charts, search)

  return (
    <View style={{ marginTop: 30, }}>
      <Searchbar value={search} onChangeText={setSearch} placeholder={'Search for Tracks or DJs'} />
      <ScrollView>
        {console.log(filteredItems)}
        {filteredItems.map(item =>          
          <ChartItem key={item.id} item={item} />
        )}
      </ScrollView>
    </View>
  );
}

function ChartItem({ item }) {
  const { artistName, trackName, imgUrl, audioPreviewUrl, spotifyUri } = item
  return (
    <Card style={{ marginVertical: 8 }} onPress={() => {
      //jetzt lied spielen
      Linking.openURL(audioPreviewUrl)
    }}
    >
      <Card.Cover source={{ uri: imgUrl }} />
      <Card.Title title={artistName} subtitle={trackName} />
      <Card.Actions>
        <Button onPress={() => Linking.openURL(spotifyUri)}>Spotify</Button>
        <Button onPress={() => Linking.openURL(audioPreviewUrl)}>Browser</Button>
      </Card.Actions>
    </Card>
  )
}


