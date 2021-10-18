import './App.scss';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
