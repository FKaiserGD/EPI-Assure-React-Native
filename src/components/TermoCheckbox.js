import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TermoCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.checkboxContainer}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
          {checked && <Icon name="check" style={styles.checkIcon} />}
        </View>
        <Text style={styles.termoText}>Termo de veracidade das informações prestadas</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: 'cyan',
  },
  checkIcon: {
    fontSize: 14,
    color: 'black',
  },
  termoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TermoCheckbox;