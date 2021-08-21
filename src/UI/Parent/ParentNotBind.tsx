import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const ParentNotBind = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
      }}>
      <View style={{height: 100}} />
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          !请和您的孩子账号绑定!
        </Text>
        <Text />
        <View
          style={{
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 12,
            padding: 10,
          }}>
          <Text>账号绑定方法如下:</Text>
          <Text>(1) 前往孩子账号的【账号信息】界面</Text>
          <Text style={{fontWeight: 'bold'}}>
            (2) 点击【账户绑定凭据】以复制
          </Text>
          <Text>(3) 返回家长账号并输入绑定凭据</Text>
        </View>
        <Text />
      </View>
      <View>
        <TextInput
          placeholder="请输入绑定凭据..."
          style={{
            textAlign: 'center',
            borderColor: 'red',
            padding: 10,
            borderWidth: 2,
            borderRadius: 12,
            width: 300,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
          alignContent: 'space-between',
        }}>
        <Button title="确定" />
        <View style={{width: 20}} />
        <Button title="返回" />
      </View>
    </View>
  );
};
export default ParentNotBind;
