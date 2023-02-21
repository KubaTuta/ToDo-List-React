import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { Button } from "../../../common/StyledButtons/styled";

export const ExampleFetcher = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </div>
  )
};