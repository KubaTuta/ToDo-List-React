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
const hideDoneTasks = false;

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
      body={<div className="list"><Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} /></div>} 
      extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
      />

    </Container>
  );
};

export default App;
