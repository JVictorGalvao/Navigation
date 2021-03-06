import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Identidade from "../screens/Identidade"
import Projetos from "../screens/Projetos"
import Avaliacoes from "../screens/AvaliacaoProjeto"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

 function AvaliadorTabs() {
  return (  
      <Tab.Navigator initialRouteName="IDENTIDADE">
        <Tab.Screen name="IDENTIDADE" component={Identidade} />
        <Tab.Screen name="PROJETOS" component={Projetos} />
        <Tab.Screen name="AVALIACOES" component={Avaliacoes} />
      </Tab.Navigator>
  );
}

export default function AvaliadorRoutes(){
  return(
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}  >
        <Stack.Screen 
          name="AvaliadorTab"
          component={AvaliadorTabs} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}