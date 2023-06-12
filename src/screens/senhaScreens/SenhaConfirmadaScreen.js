import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SenhaConfirmadaScreen = () => {

  const navigation = useNavigation();

  const volta = () => {
    navigation.goBack();
  };

  const handleConfirmSenha = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.webp')} style={styles.logo} />
        </View>
            <View style={styles.texto}>
                <Text style={styles.title}>Recuperar/Mudar dados</Text>
                <Text style={styles.subtitle}>Código validado!</Text>
                <Text style={styles.info}>Você receberá suas credenciais por email.</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.buttonDiv}>
                    <TouchableOpacity style={styles.button} onPress={handleConfirmSenha}>
                    <Text style={styles.buttonText}>Enviar Código</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop: '25%',
  },
  header: {
    flexDirection: 'row',
    marginBottom: '5%',
    alignItems: 'center',
    marginLeft: '5%',
  },
  logo: {
    marginLeft: '2%',
    width: 80,
    height: 90,
  },
  texto: {
    marginTop: '10%',
    marginBottom: '15%',
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: '4%',
  },
  info: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  form: {
    alignItems: 'center',
    marginBottom: '3%',
  },
  buttonDiv: {
    marginTop: 30,
  },
  button: {
    display: 'flex',
    width: 360,
    height: 50,
    color: 'white',
    backgroundColor: '#5A98FF',
    borderRadius: 5,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default SenhaConfirmadaScreen;