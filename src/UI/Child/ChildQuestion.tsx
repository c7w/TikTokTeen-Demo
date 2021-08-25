import {NavigationContainer} from '@react-navigation/native';
import React, {useState, ReactElement, useEffect} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import Toast from 'react-native-root-toast';
import {BASE_URL} from '../../Utils/Account';
import Store from '../../Utils/Store';
import RadioGroup from '../Utils/RadioGroup';

const questionViews = (
  questions,
  resetAnswerSheet: (index: number, value: number) => void,
) => {
  let views = [];
  for (let i = 0; i < questions.verifyQuestions.length; ++i) {
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

const ChildQuestion = ({navigation}): ReactElement => {
  const [questions, setQuestions] = useState({
    verifyQuestions: [
      {
        question: '题面',
        options: ['A', 'B', 'C', 'D'],
        answer: -1, //数组的第i个元素为正确答案
      },
    ],
  });

  const [answerSheet, setAnswerSheet] = useState<Array<number>>([
    -1, -1, -1, -1, -1,
  ]);

  const resetAnswerSheet = (index: number, value: number) => {
    let newSheet = answerSheet;
    newSheet[index] = value;
    setAnswerSheet(newSheet);
  };

  useEffect(() => {
    fetch(BASE_URL + '/verify')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      });
  }, []);

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
        {questionViews(questions, resetAnswerSheet)}
      </View>
      <View>
        <Button
          title="确认提交"
          style={{marginTop: '10%'}}
          onPress={() => {
            let correct = true;
            for (let i = 0; i < questions.verifyQuestions.length; ++i) {
              if (answerSheet[i] !== questions.verifyQuestions[i].answer - 1) {
                correct = false;
                break;
              }
            }
            if (correct) {
              Toast.show('回答正确');
              // POST
              fetch(BASE_URL + '/verify', {
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({
                  id: Number(Store.getState().data.childProps.uesrname),
                }),
              })
                .then(res => res.json())
                .then(data => {
                  if (data.status === 'ok') {
                    Toast.show('认证通过!');
                  }
                });

              navigation.navigate('Login');
            } else {
              Toast.show('回答错误');
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ChildQuestion;
