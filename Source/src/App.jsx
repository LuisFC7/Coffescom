import React from 'react';
import './App.css';

import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import editAdminProfile from './pages/editAdminProfile';
import Administradort from './pages/Administrador de tienda';
import Pedidosp from './pages/Pedidos';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProdAdmin from './pages/Products';
import Historialp from './pages/Historial';
import Login from './components/Login/Login.jsx'
import Registro from './components/Register/Registro'

const App = () => {
  return (
    <div className='container '>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/perfilA' component={editAdminProfile} />
          <Route exact path='/pedidos' component={Pedidosp} />
          <Route exact path='/Administradort' component={Administradort} />
          <Route exact path='/productos' component={ProdAdmin} />
          <Route exact path='/historial' component={Historialp} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
