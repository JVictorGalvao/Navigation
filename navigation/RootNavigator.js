import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login"
import MonitorRoutes from "./Monitor"
import AvaliadorRoutes from "./Avaliador"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/*function AvaliadorTabs() {
  return (  
      <Tab.Navigator initialRouteName="IDENTIDADE">
        <Tab.Screen name="IDENTIDADE" component={Identidade} />
        <Tab.Screen name="PROJETOS" component={Projetos} />
        <Tab.Screen name="AVALIACOES" component={Avaliacoes} />
      </Tab.Navigator>
  );
}*/

/*function StackRegistroApresentacao(){
  return(
    <Stack.Navigator initialRouteName="RegistroApresentacao">
      <Stack.Screen name="RegistroApresentacao" component={RegistroApresentacao}/>
      <Stack.Screen name= "RegistroApresentacaoInput" component={RegistroApresentacaoInput}/>
    </Stack.Navigator>
  );
}

function StackRegistroPessoa(){
  return(
    <Stack.Navigator initialRouteName="RegistroPessoa">
      <Stack.Screen name="RegistroPessoa" component={RegistroPessoa}/>
      <Stack.Screen name="RegistroPessoaInput" component={RegistroPessoaInput}/>
    </Stack.Navigator>
  );
}

function StackProjetos(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="GerenciaProjetos" component={GerenciarProjeto}/>
    </Stack.Navigator>
  );
}
*/
export default function RootRoutes({route}){
  //const { usuario } = route.params;
  const [monitor, setMonitor] = useState("");
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
          <Stack.Screen name="Monitor" component={MonitorRoutes} options={{headerShown: false}}/>
          <Stack.Screen name="Avaliador" component={AvaliadorRoutes} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ gestureEnabled: false }}  >
    //     <Stack.Screen 
    //       name="Login"
    //       component={Login} 
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen 
    //       name="Monitor"
    //       component={MonitorRoutes} 
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen 
    //       name="Avaliador"
    //       component={AvaliadorRoutes} 
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}