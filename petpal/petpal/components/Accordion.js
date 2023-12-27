import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

const Accordion = ({ title ,description}) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      {/* Accordion Header */}
      <TouchableOpacity
        onPress={toggleAccordion}
        style={{
          width: windowWidth,
          backgroundColor: "#f0f0f0",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={styles.headerText}>{title}</Text>
        <Icon
          name={isExpanded ? "chevron-up" : "chevron-down"}
          type="entypo"
          color="black"
          size={20}
          onPress={toggleAccordion}
          containerStyle={{ position: "absolute", right: 10 }}
        />
      </TouchableOpacity>

      {/* Accordion Content */}
      {isExpanded && (
        <ScrollView
          style={{ flex: 1, height: windowHeight-570 }} // Adjust the height as needed
          keyboardShouldPersistTaps="handled"
        >
          <Text selectable style={{ marginLeft: 20, marginTop: 10 }}>
           {description}
          </Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#ccc",
    overflow: "hidden",
    marginBottom: 0, // Add margin to avoid being covered by bottom tab
  },
  header: {
    backgroundColor: "#f0f0f0",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default Accordion;
