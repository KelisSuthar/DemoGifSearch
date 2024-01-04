/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StoreProvider from './src/reduxSaga/StoreProvider';
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => StoreProvider);
