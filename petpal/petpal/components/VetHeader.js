import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'
import { Icon , SearchBar } from '@rneui/themed';
const VetHeader = () => {
    const [search, setSearch] = useState('');
    const onChangeSearch = (search) => setSearch(search);
  return (
    <View style={styles.container}>
        <Icon name="arrowleft" type='antdesign'  style={styles.icon}
      containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', width: 20, height: 19, marginLeft:1 , marginTop:40, marginBottom:0}}
     />
     <SearchBar
      placeholder="Type Here..."
      round
      containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', width: 290, height: 19, marginLeft: 10 , marginTop:0, marginBottom:0}}
      value={search}
      onChangeText={onChangeSearch}
      inputContainerStyle={{backgroundColor:'aliceblue' }}
      inputStyle={{color: 'black'}}
      cursorColor={'black'}
    //   placeholderTextColor={'black'}
    />
    </View>
  )
}

export default VetHeader
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
         marginLeft: 20,
         marginTop: 15,
         alignItems: 'center',
         
 
    },
    icon:{
      
     },
     
 })