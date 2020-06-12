import React, {useState} from 'react';
import { Platform, StatusBar, StyleSheet, View , Text, Button} from 'react-native';
import Login from './screens/Login'
import ReportProblemas from './screens/ReportProblemas'
import Identidade from './screens/Identidade'
import Avaliacoes from './screens/Avaliacoes'
import Projetos from './screens/Projetos'
import MonitorRoutes from './navigation/Monitor'


export default class App extends React.Component{

  state={
    apresentando: ""
  }
  updateState(){
    this.setState({teste: "2"})
  }
  render(){
    return(
      < MonitorRoutes/>
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
