import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import ChildFootbar from './Child/ChildFootbar';
import ChildReport from './Child/ChildReport';

interface ChildProps {
  id: number;
  uesrname: string;
  uniqueId: string;
  verified: boolean;
}

const Child = ({
  navigation,
  childProps,
}: {
  navigation;
  childProps: ChildProps;
}) => {
  const [childContent, setChildContent] = useState(<ActivityIndicator />);
  useEffect(() => {
    // Retrieve data
    setChildContent(<ChildReport />);
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
        <ChildFootbar
          callback={setChildContent}
          childProps={childProps}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default Child;
