import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableHighlight, View, Image, Platform, SafeAreaView, Alert, Button, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
