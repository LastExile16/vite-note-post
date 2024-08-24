import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginModalIsVisible, setLoginModalIsVisible] = useState(!loggedIn);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showLoginModalHandler() {
    setLoginModalIsVisible(true);
  }

  function hideLoginModalHandler() {
    setLoginModalIsVisible(false);
  }

  function hideLoginModalHandler() {
    setLoginModalIsVisible(false);
  }

  return (
    <>
      <MainHeader
        onCreatePost={showModalHandler}
        loginStatus={loggedIn}
        onLogin={showLoginModalHandler}
      />
      {!loggedIn && loginModalIsVisible && (
        <Modal onClose={hideLoginModalHandler}>
          <LoginForm onCancel={hideLoginModalHandler} onLogin={setLoggedIn} />
        </Modal>
      )}
      <main>
        <PostsList
          loginStatus={loggedIn}
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
