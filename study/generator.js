/* -------------------------------- Generator ------------------------------- */

function weirdFunction() {
    return 1;
    return 2;
    return 3;
    return 4;
    return 5;
}
// 하나의 함수에서 값을 여러개 반환하는 것은 불가능하므로 이 코드는 제대로 작동하지 않는다. (1이 반환된다.)
// 하지만 제네레이터 함수를 사용하면 함수에서 값을 순차적으로 반환할 수 있다.

function* generatorFunction() {
    console.log('안녕하세요');
    yield 1;
    console.log('제네레이터 함수');
    yield 2;
    console.log('function*');
    yield 2;
    return 4;
}
// 제네레이터 함수를 만들 때는 function* 키워드를 사용한다.
// 함수를 작성한 뒤에는 다음 코드를 사용해 제너레이터를 생성하세요

const generator = generatorFunction();
// 제너레이터 함수를 호출했을 때 반환되는 객체를 제너레이터라고 부른다.
// 이제 다음 코드를 순차적으로 한 줄씩 입력하고 결과를 확인한다.

generator.next();
// 안녕하세요
// {value: 1, done: false}
generator.next();
// 제너레이터 함수
// {value: 2, done: false}
generator.next();
// function*
// {value: 3, done: false}
generator.next();
// {value: 4, done: true}
generator.next();
// {value: undefined, done: true}

// next()가 호출되면 다음 yield가 있는 곳까지 호출하고 다시 함수가 멈춘다.
// 도중에 멈출 수도 있고, 순차적으로 여러 값을 반환시킬 수도 있다.
// next 함수에 파라미터를 넣으면 제너레이터 함수에서 yield를 사용하여 해당 값을 조회할 수도 있다.

function* sumGenerator() {
    console.log('sumGenerator가 만들어졌습니다.');
    let a = yield;
    let b = yield;
    yield a + b;
}

const sum = sumGenerator();
sum.next();
// sumGenerator가 만들어졌습니다.
// {value: undefined, done: false}
sum.next(1);
// {value: undefined, done: false}
sum.next(2)
// {value: 3, done: false}
sum.next()
// {value: undefined, done: true}

// redux-saga는 제너레이터 함수 문법을 기반으로 비동기 작업을 관리해 준다.

function* watchGenerator() {
    console.log('모니터링 중...');
    let prevAction = null;
    while(true) {
        const action = yield;
        console.log('이전 액션 : ', prevAction);
        prevAction = action;
        if (action.type === 'HELLO') {
            console.log('안녕하세요!');
        }
    }
}

const watch = watchGenerator();

watch.next();
// 모니터링 중...
// {value: undefined, done: false}
watch.next({ type: 'TEST' });
// 이전 액션 : null
// { value: undefined, done: false}
watch.next({ type: 'HELLO' });
// 이전 액션 : { type: "TEST"}
// 안녕하세요!
// {value: undefined, done: false}