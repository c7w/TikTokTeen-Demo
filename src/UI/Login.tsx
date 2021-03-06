/* eslint-disable react-native/no-inline-styles */
import React, {ReactElement, useState} from 'react';
import {Text, View, Image, TextInput, Button, Switch} from 'react-native';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getUser, login, register} from '../Utils/Account';
import Store, {setRole, setLoggedIn} from '../Utils/Store';

const colors = {
  primary: '#99cc00',
};

const Login = ({navigation}): ReactElement => {
  const [userID, setUserID] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [roleSwitch, setRoleSwitch] = useState<boolean>(true);

  const jumpToChild = () => {
    // TODO: retrieve data
    navigation.navigate('Child');
  };

  const jumpToParent = () => {
    // TODO: retrieve data
    navigation.navigate('Parent');
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'black',
        height: '100%',
      }}>
      <View style={{height: 40}} />
      <View style={{maxHeight: 200}}>
        <Image
          source={require('../Assets/image/logo.png')}
          style={{height: 200, width: 200}}
        />
      </View>
      <View style={{height: 50}} />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <Icon name="user-circle" size={18} color={colors.primary} />
        <View style={{width: 15}} />
        <TextInput
          style={{
            width: 200,
            borderBottomWidth: 1,
            borderColor: 'white',
            color: 'white',
            padding: 0,
          }}
          value={userID}
          onChangeText={setUserID}
        />
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}>
        <Icon name="key" size={18} color={colors.primary} />
        <View style={{width: 15}} />
        <TextInput
          style={{
            width: 200,
            borderBottomWidth: 1,
            borderColor: 'white',
            color: 'white',
            padding: 0,
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button
          title="??????"
          onPress={() => {
            login(userID, password, roleSwitch ? 'Teen' : 'Parent').then(
              data => {
                if (data.status === 'ok') {
                  if (roleSwitch) {
                    jumpToChild();
                    getUser(Number(userID), 'Teen');
                  } else {
                    getUser(Number(userID), 'Parent').then(() =>
                      jumpToParent(),
                    );
                  }

                  // set global states
                  Store.dispatch(setLoggedIn(true));
                  Store.dispatch(setRole(roleSwitch ? 'Teen' : 'Parent'));

                  Toast.show('???????????????');
                } else {
                  Toast.show('?????????????????????????????????');
                }
              },
            );
            // Alert.alert(
            //   '????????????????????? Fetch?????? raise NotImplemented Error',
            //   `${userID} + ${password}`,
            // );
          }}
        />
        <View style={{width: 20}} />
        <Button
          title="??????"
          onPress={() => {
            register(userID, password, roleSwitch ? 'Teen' : 'Parent').then(
              data => {
                if (data.status === 'ok') {
                  Toast.show('???????????????');
                } else {
                  Toast.show('???????????????');
                }
              },
            );
          }}
        />
      </View>
      <View style={{height: 20}} />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}>
        <Text style={{marginRight: 10, borderColor: 'white', color: 'white'}}>
          {roleSwitch === true ? '???????????????' : '????????????'}
        </Text>
        <Switch
          onValueChange={() => {
            setRoleSwitch(!roleSwitch);
          }}
          value={roleSwitch}
          thumbColor={'yellow'}
          trackColor={{false: 'blue', true: 'green'}}
        />
      </View>
    </View>
  );
};

export default Login;
