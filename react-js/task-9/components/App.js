import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegPage from '../pages/RegPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegPage />}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App