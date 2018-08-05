import React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import Navigator from './Navigator';

export class App extends React.PureComponent {
  render() {
    return (
      <View>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
        <Navigator />
      </View>
    )
  }
}
