import React from 'react';
import './styles.css';
import Logo from '../Logo';

const Pedidos =()=>{
        return(
            <div>
                <Logo></Logo>
                <h1>Tus pedidos</h1>
                <section>
                    <div>
                        <h3>Pendientes</h3>
                        <table>
                            <tr>
                                <th>ID. Pedido.</th>
                                <th>Descripción.</th>
                                <th>Usuario</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Aprobar</th>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ensalada tipo lettuce.</td>
                                <td>Alberto Martinez</td>
                                <td>2</td>
                                <td>$70.00</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Papas fritas, Boing.</td>
                                <td>Karla Gonzales</td>
                                <td>1,1</td>
                                <td>$32.50</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <h3>Realizados</h3>
                    </div>
                </section>
            </div>
        );
};

export default Pedidos;