
import React, {useEffect} from 'react';
import Navbarr from "../components/Navbar";
import QRCard from "../components/QRCard";
import { useFetchUser } from "../utils/user";
import Firebase  from '../utils/firebase';

export default function qrpage() {
  
  const { user, loading } = useFetchUser();
  console.log(user);
  
  useEffect(() => {
    
    Firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);

      // ...
    });
    return ()=> {
      Firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('Firebase Sign-out successful.');
        
      }).catch(function(error) {
        // An error happened.
        console.log(error.message);
        
      });
    }


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
