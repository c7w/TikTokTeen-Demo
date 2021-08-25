import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ChildInfo from './ChildInfo';
import ChildMessage from './ChildMessage';
import ChildNew from './ChildNew';
import ChildExplore from './ChildExplore';
import ChildReport from './ChildReport';
import Store from '../../Utils/Store';

interface ChildProps {
  id: number;
  username: string;
  uniqueId: string;
  verified: boolean;
}

interface FootBarProps {
  callback: (element: ReactElement) => void;
  childProps: ChildProps;
  navigation;
}

const ChildFootbar = ({callback, childProps, navigation}: FootBarProps) => {
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
        onPress={() => {
          callback(<ChildReport />);
        }}
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
        onPress={() => {
          callback(<ChildExplore />);
        }}
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
        onPress={() => {
          callback(
            <ChildNew
              navigation={navigation}
              verified={Store.getState().data.childProps.verified}
            />,
          );
        }}
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
        onPress={() => {
          callback(<ChildMessage />);
        }}
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
        onPress={() => {
          callback(<ChildInfo props={childProps} navigation={navigation} />);
        }}
      />
    </View>
  );
};

export default ChildFootbar;
