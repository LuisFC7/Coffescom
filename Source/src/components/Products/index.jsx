import React, { useRef } from 'react';
import './styles.css';
import Logo from '../common/Logo';
import {useHistory} from 'react-router-dom';


const ProductAdministrarion = () => {

	const history=useHistory();
    const handleClick=()=>history.push('/Administradort');

	function validacion(){
		let nombre=document.getElementById("nomprod").value
		let nombre2=document.getElementById("nomdes").value
		let nombre3=document.getElementById("nompre").value
		let nombre4=document.getElementById("nomcant").value
		let v1=""

		if(nombre==v1 || nombre2==v1||nombre3==v1||nombre4==v1){
			alert("Algún campo esta vacio, verifiquelo de nuevo.")
		}else{
			alert("El producto "+nombre+" ha sido agregado")
		}
	}

	function validacionact(){
		alert("Producto actualizado.")
	}

	function validacionelim(){
		alert("¿Desea eliminar el producto?")
	}
    return(
        <div class="container-xl">
			<Logo></Logo>
			<div class="agregar">
				<h2>Agregar producto</h2>
				<table>
					<thead>
						<tr>
							<td>Nombre</td>
							<td>Descripción</td>
							<td>Precio</td>
							<td>Cantidad</td>
							<td>Imagen</td>
							<td>Agregar</td>
						</tr>
					</thead>
					<tr>
						<td><input class="campos" type="text" name="" id="nomprod" /></td>
						<td><input class="campos" type="text" name="" id="nomdes" /></td>
						<td><input class="campos" type="number" name="" id="nompre" /></td>
						<td><input class="campos"  type="number" id='nomcant' /></td>
						<td><input class="file" type="file" name="" id="nomfile" /></td>
						<td><input class="btnagregar" type="button" value="Agregar" onClick={validacion} /></td>
					</tr>
				</table>
			</div>
			<div class="table-responsive">
				<div class="table-wrapper">
					<div class="table-title">
						<div class="row">
							<div class="col-sm-6">
								<h2>Administracion de productos</h2>
							</div>
							<div class="col-sm-6">
							</div>
						</div>
					</div>
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Descripción</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th>Imagen</th>
								<th>Actualizar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td> <input type="text" name="" id="" value="Hamburguesa Con Papas"/> </td>
								<td> <input type="text" name="" id="" value="Hamburguesa acompañada con papas"/> </td>
								<td> <input type="number" name="" id="" value="55"/></td>
								<td> <input type="number" name="" id="" value="10"/> </td>
								<td> <input type="file" name="" id="" /></td>
								<td><input class="btnact" type="submit" value="Actualizar" onClick={validacionact}/></td>
								<td><input class="btnelim" type="submit" value="Eliminar" onClick={validacionelim}/></td>
							</tr>
							<tr>
								<td> <input type="text" name="" id="" value="Ensalada tipo asiatica"/> </td>
								<td> <input type="text" name="" id="" value="Ensalada con huevo, lechuga, fideos y verduras con aderezos"/> </td>
								<td> <input type="number" name="" id="" value="60"/> </td>
								<td> <input type="number" name="" id="" value="15"/> </td>
								<td> <input type="file" name="" id="" /></td>
								<td><input class="btnact" type="submit" value="Actualizar" onClick={validacionact}/></td>
								<td><input class="btnelim" type="submit" value="Eliminar" onClick={validacionelim}/></td>
							</tr>
							<tr>
								<td> <input type="text" name="" id="" value="Ensalada dulce"/> </td>
								<td> <input type="text" name="" id="" value="Ensalada con frutos rojos y algunas verduras con aderezos"/> </td>
								<td> <input type="number" name="" id="" value="55"/> </td>
								<td> <input type="number" name="" id="" value="20"/> </td>
								<td> <input type="file" name="" id="" /></td>
								<td><input class="btnact" type="submit" value="Actualizar" onClick={validacionact}/></td>
								<td><input class="btnelim" type="submit" value="Eliminar" onClick={validacionelim}/></td>
							</tr> 
						</tbody>
					</table>
				</div>
			</div>    
			<button onClick={handleClick}>
                Regresar <i className='fas fa-long-arrow-alt-right'></i>
            </button>    
	</div>
    );


};

export default ProductAdministrarion;