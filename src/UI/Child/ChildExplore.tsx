import React from 'react';
import {ImageBackground, View} from 'react-native';

const ChildExplore = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../../Assets/image/videos/1.gif')}
        style={{height: '100%', width: '100%'}}
      />
    </View>
  );
};
export default ChildExplore;
