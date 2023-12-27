
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ip } from "../ip";
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    petName: "",
    petGuardian: "",
  });

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const isValidEmail = emailRegex.test(user.email);

  async function handleSubmit() {
    if (!isValidEmail) {
      errorAlert("Invalid email address");
      return;
    }

    const resp = await fetch(`http://${ip}:3000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (resp.status === 200) {
      successAlert();
      navigation.navigate("login");
    } else {
      errorAlert("Email is already taken");
    }
  }

  const successAlert = () => {
    Alert.alert(
      "",
      "Successfully signed in",
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  const errorAlert = (message) => {
    Alert.alert(
      "",
      message,
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        
      >
        <View style={styles.signup}>
          <Text style={styles.textHeading}>
            Sign up To Explore Our Page
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
              ]}
              placeholder="Pet Name"
              value={user.petName}
              onChangeText={(val) =>
                setUser((prev) => ({ ...prev, petName: val }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Pet Guardian"
              value={user.petGuardian}
              onChangeText={(val) =>
                setUser((prev) => ({ ...prev, petGuardian: val }))
              }
            />
            <TextInput
              style={[
                styles.input,
                !isValidEmail && styles.inputError,
              ]}
              placeholder="Email"
              value={user.email}
              onChangeText={(val) =>
                setUser((prev) => ({ ...prev, email: val }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={user.password}
              onChangeText={(val) =>
                setUser((prev) => ({ ...prev, password: val }))
              }
            />
          </View>
          <View style={styles.btnContainer}>
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.textHeading}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    width: 300,
    backgroundColor: "#fff",
  },
   inputContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  textHeading: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    marginTop: 30,
    borderWidth: 1,
    padding: 5,
    width: 100,
    borderRadius: 10,
    backgroundColor: "orange",
    color: "#fff",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  signup: {
    marginTop: "30%",
    height: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
  },
});

export default Signup;
