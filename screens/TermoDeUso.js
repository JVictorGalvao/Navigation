import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function TermoDeUso() {
  return(
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title='Aceitar Termo'/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  button: {
    margin: 20
  }
});
