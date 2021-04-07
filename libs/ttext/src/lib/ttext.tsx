import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface TtextProps {
  text: string;
}

export const Ttext = (props: TtextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: '#45bc98' },
});

export default Ttext;
