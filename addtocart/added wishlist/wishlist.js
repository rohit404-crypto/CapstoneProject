// add all this

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import WishList from "../Components/wishlistCard";
import { ScrollView } from "react-native-gesture-handler";

const Wish = ({ navigation }) => {
    const { items } = useContext(CartContext);


const isItems = items.length > 0;
  

  return (
    <>
      {isItems ? (
        <ScrollView>
          <View>
            {items.map((wish) => (
              <WishList
                key={wish._id}
                id={wish._id}
                image={wish.imageurl}
                name={wish.name}
                ratings={wish.rating}
                price={wish.price}
                removeFromWish={() => removeFromWish(wish._id)}
              />
            ))}
           </View>
        </ScrollView>
      ) : (
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Your Wishlist Is Empty</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 25,
    width: "70%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Wish;
