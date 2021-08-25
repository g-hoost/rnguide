import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App()
{
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.textContainer} placeholder='Course Goal' />
        <Button title="ADD" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  textContainer: {
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
