import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountHeader from '../components/AccountHeader'
import AccountBanner from '../components/AccountBanner'
import AccountContent from '../components/AccountContent'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const [userData,setUserData] = useState({
    email: "",
    petname: "",
    petguardian:""
  })
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        const parsedUserData = JSON.parse(storedUserData);
        console.log(parsedUserData);
        setUserData({
          email:parsedUserData.email,
          petguardian:parsedUserData.petGuardian,
          petname:parsedUserData.petName
        });
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);
  return (
    <View>
     <AccountHeader  />
     <AccountBanner userData={userData} />
     <AccountContent />
    </View>
  )
}

export default Account