import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const GoalItem = props =>
{
    return (
        <View style={styles.toDoList}>
            <Text style={styles.listText}>{props.title}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    toDoList: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'lightpink',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1
    }
})