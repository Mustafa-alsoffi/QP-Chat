import styles from '../styles/Message.module.css'
const Message = ({ message: { text, user }, name }) => {
    let isSentByCurrentUser = false;
  
    const trimmedName = name.trim().toLowerCase();
  
    if(user === trimmedName) {
      isSentByCurrentUser = true;
    }
  
    return (
      isSentByCurrentUser
        ? (
        <div className={styles.messageContainer + " justifyEnd"}>
            <p className="sentText pr-10">{trimmedName}</p>
            <div className={styles.messageBox + " " + styles.backgroundBlue}>
              {/* <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p> */}
            </div>
          </div>
          )
          : (
            <div className={styles.messageContainer + " " + styles.justifyStart}>
              <div className={styles.messageBox + " " + styles.backgroundLight}>
                {/* <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p> */}
              </div>
              <p className={styles.sentText + " pl-10"}>{user}</p>
            </div>
          )
    );
  }
  
  export default Message;