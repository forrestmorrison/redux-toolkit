import { useDispatch } from "react-redux"
import { login } from '../features/userSlice'

const Login = () => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => {
      dispatch(login({ name: "Forrest", age: 33, email: "forrestmorrison@gmail.com"}))
    }}>login</button>
  )
}

export default Login