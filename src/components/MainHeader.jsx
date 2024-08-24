import { MdPostAdd, MdMessage, MdLogin } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader({ onCreatePost, loginStatus, onLogin }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Welcome to Wall Post!
      </h1>
      {loginStatus && (
        <p>
          <button className={classes.button} onClick={onCreatePost}>
            <MdPostAdd size={18} />
            New Post
          </button>
        </p>
      )}
      {!loginStatus && (
        <p>
          <button className={classes.button} onClick={onLogin}>
            <MdLogin size={18} />
            Login
          </button>
        </p>
      )}
    </header>
  );
}

export default MainHeader;
