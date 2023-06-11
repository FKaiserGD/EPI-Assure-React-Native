import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import  Checkbox  from '../components/Checkbox'

const EquipmentItem = ({ nome, imagem }) => {
  return (
    <View style={styles.equipamento}>
      <Image source={imagem} style={styles.iconeEquip} />
      <View style={styles.confirm}>
        <Text style={styles.nomeEquip}>{nome}</Text>
        <View style={styles.checkboxContainer}>
          <Checkbox style={styles.checkbox} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: 'cyan',
  },
  equipamento: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 25,
    borderBottomWidth: 2, // Modifique o valor aqui
    borderBottomColor: 'black',
  },
  confirm: {
    marginLeft: '5%',
    marginTop: '5%',
  },
  nomeEquip: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeEquip: {
    width: 60,
    height: 60,
    marginTop: '5%',
  },
});

export default EquipmentItem;