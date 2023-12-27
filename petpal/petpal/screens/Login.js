import { StyleSheet, Text, View, TextInput, Pressable ,Alert} from "react-native";
import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../context";
import { ip } from "../ip";

export default function Login() {
  const errorAlert = () => {
    Alert.alert(
      '',
      'please check your username and password ',
      [
        { text: 'OK', }
      ],
      { cancelable: false }
    );
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isSignedIn ,setisSignedIn] = useContext(Context)

  async function handleSubmit() {
    const resp = await fetch(`http://${ip}:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });
    if (resp.status == 200) {
      await AsyncStorage.setItem("login", "success");
      setisSignedIn(true);
      const responseData = await resp.json();
      await AsyncStorage.setItem('userData', JSON.stringify(responseData.user));
      // console.log(responseData.user);

      
    }else{
      errorAlert();
    }
  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={user.email}
          onChangeText={(val) => setUser((prev) => ({ ...prev, email: val }))}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          true
          value={user.password}
          onChangeText={(val) =>
            setUser((prev) => ({ ...prev, password: val }))
          }
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.textHeading}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,

    //   height:"100",
    //   width:"100%",
    // alignItems: 'center',
    //   justifyContent:"center"
  },
  input: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "80%",
  },
  inputContainer: {
    marginTop: "10%",
    alignItems: "center",
  },
  textHeading: {
    fontSize: 20,
    //   fontFamily:'roboto',
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "orange",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
});
