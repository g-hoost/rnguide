import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const GoalInput = props =>
{
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>
    {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textContainer}
                placeholder='Course Goal'
                onChangeText={goalInputHandler}
                value={enteredGoal} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
    }
})