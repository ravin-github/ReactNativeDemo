import React, {useEffect, useState} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {Colors} from '@themes';
import {TextInput, Text} from '@components';

const Home = ({navigation, route}) => {
  const [state, setState] = useState({
    text: '',
  });

  useEffect(() => {
    if (route?.params?.data) setState({...state, text: route?.params?.data});
  }, [route?.params?.data]);

  const onchangeText = (text, name) => {
    setState({...state, [name]: text});
  };

  let payloadData = {
    data: state.text,
  };

  const goToSecondScreen = () => {
    navigation.navigate('showDashboard', payloadData);
  };

  const goToSecondTab = () => {
    navigation.navigate('TAB2', {screen: 'details', params: payloadData});
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text variant={'title'}>Tab 1: Enter text</Text>
      </View>
      <TextInput
        placeholder={'Enter any Text'}
        autoCapitalize={'none'}
        onChangeText={text => onchangeText(text, 'text')}
        value={state.text}
        textInputStyle={{paddingLeft: s(20)}}
      />
      <Pressable onPress={goToSecondScreen} style={styles.button}>
        <Text variant={'title'} style={styles.text}>
          Psss Text To screen 2 
        </Text>
      </Pressable>
      <Pressable onPress={goToSecondTab} style={styles.button}>
        <Text variant={'title'} style={styles.text}>
        Psss Text To tab 2 
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(10),
  },
  labelContainer: {
    marginHorizontal: s(20),
    marginVertical: vs(10),
  },
  button: {
    backgroundColor: Colors.blue,
    marginHorizontal: s(35),
    marginTop: vs(10),
    paddingHorizontal: s(20),
    paddingVertical: vs(7),
  },
  text: {
    color: 'white',
  },
});
