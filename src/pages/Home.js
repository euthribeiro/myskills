import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  SafeAreaView, 
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

function Home() {

  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  function mountGreeting() {
    const hour = new Date().getHours();

    if(hour < 12) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }

  useEffect(mountGreeting, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput 
        value={newSkill} 
        onChangeText={setNewSkill}
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />
      <Button onPress={handleAddNewSkill} />
      <Text 
        style={[styles.title, { marginVertical: 50 }]}
      >
        My skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    
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
  greetings: {
    color: '#fff'
  }
})

export { Home };
