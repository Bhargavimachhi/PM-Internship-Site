import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AiChatbot from './pages/AiChatBot'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <AiChatbot />
    </>
  )
}

export default App
