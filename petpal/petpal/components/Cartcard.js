
import React, { useState,useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CartContext from '../CartContext';

import Icon from 'react-native-vector-icons/Ionicons';
 const Cartcard = ({ id,image, name, price, ratings, quantity }) => {

   const {updateCartItemQuantity,removeFromCart } =useContext(CartContext)

    const minus=()=>{
        if(quantity > 1){
            updateCartItemQuantity(id,quantity - 1)
        }
    }
   
  return (
    <View style={styles.productCard}>
      <Image source={{uri:image}} style={styles.productImage} />
      <View style={styles.horizontalRule} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name.substring(0, 10)}</Text>
        <View style={styles.prat}>
          <Text style={styles.productPrice}>₹ {price}</Text>
          <View style={styles.productRatings}>
            <View style={styles.star}>
              <Text>Ratings :</Text>
              <Text style={styles.ratsta}>{ratings}</Text>
            </View>
          </View>
        </View>
      </View>
     <View style={styles.quantity}>
     <Text style={styles.add} onPress={()=>{updateCartItemQuantity(id,quantity + 1)}}>+</Text>
     <Text style={styles.buttonText} >{quantity} </Text>
     <Text style={styles.min} onPress={minus}>-</Text>
   
     </View>
        
     <TouchableOpacity style={styles.button} onPress={()=>removeFromCart(id)}>
        <Text>remove</Text>
     </TouchableOpacity>
    </View>
    
  );
};


const styles = StyleSheet.create({
  productCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    overflow: "hidden",
    margin: 16,
    width: '70%',
    backgroundColor: "#F3F4F6",
    height: 270,
    alignItems:"center"
  },
  productImage: {
    resizeMode: "contain",
    width: "100%",
    height: 100,
    marginTop: 10,
  },
  productDetails: {
    padding: 3,
  },
  productName: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "600",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#007bff",
  },
  productRatings: {
    flexDirection: "row",
    color: "#f8d615",
  },
  star: {
    fontSize: 12,
    marginRight: 4,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    flexDirection:"row",
    justifyContent:"space-around",
    width:"50%"
    
  },
  buttonText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "bold",
  },
  min:{
    // backgroundColor:"#000",
//   color:"white",
  width:20,
  height:20,
  borderRadius:20,
  textAlign:"center",
  borderWidth:1,
  
},
  add:{
    // backgroundColor:"#000",
//   color:"white",
  width:20,
  height:20,
  borderRadius:20,
  textAlign:"center",
  borderWidth:1,
  
},
  prat: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horizontalRule: {
    borderBottomColor: "#252525",
    opacity: 0.2,
    borderBottomWidth: 1,
    marginVertical: 2,
  },
  button:{
    marginTop:10,
    padding:5,
    backgroundColor:"red",
    borderRadius:10
  }
});

export default Cartcard
