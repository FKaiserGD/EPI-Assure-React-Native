import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';

const UserEstudosScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text>Nada ainda</Text>
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

export default UserEstudosScreen;