import React, {useState, ReactElement} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import RadioGroup from '../Utils/RadioGroup';

let questions = {
  verifyQuestions: [
    {
      question: '题面',
      options: ['A', 'B', 'C', 'D'],
      answer: 0, //数组的第i个元素为正确答案
    },
    {
      question: '题面2',
      options: ['A', 'B', 'C', 'D'],
      answer: 0, //数组的第i个元素为正确答案
    },
    {
      question: '题面3',
      options: ['A', 'B', 'C', 'D'],
      answer: 0, //数组的第i个元素为正确答案
    },
    {
      question: '题面4',
      options: ['A', 'B', 'C', 'D'],
      answer: 0, //数组的第i个元素为正确答案
    },
    {
      question: '题面5',
      options: ['A', 'B', 'C', 'D'],
      answer: 0, //数组的第i个元素为正确答案
    },
  ],
};

const questionViews = (
  resetAnswerSheet: (index: number, value: number) => void,
) => {
  let views = [];
  for (let i = 0; i < 5; ++i) {
    views.push(
      <View
        key={'question-' + i}
        style={{
          borderWidth: 2,
          borderColor: 'yellow',
          borderRadius: 12,
          marginVertical: '5%',
          marginHorizontal: '5%',
          padding: '5%',
        }}>
        <Text style={{color: 'white', fontSize: 16, padding: '5%'}}>
          {i + 1 + '. ' + questions.verifyQuestions[i].question}
        </Text>
        <RadioGroup
          data={questions.verifyQuestions[i].options}
          checkboxStyle={{backgroundColor: 'rgb(80,85,89)'}}
          textStyle={{color: 'white'}}
          callback={(val: number) => {
            resetAnswerSheet(i, val);
          }}
        />
      </View>,
    );
  }
  return views;
};

const ChildQuestion = (): ReactElement => {
  const [answerSheet, setAnswerSheet] = useState<Array<number>>([
    -1, -1, -1, -1, -1,
  ]);

  const resetAnswerSheet = (index: number, value: number) => {
    let newSheet = answerSheet;
    newSheet[index] = value;
    setAnswerSheet(newSheet);
  };

  return (
    <ScrollView
      style={{height: '100%'}}
      persistentScrollbar={true}
      showsVerticalScrollIndicator={true}
      indicatorStyle="white"
      contentContainerStyle={{backgroundColor: 'rgb(80,85,89)'}}>
      <View
        style={{
          borderWidth: 2,
          borderColor: 'red',
          marginHorizontal: '5%',
          marginTop: '10%',
          borderRadius: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5%',
          marginBottom: '10%',
        }}>
        <Text style={{color: 'white', fontSize: 16, lineHeight: 26}}>
          　　您好，为了维护青少年良好的观看环境，需要您回答一些问题，如果全部回答正确即可发送视频，如果错误，则需要您重新回答，感谢您为维护青少年良好的观看环境所做出的贡献！
        </Text>
      </View>
      <View style={{marginBottom: '5%'}}>
        {questionViews(resetAnswerSheet)}
      </View>
      <View>
        <Button
          title="确认提交"
          style={{marginTop: '10%'}}
          onPress={() => {
            let correct = true;
            for (let i = 0; i < 5; ++i) {
              if (answerSheet[i] !== questions.verifyQuestions[i].answer) {
                correct = false;
                break;
              }
            }
            if (correct) {
              Alert.alert('对了');
            } else {
              Alert.alert('错了');
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ChildQuestion;
