import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import VetHeader from "../components/VetHeader";
import VetCard from "../components/VetCard";

const FindAVet = ({ navigation }) => {
  const vetdata = [
    {
      id: 1,
      image: require("../assets/Jojo.png"),
      name: "Dog And Cat Care Home",
      rating: 4.5,
      phone: "1234567890",
      location: "Tundla",
      Latitude:27.221196773014306,
      Longitude:78.23845138249521,
      adress :" Dog And Cat Care Home,City Centre Station Road Tundla, Tundla, Uttar Pradesh 283204"
    },
    {
      id: 2,
      image: require("../assets/Jojo.png"),
      name: "Governement Hospital for Animal",
      rating: 4,
      phone: "07599462351",
      location: "Tundla",
      Latitude:27.22573963340386,
      Longitude:78.24567865118497,
      adress:"पशु चिकित्सालय,Agra, NH-2, AH1, Uttar Pradesh 283202"
    

    },
    {
      id: 3,
      image: require("../assets/Jojo.png"),
      name: "JOJO PET SHOP & CLINIC",
      rating: 4,
      phone: "1234567890",
      location: "Tundla",
      Latitude:27.225997218456587, 
      Longitude:78.24342559561248,
      adress:"JOJO PET SHOP & CLINIC,K.p complex firozabad road,tundla, Tundla, Uttar Pradesh 283204"
    },
    {
      id: 4,
      image: require("../assets/Jojo.png"),
      name: "24*7 Pet Clinic.",
      rating: 4.5,
      phone: "1234567890",
      location: "Delhi",
      Latitude:28.65125859187488, 
      Longitude:77.11668490769848,
      adress:"24*7 Pet Clinic.,Z-1B Basement, Block E, Rajouri Garden, New Delhi, Delhi 110077"
    }
  ];
  return (
    <View>
      <VetHeader />
      <FlatList 
        data={vetdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item , index }) => (
        <Pressable onPress={() => navigation.navigate("VetDescription", { item })}>
          <VetCard  key = {index} image={item.image} name={item.name} rating={item.rating} phone={item.phone} location={item.location} Latitude={item.Latitude} Longitude={item.Longitude}  adress={item.adress}/>
        </Pressable>
        )}
        showsVerticalScrollIndicator={false}

      />
    </View>
  );
};

export default FindAVet;
