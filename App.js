import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import {HomeView} from './src/views/HomeView';

export default function App() {
  return (
    <SafeAreaView style={styles.mainModule}>
      <HomeView/>
    </SafeAreaView>
    
    
    
  );
}

const styles = StyleSheet.create({
  mainModule:{
    flex:1
  }

});
