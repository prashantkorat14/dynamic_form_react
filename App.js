/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import FormJson from "./form.json";
import DynamicForm from "./components/DynamicForm";

export default class App extends Component {
  handleEmail = text => {
    this.setState({ email: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <DynamicForm formData={FormJson.permit_details} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  }
});
