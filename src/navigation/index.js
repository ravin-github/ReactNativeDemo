import React  from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Storage } from '@utils';
import Login from '@screens/auth/login';
import BottomTabs  from "./BottomTabs";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {loggedIn} = useSelector(state => state.auth); 
  const isLoggedIn = Storage.get('isLoggedIn');
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {loggedIn || isLoggedIn ? (
          <Stack.Screen name="home" component={BottomTabs} />
          ) : ( 
            <Stack.Screen name="login" component={Login} />
         )} 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
