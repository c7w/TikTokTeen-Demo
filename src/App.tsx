import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Child from './UI/Child';
import Login from './UI/Login';
import Parent from './UI/Parent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Child"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="Child" component={Child} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
