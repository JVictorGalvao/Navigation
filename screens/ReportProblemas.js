import React from 'react';
import { Alert, View, Button, StyleSheet, TextInput } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';



export default function ReportProblemas() {
    const showAlert = () =>{
       Alert.alert(
          'Problema enviado!'
       )
    }
    
 
  return(
  <ScreenContainer>
    <ScreenTitle
        title="Reportar Problemas"
      />
    <View style={styles.container}>
      <View style={styles.button}>
        <TextInput
         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => onChangeText(text)}

         placeholder="Digite o problema aqui"/>
      </View>
      <View style={styles.button}>
        <Button title='Enviar'
          onPress={()=>{showAlert()}}
        />
      </View>
    </View>
  </ScreenContainer>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  button: {
    margin: 20
  }
});
