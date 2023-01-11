import React, { useRef } from 'react';
import './styles.css';
import Logo from '../common/Logo';
import {useHistory} from 'react-router-dom';


const ProductAdministrarion = () => {

	const history=useHistory();
    const handleClick=()=>history.push('/Admin');
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
						<td><input type="text" name="" id="" /></td>
						<td><input type="text" name="" id="" /></td>
						<td><input type="text" name="" id="" /></td>
						<td><input type="number" /></td>
						<td><input type="file" name="" id="" /></td>
						<td><input type="button" value="Agregar" /></td>
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
								<td> <input type="text" name="" id="" value="ensalada"/> </td>
								<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
								<td> <input type="number" name="" id="" value="80"/></td>
								<td> <input type="number" name="" id="" value="10"/> </td>
								<td> <input name="" id="" value="Ruta"/></td>
								<td><input class="btnact" type="submit" value="Actualizar" /></td>
								<td><input class="btnelim" type="submit" value="Eliminar" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="" id="" value="ensalada"/> </td>
								<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
								<td> <input type="number" name="" id="" value="80"/> </td>
								<td> <input type="number" name="" id="" value="10"/> </td>
								<td> <input name="" id="" value="Ruta"/> </td>
								<td><input class="btnact" type="submit" value="Actualizar" /></td>
								<td><input class="btnelim" type="submit" value="Eliminar" /></td>
							</tr>
							<tr>
								<td> <input type="text" name="" id="" value="ensalada"/> </td>
								<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
								<td> <input type="number" name="" id="" value="10"/> </td>
								<td> <input type="number" name="" id="" value="80"/> </td>
								<td> <input type="text" name="" id="" value="Ruta"/> </td>
								<td><input class="btnact" type="submit" value="Actualizar" /></td>
								<td><input class="btnelim" type="submit" value="Eliminar" /></td>
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