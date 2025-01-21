
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import NewVideo from './pages/NewVideo'
import HomePage from './pages/HomePage'
import GlobalContextProvider from './context/GlobalContext'
import NotFound from './pages/NoFound'

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
