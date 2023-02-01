import React, { useState, useEffect } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';


const useTasks = () => {
  const downloadedTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(downloadedTasks ? JSON.parse(downloadedTasks) : []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },
    [tasks]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      };
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };
  return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask}
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {setHideDone(hideDone => !hideDone)};

  const {
    tasks, 
    removeTask, 
    toggleTaskDone, 
    setAllDone, 
    addNewTask
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <div className="list">
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          </div>
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />

    </Container>
  );
};

export default App;
