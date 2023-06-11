import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import UserHomeScreen from './src/screens/userScreens/UserHomeScreen';
import AdmHomeScreen from './src/screens/admScreens/AdmHomeScreen';
import UserSolicitarScreen from './src/screens/userScreens/userSolicitarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Oculta a barra de navegação em todas as telas
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
        <Stack.Screen name="AdmHomeScreen" component={AdmHomeScreen} />
        <Stack.Screen name="UserSolicitarScreen" component={UserSolicitarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}