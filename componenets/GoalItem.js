import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoalItem = props =>
{
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete} >
            <View style={styles.toDoList}>
                <Text style={styles.listText}>{props.title}</Text>
            </View>
        </TouchableOpacity >

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