
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NewVideo from './pages/NewVideo'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewVideo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
