import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import PessoasApresentacao from '../screens/PessoasApresentacao'
import ProjetosApresentacao from '../screens/ProjetosApresentacao'
import Apresentacao from '../screens/Apresentacao'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Pessoas';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Pessoas"
        component={PessoasApresentacao}
      />
      <BottomTab.Screen
        name="Projetos"
        component={ProjetosApresentacao}
      />
      <BottomTab.Screen
        name="Apresentaçao"
        component={Apresentacao}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
