import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation(); // Obtém o objeto de navegação

  const userSolicitar = () => {
    navigation.navigate('UserSolicitarScreen'); // Substitua 'NomeDaPagina' pelo nome da sua página de destino
  };

  return (
    <View style={styles.header}>
      <Image source={require('../icones/usuario.png')} style={styles.imagemUser} />
      <Text style={styles.nomeUsuario}>Nome do Usuário</Text>
      <TouchableOpacity onPress={userSolicitar}>
        <Image
          source={require('../icones/helmet.png')}
          style={styles.iconeRequer}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute', // Pode ser 'absolute' ou 'relative' dependendo do contexto
    top: 0,
    padding: '5%',
    borderBottomWidth: 3,
    borderBottomColor: '#FFDE59',
    zIndex: 99,
    backgroundColor: 'white',
  },
  imagemUser: {
    width: 70,
    height: 70,
    marginTop: 25,
    borderWidth: 3,
    borderColor: '#FFDE59',
    borderRadius: 35,
  },
  iconeRequer: {
    width: 45,
    height: 45,
    marginLeft: '30%',
    marginTop: 35,
    backgroundColor: 'white',
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 140,
    paddingTop: '10%',
    marginLeft: '5%',
  },
});

export default Header;