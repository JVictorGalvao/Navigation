import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import TermoDeUso from './screens/TermoDeUso'
import RegistroApresentacao from './screens/RegistroApresentacao'
import ScreenContainer from './components/ScreenContainer'
import RegistroApresentacaoInput from './screens/RegistroApresentacaoInput'
import PessoasApresentacao from './screens/PessoasApresentacao'
import ProjetosApresentacao from './screens/ProjetosApresentacao'
import Apresentacao from './screens/Apresentacao'
import RegistroPessoa from './screens/RegistroPessoa'

const Stack = createStackNavigator();

export default function App(props) {
  return(
    <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Monitor" component={BottomTabNavigator} />
            <Stack.Screen name="RegistroApresentacao" component={RegistroApresentacao} />
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
