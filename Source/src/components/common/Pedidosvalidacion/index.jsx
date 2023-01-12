import React from 'react';
import './styles.css';
import Logo from '../Logo';
import {useHistory} from 'react-router-dom';

const Pedidosv =()=>{
    const history=useHistory();
    const handleClick=()=>history.push('/Administradort');
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
                                <th>Usuario</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Aceptar</th>
                                <th>Rechazar</th>
                                <th>Comentario</th>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Papas fritas, Boing.</td>
                                <td>Karla Gonzales</td>
                                <td>1,1</td>
                                <td>$32.50</td>
                                <td><input class="btnacept" type="button" value="Aceptar" /></td>
                                <td><input class="btndele" type="button" value="Rechazar" /></td>
                                <td><textarea name="" id="" cols="15" rows="3"></textarea></td>
                            </tr>
                        </table>
                    </div>
                    <div class="realizados">
                        <h3>Realizados</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Descripción.</th>
                                <th>Usuario</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Refresco limón</td>
                                <td>Daniel Jimenez</td>
                                <td>1</td>
                                <td>$18.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gomitas con chile.</td>
                                <td>Carlos Baez</td>
                                <td>4</td>
                                <td>$28.00</td>
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

export default Pedidosv;