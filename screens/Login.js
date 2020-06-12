import React, {useState} from 'react';
import { View, Button, StyleSheet, } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function Login() {
  return(
  <ScreenContainer>
    <ScreenTitle
        title="Login"
      />
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Monitor"
        //onPress = {() => updateState()}
        />
      </View>
      <View style={styles.button}>
        <Button title="Avaliador"/>
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
