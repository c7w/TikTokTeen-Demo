import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

const ChildContest = () => {
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
export default ChildContest;
