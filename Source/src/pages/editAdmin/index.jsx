import React, { useRef } from 'react';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import { useHistory } from 'react-router-dom';

const EditAper = () => {
    const history=useHistory();
    const handleClick=()=>history.push('/Administradort');

    function validacion(){
        alert("Datos modificados correctamente :)")
    }

    return (
        <div>
            <Logo></Logo>
            <div>
                <h1>Configuración de perfil.</h1>
            </div>
            <div> 
                <table>
                    <tr class="cabecera">
                        <td>Nombre de tienda</td>
                        <td>Nombre de Administrador</td>
                        <td>Correo</td>
                        <td>Edad</td>
                        <td>Contraseña</td>
                        <td>Aceptar</td>
                    </tr>
                    <tr>
                        <td><input type="text" name="" id="" value="Pancito"/></td>
                        <td><input type="text" name="" id="" value="Rodrigo Perez"/></td>
                        <td><input type="email" name="" id="" value="pruebaadmin@gmail.com"/></td>
                        <td><input type="text" name="" id="" value="28" /></td>
                        <td><input type="password" name="" id="" value="contraseña"/></td>
                        <td><input class="btnacept" type="submit" value="Aceptar" onClick={validacion}/></td>
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

export default EditAper;
