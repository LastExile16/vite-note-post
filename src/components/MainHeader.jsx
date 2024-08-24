import { MdPostAdd, MdMessage, MdLogin } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { useState } from 'react';

function MainHeader({ onCreatePost, onLogin }) {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Welcome to Wall Post!
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
      {!loggedIn && <p>
        <button className={classes.button} onClick={onLogin}>
          <MdLogin size={18} />
          Login
        </button>
      </p>}
    </header>
  );
}

export default MainHeader;