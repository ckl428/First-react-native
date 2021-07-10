import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('hello')
  console.log('second commit')
  return (
    
    <View style={styles.container}>
      <Text>Hello React Native, This is my first project!</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}
//Hello World
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
