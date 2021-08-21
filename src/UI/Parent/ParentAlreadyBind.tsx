import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ParentAlreadyBind = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <View
        style={{
          height: '10%',
          display: 'flex',
          flexDirection: 'row',
          padding: '2%',
          paddingLeft: '5%',
          alignItems: 'center',
        }}>
        <Icon name="arrowleft" color="red" size={15} />
        <Button title={'返回'} />
</View>
      <Text style={{color: 'white'}}>123</Text>
      <Text style={{flexGrow: 1}} />
    </View>
  );
};
export default ParentAlreadyBind;
