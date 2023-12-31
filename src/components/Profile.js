import { useSelector } from "react-redux"

const Profile = () => {
  const user = useSelector((state) => state.user.value)
  const themeColor = useSelector((state) => state.theme.value)
  const blogPost = useSelector((state) => state.post.value)

  return (
    <div style={{ color: themeColor }}>
        <h1>Profile Page</h1>
        <p>name: {user.name}</p>
        <p>age: {user.age}</p>
        <p>email: {user.email}</p>
        <h3>title: {blogPost.title}</h3>
        <p>body: {blogPost.body}</p>
    </div>
  )
}

export default Profile