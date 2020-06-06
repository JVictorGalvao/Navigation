import React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function RegistroApresentacaoInput() {
  return(
    <ScreenContainer>
      <ScreenTitle
        title="Apresentação"
        subtitle="Digite o código para visualizar os projetos que foram alocados a essa apresentação"
      />
      <View style={styles.container}>
        <TextInput
          style={{
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 8,
            textAlign: "center",
            paddingVertical: 12,
            fontSize: 32,
            color: "#56625A"
          }}
        />
      </View>
      <View style={styles.button}>
        <Button title='Confirmar'/>
        <Button 
        color = 'gray'
        title='Cancelar'/>
      </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    marginTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  }
});