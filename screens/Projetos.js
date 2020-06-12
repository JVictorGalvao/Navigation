import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';



export default function Projetos() {


  return(
  <ScreenContainer>
    <ScreenTitle
        title="Projetos"
        subtitle="Os projetos são disponibilizados na ordem de apresentação. Avalie-os:"
      />
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title='Enviar'/>
      </View>
    </View>
  </ScreenContainer>
    
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
