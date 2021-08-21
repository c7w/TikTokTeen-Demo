import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import ParentAlreadyBind from './Parent/ParentAlreadyBind';
import ParentNotBind from './Parent/ParentNotBind';

const Parent = () => {
  const [parent, setParent] = useState(<ActivityIndicator />);
  useEffect(() => {
    // Retrieve data
    const data = {bind: false};
    if (data.bind) {
      setParent(<ParentAlreadyBind />);
    } else {
      setParent(<ParentNotBind />);
    }
  }, []);
  return <View>{parent}</View>;
};

export default Parent;
