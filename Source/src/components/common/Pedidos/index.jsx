import React from 'react';
import './styles.css';
import Logo from '../Logo';
import {useHistory} from 'react-router-dom';

const Pedidos =()=>{
    const history=useHistory();
    const handleClick=()=>history.push('/Administradort');

    const handleClick2=()=>history.push('/pedidosv');
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
                                <td>2</td>
                                <td>Hamburguesa con papas.</td>
                                <td>Alberto Martinez</td>
                                <td>1</td>
                                <td>$55.00</td>
                                <td><input class="btnacept" type="button" value="Aceptar" onClick={handleClick2}/></td>
                                <td><input class="btndele" type="button" value="Rechazar" /></td>
                                <td><textarea name="" id="" cols="15" rows="3"></textarea></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Papas fritas, Boing.</td>
                                <td>Karla Gonzales</td>
                                <td>1,1</td>
                                <td>$40</td>
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
                                <td>Coctel Tooty Fruty</td>
                                <td>Daniel Jimenez</td>
                                <td>1</td>
                                <td>$45.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gomitas con chile.</td>
                                <td>Carlos Baez</td>
                                <td>1</td>
                                <td>$15.00</td>
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

export default Pedidos;