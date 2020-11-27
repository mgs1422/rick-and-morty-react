import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Header } from './';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
