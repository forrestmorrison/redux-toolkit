import { useState } from 'react'

const Form = () => {

    const [post, setPost] = useState({ title: "", body: "" })

    return (
        <>
        <form>
            <h1>Form</h1>
            <label>Title:</label>
            <input 
                type="text"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <label>Body:</label>
            <textarea 
                cols={25} 
                rows={10} 
                type="text"
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <button>Submit</button>
        </form>

        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </>
    )
}

export default Form