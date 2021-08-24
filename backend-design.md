BASE_URL 下应有以下请求方法

## **/login**

[POST]

*POST.body*

+ id: Number
+ password: String
+ role: String ('Parent' | 'Teen')

*Res.json()*

+ status: String('ok' | 'failed')



## **/register**

[POST]

*POST.body*

+ id: Number
+ password: String
+ role: String ('Parent' | 'Teen')

*Res.json()*

+ status: String('ok' | 'failed')



## **/user**

[GET]

*GET.params*

+ id: Number
+ role: String('Parent' | 'Teen')

*Res.json()*

+ username: String

(1) **如果是家长...**

+ alreadyBind: Boolean

(1.1) **如果家长已绑定账号...**

+ watchedTime: Number(in minutes)

(2) **如果是孩子...**

+ uniqueId: String
+ watchedTime: Number(in minutes)
+ verified: boolean

[POST]

*POST.body*

+ id: Number
+ role: String('Parent' | 'Child')

**(1) 如果是家长...**

+ uniqueId: String (要求 设置uniqueId 家长孩子一对一 通过uniqueId绑定)

**(2) 如果是孩子...**

+ addWatchedRecord: Number（要求 把这条阅读记录**连带时间**存下来）



## /verify

[GET]

*No GET params*

*Res.json()*

输出题目顺序和选项顺序 random shuffle 后的验证题目.

输出格式:

```json
{
    "verifyQuestions": [
        {
            "question": "题面",
            "options": ["A", "B", "C", "D"],
            "answer": 0 //数组的第i个元素为正确答案
        }, 
        {
            "question": "题面2",
            "options": ["A", "B", "C", "D"],
            "answer": 0 //数组的第i个元素为正确答案
        }, 
        {
            "question": "题面3",
            "options": ["A", "B", "C", "D"],
            "answer": 0 //数组的第i个元素为正确答案
        }, 
        {
            "question": "题面4",
            "options": ["A", "B", "C", "D"],
            "answer": 0 //数组的第i个元素为正确答案
        }, 
        {
            "question": "题面5",
            "options": ["A", "B", "C", "D"],
            "answer": 0 //数组的第i个元素为正确答案
        }
    ]
}
```

[POST] 设置孩子 id 允许上传

POST.body

+ id: Number

Res.json()

```json
{"status": "ok"}
```

