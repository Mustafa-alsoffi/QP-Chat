import styles from '../styles/Message.module.css'
import { useFetchUser } from '../utils/user';

const Message = ({ message: { message, username }, name }) => {
    let isSentByCurrentUser = false;
  
    const trimmedName = name.trim().toLowerCase();
    const { user, loading } = useFetchUser();


    
    if (user && !loading && user.nickname == username) {
      
      isSentByCurrentUser = true;
    } else if (username == name) {
 
      
      isSentByCurrentUser = true;
    }

  
    return (
      isSentByCurrentUser
        ? (
        <div className={styles.messageContainer + " justifyEnd"}>
            <p className="sentText pr-10">{trimmedName}</p>
            <div className={styles.messageBox + " " + styles.backgroundBlue}>
              <p className="messageText colorWhite">{message}</p>
            </div>
          </div>
          )
          : (
            <div className={styles.messageContainer + " " + styles.justifyStart}>
              <div className={styles.messageBox + " " + styles.backgroundLight}>
                <p className={styles.messageText + ' ' + styles.colorDark}>{message}</p>
              </div>
              <p className={styles.sentText + " pl-10"}>user</p>
            </div>
          )
    );
  }
  
  export default Message;