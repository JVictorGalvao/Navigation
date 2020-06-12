import React, {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View , Text, Button} from 'react-native';
import Login from './screens/Login'
import ReportProblemas from './screens/ReportProblemas'
import Identidade from './screens/Identidade'
import Avaliacoes from './screens/Avaliacoes'
import Projetos from './screens/Projetos'
import MonitorRoutes from './navigation/Monitor'
import AvaliadorRoutes from './navigation/Avaliador'
import RootRoutes from './navigation/RootNavigator'


export default class App extends React.Component{
  render(){
    return(
      <RootRoutes/>
      //<AvaliadorRoutes/>
      //<MonitorRoutes/>
      //<Login/>
      //<Monitor/>
      //<ReportProblemas/>
      //<Identidade/>
      //<Avaliacoes/>
      //<Projetos/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
