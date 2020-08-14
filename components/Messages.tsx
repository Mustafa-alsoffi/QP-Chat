import ScrollToBottom from "react-scroll-to-bottom";
import { useEffect } from "react";
import Message from "./Message";

const Messages = ({ messages, name }) => {
  useEffect(() => {
    var objDiv = document.getElementById("message");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [messages]);
  return (
    <div id='message' style={{ padding: "5%", overflow: "auto", flex: "auto" }}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
