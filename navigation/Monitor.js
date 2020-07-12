import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PessoasApresentacao from '../screens/PessoasApresentacao'
import ProjetosApresentacao from '../screens/ProjetosApresentacao'
import Apresentacao from '../screens/Apresentacao'
import RegistroApresentacao from '../screens/RegistroApresentacao'
import RegistroApresentacaoInput from '../screens/RegistroApresentacaoInput'
import RegistroPessoa from '../screens/RegistroPessoa'
import RegistroPessoaInput from '../screens/RegistroPessoaInput'
import GerenciarProjeto from '../screens/GerenciarProjeto'
import ReportProblemas from '../screens/ReportProblemas'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

 function MonitorTabs() {
  return (  
      <Tab.Navigator initialRouteName="PESSOAS">
        <Tab.Screen 
          name="PESSOAS" 
          component={PessoasApresentacao} 
        />
        <Tab.Screen 
          name="PROJETOS" 
          component={ProjetosApresentacao} 
        />
        <Tab.Screen 
          name="APRESENTACAO" 
          component={Apresentacao} 
        />
      </Tab.Navigator>
  );
}

function StackRegistroApresentacao(){
  return(
    <Stack.Navigator initialRouteName="RegistroApresentacao">
      <Stack.Screen 
        name="RegistroApresentacao" 
        component={RegistroApresentacao}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name= "RegistroApresentacaoInput" 
        component={RegistroApresentacaoInput}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function StackRegistroPessoa(){
  return(
    <Stack.Navigator initialRouteName="RegistroPessoa">
      <Stack.Screen 
        name="RegistroPessoa" 
        component={RegistroPessoa}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="RegistroPessoaInput" 
        component={RegistroPessoaInput}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function StackProjetos(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="GerenciaProjetos" 
        component={GerenciarProjeto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function StackProblema(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="ReportarProblema" 
        component={ReportProblemas}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function MonitorRoutes(){
  return(
      <Stack.Navigator>
        <Stack.Screen 
          name="RegistroApresentacaoScreen"
          component={StackRegistroApresentacao} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="MonitorTab"
          component={MonitorTabs} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="RegistroPessoaScreen"
          component={StackRegistroPessoa}
          options={{headerShown: false}}
          
        />
        <Stack.Screen
          name="ProjetosScreen"
          component={StackProjetos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReportScreen"
          component={StackProblema}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
}