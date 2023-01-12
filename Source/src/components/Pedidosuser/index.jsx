import React from 'react';
import './styles.css';
import Logo from '../common/Logo';
import {useHistory} from 'react-router-dom';

const Pedidosu =()=>{
    const history=useHistory();
    const handleClick=()=>history.push('/usuario');
        return(
            <div class="contenido">
                <Logo></Logo>
                <h1>Tus pedidos</h1>
                <section>
                    <div class="pendientes">
                        <h3>Pendientes</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Descripción.</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Status</th>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hamburguesa con papas.</td>
                                <td>1</td>
                                <td>$55.00</td>
                                <td>Pendiente</td>
                            </tr>
                        </table>
                    </div>
                    <div class="realizados">
                        <h3>Realizados</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Descripción.</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Barritas Fresa</td>
                                <td>1</td>
                                <td>$15.00</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Galletas oreo</td>
                                <td>4</td>
                                <td>$20.00</td>
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

export default Pedidosu;