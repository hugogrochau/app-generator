import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigator from './Navigator';

export default class App extends React.PureComponent {
  render() {
    return (
      <View>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        <Navigator />
      </View>
    )
  }
}
