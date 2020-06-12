import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import Card from '../components/Card'



export default function PessoasApresentacao({navigation}) {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Pessoas"
          subtitle="Escaneie ou digitalize as credenciais dos avaliadores para adicioná-los a apresentação"
        />
        <Card texto="Avaliador 1"/>
        <Card texto="Avaliador 2"/>
        <Card texto="Avaliador 3"/>
        <View style={styles.button}>
          <Button title='Adcionar Professor'
            onPress={() => navigation.navigate('RegistroPessoaScreen')}
            />
        </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 20,
    justifyContent: 'center'
  }
});