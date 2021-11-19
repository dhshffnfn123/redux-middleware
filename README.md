# ♐ Middleware
> + 리덕스 미들웨어는 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다.<br>
> - 미들웨어는 액션과 리듀서 사이의 중간자 <br>
> * 액션 => 미들웨어 => 리듀서 => 스토어 <br>
> + 전달 받은 액션을 콘솔에 기록하거나, 전달받은 액션 정보를 기반으로 액션을 취소하거나,<br> 다른 종류의 액션을 추가로 디스패치 할 수 있다.
___
### 🛠 Install
> redux <br>
> react-redux<br>
> redux-actions<br>
> redux-logger<br>
> redux-thunk<br>
> axios<br>
> redux-saga<br>
> redux-devtools-extension
___

## 미들웨어 기본구조
#### ✔ /lib/loggerMiddleware.js 참조
> const middleware = store => next => action => { ... };
>> __store__ : 리덕스 스토어 인스턴스<br>
>> __action__ : 디스패치된 액션<br>
>> __next__ : next는 함수형태이며, store.dispatch와 비슷한 역할을 한다.
>>> next(action)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고,<br> 다음 미들웨어가 없다면 리듀서에게 넘겨준다.

## redux-logger
> 오픈소스 커뮤니티에 올라와 있는 미들웨어.<br>
> 리덕스에서 미들웨어를 사용할 때는 이미 완성된 미들웨어를 설치해서 사용하는 경우가 많다.

## redux-thunk
> + 리덕스를 사용하는 프로젝트에서 비동기 작업을 처리할 때 가장 기본적으로 사용하는 미들웨어이다.
> - thunk 함수를 만들어서 디스패치 할 수 있다. 그러면 리덕스 미들웨어가 그 함수를 전달받아 store의 dispatch와 getState를 파라미터로 넣어서 호출해준다.
### 💡 Thunk란?
> Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.<br>
> ✔ __/study/thunk.js 참조__

## redux-saga
> + redux-thunk 다음으로 많이 사용하는 비동기 작업 관려 미들웨어이다.
> - 다음과 같은 상황에서 유리하다.
>   - 기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
>   - 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할 때
>   - 웹소켓을 사용할 때
>   - API 요청 실패 시 재요청해야 할 때
> * ✔ __제너레이터 함수 문법 /study/generator.js 참고__
> * ✔ __select /study/generator.js 참고__
