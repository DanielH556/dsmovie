import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import InsertMovie from './pages/Form'
import Landing from './pages/Landing'

export default function Router() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/form" element={<InsertMovie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}