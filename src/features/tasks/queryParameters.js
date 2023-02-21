import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get("szukaj");
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return (target) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  }
};
