import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../features/themeSlice"

const ChangeColor = () => {
    const [color, setColor] = useState("")

    const dispatch = useDispatch()

    return (
        <>
            <input 
                type="text" 
                onChange={(e) => {
                setColor(e.target.value)
                }}
            />
            <button 
                onClick={() => {
                    dispatch(changeColor(color))
                }}
            >
                change color
            </button>
        </>
    )
}

export default ChangeColor