import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AiChatbot from './pages/AiChatBot'
import LoaderPage from './components/LoaderPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loading" element={<LoaderPage />} />
      </Routes>

      <AiChatbot />
    </>
  )
}

export default App
