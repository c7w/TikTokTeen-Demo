import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ParseTime} from '../../Utils/Account';
import Store from '../../Utils/Store';

const ParentAlreadyBind = ({navigation, parentProps}) => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <View
        style={{
          height: '10%',
          display: 'flex',
          flexDirection: 'row',
          padding: '2%',
          paddingLeft: '5%',
          paddingRight: '5%',
          alignItems: 'center',
        }}>
        <Button
          title={''}
          type="clear"
          icon={<Icon name="sign-out" color="white" size={30} />}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Text style={{color: 'white', paddingLeft: 10, fontSize: 20}}>
          使用报告
        </Text>
        <Text style={{flexGrow: 1}} />
        <Text style={{color: 'white', fontSize: 18}}>
          {Store.getState().data.parentProps.username}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          height: '80%',
          flexDirection: 'column',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 20,
          marginHorizontal: '5%',
        }}>
        <View>
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
            您的孩子昨天的使用时长为： 1 小时 40 分钟
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              paddingBottom: '2%',
            }}>
            共计播放视频数为 12 个
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              paddingBottom: '5%',
            }}>
            在减少短视频沉迷方面超过了 90% 的孩子
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '40%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'rgb(123,239,239)',
                fontSize: 16,
                paddingBottom: '4%',
              }}>
              您的孩子所播放视频的【词云图】如下
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
            您的孩子更喜欢
            <Text style={{color: 'rgb(246,67,109)', fontSize: 18}}>
              {' '}
              “科普”{' '}
            </Text>
            类视频
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              paddingBottom: '5%',
            }}>
            希望您的孩子在抖音中能够学会更多知识
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ParentAlreadyBind;
