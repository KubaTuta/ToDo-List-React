import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks"
import Author from "./features/author/Author";
import SingleTaskPage from "./features/tasks/SingleTaskPage/index";
import { StyledUl, StyledNavLink } from './styled';

const App = () => (
  <HashRouter>
    <nav>
      <StyledUl>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </li>
      </StyledUl>
      <Switch>
        <Route path="/zadania/:id">
          <SingleTaskPage />
        </Route>
        <Route path="/zadania/">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route>
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)
  ;

export default App;