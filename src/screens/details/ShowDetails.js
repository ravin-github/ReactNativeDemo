import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import { s, vs } from 'react-native-size-matters/extend';
import {Colors} from '@themes';
import { Text } from '@components';

const ShowDetails = ({navigation,route}) => {
const {data} = route.params;

  const goBack = () =>{
    navigation.setParams({
        data: 'someText',
      });
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
      <Text variant={'title'}>Tab 2 VALUE : {data}</Text>
      </View>
      <Pressable onPress={goBack}  style={styles.button}>
        <Text variant={'title'} style={styles.text}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default ShowDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    paddingHorizontal: s(20),
    paddingVertical: vs(10),
  },
  labelContainer: {
    marginHorizontal: s(20),
    marginVertical: vs(10)
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