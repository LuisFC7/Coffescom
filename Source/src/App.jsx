import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import editAdminProfile from './pages/editAdminProfile';
import ProductAdministrarion from './pages/Products';
import Administradort from './pages/Administrador de tienda';
import Pedidosp from './pages/Pedidos';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Administradort} />
          <Route exact path='/perfilA' component={editAdminProfile} />
          <Route exact path='/pedidos' component={Pedidosp} />
          <Route exact path='/productos' component={ProductAdministrarion} />
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
