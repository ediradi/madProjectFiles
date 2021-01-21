import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Searchbar} from 'react-native-paper';
import MyFirstComponent from './src/MyFirstComponent';
import MyFirstStateComponent from './src/MyFirstStateComponent';
import SimpleList from './src/SimpleList';
import NetworkingComponent from './src/NetworkingComponent';
import SimpleMap from'./src/SimpleMap';
import ChartsList from'./src/ChartsList';
import ApothekePage from'./src/appotheke/ApothekePage';
import ApothekenDetailPage from'./src/appotheke/ApothekenDetailPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const data = require("./src/appotheke/aphotekengeo.json")

const Stack = createStackNavigator();

export default function App() {

  const [searchQuery,setSearchQuery] = useState('');

  const onChangeText=(event)=>{
    //setSearchQuery(event.target.value);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApothekePage">
        <Stack.Screen name="ApothekePage" 
                      component={ApothekePage}
                      options={{ title: 'Overview' }}>
        </Stack.Screen>
        <Stack.Screen name="ApothekeDetail" component={ApothekenDetailPage} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
