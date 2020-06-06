import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function RegistroApresentacao() {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Apresentação"
          subtitle="Escaneie o código para visualizar os projetos que foram alocados a essa apresentação"
        />
        <View style={styles.button}>
          <Button title='Escaneei o código'/>
        </View>
        <View style={styles.button}>
          <Button title='Digitar o código'/>
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
