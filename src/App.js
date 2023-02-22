import React from 'react';
import {SafeAreaView, View,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacknav from './navigation/stacknav';

export default function App() {
  Platform.OS === 'android' ? StatusBar.setBackgroundColor('#1A547F') : null;
  Platform.OS === 'ios' ? StatusBar.setBackgroundColor('#1A547F') : null;

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#1A547F'}}>
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <NavigationContainer>
        <Stacknav />
      </NavigationContainer>
    </View>
    </SafeAreaView>
  );
}
