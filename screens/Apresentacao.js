import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import CardButton from '../components/CardButton';
import Card from '../components/Card'
export default function Apresentacao({navigation}) {
  return(
    <ScreenContainer>
      <ScreenTitle
          title="Apresentação"
          subtitle="Visualize as informações e encerre a apresentação ao seu término"
        />
        <Card texto="Apresentacao 1"/>
        <CardButton texto="Dados da apresentacao"
          titulobotao="Encerrar projeto"
          navegacao={() => navigation.navigate("RegistroApresentacao")}
        />
        <View style={styles.button}>
          <Button title='Reportar Problema'
            onPress={() => navigation.navigate("ReportScreen")}
          />
        </View>
        <View style={styles.button}>
          <Button title='Sair da Aplicação'
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