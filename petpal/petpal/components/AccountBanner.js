import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";

const AccountBanner = ({ userData }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/AccountBanner.png")}
          style={{ width: windowWidth, height: 100 }}
        />
        <Text style={{ position: "absolute", left: 20, bottom: 30 , fontWeight: 'bold',  fontSize: 25}}>Hi {userData.petname}</Text>
        <Avatar
          rounded
          size={70}
          source={require("../assets/dog_profile.jpg")}
          containerStyle={{ position: "absolute", right: 20, bottom: 20 }}
        />
      </View>
      <View style={{ backgroundColor: 'white', position: 'absolute', left: 20, bottom: -20, borderRadius: 50, width: 200, height: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Logged in as <Text style={{fontWeight: 'bold'}}>{userData.petguardian}</Text></Text>
      </View>
    </View>
  );
};

export default AccountBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
});
