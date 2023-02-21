import Input from "../Input";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {
  const query = useQueryParameter();
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChangeHandler = ({target}) => {
    replaceQueryParameter(target);
  }

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