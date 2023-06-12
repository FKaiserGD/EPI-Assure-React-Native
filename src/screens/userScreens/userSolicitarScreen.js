import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserSolicitarScreen = () => {

  const navigation = useNavigation();

  const volta = () => {
    // Lógica para voltar à tela anterior
    navigation.goBack();
  };

  const solicitarEquipamento = () => {
    // Lógica para enviar a solicitação de equipamento
    console.log('Solicitar equipamento');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={volta} style={styles.volta}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Solicitar Novo Equipamento</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Dê um título para a solicitação"
          // Outras propriedades do TextInput, se necessário
        />
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.textarea}
          multiline={true}
          placeholder="Descreva o porquê da solicitação"
          // Outras propriedades do TextInput, se necessário
        />
        <TouchableOpacity style={styles.enviar} onPress={solicitarEquipamento}>
          <Ionicons name="checkmark" size={24} color="white" />
          <Text style={styles.enviarText}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
  },
  cabecalho: {
    flexDirection: 'row',
  },
  volta: {
    borderWidth: 0,
    width: 30,
    height: 35,
    marginLeft: '5%',
    marginRight: 10,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
  },
  form: {
    flexDirection: 'column',
    marginTop: '10%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '3%',
    marginLeft: '5%',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: '10%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textarea: {
    width: '90%',
    height: 120,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: '10%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enviar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#5A98FF',
    color: 'white',
    padding: 10,
    fontSize: 20,
    alignSelf: 'center',
  },
  enviarText: {
    marginLeft: '4%',
    color: 'white',
    fontSize: 16,
  },
});

export default UserSolicitarScreen;