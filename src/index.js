
import React from 'react';
import {StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from '@navigation';
import store from '@store';
//To Enable Push Notification need to add these library and uncomment these followings

// import init, {pushNotificationPermissions,onMessageReceived  } from "./init";

// init();
  
const App = () => {
  // calling when any push notification receive
  
  // useEffect(() => {
  //   pushNotificationPermissions();
  //   const unsubscribe = messaging().onMessage(onMessageReceived);
  //   return unsubscribe;
  // }, []);

  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex:1  
  }
});

export default App;
