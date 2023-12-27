// import { View, Text,Button } from 'react-native'
// import React from 'react'

// const Splash = ({navigation}) => {
//   return (
//     <View>
//       <Text>Splash</Text>
//      <Button 
//      title='login'
//      onPress={()=>navigation.navigate('login')}/>
//      <Button 
//      title='sign up'
//      onPress={()=>navigation.navigate('signup')}/>
//     </View>
//   )
// }

// export default Splash
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';



const Splash = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/Dogo.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <Text style={styles.titleText}>PET PAL</Text>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('signup')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('login')}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 55,
        fontWeight: 'bold',
        marginBottom: 20,
        top: -200,
        right: -15

    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        width: 130,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        bottom: -60,
        right: -15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Splash;