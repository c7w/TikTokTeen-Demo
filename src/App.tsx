import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Child from './UI/Child';
import Login from './UI/Login';
import Parent from './UI/Parent';

const Stack = createNativeStackNavigator();

const DATA = {
  child: {
    id: 123,
    username: 'c7w',
    uniqueId: '114514',
    verified: true,
  },
};

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="Child">
          {props => <Child {...props} childProps={DATA.child} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
