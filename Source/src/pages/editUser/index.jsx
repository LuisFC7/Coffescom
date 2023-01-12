import React, { useRef } from 'react';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import { useHistory } from 'react-router-dom';

const Useredit = () => {
    const history=useHistory();
    const handleClick=()=>history.push('/');

    return (
        <div>
            <Logo></Logo>
            <div>
                <h1>Configuración de perfil.</h1>
            </div>
            <div> 
                <table>
                    <tr class="cabecera">
                        <td>Nombre completo</td>
                        <td>Correo</td>
                        <td>Edad</td>
                        <td>Contraseña</td>
                        <td>Aceptar</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="" id="" /></td>
                        <td><input type="email" name="" id="" /></td>
                        <td><input type="text" name="" id="" /></td>
                        <td><input type="password" name="" id="" /></td>
                        <td><input type="submit" value="Aceptar" /></td>
                    </tr>
                </table>
            </div>
            <div>
                <button onClick={handleClick}>
                    Regresar <i className='fas fa-long-arrow-alt-right'></i>
                </button>
            </div>
            <Footer></Footer>
        </div>
  );
};

export default Useredit;