import React, { useRef } from 'react';
import './styles.css';
import Logo from '../common/Logo/';
import Menu from '../common/Menu';
import { menuItemsData } from '../common/Menu/data';
import Pedidos from '../common/Pedidos';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Administradorprincipal = () => {
    const menuRef = useRef();
    
    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    const history=useHistory();
    const handleClick=()=>history.push('/Pedidosp');
    return (
        <div>
            <div>
                <Logo handleScrollMenu={handleScrollMenu}></Logo>
            </div>
            <div class='Opciones'>
                <div>
                    <h1>Bienvenido Nombre de tienda desde BD</h1>
                    <h3>Mantente al dia con tus productos.</h3>
                    <h3>Pendientes.</h3>
                </div>
                <div class="respmenu">
                    {/* <input type="checkbox"> */}
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                    <nav>
                        <ul>
                        <li><a href="#" onClick={handleClick}>Productos</a></li>
                        <li><a href="/Pedidosp">Pedidos</a></li>
                        <li><a href="#">Configuración</a></li>
                        <li><a href="#">Cerrar Sesión</a></li>
                        <Link to="/Pedidosp">Pedidosp</Link>
                        </ul>
                    </nav>
                </div>
            </div>
                
            <button onClick={handleScrollMenu}>
                Todos tus productos <i className='fas fa-long-arrow-alt-right'></i>
            </button> 
            <Menu list={menuItemsData} ref={menuRef} />
            <button onClick={handleClick}>
                Pedidos <i className='fas fa-long-arrow-alt-right'></i>
            </button>     
        </div>
    );
};

export default Administradorprincipal;