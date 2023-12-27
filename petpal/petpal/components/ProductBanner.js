import { View, Image, Dimensions } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const ProductBanner = ({image}) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <Image
        source={{uri:image}}
        style={{
          width: windowWidth,
          height: 300,
          resizeMode: "contain", // Use 'contain' to crop from the bottom
          marginTop: "",
          alignSelf: "flex-end", // Align the image to the bottom
          borderColor: "grey",
          borderWidth: 0.5,
        }}
      />
      <Icon
        name="heart"
        type="octicon"
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "white",
          width: 25,
          height: 23,
          marginLeft: 2,
          marginTop: 43,
          marginBottom: 0,
          marginRight: 10,
          position: "absolute",
          zIndex: 1,
          right: 5,
          bottom: 10,
        }}
      />
    </View>
  );
};

export default ProductBanner;
