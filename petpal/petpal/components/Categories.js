import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FAB } from "@rneui/themed";
const Categories = ({activeCategory, setActiveCategory}) => {
  
    const handleCategoryPress = (category) => {
        setActiveCategory(category);
        console.log(activeCategory); // Note: This will log the previous state due to the asynchronous nature of state updates
      };
  return (
    <ScrollView
      horizontal
      style={style.container}
      contentContainerStyle={{
        height: 60,
        flexDirection: "row",
        padding: 0,
        justifyContent: "space-between",
        backgroundColor: "white",
        zIndex: 1,
        marginBottom: 40,
        

      }}
      showsHorizontalScrollIndicator={false}
    >
      <FAB
        title="All"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryPress("All")}
        
        color={activeCategory === "All" ? "orange" : "gray"}
      ></FAB>
      <FAB
        title="Dogs"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          handleCategoryPress("Dogs");
          console.log(activeCategory);
        }}
       
        color={activeCategory === "Dogs" ? "orange" : "gray"}
        ></FAB>
      <FAB
        title="Cats"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          
        }}
        onPress={() => handleCategoryPress("Cats")}
        
        color={activeCategory === "Cats" ? "orange" : "gray"}
      ></FAB>
      <FAB
        title="fish"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryPress("fish")}
        
        color={activeCategory === "fish" ? "orange" : "gray"}
      ></FAB>
      <FAB
        title="Birds"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryPress("Birds")}
        
        color={activeCategory === "Birds" ? "orange" : "gray"}
        
      ></FAB>
      <FAB
        title="Reptiles"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryPress("Reptiles")}
        
        color={activeCategory === "Reptiles" ? "orange" : "gray"}
      
      ></FAB>
      <FAB
        title="Others"
        style={style.category}
        containerStyle={{
          height: 40,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryPress("Others")}
       
        color={activeCategory === "Others" ? "orange" : "gray"}
      ></FAB>
    </ScrollView>
  );
};

export default Categories;

const style = StyleSheet.create({
  container: {},
  category: {
    marginRight: 10, // Adjust the marginRight to add space between categories
  },
});
