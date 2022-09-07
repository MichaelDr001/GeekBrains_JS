import { useDispatch, useSelector } from "react-redux"
import { getChats } from "../redux/chatReducer/selectors"





function App() {
  const chats = useSelector (getChats)
  const dispatch = useDispatch ()

  const handleDelete = (id) => {
    dispatch ({type: 'delete', payload: id, meta: {
      delay: 2000
    }})
  }

  return(
    <div>
      {
      chats.map((chat) => {
        return (
          <div key = {chat.id}>
            {chat.name}
            <button onClick={() => handleDelete (chat.id)}> X </button>
          </div>
        )
      })
      }
    </div>
  )
}

export default App