// 미들웨어 기본 구조
const loggerMiddleware = store => next => action => {
    console.group(action && action.type);   // action 타입으로 log를 그룹화 함
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서 전달
    console.log('다음 상태', store.getState());
    console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;


// 위의 연달아 사용한 화살표 함수를 풀면 다음과 같다
/*
 const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            // 미들웨어 기본 구조
        };
    };
};
 */