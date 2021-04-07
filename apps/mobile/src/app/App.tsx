import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Ttext } from '@my-score/ttext';

const App = () => {
  return (
    <SafeAreaView>
        <View style={styles.box}>
          <Ttext text="Hello World!" />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});

export default App;
