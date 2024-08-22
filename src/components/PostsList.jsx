import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {

  let modalContent;
  modalContent = isPosting? (<Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
        />
      </Modal>): ""; 
  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;