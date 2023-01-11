//Este archivo es creado cuando se eligen productos(Hay productos en el carrito de compras)
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import MenuItem from '../../components/common/Menu/MenuItem';
import {useHistory} from 'react-router-dom';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './styles.css';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  const history=useHistory();
  const handleClick=()=>history.push('/usuario');
  return (
    <>
      <div className='cart-header'>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'>Tus productos</h1>
          <div className='orders-menu'>
            <h4>Minimo de compra 1 producto de cualquier precio.</h4>
            <br />
            <h4>Máximo de compra hasta agotar existencias.</h4>
            <Menu list={cartList} />
          </div>

          <h3 className='orders-total'>Total de compra ${cartTotal}</h3>
          <button>
            <i class="fa-light fa-lollipop"></i> Confirmar compra
          </button>

          <button onClick={handleClick}>
            <i class="fa-light fa-lollipop"></i> Regresar
          </button>
        </div>
        //Aqui agregar el botón de confirmación de compra.
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
