
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ProductCard = ({ image, name, price, ratings,handleCart ,actionButton}) => {//add actionButton
  const { icon, onPress } = actionButton || {};//add this
 
  

  return (
    
    <View style={styles.productCard}>
     {/* from this to */}
     <TouchableOpacity  style={{height:30,width:30,borderRadius:30,position:"absolute",top:5,right:'2%',zIndex:1}} onPress={onPress} >
      <View style={styles.iconContainer} >
       {icon}
      </View>
    </TouchableOpacity>
    {/* this */}
      <Image source={{uri:image}} style={styles.productImage} />
     
      <View style={styles.horizontalRule} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleCart}>
        <Text style={styles.buttonText} >Add to Cart</Text>
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
    width: 180,
    backgroundColor: "#F3F4F6",
    height: 270,
    justifyContent:"space-around"
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
  button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 25,
    marginTop: 10,
    width: "70%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  prat: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  horizontalRule: {
    borderBottomColor: "#252525",
    opacity: 0.2,
    borderBottomWidth: 1,
    marginVertical: 2,
  },
  //this
  iconContainer:{
    position:"absolute",
    right:"20%",
    top:8,
    
  }
});

export default ProductCard;
