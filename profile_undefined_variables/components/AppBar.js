import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';

export default function AppBar() {
  return(
    <View style ={styles.container}>
      <Ionicons name="md-arrow-round-back" size={26} color="white" style={{marginLeft:15}}/>
      
      <Text style ={styles.text}> Profile </Text>
      <View style = {styles.icon_view}> 
        <FontAwesome5 name="edit" size={20} color="white" />
        <MaterialCommunityIcons name="logout" size={24} color="white" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    height:40,
    //marginTop: 22,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#FF9B52'

  },
  icon_view: {
    flexDirection:'row',
    //backgroundColor:'red',
    justifyContent:'space-between',
    width:60,
    marginRight:10
  },
  text: {
    fontSize:24,
    color:'white',
    
  }


})