import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Pages/Contact'
import UserContext from './Contexts/Contexts'
import Protected from './Pages/Protected'
import Admin from './Pages/Admin'

function App() {
  const [userInfo, setUserInfo] = useState({
    allowed: false
  })

  return (
    <UserContext.Provider value={userInfo}>
      <BrowserRouter>
        <Routes>
          <Route element={<Protected />}>
            <Route element={<Admin />} path="/admin" exact />
          </Route>
          <Route element={<Home />} path='/'></Route>
          <Route element={<About />} path='/about'></Route>
          <Route element={<Contact />} path='contact'></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
