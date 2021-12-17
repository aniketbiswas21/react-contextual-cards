import React from "react";

import logo from "../../assets/images/fampaylogo.svg";
import { Navbar } from "./Nav.styles";

const Nav = () => {
  return (
    <Navbar>
      <img src={logo} alt="Fampay Logo" />
    </Navbar>
  );
};

export default Nav;
