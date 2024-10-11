import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,useNavigate } from 'react-router-dom'
import Login from './pages/login' 
import Home from './pages/home'
import Orderspage from './pages/ordersPage'
import Favorites from './pages/favorites'

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/login');
  },[])

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/orders' element={<Orderspage/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      
    </>
  )
}

export default App
