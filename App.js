import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Timer from './components/Timer';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Timer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});