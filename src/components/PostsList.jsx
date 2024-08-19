import { useState } from 'react';
import Post from './Post'
import NewPost from './NewPost';
import classes from './PostsList.module.css'

function PostsList() {

    function bodyChangeHandler(event) {
        setBodyText(event.target.value)
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value)
    }

    const [bodyText, setBodyText] = useState('') 
    const [author, setAuthor] = useState('') 
    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            <ul className={classes.posts}>
                <Post author={author} content={bodyText} />
                <Post author='Person 2' content='React is awesome!' />
            </ul>
        </>
    );
}

export default PostsList