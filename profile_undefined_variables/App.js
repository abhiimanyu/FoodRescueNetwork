import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import AppBar from './components/AppBar'
import UserIcon from './components/UserIcon'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ImageBackground 
      source = {require('./assets/MainBackground.png')}
      style = {styles.image}>
      <View style ={styles.mainBackground }>
          <AppBar/>
          <UserIcon/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    //justifyContent: "center"
    marginTop:22
  },
  mainBackground: {
    //backgroundColor: '#FFA51F',
    flex :1,
  }
});
