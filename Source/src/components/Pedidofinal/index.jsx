import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
import MenuItem from '../../components/common/Menu/MenuItem';
import {useHistory} from 'react-router-dom';

const Pedidof = () => {
    
    const history=useHistory();
    const handleClick=()=>history.push('/usuario');
    return (
        <div class="contenido">
                <Logo></Logo>
                <h1>Tus pedidos</h1>
                <section>
                    <div class="pendientes">
                        <h3>Pedidos del dia</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Descripción.</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Detalles</th>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hamburguesa con papas.</td>
                                <td>1</td>
                                <td>$55.00</td>
                                <td>Aceptado</td>
                                <td>Recoger en 20 minutos</td>
                            </tr>
                        </table>
                    </div>
                   
                </section>
                <button onClick={handleClick}>
                Regresar <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
    );
};

export default Pedidof;