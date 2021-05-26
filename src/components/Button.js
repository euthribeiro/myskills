import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button() {
  return (
    <TouchableOpacity 
      // onPress={handleAddNewSkill} 
      activeOpacity={.8} 
      style={styles.button}
    >
      <Text style={styles.buttontext}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttontext: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})