import React, { useRef } from 'react';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import { useHistory } from 'react-router-dom';

const Useredit = () => {
    const history=useHistory();
    const handleClick=()=>history.push('/usuario');

    function validacion(){
        alert("Datos modificados correctamente :)")
    }

    return (
        <div class="contenedor">
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
                        <td><input type="text" name="" id="" value="Alberto Martinez" /></td>
                        <td><input type="email" name="" id="" value="usuario1@gmail.com"/></td>
                        <td><input type="text" name="" id="" value="21"/></td>
                        <td><input type="password" name="" id="" value="usuario1"/></td>
                        <td><input className='btnacept' type="submit" value="Aceptar" onClick={validacion}/></td>
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