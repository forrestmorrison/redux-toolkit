import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newPost } from '../features/postSlice'

const Form = () => {

    const [post, setPost] = useState({ title: "", body: "" })

    const dispatch = useDispatch()  

    return (
        <>
            <form>
                <h1>Form</h1>
                <label>Title:</label>
                <input 
                    type="text"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <label>Body:</label>
                <textarea 
                    cols={25} 
                    rows={10} 
                    type="text"
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                />
                <button
                    type='button'
                    onClick={() => {
                        dispatch(newPost({ title: post.title, body: post.body }))
                    }}
                >
                    Add Post
                </button>
            </form>
        </>
    )
}

export default Form