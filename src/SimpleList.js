import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph, Searchbar  } from 'react-native-paper';

const charts = require("../json/charts.json")

export default function SimpleList() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query)=>{
      setSearchQuery(query)
    }
   
  return (
    <ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {charts.filter(item=>
        item.trackName.toLowerCase().includes(searchQuery.toLowerCase()) >-1 ||
        item.artistName.toLowerCase().includes(searchQuery.toLowerCase()) >-1      
        )
      .map(item =>
        <ChartItem item={item} />
      )}
    </ScrollView>
  );
}

function SearchResult(item){
  return item.trackName.toLowerCase().indexOf(searchQuery.toLowerCase()) >-1
}

function ChartItem({ item }) {
  const { artistName, trackName, imgUrl, audioPreviewUrl, spotifyUri } = item
  
  return (
    <View style={{marginTop:30}}>      
      <Card>
        <Card.Cover source={{uri:imgUrl}}/>
        <Card.Title title={artistName}/>
        <Card.Content><Paragraph>{trackName}</Paragraph></Card.Content>
        <Card.Actions>
          <Button onPress={()=>Linking.openURL(spotifyUri)}>Spotify</Button>
          <Button onPress={()=>Linking.openURL(audioPreviewUrl)}>Browser</Button>
        </Card.Actions>
      </Card>   
    </View> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgrey'
  },
})


function DDD(){
  <TouchableOpacity onPress={() => {
    //jetzt lied spielen
    Linking.openURL(audioPreviewUrl)
  }}
    style={styles.c }>
    <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={{ uri: imgUrl }} />
    <Text>{artistName}</Text>
    <Text>{trackName}</Text>
  </TouchableOpacity>
}