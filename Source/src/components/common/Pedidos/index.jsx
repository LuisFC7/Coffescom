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
                    </div>
                    <div>
                        <h3>Realizados</h3>
                    </div>
                </section>
            </div>
        );
};

export default Pedidos;