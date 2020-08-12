
import React, {useEffect} from 'react';
import Navbarr from "../components/Navbar";
import QRCard from "../components/QRCard";
import { useFetchUser } from "../utils/user";
import Firebase  from '../utils/firebase';
import Head from 'next/head'
export default function qrpage() {
  
  const { user, loading } = useFetchUser();
  let fRoomID;

  //Create Chat room using Firechat
useEffect(() => {
  var chatRef = Firebase.database().ref("chat");
  const fireChat = new Firechat(chatRef);
  fireChat.createRoom("New room", "Public", (roomId) => {
    fRoomID = roomId;
  }) 
}, [])
  return (
    <>
     <Head>
        {/* jQuery  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

        {/* Firebase  */}
        <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

        {/* Firechat  */}
        <script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>
      </Head>
     <Navbarr />
    {user && !loading ? 
      (
        <div

          className="container-fluid d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
        <QRCard fRoomId={fRoomID} />
        </div>
      )
      :
      <h1>Error</h1>}
      </>
  );
}
