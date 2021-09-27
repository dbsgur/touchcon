import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/containers/Application/Splash';
import Intro1 from './src/containers/Mainflow/Intro1/view';
import Intro2 from './src/containers/Mainflow/Intro2/view';
import Intro3 from './src/containers/Mainflow/Intro3/view';
import Signup from './src/containers/Mainflow/Signup/view';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Signup />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Splash"
    //       component={Splash}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Intro"
    //       component={MyTabs}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Intro1"
      tabBar={() => null}
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Intro1" component={Intro1} />
      <Tab.Screen name="Intro2" component={Intro2} />
      <Tab.Screen name="Intro3" component={Intro3} />
    </Tab.Navigator>
  );
}

export default App;
