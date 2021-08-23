import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Image, Text} from 'react-native-elements';

const ChildReport = () => {
  return (
    <View style={{height: '100%', flexDirection: 'column'}}>
      <Text
        style={{
          color: 'rgb(246,67,109)',
          textAlign: 'center',
          fontSize: 21,
          fontWeight: 'bold',
          marginTop: '8%',
        }}>
        “阳光男孩”抖音使用报告
      </Text>
      <Text
        style={{
          color: 'rgb(246, 67, 109)',
          textAlign: 'center',
          fontSize: 18,
          paddingTop: '2%',
          paddingBottom: '5%',
        }}>
        {/* { getDateYesterday() } */}
        2021 年 8 月 20 日
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          paddingBottom: '2%',
        }}>
        您昨天的使用时长为：X 时 Y 分
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          paddingBottom: '2%',
        }}>
        共计播放视频数为 Z 个
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          paddingBottom: '5%',
        }}>
        在减少短视频沉迷方面超过了 90% 的同龄人
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'rgb(123,239,239)',
            fontSize: 16,
            paddingBottom: '4%',
          }}>
          您所播放视频的【词云图】如下
        </Text>
        <Image
          source={require('../../Assets/image/wordle.png')}
          PlaceholderContent={<ActivityIndicator />}
          style={{width: 264, height: 120, margin: 'auto'}}
        />
      </View>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          paddingBottom: '5%',
          fontFamily: 'KaiTi',
        }}>
        您更喜欢
        <Text style={{color: 'rgb(246,67,109)', fontSize: 18}}> “科普” </Text>
        类视频
      </Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 16,
          paddingBottom: '5%',
        }}>
        您有很强的自律性，继续努力！
      </Text>
    </View>
  );
};

export default ChildReport;
