import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AiChatbot from './pages/AiChatBot'
import LoaderPage from './components/LoaderPage'
import IndiaMap from './components/homepage_components/IndiaMap'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<IndiaMap />} />
      </Routes>

      <AiChatbot />
    </>
  )
}

export default App
