import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function RegistroPessoa({navigation}) {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Pessoa"
          subtitle="Escaneie ou digitalize as credenciais dos avaliadores para adicioná-los a apresentação"
        />
        <View style={styles.button}>
          <Button 
            title='Escaneei o código'
            onPress={() => navigation.navigate("PESSOAS")}
          />

          <Button title='Digitar o código'
            onPress={() => navigation.navigate('RegistroPessoaInput')}
          />
        </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-evenly'
  }
});