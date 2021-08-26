import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App()
{
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) =>
  {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () =>
  {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer}
          placeholder='Course Goal'
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.textContainer2}>
        {courseGoals.map((goal) => <View style={styles.toDoList}><Text key={goal}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    padding: 10,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1
  },
  toDoList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightpink',
    borderColor: 'black',
    borderWidth: 1
  },
  textContainer2: {
    marginVertical: 20
  }
});
