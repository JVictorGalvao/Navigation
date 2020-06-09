import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import CardButton from '../components/CardButton';
import Card from '../components/Card'
export default function Apresentacao() {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Apresentação"
          subtitle="Visualize as informações e encerre a apresentação ao seu término"
        />
        <Card texto="Apresentacao 1"/>
        <CardButton texto="Dados da apresentacao"/>
        <View style={styles.button}>
          <Button title='Sair da Aplicação'/>
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