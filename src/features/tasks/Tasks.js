
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import Search from './Search';
import { ExampleFetcher } from './ExampleFetcher';
import { Wrapper } from '../../styled';

function Tasks() {

  return (
    <Container>
      <Wrapper>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          extraHeaderContent={<ExampleFetcher />}
          body={<Form />}
        />
        <Section
          title="Wyszukiwarka"
          body={<Search />}
        />
        <Section
          title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Wrapper>
    </Container>
  );
};

export default Tasks;
