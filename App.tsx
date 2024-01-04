/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GifSearchScreen from './src/screens/GifSearch/GifSearchScreen';
import {useSelector} from 'react-redux';
import {Indicator} from './src/components/atoms/indicator/Indicator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const loader = useSelector((state: any) => state.auth.loader);

  return (
    <>
      <GifSearchScreen />
      {loader ? <Indicator /> : null}
    </>
  );
}

export default App;
