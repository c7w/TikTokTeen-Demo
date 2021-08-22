import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChildFootbar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Button
        icon={
          <View
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="sticky-note" size={20} />
            <Text style={{fontSize: 8}}>报告</Text>
          </View>
        }
        type="clear"
      />
      <Button
        icon={
          <View
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="search" size={20} />
            <Text style={{fontSize: 8}}>发现</Text>
          </View>
        }
        type="clear"
      />
      <Button
        icon={
          <View
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="plus-square" size={32} />
          </View>
        }
        type="clear"
      />
      <Button
        icon={
          <View
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="envelope" size={20} />
            <Text style={{fontSize: 8}}>消息</Text>
          </View>
        }
        type="clear"
      />
      <Button
        icon={
          <View
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="user" size={20} />
            <Text style={{fontSize: 8}}>我</Text>
          </View>
        }
        type="clear"
      />
    </View>
  );
};

export default ChildFootbar;
