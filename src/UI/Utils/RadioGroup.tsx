import React, {useState} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';

interface RadioGroupProps {
  data: Array<string>;
  checkboxStyle: ViewStyle;
  textStyle: TextStyle;
  callback: (value: number) => void;
}

const RadioGroup = ({
  data,
  checkboxStyle,
  textStyle,
  callback,
}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <View>
      {data.map((str, i) => {
        return (
          <CheckBox
            title={str}
            textStyle={textStyle}
            key={i}
            containerStyle={checkboxStyle}
            checked={selectedIndex === i}
            checkedColor={'yellow'}
            onPress={() => {
              callback(i);
              setSelectedIndex(i);
            }}
          />
        );
      })}
    </View>
  );
};

export default RadioGroup;
