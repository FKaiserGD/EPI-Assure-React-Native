import React, { useState } from 'react';
import { View, Button, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TermoCheckbox from '../../components/TermoCheckbox';
import EquipmentItem from '../../components/EquipamentItems';
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';
import * as ImagePicker from 'expo-image-picker';

const UserHomeScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Precisamos da permissão de acesso à câmera para isso.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Check-Up:</Text>
        <View style={styles.checkEquip}>
          <EquipmentItem nome="Capacete" imagem={require('../../icones/capacete.png')} />
          <View style={styles.hr} />
          <EquipmentItem nome="Luvas" imagem={require('../../icones/luvas.png')} />
          <View style={styles.hr} />
          <EquipmentItem
            nome="Óculos de Proteção"
            imagem={require('../../icones/oculos-de-seguranca.png')}
          />
          <View style={styles.hr} />
          <EquipmentItem nome="Botas" imagem={require('../../icones/botas.png')} />
          <View style={styles.hr} />
          <EquipmentItem nome="Colete" imagem={require('../../icones/colete.png')} />
          <View style={styles.hr} />
          <EquipmentItem nome="Fita" imagem={require('../../icones/fita.png')} />
          <View style={styles.hr} />
          <EquipmentItem nome="Máscara" imagem={require('../../icones/mascara-medica.png')} />
          <View style={styles.hr} />
          <EquipmentItem nome="Cone" imagem={require('../../icones/cone.png')} />
        </View>
        <View style={styles.containerCamera}>
          <Button title="Abrir câmera" onPress={openCamera} style={styles.cameraButton}/>
          {imageUri && <Image source={{ uri: imageUri }} style={styles.camera} />}
        </View>
        <View style={styles.termoContainer}>
          <TermoCheckbox />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.botaoConfirma}>
            <Text style={styles.botaoText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MenuTab />
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
    paddingBottom: 40,
  },
  title: {
    textAlign: 'left',
    marginLeft: '5%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  checkEquip: {
    marginTop: '8%',
    marginBottom: '10%',
  },
  hr: {
    textAlign: 'center',
    width: 350,
    marginTop: '3%',
    marginBottom: '3%',
  },
  termoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  termoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerCamera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    width: 350,
    height: 400,
    borderRadius: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
    marginBottom: '3%',
  },
  botaoConfirma: {
    backgroundColor: '#5A98FF',
    color: 'white',
    width: 350,
    height: 48,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontWeight: 'bold',
  },
  botaoText: {
    backgroundColor: '#5A98FF',
    color: 'white',
  },
});

export default UserHomeScreen;