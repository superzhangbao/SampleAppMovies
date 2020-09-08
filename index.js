/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {AppStackNavigator} from './navigators/AppNavigators';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
