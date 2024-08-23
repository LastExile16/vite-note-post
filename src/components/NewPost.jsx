import classes from './NewPost.module.css'

function NewPost({onCancel, onAddPost}) {
    
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const bodyText = formData.get('bodyText');
        const authorName = formData.get('authorName');
        const postData = {
            body: bodyText,
            author: authorName
        }
        onAddPost(postData)
        onCancel()
    }
    return (
        <>
        <form className={classes.form} onSubmit={handleSubmit}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required-rows={3} required name='bodyText' />
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required name='authorName' />
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
        </>
    )
}

export default NewPost