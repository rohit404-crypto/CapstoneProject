import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icon , SearchBar } from '@rneui/themed';

const AccountHeader = ({}) => {
    const [search, setSearch] = useState('');
    const onChangeSearch = (search) => setSearch(search);
  return (
    <View style={styles.container}>
     <Icon name="menu" type='material'  
      containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', width: 20, height: 19, marginLeft:1 , marginTop:40, marginBottom:0}}
     />
     <SearchBar
      placeholder="Type Here..."
      round
      containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'transparent', width: 260, height: 19, marginLeft: 10 , marginTop:0, marginBottom:0}}
      value={search}
      onChangeText={onChangeSearch}
      inputContainerStyle={{backgroundColor:'aliceblue' }}
      inputStyle={{color: 'black'}}
      cursorColor={'black'}
    //   placeholderTextColor={'black'}
    />
    <Icon name="heart" type='octicon'  containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'white', width: 25, height: 23, marginLeft:2 , marginTop:43, marginBottom:0, marginRight: 10}}/>
    <Icon name="shopping-cart" type='material'  containerStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: 'white', width: 20, height: 23, marginLeft:0 , marginTop:43, marginBottom:0}}/>
    </View>
  )
}

export default AccountHeader

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
         marginLeft: 20,
         marginTop: 15,
         alignItems: 'center',
         
 
    }
     
 })