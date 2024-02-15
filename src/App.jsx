
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Accueil from './Components/Accueil'
import NavBar from './Shared/NavBar'
import Service from './Components/Service'
import Présentation from './Components/Présentation'

function App() {


  return (
<div className="App">




<NavBar></NavBar>


  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Accueil/>} />
    <Route path='/service' element={<Service/>} />
    <Route path='/présentation' element={<Présentation/>} />

  </Routes>
  </BrowserRouter>


</div>
  )
}

export default App
