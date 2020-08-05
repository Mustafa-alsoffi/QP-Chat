
import React, {useEffect} from 'react';
import Navbarr from "../components/Navbar";
import QRCard from "../components/QRCard";
import { useFetchUser } from "../utils/user";
import Firebase  from '../utils/firebase';

export default function qrpage() {
  
  const { user, loading } = useFetchUser();
  useEffect(() => {
    Firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
   
    });
    


  }, [])
  return (
    <>
     <Navbarr />
    {user && !loading ? 
      (
        <div

          className="container-fluid d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
        <QRCard />
        </div>
      )
      :
      <h1>Error</h1>}
      </>
  );
}
