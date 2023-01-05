import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const editAdminProfile = () => {
  // const history = useHistory();
  return (
    <div class="wrapper">
  <div class="profile">
    <div class="content">
      <h1>Edit Profile</h1>
      <form action="">
        <fieldset>
          <div class="grid-35">
            <label for="fname">First Name</label>
          </div>
          <div class="grid-65">
            <input type="text" id="" tabindex="1" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            <label for="lname">Edad</label>
          </div>
          <div class="grid-65">
            <input type="number" id="" tabindex="2" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            <label for="lname">Email</label>
          </div>
          <div class="grid-65">
            <input type="email" id="" tabindex="2" />
          </div>
        </fieldset>
        <fieldset>
          <div class="grid-35">
            <label for="lname">Password</label>
          </div>
          <div class="grid-65">
            <input type="password" id="" tabindex="2" />
          </div>
        </fieldset>
        
        <fieldset>
          <input type="button" class="Btn cancel" value="Cancel" />
          <input type="submit" class="Btn" value="Save Changes" />
        </fieldset>

      </form>
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
export default editAdminProfile;
