import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ParentAlreadyBind from './Parent/ParentAlreadyBind';
import ParentNotBind from './Parent/ParentNotBind';

const Child = () => {
  const [childContent, setChildContent] = useState(<ActivityIndicator />);
  useEffect(() => {
    // Retrieve data
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <View style={{display: 'flex', flexDirection: 'column', height: '93%'}}>
        {childContent}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '7%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Button
          icon={
            <View
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon name="sticky-note" size={20}></Icon>
              <Text style={{fontSize: 8}}>报告</Text>
            </View>
          }
          type="clear"
        />
        <Button
          icon={
            <View
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon name="sticky-note" size={20}></Icon>
              <Text style={{fontSize: 8}}>报告</Text>
            </View>
          }
          type="clear"
        />
        <Button
          icon={
            <View
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon name="sticky-note" size={20}></Icon>
              <Text style={{fontSize: 8}}>报告</Text>
            </View>
          }
          type="clear"
        />
        <Button
          icon={
            <View
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon name="sticky-note" size={20}></Icon>
              <Text style={{fontSize: 8}}>报告</Text>
            </View>
          }
          type="clear"
        />
        <Button
          icon={
            <View
              style={{
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon name="sticky-note" size={20}></Icon>
              <Text style={{fontSize: 8}}>报告</Text>
            </View>
          }
          type="clear"
        />
      </View>
    </View>
  );
};

export default Child;
