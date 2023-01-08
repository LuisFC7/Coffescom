import React, { useRef } from 'react';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';
import './styles.css';

const editAdmin = () => {
  return (
      <div class="wrapper">
          <div class="profile">
              <div class="content">
                  <h1>Modificar Datos</h1>
                  <form action="">
                      <fieldset>
                      <div class="grid-35">
                          <label for="fname">Nombre</label>
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
                          <label for="lname">Contraseña</label>
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
 
  );
};

export default editAdmin;