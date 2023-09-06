import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home/Home'
import Form from './Views/Form/Form'
import Login from './Views/Login/Login'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form/:id' element={<Form />} />
        {/* <Route path='/about' element={<About/>} /> */}
      </Routes>
    </div>

  )
}

export default App
