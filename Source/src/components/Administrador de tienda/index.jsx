import React from 'react';
import './styles.css';
import Logo from '../common/Logo/';

const PAdministradort = () => {
    
    return (
        <div>
            <div>
                <Logo></Logo>
            </div>
            <h1>Pedidos pendientes</h1>

            <button class="btn">
                Regresar <i className='fas fa-long-arrow-left'></i>
            </button>
        </div>
    );
};

export default PAdministradort;