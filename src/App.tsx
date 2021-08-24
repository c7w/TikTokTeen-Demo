import {transformFileSync} from '@babel/core';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import Child from './UI/Child';
import Login from './UI/Login';
import Parent from './UI/Parent';
import Store from './Utils/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Parent">
            {props => (
              <Parent
                {...props}
                parentProps={Store.getState().data.parentProps}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Child">
            {props => (
              <Child {...props} childProps={Store.getState().data.childProps} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
