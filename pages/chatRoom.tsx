import React, { useEffect } from "react";
import Firebase from "../utils/firebase";
import Head from "next/head";
import { useRouter } from 'next/router'
import Chat from '../components/Chat'
import styles from '../styles/ChatRoom.module.css'
import { useFetchUser } from "../utils/user";
export default function ChatRoom() {
  const router = useRouter()
  const { user, loading } = useFetchUser();
  const auth0User = user;
  useEffect(() => {
    
    console.log(router.query['roomID']);
        Firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
        console.log(errorMessage);
        
    });
    

  }, [])

  Firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.


      var uid = user.uid;
      if (user) {
        if (auth0User && !loading) {
          initChat(uid, auth0User.nickname);
        } else {
          initChat(uid, "Anonymous");
        }
        
      }
    } else {
      // User is signed out.
    }
  });

  const initChat = (uid, username) => {
    // Get a Firebase Database ref
    var chatRef = Firebase.database().ref("chat");
    const fireChat = new Firechat(chatRef);

    fireChat.setUser(uid, username + uid.substr(10, 8));
  };
  return (
    <div className={styles["container-fluid"]} style={{minHeight: '100vh', margin: "0px", backgroundColor: 'red'}}>
      <Head>
        {/* jQuery  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

        {/* Firebase  */}
        <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

        {/* Firechat  */}
        <link
          rel="stylesheet"
          href="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.css"
        />
        <script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>
      </Head>
      
        <Chat />

      
    </div >
  );
}
