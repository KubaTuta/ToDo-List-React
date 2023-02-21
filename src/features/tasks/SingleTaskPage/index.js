import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskbyId } from "../tasksSlice";

const SingleTaskPage = () => {
  const params = useParams();
  const task = useSelector(state => getTaskbyId(state, params.id));

  return (
    <Container>
      <div>
        <Header title="Szczegóły zadania" />
        <Section
          title={task ? task.content : "Nie znaleziono takiego zadania"}
          body={!!task && (
            <>
            {task.done ? "Zadanie ukończone" : "Nie ukończono zadania"}
            </>
          )
          }
        />
      </div>




    </Container>
  )
};

export default SingleTaskPage;