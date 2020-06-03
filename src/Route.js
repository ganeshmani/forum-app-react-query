import React from 'react';
import App from './App';
import AddQuestion from './components/AddQuestion';
import QuestionDetails from './components/QuestionDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export default function RouteComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add">
          <AddQuestion />
        </Route>
        <Route path="/:id" component={QuestionDetails} />
      </Switch>
    </Router>
  );
}
