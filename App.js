import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';
import Monitor from './navigation/Monitor';
import Login from './screens/Login'
import ReportProblemas from './screens/ReportProblemas'
import Identidade from './screens/Identidade'
import Avaliacoes from './screens/Avaliacoes'
import Projetos from './screens/Projetos'

export default function App(props) {
  return(
    //<Login/>
    //<Monitor/>
    //<ReportProblemas/>
   //<Identidade/>
   //<Avaliacoes/>
   <Projetos/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
