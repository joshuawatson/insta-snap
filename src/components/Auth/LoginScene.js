import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import FormButton from './../FormButton';
import LoadingIndicator from './../../components/LoadingIndicator';
//import t from 'tcomb-form-native/lib';
//import stylesheet from './../../assets/style/form';
//const Form = t.form.Form;

export default class LoginScene extends Component {

  handleLogin() {
    this.props.handleLogin();
  }

  handleForgotPasswordRoutePress() {
    this.props.onForgotPasswordRoutePress();
  }

  handleRegisterRoutePress() {
    this.props.onRegisterRoutePress();
  }

  render() {

    //Form.stylesheet = stylesheet;

    const {login} = this.props;

    let email = {
      label: 'Email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      editable: !login.isFetching,
      error: 'Please enter valid email',
      autoCapitalize:'none',
      autoCorrect:false
    };

    let password = {
      label: 'Password',
      placeholder: 'Password',
      maxLength: 12,
      secureTextEntry: true,
      editable: !login.isFetching,
      error: 'Must have 6-12 numbers, letters or special characters'
    };

    //const loginForm = t.struct({
    //  email: t.String,
    //  password: t.String
    //});
    //
    //const options = {
    //  fields: {
    //    email: email,
    //    password: password
    //  }
    //};

    return (
      //<View style={styles.container}>
      //
      //
      //  {login.isFetching ? <LoadingIndicator /> : <View />}
      //
      //  <Form ref="form"
      //        type={loginForm}
      //        options={options}
      //        value={this.props.credentials}
      //        onChange={this.props.onChange}
      //  />
      //
      //  <FormButton
      //    isDisabled={login.isFetching}
      //    onPress={this.handleLogin.bind(this)}
      //    buttonText="Login"
      //  />
      //
      //  <TouchableHighlight onPress={this.handleRegisterRoutePress.bind(this)} underlayColor="transparent"
      //                      style={[styles.center,styles.mTop20]}
      //  >
      //    <Text style={[styles.label,styles.textUnderline]}>Dont have an account? Register</Text>
      //  </TouchableHighlight>
      //
      //  <TouchableHighlight onPress={this.handleForgotPasswordRoutePress.bind(this)} style={[styles.center,styles.mTop20]}
      //                      underlayColor="transparent" >
      //    <Text style={[styles.label,styles.textUnderline]}>Forgot your password ?</Text>
      //  </TouchableHighlight>
      //
      //</View>
      <View/>

    );
  }

}

LoginScene.propTypes = {
  handleLogin:PropTypes.func.isRequired,
  onForgotPasswordRoutePress:PropTypes.func.isRequired,
  onRegisterRoutePress:PropTypes.func.isRequired,
  login:PropTypes.object.isRequired,
  onChange:PropTypes.func.isRequired,
  credentials:PropTypes.object.isRequired
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10
  },
  label: {
    fontSize: 14,
    color: '#888888'
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  ltr: {
    alignSelf: 'flex-start'
  },
  rtl: {
    alignSelf: 'flex-end'
  },
  center: {
    alignSelf: 'center'
  },
  mTop20: {
    marginTop: 50
  }
});

