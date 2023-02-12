import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import Router from './config/router';
export default function App() {
  return (
    <>
      <Router />
    </>

  );
}

const styles = StyleSheet.create({


});
