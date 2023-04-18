import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import { styles } from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.fondo }>
      <StatusBar 
        backgroundColor="pink"
        barStyle="light-content" // Esto es para iphone
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;