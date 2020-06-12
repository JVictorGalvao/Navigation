import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';



export default function Avaliacoes() {


  return(
  <ScreenContainer>
    <ScreenTitle
        title="Avaliacoes"
        subtitle="Os projetos avaliados por você poderão ser consultados aqui"
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
