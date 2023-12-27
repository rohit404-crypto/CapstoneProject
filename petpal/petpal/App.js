import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/SignUp';
import Splash from './screens/Splash';
import PetAcessories from './screens/PetAcessories';
import FindAVet from './screens/FindAVet';
import Grooming from './screens/Grooming';
import Account from './screens/Account';
import { CartProvider } from './CartContext';
import { Context } from './context';
import { Icon } from 'react-native-elements';
import VetDescriptionScreen from './screens/VetDescription';
import ProductDescriptionScreen from './screens/ProductDescriptionScreen';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const VetDescription = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="VetDescriptionScreen" component={VetDescriptionScreen} />
    {/* Add additional screens within the VetDescription stack if needed */}
  </Stack.Navigator>
);

// const ProductDescription = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//   <Stack.Screen name="ProductDescriptionScreen" component={ProductDescriptionScreen} />
//   </Stack.Navigator>
// )

const PetAcessoriesStack = () => (
  <CartProvider>
  <Stack.Navigator
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PetAcessories" component={PetAcessories} />
    <Stack.Screen name="ProductDescription" component={ProductDescriptionScreen} />
    <Stack.Screen name="Cart" component={Cart} /> 
  </Stack.Navigator>
  </CartProvider>
)
const FindAVetStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="FindAVet" component={FindAVet} />
    <Stack.Screen name="VetDescription" component={VetDescription} />
  </Stack.Navigator>
);
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="splash">
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="signup"   component={Signup} />
    <Stack.Screen name="splash" options={{ headerShown: false }} component={Splash} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator
  screenOptions={{
    headerShown: false,

    tabBarStyle: { height: 70, backgroundColor: 'white' , position: 'absolute', paddingBottom: 20, paddingTop: 10},
  }}
  >
  <Tab.Screen
    name="Home"
    component={PetAcessoriesStack}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" type='material' color={color} size={size} />
      ),
    }}
   
  />
  <Tab.Screen
    name="Vet"
    component={FindAVetStack}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="stethoscope" type='font-awesome' color={color} size={size} />
      )
    }}
   
  />
  <Tab.Screen
    name="Grooming"
    component={Grooming}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="scissors" type='font-awesome' color={color} size={size} />
      ),
    }}
  />
  <Tab.Screen
    name="Account"
    component={Account}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="user" type='font-awesome' color={color} size={size} />
      ),
    }}
  />
</Tab.Navigator>
);

export default function App() {
  const isSignedInstateinLocal = AsyncStorage.getItem('login') === 'success';
  const [isSignedIn, setisSignedIn] = useState(true);
 console.log(isSignedIn)
  return (
    <Context.Provider value={[isSignedIn, setisSignedIn]}>
      <NavigationContainer>
        {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Context.Provider>
  );
}
