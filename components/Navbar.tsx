import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavBrand from "react-bootstrap/NavbarBrand";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useFetchUser } from "../utils/user";

export default function Navbarr() {
    const { user, loading } = useFetchUser();

  return (
    <Navbar className="navbar-dark bg-dark" expand="lg">
      <NavBrand className="p-3">QP Chat</NavBrand>
      { user && !loading ? 
              (<Link href="/api/logout"><Button>Logout</Button></Link>)
              :
              null}
      
    </Navbar>
  );
}
