import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';

import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LinkingConfiguration from '../navigation/LinkingConfiguration';
import RegistroApresentacaoInput from '../screens/RegistroApresentacaoInput'
import RegistroApresentacao from '../screens/RegistroApresentacao'
import RegistroPessoa from '../screens/RegistroPessoa'

const Stack = createStackNavigator();

export default function Monitor(props) {
  return(
    <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator >
            <Stack.Screen name="Inicio" component={RegistroApresentacao} 
            options={{ headerShown: false }} />
            <Stack.Screen name="Monitor" component={BottomTabNavigator}
            options={{ headerShown: false }} />
            <Stack.Screen name="RegistroApresentacaoInput" component={RegistroApresentacaoInput}
            options={{ headerShown: false }} />
            <Stack.Screen name="RegistroPessoa" component={RegistroPessoa}
            options={{ headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    //<Apresentacao/>
    //<ProjetosApresentacao/>
    //<PessoasApresentacao/>
    //<RegistroApresentacaoInput/>
    //<TermoDeUso/>
  );
}
  /*const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
