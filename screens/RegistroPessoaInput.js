import React from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function RegistroPessoaInput({navigation}) {
  return(
    <ScreenContainer>
      <ScreenTitle
        title="Pessoa"
        subtitle="Digite as credenciais de um avalliador para adiciona-lo a apresentação"
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
        <Button 
          title='Confirmar'
          onPress={() => navigation.navigate('PESSOAS')}
        />
        <Button 
          color = 'gray'
          title='Cancelar'
          onPress={() => navigation.navigate('RegistroPessoa')}
        />
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