import Chat from "../components/Chat";
import styles from "../styles/ChatRoom.module.css";
import Head from "next/head";
import Firebase from "../utils/firebase";
import React, { useState, useEffect } from "react";
export default function ChatRoom() {
  const [firechat, setFirechat] = useState();
  useEffect(() => {
    const chatRef = Firebase.database().ref("chat");
    const chat = new Firechat(chatRef);
    setFirechat(chat);
  }, []);

  return (
    <div
      className={styles["container-fluid"]}
      style={{ minHeight: "100vh", margin: "0px", backgroundColor: "red" }}
    >
      <Head>
        {/* jQuery  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

        {/* Firebase  */}
        <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

        {/* Firechat  */}
        <script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>
      </Head>

      <Chat firechat={firechat} />
    </div>
  );
}
