import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Store from '../Utils/Store';
import ParentAlreadyBind from './Parent/ParentAlreadyBind';
import ParentNotBind from './Parent/ParentNotBind';

const Parent = ({navigation, parentProps}) => {
  let par = <ActivityIndicator />;
  if (Store.getState().data.parentProps.alreadyBind) {
    par = (
      <ParentAlreadyBind navigation={navigation} parentProps={parentProps} />
    );
  } else {
    par = <ParentNotBind navigation={navigation} />;
  }
  return <View>{par}</View>;
};

export default Parent;
