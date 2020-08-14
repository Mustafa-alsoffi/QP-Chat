import React, { useState, useEffect } from "react";
import TextContainer from "./TextContainer";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Firebase from "../utils/firebase";
import { useFetchUser } from "../utils/user";
import { useRouter } from "next/router";
import Head from "next/head";

const Chat = ({ firechat }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const { user, loading } = useFetchUser();
  const auth0User = user;
  const roomId = router.query["roomID"];

  useEffect(() => {
    Firebase.auth()
      .signInAnonymously()
      .catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;

        console.log(errorMessage);
      });

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
          firechat.getRoom(roomId, (room) => {
            setRoom(room.name);
          });
          firechat.getUsersByRoom(roomId, (users) => {
            for (var username in users) {
              user = users[username];
          user.disableActions = (!self._user || user.id === self._user.id);
          user.nameTrimmed = self.trimWithEllipsis(user.name, self.maxLengthUsernameDisplay);
          user.isMuted = (self._user && self._user.muted && self._user.muted[user.id]);
          console.log(user);
          
            }
          });
        }
      } else {
        // User is signed out.
      }
    });
  }, [firechat]);

  const initChat = (uid, username) => {
    // Get a Firebase Database ref
    if (firechat) {
      if (username == "Anonymous") {
        const anonymousName = username + uid.substr(10, 8);

        firechat.setUser(uid, anonymousName);
        setName(anonymousName);
      } else {
        firechat.setUser(uid, username);
        setName(username);
      }
    }
  };

  useEffect(() => {
    const messagesRef = Firebase.database().ref("chat/room-messages/" + roomId);
    messagesRef.on("value", function (snapshot) {
      if (snapshot.val()) {
        const fMessagesOb = Object.values(snapshot.val());
        const fMessages = [];
        for (var i = 0; i < fMessagesOb.length; i++) {
          fMessages.push({
            message: fMessagesOb[i]["message"],
            username: fMessagesOb[i]["name"],
          });
        }
        if (fMessages) {
          setMessages(fMessages);
        }
      }
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message && roomId && firechat) {
      firechat.sendMessage(roomId, message, "default", () => setMessage(""));
    } else {
      console.log("Could not send");
    }
  };

  return (
    <div className="outerContainer">
      <Head>
        {/* jQuery  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

        {/* Firebase  */}
        <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

        {/* Firechat  */}
        <script src="https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js"></script>
      </Head>
      <div className="chat-container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
