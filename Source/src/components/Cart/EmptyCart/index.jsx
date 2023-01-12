import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useHistory();
  const handleClick=()=>history.push('/usuario')
  return (
    <div className='emptyCart'>
      <h1>!Oh Parece que no has agregado nada a tu carrito!</h1>
      <img src='https://merchlist.co/assets/emptycart.png' alt='' />
      <button onClick={handleClick}>
        <i className='fas fa-long-arrow-alt-left'></i> Regresar al menú
      </button>
    </div>
  );
};

export default EmptyCart;
