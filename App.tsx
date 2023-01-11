/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable keyword-spacing */
import { Chatting } from './chatbot-src/Chatting';
import { Ws36 } from './MapForm/Ws36';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Button, PermissionsAndroid, Text, View } from 'react-native';
import { useEffect } from 'react';


const HomeScreen = () => {
  const navigation:any = useNavigation();

  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);
  }, []);
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
              title="Go to Map"
              onPress={() => navigation.navigate('Map')}
          />
          <Button
              title="Go to Chat"
              onPress={() => navigation.navigate('Chat')}
          />
      </View>
  );
};


function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Map" component={Ws36} />
      <Tab.Screen name="Chat" component={Chatting} options={{tabBarStyle:{display:'none'}}} />
    </Tab.Navigator>
</NavigationContainer>
  );
}

export default App;
