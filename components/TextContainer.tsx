import styles from '../styles/TextContainer.module.css'
const TextContainer = ({ users }) => (
    <div className={styles.textContainer}>
      <div>
        <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
        <h2>Created with React, Nextjs, Firebase and Auth0 <span role="img" aria-label="emoji">❤️</span></h2>
        <h2>Have fun! <span role="img" aria-label="emoji">⬅️</span></h2>
      </div>
      {
        users
          ? (
            <div>
              <h1>People currently chatting:</h1>
              <div className={styles.activeContainer}>
                {/* <h2>
                  {users.map(({name}) => (
                    <div key={name} className={styles.activeItem}>
                      {name}
                      <img alt="Online Icon" src='/onlineIcon.png'/>
                    </div>
                  ))}
                </h2> */}
              </div>
            </div>
          )
          : null
      }
    </div>
  );
  
  export default TextContainer;
