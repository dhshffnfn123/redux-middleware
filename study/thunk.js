/* ---------------------------------- Thunk --------------------------------- */
// 주어진 파라미터에 1을 더하는 함수를 만들고 싶다면
const addOne = x => x + 1;
addOne(1);  // 2
// 위의 작업을 나중에 하도록 미루고 싶다면
const addOne2 = x => x + 1;
function addOneThunk (x) {
    const thunk = () => addOne(x);
    return thunk;
}

const fn = addOneThunk(1);
setTimeout(() => {
    const value = fn(); // fn이 실행되는 시점에 연산
    console.log(value);
}, 1000);

// 위 코드의 addOneThunk를 화살표 함수로만 사용한다면
const addOne3 = x => x + 1;
const addOneThunk2 = x => () => addOne(x);

const fn2 = addOneThunk2(1);
setTimeout(() => {
    const value2 = fn2();
    console.log(value2);
}, 1000);