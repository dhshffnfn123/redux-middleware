const loggerMiddleware = store => next => action => {
    // 미들웨어 기본 구조
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