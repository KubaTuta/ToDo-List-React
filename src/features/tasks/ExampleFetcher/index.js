import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import { Button } from "../../../common/StyledButtons/styled";

export const ExampleFetcher = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <div>
      <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
        {
          loading ? "Trwa ładowanie..." : "Pobierz przykładowe zadania"
        }
      </Button>
    </div>
  )
};