import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavBrand from "react-bootstrap/NavbarBrand";
import Button from "react-bootstrap/Button";

export default function Navbarr() {
  return (
    <Navbar className="navbar-dark bg-dark" expand="lg">
      <NavBrand className="p-3">QP Chat</NavBrand>
      <Button>Logout</Button>
    </Navbar>
  );
}
