import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdoptPage from './screens/adoptPage';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <Stack.Navigator initialRouteName='adoptPage'>
      <Stack.Screen name='adoptPage' component={AdoptPage}/>
    </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
