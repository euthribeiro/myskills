import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { Button } from '../components/Button';

function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago</Text>
      <TextInput value={newSkill} onChangeText={setNewSkill} style={styles.input} placeholder="New skill" placeholderTextColor="#555" />
      <Button />
      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>
      
      {mySkills.map(skill => (
        <TouchableOpacity key={skill}  style={styles.buttonskill}>
          <Text style={styles.textskill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
    padding: 15
  },
  buttonskill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textskill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})

export { Home };
