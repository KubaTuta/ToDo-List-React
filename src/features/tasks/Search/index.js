import Input from "../Input";
import { Wrapper } from "./styled";
import { useLocation, useHistory } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const onInputChangeHandler = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  

  return (
    <Wrapper>
      <Input
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChangeHandler}
    />
    </Wrapper>
  )
};

export default Search;