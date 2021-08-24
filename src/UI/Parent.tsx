import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Store from '../Utils/Store';
import ParentAlreadyBind from './Parent/ParentAlreadyBind';
import ParentNotBind from './Parent/ParentNotBind';

const Parent = ({navigation, parentProps}: ParentProps) => {
  const [parent, setParent] = useState(<ActivityIndicator />);
  useEffect(() => {
    // Retrieve data
    if (Store.getState().data.parentProps.alreadyBind) {
      setParent(
        <ParentAlreadyBind navigation={navigation} parentProps={parentProps} />,
      );
    } else {
      setParent(<ParentNotBind parentProps={parentProps} />);
    }
  }, []);
  return <View>{parent}</View>;
};

export default Parent;
