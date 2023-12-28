//copy all

import React, { useState, useContext, createContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CartContext from "../CartContext";
import { Icon} from '@rneui/themed'

const WishList = ({ id, image, name, price, ratings,}) => {
const {removeFromWish}=useContext(CartContext)

  return (
    <View style={styles.productCard}>
      <Image source={{ uri: image }} style={styles.productImage} />

      <View></View>
      <View style={styles.con}>
        <Text style={styles.productName}>{name}</Text>

        <View style={styles.productDetails}>
          <Text style={styles.productPrice}>₹ {price}</Text>
          <View style={styles.star}>
            <Text>Ratings :{ratings} <Icon type="antdesign" name="star" size={13}
              color={"orange"} 

            /></Text>
          </View>
        </View>

       

        <TouchableOpacity
          style={styles.button}
          onPress={() => removeFromWish(id)}
        >
          <Text style={styles.buttontext}>remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: "100%",
    backgroundColor: "lightgrey",
    flexDirection: "row",
    marginTop: 10,
    height: 150,
  },
  productImage: {
    width: "40%",
  },
  productName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  quantity: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
  add: {
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  min: {
    // fontSize: 1,
    borderWidth: 1,
    borderColor: "black",
    // padding: 5,
    textAlign: "center",
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  buttontext: {
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#FF4E47",
    width: "40%",
    borderRadius: 10,
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  con: {
    width: "60%",
    justifyContent: "space-around",
  },
});

export default WishList;
