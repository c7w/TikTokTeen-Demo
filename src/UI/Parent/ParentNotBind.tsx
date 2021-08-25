import React, {useState} from 'react';
import {Alert, Text, TextInput, useWindowDimensions, View} from 'react-native';
import {Button} from 'react-native-elements';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BASE_URL} from '../../Utils/Account';
import Store, {setParentProps} from '../../Utils/Store';

const ParentNotBind = ({navigation}) => {
  const [inputData, setInputData] = useState('');
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          height: '10%',
          width: '100%',
          minHeight: 70,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          padding: '2%',
          paddingLeft: '5%',
          paddingRight: '5%',
          alignItems: 'center',
          marginBottom: '5%',
        }}>
        <Button
          title={''}
          type="clear"
          icon={<Icon name="sign-out" color="white" size={30} />}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Text
          style={{
            color: 'white',
            paddingLeft: 10,
            fontSize: 20,
          }}>
          绑定界面
        </Text>
        <Text style={{flexGrow: 1}} />
        <Text style={{color: 'white', fontSize: 18}}>
          {Store.getState().data.parentProps.username}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '30%',
          minHeight: 210,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 21,
          }}>
          请完成账号绑定操作
        </Text>
        <Text />
        <View
          style={{
            marginLeft: '10%',
            marginRight: '10%',
            borderColor: 'green',
            borderWidth: 2,
            borderRadius: 12,
            padding: 10,
          }}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            【账号绑定方法】
          </Text>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            (1) 前往孩子账号的【我】选项卡
          </Text>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            (2) 点击【账户绑定凭据】以复制
          </Text>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
            (3) 返回家长账号并输入绑定凭据
          </Text>
        </View>
        <Text />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2%',
          }}>
          请输入绑定凭据
        </Text>
        <TextInput
          style={{
            textAlign: 'center',
            borderColor: 'red',
            padding: 10,
            borderWidth: 2,
            borderRadius: 12,
            width: 300,
            color: 'white',
          }}
          value={inputData}
          onChangeText={setInputData}
        />

        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
          }}>
          <Button
            title="确定"
            onPress={() => {
              fetch(BASE_URL + '/user', {
                method: 'POST',
                body: JSON.stringify({
                  id: Number(Store.getState().data.parentProps.username),
                  role: 'Parent',
                  uniqueId: inputData,
                }),
                headers: {'Content-Type': 'application/json'},
              })
                .then(res => res.json())
                .then(data => {
                  Toast.show('绑定成功!');
                  navigation.navigate('Login');
                })
                .catch(() => {});
            }}
          />
          <View style={{width: 20}} />
        </View>
      </View>
    </View>
  );
};
export default ParentNotBind;
