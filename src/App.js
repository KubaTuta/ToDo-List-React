import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
  { content: "przejść na Reacta", done: true, },
  { content: "wrzuć coś na ząb", done: true, }
];
const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <div className="list">
            <Tasks tasks={tasks} hideDone={hideDone} />
          </div>
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />

    </Container>
  );
};

export default App;
