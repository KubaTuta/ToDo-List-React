import { call, put, takeEvery, takeLatest, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, setExampleTasks, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setExampleTasks(exampleTasks));
  } 
  catch (error) {
    yield call(alert, "coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  console.log("działa");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}