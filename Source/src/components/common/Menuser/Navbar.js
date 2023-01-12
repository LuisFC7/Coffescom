import React from "react";
import { NavbarWrapper } from "../Menuser/styles/Navbarstyles";
import {useHistory} from 'react-router-dom';
function Navbar({ open }) {
  const history=useHistory();
  const handleClick=()=>history.push('/pedidos');
  const handleClick2=()=>history.push('/productos');
  const handleClick3=()=>history.push('/Useredit');
  const handleClick4=()=>history.push('/historial');

  return (
    <NavbarWrapper open={open}>
      <a onClick={handleClick}>Pedidos</a>
      <a onClick={handleClick3}>Cuenta</a>
      <a onClick={handleClick}>Salir</a>
    </NavbarWrapper>
  );
}

export default Navbar;
