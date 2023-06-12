import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import MenuTab from '../../components/MenuTab';

const UserGameScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.infoUsuario}>
                    <Image source={require('../../icones/usuario.png')} style={styles.iconeUser} />
                    <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
                    <Text style={styles.pontos}>120 Pontos</Text>
                </View>
                <Text style={styles.semana}>Semana 1</Text>
                <Image source={require('../../../assets/pontos.png')} style={styles.ilustra} />
                <TouchableOpacity style={styles.ganhePontos} onPress={() => handleGanhePontos()}>
                    <Text style={styles.ganhePontosText}>Como ganhar mais pontos?</Text>
                </TouchableOpacity>
        </ScrollView>
        <MenuTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 40,
  },
  infoUsuario: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconeUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFDE59',
  },
  nomeUsuario: {
    marginTop: '2%',
    textAlign: 'center',
    fontSize: 24,
  },
  pontos: {
    marginTop: '2%',
    textAlign: 'center',
    fontSize: 18,
  },
  semana: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: '20%',
  },
  ilustra: {
    width: 350,
    height: 110,
    marginTop: '10%',
  },
  ganhePontos: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '30%',
  },
  ganhePontosText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserGameScreen;