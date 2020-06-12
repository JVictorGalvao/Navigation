import React, {useState} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';
import CardButton from '../components/CardButton';
import Card from '../components/Card'
export default function Apresentacao({navigation}) {
  const [apresentacao, setApresentacao] = useState("");
  const habilitar = () =>{
    setApresentacao("Apresentacao em curso")
  };
  const desabilitar = () =>{
    setApresentacao("")
  };
  return(
    <ScreenContainer>
        <Card texto="Gerenciar projetos"/>
        <View style={styles.button}>
          <Button title='Iniciar Apresentacao'
            onPress={() => habilitar()}
          />
        </View>
        <View style={styles.button}>
          <Button title='Finalizar Apresentacao'
            onPress={() => desabilitar()}
          />
        </View>
        <View>
          <Text>{apresentacao}</Text>
        </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 20,
    justifyContent: 'center'
  },
});