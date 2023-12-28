import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import { CartProvider } from "./CartContext";
import Wish from "./screens/wishlist";

// import { Icon } from "react-native-elements";
const Stack = createStackNavigator();

 

  

const App = () => {
  return (
    <CartProvider>

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        {/* add this below */}
        <Stack.Screen name="Wish" component={Wish} />
      </Stack.Navigator>
    </NavigationContainer>


    </CartProvider>
  );
};


export default App;
