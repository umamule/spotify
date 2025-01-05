/**
 * @format
 */
import { playbackService } from './musicPlayerServise';
import TrackPlayer from 'react-native-track-player';
import TrackPlayerModule from 'react-native-track-player';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => playbackService);