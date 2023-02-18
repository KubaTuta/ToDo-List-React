import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasksParent: tasksReducer,  // skąd zaciągany jst tasks Reduer czyżby z 'tasks' 13.02 17min
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;