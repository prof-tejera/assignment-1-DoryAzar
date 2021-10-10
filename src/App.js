import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/generic/Container/Container";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";


function App() {
  return (
    <Container>
      <Router>
      <nav>
          <ul>
            <li key={1}>
              <Link to="/">Timers</Link>
            </li>
            <li key={2}>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </nav>
        <br />
      <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <TimersView />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
