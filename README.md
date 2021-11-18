# ♐ Middleware
> + 리덕스 미들웨어는 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다.<br>
> - 미들웨어는 액션과 리듀서 사이의 중간자 <br>
> * 액션 => 미들웨어 => 리듀서 => 스토어 <br>
> + 전달 받은 액션을 콘솔에 기록하거나, 전달받은 액션 정보를 기반으로 액션을 취소하거나, 다른 종류의 액션을 추가로 디스패치 할 수 있다.
___
### 🛠 Install
> redux <br>
> react-redux<br>
> redux-actions
___

## 미들웨어 기본구조    #### ✔ /lib/loggerMiddleware.js 참조
> const middleware = store => next => action => { ... };
>> __store__ : 리덕스 스토어 인스턴스<br>
>> __action__ : 디스패치된 액션<br>
>> __next__ : next는 함수형태이며, store.dispatch와 비슷한 역할을 한다.
>>> next(action)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고,<br> 다음 미들웨어가 없다면 리듀서에게 넘겨준다.