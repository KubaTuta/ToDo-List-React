import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,  // skąd zaciągany jst tasks Reduer czyżby z 'tasks' 13.02 17min
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;