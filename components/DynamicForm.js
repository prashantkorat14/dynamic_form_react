import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  Dimensions,
  ScrollView,
  Button
} from "react-native";

import SelectInput from "react-native-select-input-ios";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import CheckBox from "react-native-checkbox";

export default class DynamicForm extends Component {
  constructor(props) {
    super(props);

    this.state = { formData: this.props.formData, valueSmall0: "" };
  }

  onSubmitEditingSmall0(value) {
    this.setState({
      valueSmall0: value
    });
  }

  renderInputs() {
    let formInputData = this.state.formData.fields;
    console.log(formInputData);

    return formInputData.map((inputItem, index) => {
      switch (inputItem.type) {
        case "text":
          return (
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={inputItem.labelName}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
            />
          );
        case "password":
          return (
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder={inputItem.labelName}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
            />
          );
        case "textarea":
          return (
            <TextInput
              style={styles.textarea}
              multiline={true}
              numberOfLines={4}
              underlineColorAndroid="transparent"
              placeholder={inputItem.labelName}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
            />
          );
        case "select":
          return (
            <SelectInput
              value={this.state.valueSmall0}
              onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
              options={inputItem.options}
              style={[styles.selectInput, styles.selectInputSmall]}
            />
          );
        case "radio":
          return (
            <RadioForm
              radio_props={inputItem.options}
              initial={0}
              onPress={value => {
                this.setState({ value: value });
              }}
            />
          );

        case "checkbox":
          return inputItem.options.map((item, index) => {
            return (
              <CheckBox
                label={item.label}
                checked={index ? false : true}
                onChange={() => {
                  this.state.CheckBox;
                }}
              />
            );
          });

        case "select1":
          let pickertOpt = inputItem.options.map((item, index) => {
            return <Picker.Item label={item.label} value={item.val} />;
          });
          return <Picker>{pickertOpt}</Picker>;

        default:
          break;
      }
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.form_title}>{this.state.formData.title}</Text>
          {this.renderInputs()}
          <Button title={this.state.formData.submit_label} color="blue" />
        </ScrollView>
      </View>
    );
  }
}
const SCREEN_WIDTH = Dimensions.get("window").width;
const MARGIN_SMALL = 8;
const MARGIN_LARGE = 16;

const styles = StyleSheet.create({
  form_title: {
    fontSize: 40,
    padding: 5
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  textarea: {
    margin: 15,
    height: 120,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  selectInput: {
    flexDirection: "row",
    height: 36,
    borderWidth: 1,
    borderRadius: 4,
    padding: MARGIN_SMALL,
    marginTop: MARGIN_LARGE,
    backgroundColor: "#FFFFFF"
  },
  selectInputSmall: {
    width: SCREEN_WIDTH * 0.5 - MARGIN_LARGE * 2
  },
  selectInputLarge: {
    width: SCREEN_WIDTH - MARGIN_LARGE * 2
  }
});
