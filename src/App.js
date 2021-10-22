import './App.scss';
import { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/detail/category/all')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch('https://bootcampapi.techcs.io/api/fe/v1/product/all')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/login">
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            ></Login>
          </Route>
          <Route exact path="/products">
            <Header isLoggedIn={isLoggedIn}></Header>
            <Products categories={categories} products={products}></Products>
          </Route>
          <Route path="/products/:id">
            <Header isLoggedIn={isLoggedIn}></Header>
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
