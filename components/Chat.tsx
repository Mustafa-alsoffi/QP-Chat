import React, { useState, useEffect } from "react";


const Chat = ()=> {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Set room

        // Set name
    

      }, []);

    useEffect(() => {
        // Load messages

        // Load users 
    }, []);
    
    const sendMessage = (event) => {
        event.preventDefault();
    
        //send message here
      }

      return (
        <div className="outerContainer">
          <div className="container">
              {/* <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> */}
          </div>
          {/* <TextContainer users={users}/> */}
        </div>
      );
}

export default Chat;