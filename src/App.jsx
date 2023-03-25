import { Routes, Route } from 'react-router-dom'
// pages 
import { SignIn, Register, LandingPage } from './pages'
// components
import { Navbar } from './components'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<LandingPage/>} />
        <Route path='/login' exact element={<SignIn/>} />
        <Route path='/register' exact element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
