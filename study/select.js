/* --------------------------------- select --------------------------------- */

// Saga 내부에서 현재 상태를 참조해야 하는 방법이다.
// takeEvery 대신 throttle이라는 함수를 사용하면 saga가 n초에 한 번만 호출되도록 설정할 수 있다.

/* --------------------------------- example -------------------------------- */
// counter 참조 => 다음과 같이 수정하면 increaseSaga는 3초에 단 한번만 호출된다.
import { createAction, handleActions } from "redux-actions";
import {
    delay,
    put,
    takeEvery,
    takeLatest,
    select,
    throttle
} from 'redux-saga/effects'

// (...)

export function* counterSaga() {
    // 첫번째 파라미터 : n초 * 1000
    yield throttle(3000, INCREASE_ASYNC, increaseSaga);
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
