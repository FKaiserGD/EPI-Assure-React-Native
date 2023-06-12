import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import UserHomeScreen from './src/screens/userScreens/UserHomeScreen';
import AdmHomeScreen from './src/screens/admScreens/AdmHomeScreen';
import UserSolicitarScreen from './src/screens/userScreens/userSolicitarScreen';
import UserGameScreen from './src/screens/userScreens/UserGameScreen';
import UserConfigScreen from './src/screens/userScreens/UserConfigScreen';
import UserEstudosScreen from './src/screens/userScreens/UserEstudosScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import NovaSenhaScreen from './src/screens/senhaScreens/NovaSenhaScreen';
import ConfirmarSenhaScreen from './src/screens/senhaScreens/ConfirmarSenhaScreen';
import SenhaConfirmadaScreen from './src/screens/senhaScreens/SenhaConfirmadaScreen';

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
        <Stack.Screen name="UserGameScreen" component={UserGameScreen} />
        <Stack.Screen name="UserConfigScreen" component={UserConfigScreen} />
        <Stack.Screen name="UserEstudosScreen" component={UserEstudosScreen} />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="NovaSenhaScreen" component={NovaSenhaScreen} />
        <Stack.Screen name="ConfirmarSenhaScreen" component={ConfirmarSenhaScreen} />
        <Stack.Screen name="SenhaConfirmadaScreen" component={SenhaConfirmadaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}