import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChildQuestion from './ChildQuestion';

const ChildVerifyFinished = (): ReactElement => {
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
      <View
        style={{
          height: '80%',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 12,
        }}>
        <Icon
          name="upload"
          color="white"
          size={100}
          style={{
            borderColor: 'white',
            borderWidth: 1,
            borderStyle: 'dotted',
            padding: '20%',
            marginBottom: '5%',
            borderRadius: 120,
          }}
        />
        <Text style={{color: 'white', fontSize: 20}}>您已成功通过认证</Text>
        <Text style={{color: 'white', fontSize: 20}}>视频上传入口维护中</Text>
      </View>
    </View>
  );
};

const ChildNew = ({verified}: {verified: boolean}) => {
  if (verified) {
    return <ChildVerifyFinished />;
  } else {
    return <ChildQuestion />;
  }
};
export default ChildNew;
