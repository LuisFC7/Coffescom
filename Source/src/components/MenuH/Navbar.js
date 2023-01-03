import React from "react";
import { NavbarWrapper } from "../MenuH/styles/Navbarstyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#">Pedidos</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </NavbarWrapper>
  );
}

export default Navbar;
