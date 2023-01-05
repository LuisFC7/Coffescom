import React from 'react';
import './styles.css';
import Logo from '../Logo';

const Historial =()=>{
        return(
            <div>
                <Logo></Logo>
                <h1>Tu Historial</h1>
                <section>
                    <div>
                        <h3>Pasados</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Fecha</th>
                                <th>Descripción.</th>
                                <th>Usuario</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>01/01/2023</td>
                                <td>Ensalada tipo lettuce.</td>
                                <td>Alberto Martinez</td>
                                <td>2</td>
                                <td>$70.00</td>
                                <td>Recibido</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>03/01/2023</td>
                                <td>Pizza.</td>
                                <td>Marko Alfonso</td>
                                <td>1</td>
                                <td>$24.00</td>
                                <td>Pendiente</td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        );
};

export default Historial;