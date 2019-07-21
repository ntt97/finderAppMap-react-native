import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from './src/navigation/AppNavigator'
export default class App extends Component {
  state = {
    isLoadingComplete: true
  };
  render() {
  
    if (!this.state.isLoadingComplete) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
   
    backgroundColor: "#F5FCFF"
  }
});
