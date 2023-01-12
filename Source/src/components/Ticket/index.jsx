import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import MenuItem from '../../components/common/Menu/MenuItem';
import {useHistory} from 'react-router-dom';

const Ticket = () => {
    
    
    const history=useHistory();
    const handleClick=()=>history.push('/pedidofinal');
    const handleClick2=()=>history.push('/usuario');
    return (
        <div class="Contenedor">
            <h2>!Gracias por tu compra esperando validación de tu pedido!</h2>
            <div>
                <button onClick={handleClick}>
                    Ver pedido <i className='fas fa-long-arrow-alt-right'></i>
                </button>  
            </div>
            <div>
                <button onClick={handleClick2}>
                    Regresar <i className='fas fa-long-arrow-alt-right'></i>
                </button>  
            </div>
        </div>
    );
};

export default Ticket;
