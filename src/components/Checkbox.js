import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkbox = () => {
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
        <Text>{checked ? 'Sim' : 'Não'}</Text>
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
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: 'cyan',
  },
  checkIcon: {
    fontSize: 12,
    color: 'black',
  },
});

export default Checkbox;