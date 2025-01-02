
import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
