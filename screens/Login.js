import React, {useState} from 'react';
import { View, Button, StyleSheet, Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import ScreenTitle from '../components/ScreenTitle';

export default function Login({route, navigation}) {
  const [usuario, setUsuario] = useState("");
  const Monitor = () =>{
    setUsuario("Monitor")
    //navigation.navigate('Monitor')
  };
  const Avaliador = () =>{
    setUsuario("Avaliador")
  };
  return(
  <ScreenContainer>
    <ScreenTitle
        title="Login"
      />
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Monitor"
          onPress={() => navigation.navigate('Monitor', {screen: 'RegistroApresentacao',
        params: {usuario: 'monitor'},})}
          //onPress={() => Monitor()}
        />
      </View>
      <View style={styles.button}>
        <Button title="Avaliador"
          onPress={() => navigation.navigate('Avaliador', {usuario: "Avaliador"})}
          //onPress={() => Avaliador()}
          />
      </View>
        <Text>{usuario}</Text>
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
