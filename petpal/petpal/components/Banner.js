import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get("window").width;

  const imageData = [
    {
      id: 1,
      image: require("../assets/banner.png"),
    },
    {
      id: 2,
      image: require("../assets/banner6.jpg"),
    },
    {
      id: 3,
      image: require("../assets/banner3.png"),
    },
    {
      id: 4,
      image: require("../assets/banner4.jpeg"),
    },
    {
      id: 5,
      image: require("../assets/banner5.jpg"),
    },
    {
      id: 6,
      image: require("../assets/banner2.jpg"),
    }
  ];
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / windowWidth);
    console.log(currentIndex);
    setActiveIndex(currentIndex);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ width: windowWidth, height: 200 }}
        />
      </View>
    );
  };

  const renderDotIndicator = () => {
    return imageData.map((Dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "red",
              margin: 5,
            }}
          />
        );
      }
      return (
        <View
          key={index}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "black",
            margin: 5,
          }}
        />
      );
    });
  };

  return (
    <View style={{ marginTop: ""}}>
      <FlatList
        data={imageData}
        horizontal={true}
        renderItem={renderItem}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {renderDotIndicator()}
      </View>
    </View>
  );
};

export default Banner;
