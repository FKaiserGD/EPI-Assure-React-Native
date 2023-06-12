import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MenuTab = () => {
  const navigation = useNavigation();

  const userHome = () => {
    navigation.navigate('UserHomeScreen');// Lógica para navegar para a página de estudos
  };

  const userEstudo = () => {
    navigation.navigate('UserEstudosScreen');// Lógica para navegar para a página de estudos
  };

  const userGame = () => {
    navigation.navigate('UserGameScreen');// Lógica para navegar para a página de ranking
  };

  const userConfig = () => {
    navigation.navigate('UserConfigScreen');// Lógica para navegar para a página de configurações
  };

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={userHome}>
          <Feather name="home" style={styles.icon} />
          <Text style={styles.iconName}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={userEstudo}>
          <Feather name="book" style={styles.icon} />
          <Text style={styles.iconName}>Estudos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={userGame}>
          <Ionicons name="game-controller" size={30} color="black" style={styles.icon} />
          <Text style={styles.iconName}>Rank</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={userConfig}>
          <Feather name="settings" style={styles.icon} />
          <Text style={styles.iconName}>Config.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: '10%',
    height: 55,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 5,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopWidth: 3,
    borderTopColor: '#FFDE59',
  },
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'white',
  },
  iconName: {
    backgroundColor: 'white',
    fontSize: 9,
    paddingTop: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
});

export default MenuTab;