import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {vs, ms, s} from 'react-native-size-matters/extend';
import {TextInput, Text} from '@components';
import emailIcon from '@images/email.png';
import keyIcon from '@images/key.png';
import {Colors} from '@themes';
import {loginAction} from '@store/entities/auth';
import { isValidEmail, isValidPassword } from '@utils';

const Login = () => {
  const passwordInput = useRef();
  const [state, setState] = useState({
    checked: false,
    email: '',
    password: '',
    isShowError: false,
  });
  const {email, password, isShowError} = state;
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);
  
  const onchangeText = (text, name) => {
    setState({...state, [name]: text, isShowError: false});
  };
  
  const authValidate = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      let payload = {
        email: email,
        password: password,
      };
      dispatch(loginAction(payload));
    } else {
      setState({...state, isShowError: true});
    }
  };

  const verification = (state, callback, validateMessage) => {
    if (!state) return `${validateMessage.split(' ')[0]} is required`;
    if (state && !callback(state)) return validateMessage;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior={'height'} style={styles.container}>
        <View style={styles.box}>
          <Text variant={'title'} style={styles.title}>
            Welcome Back
          </Text>
          <Text variant={'body'} style={styles.bodyText}>
            Sign in to continue
          </Text>
          <TextInput
            LeftIcon={emailIcon}
            placeholder={'Email Address'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            returnKeyType={'next'}
            onSubmitEditing={() => passwordInput.current.focus()}
            onChangeText={text => onchangeText(text, 'email')}
            blurOnSubmit={false}
            errorMessage={
              isShowError &&
              verification(email, isValidEmail, 'email is invalid')
            }
          />
          <TextInput
            innerRef={passwordInput}
            password
            LeftIcon={keyIcon}
            style={styles.textInput}
            placeholder={'Password'}
            onChangeText={text => onchangeText(text, 'password')}
            errorMessage={
              isShowError &&
              verification(
                password,
                isValidPassword,
                'Password must be at least 8 character',
              )
            }
          />
          <Pressable onPress={authValidate} style={styles.submit}>
            {loading ? (
              <ActivityIndicator animating={loading} />
            ) : (
              <Text style={styles.loginText}> Login</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: s(335),
    paddingTop: vs(27),
    borderRadius: ms(10),
    paddingLeft: s(20),
    paddingRight: s(20),
    paddingBottom: vs(34),
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: Colors.black,
  },
  bodyText: {
    alignSelf: 'center',
    lineHeight: vs(21),
    fontSize: ms(18),
    marginTop: vs(9),
    marginBottom: vs(19),
  },
  textInput: {
    marginTop: vs(15),
  },
  midWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submit: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: ms(20),
    height: ms(50),
    marginTop: vs(15),
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.white,
    fontSize: ms(20),
  },
});

export default Login;
