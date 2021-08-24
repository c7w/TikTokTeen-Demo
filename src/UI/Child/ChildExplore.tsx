import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';
import Toast from 'react-native-root-toast';

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
        style={{height: '100%', width: '100%'}}>
        
      </ImageBackground>
    </View>
  );
};
export default ChildExplore;
