import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProductCard = ({ imageurl, name, price, ratings, add ,  handleCart  }) => {
  return (
    <View style={styles.productCard} >
      <Image source={{uri:imageurl}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name.substring(0, 50)}...</Text>
        <View style={styles.prat}>
          <Text style={styles.productPrice}>₹{price}</Text>
          <View style={styles.productRatings}>
           
              <View style={styles.star}>
               <Text>Ratings: </Text> 
               <Text style={styles.ratsta}>{ratings}<Icon name="star" type="font-awesome" color="orange" size={12} /></Text>
              </View>
            
          </View>
          </View>
        </View>
        
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleCart}>Add to cart</Text>
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
    margin: 2,
   
    
    width: 175,
    // justifyContent:"space-around",

    backgroundColor: "#F3F4F6",
    height:300
    
    
  },
  productImage: {
    resizeMode: "contain",
    width: "100%",
    height: 100,
    marginTop:10,
    
  },
  productDetails: {
    padding: 16,
  },
  productName: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight:"600",
    textAlign:"center"
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
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    
  },
  button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft:25,
    width:"70%",
    marginBottom:30,
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    
  },
  prat: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
});

export default ProductCard;