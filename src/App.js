import './App.scss';
import { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);

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
          <Route exact path="/products">
            <Header></Header>
            <Products categories={categories}></Products>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
