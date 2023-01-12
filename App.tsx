/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Chatting } from './chatbot-src/Chatting';
import { Ws36 } from './WS/Ws36';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from './Home/Home';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Ws36} />
      <Tab.Screen name="Chat" component={Chatting} options={{tabBarStyle:{display:'none'}}} />
    </Tab.Navigator>
</NavigationContainer>
  );
}

export default App;
