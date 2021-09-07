import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableHighlight, View, Image, Platform, SafeAreaView, Alert, Button, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
