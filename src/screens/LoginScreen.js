import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleUserLogin = () => {
        // Navegar para a tela de usuário
        navigation.navigate('UserHomeScreen');
    };

    const handleAdminLogin = () => {
        // Navegar para a tela de administrador
        navigation.navigate('AdmHomeScreen');
    };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../background/background-site.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../logo/logo.webp')} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Entre com os dados fornecidos pela empresa!</Text>
          </View>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Código" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleUserLogin}>
                    <Text style={styles.buttonText}>Entrar como Usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
                    <Text style={styles.buttonText}>Entrar como Administrador</Text>
                </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.forgotPassword}>Esqueceu a senha ou o código?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    paddingTop: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  main: {
    marginTop: '10%',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 60,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  form: {
    alignItems: 'center',
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 55,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    width: 310,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A98FF',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});