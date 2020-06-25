import * as React from 'react';
import { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';

const UserIcon = () => {
  const [userName, setuserName] =useState('Joey tribbiani');
  const [email, setemail] =useState('Joeytribbiani@gmail.com');
  const [foodDonated, setfoodDonated] = useState('28 kgs');
  const [receiverContacted, setreceiverContacted] = useState('8');
  const [donorContactNo, setdonorContactNo] = useState('9274531982');
  const [donorAddress, setdonorAddress] = useState('Crossing Republick ,Dhundhera');
  
  
  const UpdateName = () => {
    setuserName('');
  }
  const UpdateEmail = () => {
    setemail('');
  }
  const UpdateFoodDonated = () => {
    setfoodDonated('');
  }
  const UpdateDonorContactNo = () => {
    setdonorContactNo('');
  }
  const UpdateDonorAddress = () => {
    setdonorAddress('');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/VectorImage.png')}
        style={styles.imagePic}>
        
        <View style= {styles.profileImageContainer}> 
          <Image source ={require('../assets/ProfilePic.png')} style = {styles.profilePic} />
          <View>
            <Text style ={styles.userName}> {userName} </Text>
            <Text style ={styles.emailText}> {email} </Text>
          </View>
        </View>
        <Text style = {styles.userType}> Donor </Text>
      </ImageBackground>
      <View style = {styles.donorInfoContainer}> 
          <Text style = {styles.donorInfoText}>Donor Info</Text>
          <View style = {styles.donorInfoContainerInside}>
            <View style = {styles.foodDonatedContainer}>
              <Text style = {styles.foodDonatedText}>Food Donated</Text>
              <Text style = {styles.foodDonatedText}> {foodDonated} </Text>
            </View>
            <View style = {styles.foodDonatedContainer}>
              <Text style = {styles.foodDonatedText}>Receiver Contacted</Text>
              <Text style = {styles.foodDonatedText}> {receiverContacted} </Text>
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
              <Text style = {styles.foodDonatedText}> {donorAddress} </Text>
            </View>
          </View>
      </View>

      <View style = {styles.navigationBar}> 
        <TouchableOpacity
        style= {styles.navigationButton}
        onPress ={() => alert('update screen')}
        > 
          <Text style ={styles.navigationButtonText}> Update </Text>
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
};

const styles = StyleSheet.create({
  imagePic: {
    height:290,
    resizeMode: 'cover',
  },
  container: {
    flex:1,
  },
  profileImageContainer: {
    height:100,
    //backgroundColor:'grey',
    marginTop:40,
    marginLeft:30,
    flexDirection:'row'
  },
  profilePic: {
    width:120,
    height:120
  },
  userName: {
    fontSize:35,
    color:'#FFFFFF',
    fontWeight:'bold',
    marginLeft:20,

  },
  emailText: {
    fontSize:18,
    color:'#FFFFFF',
    alignSelf:'center',
    marginLeft:20
  },
  userType: {
    fontSize:35,
    color:'#FFFFFF',
    fontWeight:'bold',
    marginLeft:40,
    marginTop : 10
  },
  donorInfoContainer: {
    height:159,
    width:358,
    backgroundColor: 'rgba(251,131,44,1)',
    marginHorizontal:18,
    borderRadius:30,
  },
  donorInfoText:{
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'center',
  },
  donorInfoContainerInside: {
    height:132,
    width:358,
    backgroundColor: 'rgba(251,251,251,.4)',
    borderRadius:30,
  },
  foodDonatedContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:340,
    paddingHorizontal:10,
    marginTop:15,
  },
  foodDonatedText:{
    fontWeight:'bold',
    fontSize:20,
  },
   donorContactInfoContainer: {
    height:159,
    width:358,
    backgroundColor: 'rgba(251,131,44,1)',
    marginHorizontal:18,
    borderRadius:30,
    marginTop:30,
  },
  navigationBar: {
    height:48,
    width:411,
    backgroundColor: 'rgba(247,97,47,.9)',
    marginTop:36,
    flexDirection:'row',
    },
  navigationButton:{
    width:137,
    height:48,
    alignItems:'center',
  },
  navigationButtonText: {
    fontSize:20,
    color:'#FFFFFF',
    alignSelf:'center',
    fontWeight:'bold',
    marginTop:10

  }


});

export default UserIcon;
