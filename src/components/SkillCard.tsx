import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {

  return (
    <TouchableOpacity {...rest} style={styles.buttonskill}>
      <Text style={styles.textskill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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