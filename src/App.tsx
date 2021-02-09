import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Products from 'pages/Products';
import Favorites from 'pages/Favorites';
import { ProductsProvider } from 'contexts/GlobalState';

const App = () => {
  return (
    <Router>
      <ProductsProvider>
        <Header />
        <main>
          <Switch>
            <Route path='/favorites'>
              <Favorites />
            </Route>
            <Route path='/'>
              <Products />
            </Route>
          </Switch>
        </main>
      </ProductsProvider>
    </Router>
  );
};

export default App;
