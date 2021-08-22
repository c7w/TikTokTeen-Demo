import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import ChildFootbar from './Child/ChildFootbar';
import childInfo from './Child/ChildInfo';
import childMessage from './Child/ChildMessage';

const Child = () => {
  const [childContent, setChildContent] = useState(<ActivityIndicator />);
  useEffect(() => {
    // Retrieve data
    setChildContent(childInfo());
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <View style={{height: '93%'}}>{childContent}</View>
      <View
        style={{
          height: '7%',
        }}>
        <ChildFootbar />
      </View>
    </View>
  );
};

export default Child;
