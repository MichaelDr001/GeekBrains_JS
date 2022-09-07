import { useSelector } from "react-redux"
import { getChats } from "../redux/chatReducer/selectors"



//Удаление-Добавление не добавил, я не понял как это работает


function App() {
  const chats = useSelector (getChats)
  return(
    <div>
      {
      chats.map((chat) => {
        return (
          <div key = {chat.id}>
            {chat.name}
          </div>
        )
      })
      }
    </div>
  )
}

export default App