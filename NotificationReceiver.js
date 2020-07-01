import * as React from 'react';
import {Text, View, StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useState} from "react";
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
const THEME_COLOR='#f7612f';

const DEVICE_WIDTH=Dimensions.get('window').width;
const DEVICE_HEIGHT=Dimensions.get('window').height;
const GREY_BACKGROUND='#f0f0f9';
const UserIcon=()=>{
  const[username,setusername]=useState('Parnika Srivastava');
  const[fooddonate,setfooddonate]=useState('28kg rice');
  const[email,setemail]=useState('srivparnika03@gmail.com');
  const[donorContactNo,setdonorContactNo]=useState('9839994321');
  const[donoraddress,setdonoraddress]=useState('crossing republic');
  


const Updatename = () =>{
  setusername('');
}
const Updatefooddonate = () =>{
  setfooddonate('');
}
const Updatemail = () =>{
  setemail('');
}

const Updatedonorcontactno = () =>{
  setdonorContactNo('');
}
const Updatedonoraddress = () =>{
  setdonoraddress('');
}

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <MaterialCommunityIcons name="keybord-backspace" size={25} color={THEME_COLOR}/>
    <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginBottom:20}}>N O T I F I C A T I O N S</Text>
    </View>
   
      <View style={styles.heading}>
      <Text style={styles.h1}>Hello!! Donor responed to your request</Text>
      </View>

      <Text style={{fontSize:18,fontWeight:'bold',color:'#000000',paddingBottom:10}}>STATUS-APPROVED</Text>

      
      <View style = {styles.donorInfoContainer}> 
          <Text style = {styles.donorInfoText}>Donor Info</Text>
         <View> 
      <Text style={styles.username}>{username}</Text>
      <Text style ={styles.emailText}> {email} </Text>
      </View>

          <View style = {styles.donorInfoContainerInside}>
            <View style = {styles.foodDonatedContainer}>
              <Text style = {styles.foodDonatedText}>Food Donated</Text>
              <Text style = {styles.foodDonatedText}> {fooddonate} </Text>
            </View>
          </View>
      </View>
    
    <View style = {styles.donorContactInfoContainer}> 
          <Text style = {styles.donorInfoText}>Contact Info</Text>
          <View style = {styles.donorInfoContainerInside}>
            <View style = {styles.foodDonatedContainer}>
              <Text style = {styles.foodDonatedText}>Contact No.</Text>
              <Text style = {styles.foodDonatedText}> {donorContactNo} </Text>
            </View>
            <View style = {styles.foodDonatedContainer}>
              <Text style = {styles.foodDonatedText}>Address      </Text>
              <Text style = {styles.foodDonatedText}> {donoraddress} </Text>
            </View>
          </View>
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>alert('Accepted')}>
    <Text style={styles.buttontext}>C O N F I R M</Text>
    </TouchableOpacity>
    <View style = {styles.navigationBar}> 
        <TouchableOpacity
        style= {styles.navigationButton}
        onPress ={() => alert('search screen')}
        > 
          <Text style ={styles.navigationButtonText}> Search </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style= {styles.navigationButton}
          onPress ={() => alert('Home screen')}
        > 
          <Text style ={styles.navigationButtonText}> Home  </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style= {styles.navigationButton}
          onPress ={() => alert('Profile Screen')}
        > 
          <Text style ={styles.navigationButtonText}> Profile </Text>
        </TouchableOpacity>

      </View>
</View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    flexDirection:"column",
    justifyContent: 'flex-start',
    
    backgroundColor: '#ecf0f1',
  
    alignItems:"center",
    height:'100%',
    width:'100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  heading:
  { textAlign: 'center',
    height:'6%',
    width:DEVICE_WIDTH-20,
   
    marginTop:13,
    backgroundColor:'WHITE',
    elevation:50,
    alignItems:'center',
    justifyContent:'center',
  },
  h1:
  { textColor:'black',
    fontSize:15,
     textAlign: 'center',
    fontWeight:'bold',
    marginTop:10,
    paddingBottom:27,
  },
  header:{
    backgroundColor:THEME_COLOR,
    height:'6%',
    width:311,
    paddingLeft:'2%',
    paddingRight:'2%',
    alignItems:'CENTER',
   
    justifyContent:'center',
    
  },
  username: {
    fontSize:15,
    color:'black',
    fontWeight:'bold',
    marginLeft:20,
   textAlign:"center",
  },
  emailText: {
    fontSize:18,
    color:'black',
    alignSelf:'center',
    marginLeft:20
  },
  userType: {
    textAlign:"center",
    fontSize:35,
    color:'#FFFFFF',
    fontWeight:'bold',
    marginLeft:40,
    marginTop : 10
  },
  donorInfoContainer: {
    height:159,
    width:300,
    backgroundColor: 'rgba(251,131,44,1)',
    marginHorizontal:18,
    borderRadius:30,
  },
  donorInfoText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    
  },
  donorInfoContainerInside: {
    height:159,
    width:300,
    backgroundColor: 'rgba(251,251,251,.4)',
    borderRadius:30,
    marginHorizontal:0,
  },
  foodDonatedContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:300,
    
    paddingHorizontal:13,
    marginTop:15,
  },
  foodDonatedText:{
    fontWeight:'bold',
    fontSize:18,
  },
   donorContactInfoContainer: {
    height:150,
    width:300,
    backgroundColor: 'rgba(251,131,44,1)',
    marginHorizontal:18,
    borderRadius:30,
    marginTop:30,
  },
  button:
  {
    backgroundColor:THEME_COLOR,
    padding:10,
    marginTop:15,
  
    height:40,
    borderRadius:10,
  },
  buttontext:
  {
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
  },
  navigationBar: {
    height:35,
    width:310,
    backgroundColor: THEME_COLOR,
    marginTop:25,
    flexDirection:'row',
    },
  navigationButton:{
    backgroundColor:THEME_COLOR,
  
    
    paddingLeft:'0%',
    paddingRight:'0%',
    alignItems:'CENTER',
    textAlign: 'center',
    height:'6%',
    width:112,
    marginLeft:0,
    marginTop:10,
    backgroundColor:'WHITE',
    elevation:50,
    alignItems:'center',
    
   
    justifyContent:'center',
    
    
    alignItems:'center',
  },
  navigationButtonText: {
    fontSize:15,
    color:'#FFFFFF',
    
    fontWeight:'bold',
    marginTop:10,

  },
});
export default UserIcon;  
