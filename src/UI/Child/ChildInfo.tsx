import React from 'react';
import {View, Alert, GestureResponderEvent} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {Button, ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    title: '用户名',
    icon: 'address-card',
    value: 'c7w',
  },
  {
    title: 'UID',
    icon: 'id-card',
    value: 'c7w',
  },
  {
    title: '绑定凭证',
    icon: 'key',
    value: 'c7w',
    onPress: (event: GestureResponderEvent) => {
      Clipboard.setString('');
    },
  },
];

const childInfo = () => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={{height: '12%'}}></View>
      {list.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          topDivider
          onLongPress={item.onPress}
          containerStyle={{backgroundColor: 'black'}}>
          <Icon name={item.icon} size={18} color="white" />
          <ListItem.Content>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white'}}>{item.title}</Text>
              <Text style={{flexGrow: 1}} />
              <Text
                style={{
                  justifyContent: 'flex-end',
                  fontSize: 16,
                  color: 'grey',
                  marginRight: '3%',
                }}>
                {item.value}
              </Text>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
      <View style={{height: '10%'}}></View>
      <ListItem
        key="logout"
        bottomDivider
        topDivider
        containerStyle={{backgroundColor: 'black'}}
        onPress={() => {}}>
        <Icon name="sign-out" size={24} color="white" />
        <ListItem.Content>
          <Text style={{color: 'white', fontSize: 18}}>退出登录</Text>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default childInfo;
