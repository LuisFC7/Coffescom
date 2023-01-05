import React from "react";
import { NavbarWrapper } from "../MenuH/styles/Navbarstyles";
import {useHistory} from 'react-router-dom';
function Navbar({ open }) {
  const history=useHistory();
  const handleClick=()=>history.push('/pedidos');
  return (
    <NavbarWrapper open={open}>
      <a onClick={handleClick}>Catálogo de productos</a>
      <a onClick={handleClick}>Pedidos</a>
      <a onClick={handleClick}>Cuenta</a>
      <a onClick={handleClick}>Salir</a>
    </NavbarWrapper>
  );
}

export default Navbar;
