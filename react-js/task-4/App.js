import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatsPage from './pages/ChatsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'


function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path={'/chats'} element={<ChatsPage />} />
        <Route path={'/profilepage'} element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App