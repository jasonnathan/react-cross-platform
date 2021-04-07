import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ttext } from '@my-score/ttext';

export function App() {
  return (
    <View style={styles.box}>
      <Ttext text="Hello World!" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});

export default App;
