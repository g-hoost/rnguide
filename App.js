import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './componenets/GoalItem';

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
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textContainer}
          placeholder='Course Goal'
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
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
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16
  },
  textContainer2: {
    marginVertical: 20
  },
  listText: {
    fontSize: 16
  }
});
