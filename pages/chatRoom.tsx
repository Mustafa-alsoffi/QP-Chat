import React, { useEffect } from "react";
import Firebase from "../utils/firebase";
import Head from "next/head";

export default function ChatRoom() {
  Firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.

      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log("this your UID " + user.displayName);
      if (user) {
    
        initChat(uid, "isAnonymous");
      }
    } else {
      // User is signed out.
    }
  });

  const initChat = (uid, username) => {
    // Get a Firebase Database ref
    var chatRef = Firebase.database().ref("chat");

    // Create a Firechat instance
    var chat = new FirechatUI(
      chatRef,
      document.getElementById("firechat-wrapper")
    );

    // Set the Firechat user
    chat.setUser(uid, "Anonymous" + uid.substr(10, 8));
  };
  return (
    <>
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
      <div className="container-fluid d-flex justify-content-center" style={{minHeight: '100vh'}}>
        <div className="card my-auto" style={{minWidth: '50%', minHeight: '50vh'}}>
          <div id="firechat-wrapper" ></div>

        </div>
      </div>
    </>
  );
}
