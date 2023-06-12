import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PerfilScreen = () => {

  const navigation = useNavigation();  
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (nomeCompleto.trim() !== '' && email.trim() !== '') {
      Alert.alert('Em breve o nome do usuário será redefinido!');
    } else {
      Alert.alert('Por favor, preencha todos os campos.');
    }
  };

  const volta = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={volta} style={styles.volta}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Perfil</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.infoUsuario}>
          <Image source={require('../icones/usuario.png')} style={styles.iconeUser} />
          <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
        </View>
        <View style={styles.infoPerfil}>
          <View style={styles.form}>
            <Text style={styles.label}>Código do Usuário Já Preenchido</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome Completo ou Social"
              value={nomeCompleto}
              onChangeText={text => setNomeCompleto(text)}
            />
            <Text style={styles.label}>Cargo Já Preenchido Pela Empresa</Text>
            <TextInput
              style={styles.input}
              placeholder="Email de Contato do Usuário"
              autoCompleteType="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.label}>CPF Já Registrado Pela Empresa</Text>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Alterar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
  },
  header: {
    flexDirection: 'row',
    marginBottom: '5%',
    alignItems: 'center',
    marginLeft: '10%',
  },
  volta: {
    width: 30,
    height: 35,
    paddingTop: 5,
  },
  titulo: {
    fontSize: 24,
    marginLeft: '10%',
  },
  main: {
    marginTop: 20,
  },
  infoUsuario: {
    flexDirection: 'column',
    marginBottom: '10%',
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
  infoPerfil: {
    alignItems: 'center',
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginVertical: '5%',
    width: 320,
    padding: 10,
    color: '#667085',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#667085',
    backgroundColor: 'white',
  },
  input: {
    marginVertical: '5%',
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    color: '#667085',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#667085',
    width: 320,
  },
  button: {
    marginTop: '5%',
    height: 50,
    padding: 10,
    backgroundColor: '#5A98FF',
    borderRadius: 10,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PerfilScreen;