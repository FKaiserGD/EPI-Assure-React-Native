import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';

const UserEstudosScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Estudos</Text>
        <View style={styles.checkEquip}>
          <EquipmentItem
            nome="Capacete"
            imagem={require('../../icones/capacete.png')}
            descricao="Proteção para cabeça contra impactos."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Luvas"
            imagem={require('../../icones/luvas.png')}
            descricao="Proteção para mãos contra riscos diversos, como químicos e mecânicos."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Óculos de Proteção"
            imagem={require('../../icones/oculos-de-seguranca.png')}
            descricao="Proteção para os olhos contra impactos, radiações, produtos químicos."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Botas"
            imagem={require('../../icones/botas.png')}
            descricao="Proteção para pés contra impactos, quedas, cortes e umidade."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Colete"
            imagem={require('../../icones/colete.png')}
            descricao="Proteger o corpo do trabalhador contra diversos tipos de risco."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Cone"
            imagem={require('../../icones/cone.png')}
            descricao="O cone de sinalização comumente usado para segurança, delimitação de espaços em obras ou estacionamento."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Fita"
            imagem={require('../../icones/fita.png')}
            descricao="As fitas ajudam a prevenir quedas e evitar os desagradáveis escorregões."
          />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Máscara"
            imagem={require('../../icones/mascara-medica.png')}
            descricao="Qual a finalidade do uso da máscara? As máscaras funcionam como uma barreira física para a liberação dessas gotículas no ar quando há tosse, espirros e até mesmo durante conversas."
          />
        </View>
      </ScrollView>
      <MenuTab />
    </View>
  );
};

const EquipmentItem = ({ nome, imagem, descricao }) => {
  return (
    <View style={styles.equipamento}>
      <Image source={imagem} style={styles.iconeEquip} />
      <View style={styles.info}>
        <Text style={styles.nomeEquip}>{nome}</Text>
        <Text style={styles.descricaoEquip}>{descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 160,
    paddingBottom: 100,
  },
  title: {
    textAlign: 'left',
    marginLeft: '5%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  checkEquip: {
    marginTop: '5%',
    marginLeft: '5%',
  },
  equipamento: {
    flexDirection: 'row',
  },
  info: {
    marginLeft: '5%',
    marginTop: '1%',
  },
  nomeEquip: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoEquip: {
    width: 250,
  },
  iconeEquip: {
    width: 60,
    height: 60,
    paddingTop: '5%',
  },
  hr: {
    textAlign: 'center',
    width: 350,
    marginTop: '3%',
    marginBottom: '3%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default UserEstudosScreen;