import Login from './components/Login'
import Admin from './components/Admin'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route>
          <Switch>
            <Route path="/" exact>
              <Login/>
            </Route>
            <Route path="/Admin/*" exact>
              <Admin/>
            </Route>
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
