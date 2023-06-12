import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import MenuTab from '../../components/MenuTab';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserConfigScreen = () => {

    const navigation = useNavigation();

    const userConfig = () => {
        navigation.navigate('UserConfigScreen');
    };

    const perfil = () => {
    navigation.navigate('PerfilScreen');// Lógica para navegar para a página de estudos
    };

    const senha = () => {
        // Lógica para a ação "Senha"
        navigation.navigate('NovaSenhaScreen');
    };

    const notifica = () => {
        // Lógica para a ação "Notificações"
        navigation.navigate('Notificações clicadas');
    };

    const userAjuda = () => {
        // Lógica para a ação "Ajuda"
        navigation.navigate('Ajuda clicada');
    };

    const sair = () => {
        // Lógica para a ação "Sair"
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Conta</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={perfil}>
                <Ionicons name="person" size={24} color="black" />
                <Text style={styles.optionText}>Perfil</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer} onPress={senha}>
                <Ionicons name="lock-closed" size={24} color="black" />
                <Text style={styles.optionText}>Senha</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer} onPress={notifica}>
                <Ionicons name="notifications" size={24} color="black" />
                <Text style={styles.optionText}>Notificações</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Mais</Text>
            <TouchableOpacity style={styles.optionContainer} onPress={userAjuda}>
                <Ionicons name="help-circle" size={24} color="black" />
                <Text style={styles.optionText}>Ajuda</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionContainer, { color: 'red' }]} onPress={sair}>
                <Ionicons name="log-out" size={24} color="red" />
                <Text style={[styles.optionText, { color: 'red' }]}>Sair</Text>
                <Ionicons name="chevron-forward" size={24} color="red" />
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
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  optionText: {
    marginLeft: 30,
    fontSize: 20,
    width: 280
  },
});

export default UserConfigScreen;