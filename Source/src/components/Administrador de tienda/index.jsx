import React, { useRef } from 'react';
import './styles.css';
import Logo from '../common/Logo/';
import Menu from '../common/Menu';
import { menuItemsData } from '../common/Menu/data';
// import Pedidos from './Pedidos';

const Administradorprincipal = () => {
    const menuRef = useRef();


    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div>
            <div>
                <Logo handleScrollMenu={handleScrollMenu}></Logo>
            </div>
            <h1>Bienvenido Nombre de tienda desde BD</h1>
            <h3>Mantente al dia con tus productos.</h3>
            <h3>Pendientes.</h3>
                
            <button onClick={handleScrollMenu}>
                Todos tus productos <i className='fas fa-long-arrow-alt-right'></i>
            </button> 
            <Menu list={menuItemsData} ref={menuRef} />
            <button onClick={handleScrollMenu}>
                Pedidos <i className='fas fa-long-arrow-alt-right'></i>
            </button> 
            
        </div>
    );
};

export default Administradorprincipal;