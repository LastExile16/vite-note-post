import { useState } from 'react'
import MainHeader from './components/MainHeader'
import PostsList from './components/PostsList'
import LoginForm from './components/LoginForm'
import Modal from './components/Modal'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [loginModalIsVisible, setLoginModalIsVisible] = useState(false)

  function showModalHandler() {
    setModalIsVisible(true)
  }
  
  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function showLoginModalHandler() {
    setLoginModalIsVisible(true)
  }
  
  function hideLoginModalHandler() {
    setLoginModalIsVisible(false)
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler} onLogin={showLoginModalHandler} />
    {loginModalIsVisible && <Modal onClose={hideLoginModalHandler}>
        <LoginForm onCancel={hideLoginModalHandler}/>
    </Modal>}
    <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>
    </>
  )
}

export default App
