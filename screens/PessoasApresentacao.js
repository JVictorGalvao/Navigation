import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function PessoasApresentacao() {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Pessoas"
          subtitle="Escaneie ou digitalize as credenciais dos avaliadores para adicioná-los a apresentação"
        />
        <View style={styles.button}>
          <Button title='Escaneei o código'/>

          <Button title='Digitar o código'/>
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