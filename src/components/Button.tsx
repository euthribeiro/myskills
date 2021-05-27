import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface Button extends TouchableOpacityProps {
  title: string;
}

export function Button({ onPress, title, ...rest }: Button) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      activeOpacity={.8} 
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttontext}>{title}</Text>
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