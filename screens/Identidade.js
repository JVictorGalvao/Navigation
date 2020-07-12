import React, {useState} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import Card from '../components/Card'



export default function Identidade({navigation}){
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Identifique-se"
          subtitle="Mostre as suas credenciais a um monitor para começar a avaliação."
        />
        <Card texto="Dados pessoais"/>
        <Card texto="QrCode"/>
        <View style={styles.button}>
          <Button title='Sair'
            onPress={() => navigation.navigate("Login")}
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