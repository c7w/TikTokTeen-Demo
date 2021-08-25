import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Store from '../Utils/Store';
import ParentAlreadyBind from './Parent/ParentAlreadyBind';
import ParentNotBind from './Parent/ParentNotBind';

const Parent = ({navigation, parentProps}: ParentProps) => {
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
