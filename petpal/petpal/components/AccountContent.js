import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { Icon } from '@rneui/themed';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../context';
const AccountContent = () => {
  const [isSignedIn ,setisSignedIn] = useContext(Context)
  handleLogout = async() => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully');
      setisSignedIn(false);
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Orders</Text>
      <Icon name='package' type='feather' color='black' size={30}/>
    </View>
    <Text style={{fontSize: 15,marginBottom: 5}}>check your order status</Text>
    <Divider orientation='horizontal' width={2}/>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Addresses </Text>
      <Icon name='location' type='evilicon' color='black' size={40}/>
    </View>
    <Text style={{fontSize: 15,marginBottom: 5}}>Manage your saved addresses</Text>
    <Divider orientation='horizontal' width={2}/>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Invite friends </Text>
      <Icon name='person-add-alt' type='material' color='black' size={30}/>
    </View>
    <Text style={{fontSize: 15,marginBottom: 5}}>invite friends and get discounts</Text>
    <Divider orientation='horizontal' width={2}/>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Faq/Contact us  </Text>
      <Icon name='headset' type='font-awesome-5' color='black' size={30}/>
    </View>
    <Text style={{fontSize: 15,marginBottom: 5}}>Frequently asked questions</Text>
    <Divider orientation='horizontal' width={2}/>
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Account settings </Text>
      <Icon name='settings' type='feather' color='black' size={30}/>
    </View>
    <Text style={{fontSize: 15,marginBottom: 5}}>Manage your account</Text>
    <Divider orientation='horizontal' width={2}/>

     <Pressable style={{marginTop: 20}} onPress={handleLogout}>
      <Text style={{fontSize: 20,marginTop: 40 ,color: 'red' , fontWeight: 'bold' , textAlign: 'center' , textDecorationLine: 'underline'}}>Logout</Text>
     </Pressable>
    </View>
  )
}

export default AccountContent

const styles = StyleSheet.create({

    container: {
        marginTop: 20,
        margin: 20
    },
    heading: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 1
    },
    headingContainer: {
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    }
})