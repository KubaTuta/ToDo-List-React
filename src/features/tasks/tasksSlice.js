import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasksName', //nazwa slice'a
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({tasks}, {payload: task}) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone
    },
    toggleTaskDone: ({tasks}, {payload}) => {
      const index = tasks.findIndex(({id}) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({tasks}, {payload}) => {
      const index = tasks.findIndex(({id}) => id === payload);
      tasks.splice(index, 1);
    },
    setAllDone: ({tasks}) => {
      tasks.map(task => task.done = true);
    },
    fetchExampleTasks: () => {
    },
    setExampleTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setExampleTasks
} = tasksSlice.actions; //action creator automatycznie stworzeone przez createSlice w polu .actions (type: nazwa slice'a/nazwa reducera)
export const selectState = state => state.tasksName; //selektor, który zwraca cały stan
export const selectTasks = state => selectState(state).tasks; //selektor, który zwraca zadania
export const selectHideDone = state => selectState(state).hideDone;
export default tasksSlice.reducer; //create slice zwraca klasyczne reducery, przekazany do store jako taskReducer