import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const childContest = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '75%',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 12,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>无最新消息</Text>
      </View>
    </View>
  );
};
export default childContest;
