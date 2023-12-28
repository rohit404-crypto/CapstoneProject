import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Linking
} from "react-native";
import { Feather } from "@expo/vector-icons";

const AdoptCard = ({ image, name, breed, guardian, phone }) => {

    const handleCallPress = () => {
        const phoneNumber = `tel:+${phone}`;
        
        Linking.openURL(phoneNumber);
      };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: image }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 110,
            objectFit: "contain",
          }}
        />
      </View>
      <View style={styles.cardview}>
      <Text style={{textAlign:"center",fontWeight:"600",color:"#252525",fontSize:18}}>{name}</Text>
      <View style={{marginLeft:10}}>

      
      <Text style={{color:"#252525",fontSize:14,}}><Text style={{fontWeight:"bold"}}>Breed Name : </Text>{breed}</Text>
      <Text style={{color:"#252525",fontSize:14}}><Text style={{fontWeight:"bold"}}>Guardian Name : </Text>{guardian}</Text>
      
      </View>
      <View style={{alignItems:"center"}}>
      <TouchableOpacity onPress={handleCallPress} style={styles.button} activeOpacity={0.8}>
      <Feather name="phone-call" size={20} color="aliceblue" />
      <Text style={styles.text}>{phone}</Text>
    </TouchableOpacity>
    </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        
    },
  image: {
    justifyContent: "space-around",
  },
  cardview:{
    height:130,
    width:"70%",
    backgroundColor:"aliceblue",
    margin:9,
    borderRadius:10,
    gap:5
    
    
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#247690', 
    padding: 10,
    borderRadius: 5,
    width:"50%",
  },
  text: {
    color: 'white',
    marginLeft: 5,
  },
  
});

export default AdoptCard;
