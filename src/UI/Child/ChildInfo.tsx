import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import {NavigationContainer} from '@react-navigation/native';
import Store from '../../Utils/Store';
import {BASE_URL} from '../../Utils/Account';

interface ChildProps {
  id: number;
  uesrname: string;
  uniqueId: string;
  verified: boolean;
}

const ChildInfo = ({navigation, props}: {navigaion; props: ChildProps}) => {
  const list = [
    {
      title: '用户名',
      icon: 'address-card',
      value: Store.getState().data.childProps.uesrname,
    },
    {
      title: 'UID',
      icon: 'id-card',
      value: Store.getState().data.childProps.uesrname,
    },
    {
      title: '绑定凭证',
      icon: 'key',
      value: Store.getState().data.childProps.uniqueId,
      onPress: () => {
        Clipboard.setString(Store.getState().data.childProps.uesrname);
        Toast.show('绑定凭证已复制到剪贴板!');
      },
    },
    {
      title: '完成认证',
      icon: 'check',
      value: Store.getState().data.childProps.verified ? '是' : '否',
    },
  ];

  return (
    <View style={{backgroundColor: 'black'}}>
      <View style={{height: '12%'}} />
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
      <View style={{height: '10%'}} />
      <ListItem
        key="logout"
        bottomDivider
        topDivider
        containerStyle={{backgroundColor: 'black'}}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Icon name="sign-out" size={24} color="white" />
        <ListItem.Content>
          <Text style={{color: 'white', fontSize: 18}}>退出登录</Text>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ChildInfo;
