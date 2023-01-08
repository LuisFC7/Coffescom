import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import editAdmin from './pages/editAdminProfile';
import Administradort from './pages/Administrador de tienda';
import Pedidosp from './pages/Pedidos';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProdAdmin from './pages/Products';
import Historialp from './pages/Historial';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          
          <Route exact path='/' component={Administradort} />
          <Route exact path='/perfilA' component={editAdmin} />
          <Route exact path='/pedidos' component={Pedidosp} />
          <Route exact path='/productos' component={ProdAdmin} />
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
