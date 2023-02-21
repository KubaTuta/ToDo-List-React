import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasksParent', 
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.map(task => task.done = true);
    },
    setExampleTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = true;
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
        state.tasks = tasks;
        state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    }
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksLoad,
  fetchExampleTasksError,
} = tasksSlice.actions; 

export const selectState = state => state.tasksParent; 
export const selectTasks = state => selectState(state).tasks; 
export const selectHideDone = state => selectState(state).hideDone;
export const selectLoading = state => selectState(state).loading;

export const getTaskbyId = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks
  }
  return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()))
};

export default tasksSlice.reducer; 