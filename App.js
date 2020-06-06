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


const Stack = createStackNavigator();

export default function App(props) {
  return(
    <PessoasApresentacao/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
*/