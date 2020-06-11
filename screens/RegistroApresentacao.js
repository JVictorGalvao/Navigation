import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function RegistroApresentacao({navigation}) {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Apresentação"
          subtitle="Escaneie o código para visualizar os projetos que foram alocados a essa apresentação"
        />
        <View style={styles.button}>
          <Button title='Escaneei o código'
            onPress={() => navigation.navigate('Monitor')}
          />

          <Button title='Digitar o código'
            onPress={() => navigation.navigate('RegistroApresentacaoInput')}
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
