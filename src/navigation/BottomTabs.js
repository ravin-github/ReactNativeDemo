import React from 'react';
import {ms} from 'react-native-size-matters/extend';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Colors} from '@themes';
import Details from '@screens/details';
import ShowDetails from '@screens/details/ShowDetails';
import Dashboard from '@screens/dashboard';
import ShowDashboard from '@screens/dashboard/ShowDashboard';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function Tab1() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="dashboard" component={Dashboard}  initialParams={null}/>
      <HomeStack.Screen name="showDashboard" component={ShowDashboard} />
    </HomeStack.Navigator>
  );
}

function Tab2() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="details" component={Details} initialParams={null} />
      <HomeStack.Screen name="showDetails" component={ShowDetails} />
    </HomeStack.Navigator>
  );
}


const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        tabBarLabelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        name="TAB1"
        component={Tab1}
        initialParams={null}
        tabBarShowLabel={false}
        options={{
          tabBarLabel: 'TAB 1',
          tabBarLabelStyle: {
            fontSize: ms(20),
          },
          tabBarIconStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="TAB2"
        component={Tab2}
        options={{
          headerTitle: 'TAB 2',
          tabBarLabelStyle: {
            fontSize: ms(20),
          },
          tabBarIconStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
