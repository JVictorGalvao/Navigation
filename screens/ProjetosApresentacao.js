import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import Card from '../components/Card'

export default function ProjetosApresentacao() {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Projetos"
          subtitle="Habilite os projetos de acordo com a ordem de apresentação"
        />
        <Card texto="Projeto 1"/>
        <View style={styles.button}>
          <Button title='Gerenciar'/>
        </View>
        <Card texto="Projeto 2"/>
        <View style={styles.button}>
          <Button title='Gerenciar'/>
        </View>
        <Card texto="Projeto 3"/>
        <View style={styles.button}>
          <Button title='Gerenciar'/>
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