import React from "react";
import { NavbarWrapper } from "../MenuH/styles/Navbarstyles";
import {useHistory} from 'react-router-dom';
function Navbar({ open }) {
  const history=useHistory();
  const handleClick=()=>history.push('/pedidos');
  const handleClick2=()=>history.push('/usuario');
  const handleClick3=()=>history.push('/perfilA');
  return (
    <NavbarWrapper open={open}>
      <a onClick={handleClick2}>Catálogo de productos</a>
      <a onClick={handleClick}>Pedidos</a>
      <a onClick={handleClick3}>Cuenta</a>
      <a onClick={handleClick}>Salir</a>
    </NavbarWrapper>
  );
}

export default Navbar;
