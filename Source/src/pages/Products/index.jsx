import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const ProductAdministrarion = () => {
  // const history = useHistory();
  return (
    <div class="container-xl">
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
						<th>Titulo</th>
						<th>Descripción</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
          <tr>
						<td> <input type="text" name="" id="" value="ensalada"/> </td>
						<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
						<td> <input type="number" name="" id="" value="80"/></td>
						<td> <input type="number" name="" id="" value="10"/> </td>
            <td>
							<a class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
          <tr>
						<td> <input type="text" name="" id="" value="ensalada"/> </td>
						<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
						<td> <input type="number" name="" id="" value="80"/> </td>
						<td> <input type="number" name="" id="" value="10"/> </td>
            <td>
							<a class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
						</td>
					</tr>
          <tr>
						<td> <input type="text" name="" id="" value="ensalada"/> </td>
						<td> <input type="text" name="" id="" value="ensalada con pollo, nueces"/> </td>
						<td> <input type="number" name="" id="" value="10"/> </td>
						<td> <input type="number" name="" id="" value="80"/> </td>
						<td>
							<a class="add" data-toggle="modal"><i class="material-icons" title="Add">&#xE147;</i></a>
							<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Cacel">&#xE872;</i></a>
						</td>
					</tr> 
				</tbody>
			</table>
		</div>
	</div>        
</div>
    // <div className='btnCartCount' onClick={() => history.push('/cart')}>
    //   <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
    //   <i class='fas fa-shopping-cart'></i>
    // </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartCount: selectCartItemsCount,
// });

// export default connect(mapStateToProps)(ButtonCartCount);
export default ProductAdministrarion;
